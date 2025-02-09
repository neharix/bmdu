import io

import numpy as np
import pandas as pd
from django.contrib.auth.models import User
from django.http import HttpRequest, HttpResponse
from django.utils import timezone
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import (
    ListAPIView,
    ListCreateAPIView,
    RetrieveAPIView,
    RetrieveDestroyAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import IsAdminUser
from rest_framework.request import HttpRequest
from rest_framework.response import Response

from .decorators import validate_files, validate_payload
from .models import (
    Classificator,
    Country,
    Degree,
    Department,
    DepartmentSpecialization,
    Faculty,
    FacultyDepartment,
    HighSchool,
    HighSchoolFaculty,
    Nationality,
    Profile,
    Region,
    Specialization,
    Student,
)
from .serializers import (
    ClassificatorSerializer,
    DegreeSerializer,
    DepartmentSerializer,
    FacultySerializer,
    HighSchoolSerializer,
    NationalitySerializer,
    ProfileSerializer,
    SpecializationSerializer,
    StudentSerializer,
)
from .utils import create_example, validate_not_null_field

ADMISSION_START_RANGE = 2018

# Special API views


class ProfileRetrieveApiView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    lookup_field = "id"


@api_view(http_method_names=["GET", "POST", "PATCH", "DELETE", "PUT"])
def echo(request: HttpRequest):
    return Response({"detail": "The API works correctly"})


@api_view(http_method_names=["GET"])
def get_user_data(request: HttpRequest):
    if request.user.is_superuser:
        return Response(
            {
                "id": request.user.id,
                "email": request.user.email,
                "is_superuser": request.user.is_superuser,
            }
        )
    else:
        return Response(
            {
                "id": request.user.id,
                "manager_of": HighSchool.objects.get(
                    manager__user=request.user
                ).abbreviation,
                "email": request.user.email,
                "is_superuser": request.user.is_superuser,
            }
        )


@api_view(http_method_names=["GET"])
def get_example(request: HttpRequest, high_school_id: int, row_count: int):
    if HighSchool.objects.filter(id=high_school_id).exists():
        high_school = HighSchool.objects.get(id=high_school_id)
    else:
        return HttpResponse({"detail": "High school isn't found"})

    workbook = create_example(row_count, high_school)

    with io.BytesIO() as buffer:
        workbook.save(buffer)
        content = buffer.getvalue()

    response = HttpResponse(
        content=content,
        content_type="application/xlsx",
    )
    response["Content-Disposition"] = f'attachment; filename="form.xlsx"'
    return response


@api_view(http_method_names=["POST"])
@validate_payload(keys=["high_school_id"])
@validate_files(keys=["excel"])
def import_excel_data(request: HttpRequest):
    dataframe = pd.read_excel(request.FILES["excel"])
    invalid_fields = []
    if HighSchool.objects.filter(id=request.POST["high_school_id"]).exists():
        high_school = HighSchool.objects.get(id=request.POST["high_school_id"])
    else:
        return Response({"detail": "High school doesn't exist"})

    for index, row in dataframe.iterrows():
        row_validation = True
        row_status = validate_not_null_field(row, ["T/B", "Harby borç", "Bellikler"])
        if not row_status[0]:
            invalid_fields.append(
                f"Setir №{index + 2}: '{','.join(row_status[1])}' meýdançasy boş bolup bilmez"
            )
        else:
            full_name = row["F.A.Aa"]
            birth_date = row["Doglan senesi"].to_pydatetime()

            if row["Jynsy"] in ("Oglan", "Gyz"):
                gender = "M" if row["Jynsy"] == "Oglan" else "F"
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Jynsy' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if Region.objects.filter(name=row["Welaýaty"]).exists():
                region = Region.objects.get(name=row["Welaýaty"])
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Welaýaty' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if Nationality.objects.filter(name=row["Milleti"]).exists():
                nationality = Nationality.objects.get(name=row["Milleti"])
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Milleti' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if Country.objects.filter(name=row["Ýurdy"]).exists():
                country = Country.objects.get(name=row["Ýurdy"])
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Milleti' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if Faculty.objects.filter(name=row["Fakulteti"]).exists():
                faculty = Faculty.objects.get(name=row["Fakulteti"])
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Fakulteti' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if Department.objects.filter(name=row["Kafedrasy"]):
                department = Department.objects.get(name=row["Kafedrasy"])
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Kafedrasy' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if Specialization.objects.filter(name=row["Hünari"]):
                specialization = Specialization.objects.get(name=row["Hünari"])
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Hünäri' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if type(row["Kursy"]) == int or type(row["Kursy"]) == float:
                course = int(row["Kursy"])
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Kursy' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if row["Töleg görnüşi"] in ("Tölegli", "Býudjet"):
                payment_type = "P" if row["Töleg görnüşi"] == "Tölegli" else "B"
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Töleg görnüşi' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            family_statuses = {
                "Hossarly": "FR",
                "Ýarym ýetim": "HO",
                "Doly ýetim": "CO",
                "Ýetimler öýünde ösen": "OE",
            }
            if row["Maşgala ýagdaýy"] in family_statuses.keys():
                family_status = family_statuses[row["Maşgala ýagdaýy"]]
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Maşgala ýagdaýy' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if type(row["Ýazgyda duran salgysy"]) == str:
                registered_place = row["Ýazgyda duran salgysy"]
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Ýazgyda duran salgysy' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if (
                type(row["Öý, iş, mobil telefony"]) == str
                or type(row["Öý, iş, mobil telefony"]) == int
                or type(row["Öý, iş, mobil telefony"]) == float
            ):
                if type(row["Öý, iş, mobil telefony"]) == float:
                    phone_number = str(int(row["Öý, iş, mobil telefony"]))
                else:
                    phone_number = str(row["Öý, iş, mobil telefony"])
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Öý, iş, mobil telefony' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            if type(row["Pasport seriýasy, belgisi"]) == str:
                passport = row["Pasport seriýasy, belgisi"]
            else:
                invalid_fields.append(
                    f"Setir №{index + 2}: 'Pasport seriýasy, belgisi' meýdançasynda ýalňyşlyk goýberildi"
                )
                row_validation = False

            admission_date = row["Okuwa giren senesi"].to_pydatetime()

            if row_validation:
                student = Student.objects.create(
                    full_name=full_name,
                    gender=gender,
                    family_status=family_status,
                    payment_type=payment_type,
                    nationality=nationality,
                    country=country,
                    region=region,
                    study_year=course,
                    specialization=specialization,
                    birth_date=birth_date,
                    admission_date=admission_date,
                    registered_place=registered_place,
                    phone_number=phone_number,
                    passport=passport,
                )
                if not row.isnull()["Bellikler"]:
                    student.label = row["Bellikler"]
                if not row.isnull()["Harby borç"]:
                    student.military_service = row["Harby borç"]
                student.save()

    if len(invalid_fields) > 0:
        return Response(
            {
                "detail": "Success, but there are some mistakes",
                "mistakes": invalid_fields,
            }
        )
    return Response({"detail": "Success"})


@api_view(http_method_names=["GET"])
def dashboard_api_view(request: HttpRequest):
    if request.user.is_superuser:
        male_graduates = 0
        female_graduates = 0
        for specialization in Specialization.objects.filter(active=True):
            male_graduates += Student.objects.filter(
                specialization=DepartmentSpecialization.objects.get(
                    specialization=specialization
                ),
                study_year=specialization.degree.duration,
                gender="M",
                active=True,
            ).count()
            female_graduates += Student.objects.filter(
                specialization=DepartmentSpecialization.objects.get(
                    specialization=specialization
                ),
                study_year=specialization.degree.duration,
                gender="F",
                active=True,
            ).count()

        return Response(
            {
                "high_schools_count": HighSchool.objects.filter(active=True).count(),
                "faculties_count": Faculty.objects.filter(active=True).count(),
                "departments_count": Department.objects.filter(active=True).count(),
                "specializations_count": Specialization.objects.filter(
                    active=True
                ).count(),
                "nationalities_count": Nationality.objects.all().count(),
                "students_count": Student.objects.filter(active=True).count(),
                "male_students_count": Student.objects.filter(
                    gender="M", active=True
                ).count(),
                "female_students_count": Student.objects.filter(
                    gender="F", active=True
                ).count(),
                "male_graduates": male_graduates,
                "female_graduates": female_graduates,
                "admissions": [
                    {
                        "year": year,
                        "male_students_count": Student.objects.filter(
                            gender="M",
                            admission_date__year=year,
                            active=True,
                        ).count(),
                        "female_students_count": Student.objects.filter(
                            gender="F",
                            admission_date__year=year,
                            active=True,
                        ).count(),
                    }
                    for year in range(ADMISSION_START_RANGE, timezone.now().year + 1)
                ],
            }
        )
    elif request.user.is_authenticated:
        high_school = HighSchool.objects.get(manager__user=request.user)
        return Response(
            {
                "faculties_count": HighSchoolFaculty.objects.filter(
                    high_school=high_school
                ).count(),
                "departments_count": FacultyDepartment.objects.filter(
                    high_school_faculty__high_school=high_school
                ).count(),
                "specializations_count": DepartmentSpecialization.objects.filter(
                    faculty_department__high_school_faculty__high_school=high_school
                ).count(),
                # FIXME
                "nationalities_count": Nationality.objects.all().count(),
                "students_count": Student.objects.filter(
                    active=True, high_school=high_school
                ).count(),
                "male_students_count": Student.objects.filter(
                    gender="M", high_school=high_school, active=True
                ).count(),
                "female_students_count": Student.objects.filter(
                    gender="F", high_school=high_school, active=True
                ).count(),
                "admissions": [
                    {
                        "year": year,
                        "male_students_count": Student.objects.filter(
                            high_school=high_school,
                            gender="M",
                            admission_date__year=year,
                            active=True,
                        ).count(),
                        "female_students_count": Student.objects.filter(
                            high_school=high_school,
                            gender="F",
                            admission_date__year=year,
                            active=True,
                        ).count(),
                    }
                    for year in range(ADMISSION_START_RANGE, timezone.now().year + 1)
                ],
            }
        )
    return Response({"detail": "Permission denied."})


# High school API views


@api_view(http_method_names=["POST"])
@validate_payload(keys=["high_school_name", "abbreviation", "username", "password"])
def create_high_school_api_view(request: HttpRequest):
    user = User.objects.create_user(
        username=request.data["username"],
        email="stub@mail.com",
        password=request.data["password"],
    )
    profile = Profile.objects.get(user=user)
    profile.password = request.data["password"]
    profile.save()
    high_school = HighSchool.objects.create(
        name=request.data["high_school_name"],
        abbreviation=request.data["abbreviation"],
        manager=profile,
        active=True,
    )
    return Response({"detail": "Success", "id": high_school.id})


@api_view(http_method_names=["PUT"])
@validate_payload(keys=["high_school_name", "abbreviation", "username", "password"])
def put_high_school_api_view(request: HttpRequest, high_school_id: int):
    if HighSchool.objects.filter(id=high_school_id).exists():
        high_school = HighSchool.objects.get(id=high_school_id)
    else:
        return Response({"detail": "High school doesn't exist"}, status=404)

    high_school.name = request.data["high_school_name"]
    high_school.abbreviation = request.data["abbreviation"]
    high_school.save()

    user = high_school.manager.user
    profile = high_school.manager

    user.username = request.data["username"]
    user.set_password(request.data["password"])
    user.save()

    profile.password = request.data["password"]
    profile.save()
    return Response({"detail": "Success", "id": high_school.id})


@api_view(http_method_names=["GET"])
def get_high_school_with_additional_data_api_view(request: HttpRequest):
    if request.user.is_superuser:
        high_schools = HighSchool.objects.filter(active=True)
        response = []
        for high_school in high_schools:
            male_count = Student.objects.filter(
                high_school=high_school, gender="M"
            ).count()
            female_count = Student.objects.filter(
                high_school=high_school, gender="F"
            ).count()
            response.append(
                {
                    "id": high_school.id,
                    "name": high_school.name,
                    "students_count": male_count + female_count,
                    "male_count": male_count,
                    "female_count": female_count,
                }
            )
        return Response(response)
    return Response({"detail": "Permission denied"}, status=403)


@api_view(http_method_names=["GET"])
def get_high_school_about_api_view(request: HttpRequest, high_school_id: int):
    if HighSchool.objects.filter(id=high_school_id).exists():
        high_school = HighSchool.objects.get(id=high_school_id)
    else:
        return Response({"detail": "High school doesn't exist"}, status=404)
    return Response(
        {
            "students_count": Student.objects.filter(
                active=True, high_school=high_school
            ).count(),
            "male_students_count": Student.objects.filter(
                gender="M", high_school=high_school, active=True
            ).count(),
            "female_students_count": Student.objects.filter(
                gender="F", high_school=high_school, active=True
            ).count(),
            "admissions": [
                {
                    "year": year,
                    "male_students_count": Student.objects.filter(
                        high_school=high_school,
                        gender="M",
                        admission_date__year=year,
                        active=True,
                    ).count(),
                    "female_students_count": Student.objects.filter(
                        high_school=high_school,
                        gender="F",
                        admission_date__year=year,
                        active=True,
                    ).count(),
                }
                for year in range(ADMISSION_START_RANGE, timezone.now().year + 1)
            ],
            "students_count_by_regions": [
                {
                    "region": region.name,
                    "students_count": Student.objects.filter(
                        high_school=high_school,
                        region=region,
                        active=True,
                    ).count(),
                }
                for region in Region.objects.all()
            ],
        }
    )


@api_view(http_method_names=["GET"])
def get_high_school_faculties_api_view(
    request: HttpRequest, high_school_id: int, mode: str
):
    if not mode in ["exc", "inc"]:
        return Response({"detail": "Invalid mode"}, status=400)
    if HighSchool.objects.filter(id=high_school_id).exists():
        high_school = HighSchool.objects.get(id=high_school_id)
    else:
        return Response({"detail": "High school doesn't exist"}, status=404)
    high_school_faculty_identificators = [
        high_school_faculty.faculty.id
        for high_school_faculty in HighSchoolFaculty.objects.filter(
            high_school=high_school
        )
    ]
    if mode == "inc":
        return Response(
            FacultySerializer(
                Faculty.objects.filter(id__in=high_school_faculty_identificators),
                many=True,
            ).data
        )
    elif mode == "exc":
        return Response(
            FacultySerializer(
                Faculty.objects.exclude(id__in=high_school_faculty_identificators),
                many=True,
            ).data
        )


@api_view(http_method_names=["GET"])
def remove_faculty_from_high_school_api_view(
    request: HttpRequest, high_school_id: int, faculty_id: int
):
    if HighSchool.objects.filter(id=high_school_id).exists():
        high_school = HighSchool.objects.get(id=high_school_id)
    else:
        return Response({"detail": "High school doesn't exist"}, status=404)
    if Faculty.objects.filter(id=faculty_id).exists():
        faculty = Faculty.objects.get(id=faculty_id)
    else:
        return Response({"detail": "Faculty doesn't exist"}, status=404)
    HighSchoolFaculty.objects.get(high_school=high_school, faculty=faculty).delete()
    return Response({"detail": "Success"})


class HighSchoolListAPIView(ListAPIView):
    queryset = HighSchool.objects.all()
    serializer_class = HighSchoolSerializer


class HighSchoolRetrieveDestroyAPIView(RetrieveDestroyAPIView):
    queryset = HighSchool.objects.all()
    serializer_class = HighSchoolSerializer
    lookup_field = "id"

    def delete(self, request: HttpRequest, id: int):
        instance = self.get_object()
        instance.active = False
        instance.save()
        return Response({"detail": "Success"})


# Faculty API views


@api_view(http_method_names=["GET"])
def get_faculties_with_additional_data_api_view(request: HttpRequest):
    response = []
    if request.user.is_superuser:
        faculties = Faculty.objects.filter(active=True)
        for faculty in faculties:
            male_count, female_count = 0, 0
            for h_faculty in HighSchoolFaculty.objects.filter(faculty=faculty):
                male_count += Student.objects.filter(
                    specialization__faculty_department__high_school_faculty=h_faculty,
                    gender="M",
                ).count()
                female_count += Student.objects.filter(
                    specialization__faculty_department__high_school_faculty=h_faculty,
                    gender="F",
                ).count()
            response.append(
                {
                    "id": faculty.id,
                    "name": faculty.name,
                    "students_count": male_count + female_count,
                    "male_count": male_count,
                    "female_count": female_count,
                }
            )
        return Response(response)
    else:
        high_school = HighSchool.objects.get(manager__user=request.user)
        faculties = [
            faculty.faculty
            for faculty in HighSchoolFaculty.objects.filter(high_school=high_school)
        ]
        for faculty in faculties:
            male_count, female_count = 0, 0
            for h_faculty in HighSchoolFaculty.objects.filter(
                high_school=high_school, faculty=faculty
            ):
                male_count += Student.objects.filter(
                    specialization__faculty_department__high_school_faculty=h_faculty,
                    gender="M",
                ).count()
                female_count += Student.objects.filter(
                    specialization__faculty_department__high_school_faculty=h_faculty,
                    gender="F",
                ).count()
            response.append(
                {
                    "id": faculty.id,
                    "name": faculty.name,
                    "students_count": male_count + female_count,
                    "male_count": male_count,
                    "female_count": female_count,
                }
            )
        return Response(response)


@api_view(http_method_names=["POST"])
@validate_payload(keys=["high_school", "faculties"])
def create_high_school_faculty_api_view(request: HttpRequest):
    if HighSchool.objects.filter(id=request.data["high_school"]).exists():
        high_school = HighSchool.objects.get(id=request.data["high_school"])
    else:
        return Response({"detail": "High school doesn't exist"}, status=404)

    for faculty_id in request.data["faculties"]:
        if Faculty.objects.filter(id=faculty_id).exists():
            faculty = Faculty.objects.get(id=faculty_id)
            if not HighSchoolFaculty.objects.filter(
                high_school=high_school, faculty=faculty
            ).exists():
                HighSchoolFaculty.objects.create(
                    high_school=high_school, faculty=faculty
                )
    return Response({"detail": "Success"})


class FacultyListCreateAPIView(ListCreateAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    lookup_field = "id"


class FacultyRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    lookup_field = "id"

    def delete(self, request: HttpRequest, id: int):
        instance = self.get_object()
        instance.active = False
        instance.save()
        return Response({"detail": "Success"})


# Department API views


@api_view(http_method_names=["GET"])
def get_departments_with_additional_data_api_view(request: HttpRequest):
    response = []
    if request.user.is_superuser:
        departments = Department.objects.filter(active=True)
        for department in departments:
            male_count, female_count = 0, 0
            for f_department in FacultyDepartment.objects.filter(department=department):
                male_count += Student.objects.filter(
                    specialization__faculty_department=f_department,
                    gender="M",
                ).count()
                female_count += Student.objects.filter(
                    specialization__faculty_department=f_department,
                    gender="F",
                ).count()
            response.append(
                {
                    "id": department.id,
                    "name": department.name,
                    "students_count": male_count + female_count,
                    "male_count": male_count,
                    "female_count": female_count,
                }
            )
        return Response(response)
    else:
        # high_school = HighSchool.objects.get(manager__user=request.user)
        # faculties = [
        #     faculty.faculty
        #     for faculty in HighSchoolFaculty.objects.filter(high_school=high_school)
        # ]
        # for faculty in faculties:
        #     male_count, female_count = 0, 0
        #     for h_faculty in HighSchoolFaculty.objects.filter(
        #         high_school=high_school, faculty=faculty
        #     ):
        #         male_count += Student.objects.filter(
        #             specialization__faculty_department__high_school_faculty=h_faculty,
        #             gender="M",
        #         ).count()
        #         female_count += Student.objects.filter(
        #             specialization__faculty_department__high_school_faculty=h_faculty,
        #             gender="F",
        #         ).count()
        #     response.append(
        #         {
        #             "id": faculty.id,
        #             "name": faculty.name,
        #             "students_count": male_count + female_count,
        #             "male_count": male_count,
        #             "female_count": female_count,
        #         }
        #     )
        return Response(response)


class DepartmentListCreateAPIView(ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    lookup_field = "id"


class DepartmentRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    lookup_field = "id"

    def delete(self, request: HttpRequest, id: int):
        instance = self.get_object()
        instance.active = False
        instance.save()
        return Response({"detail": "Success"})


# Degree API views


class DegreeListCreateAPIView(ListCreateAPIView):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer
    lookup_field = "id"


class DegreeRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer
    lookup_field = "id"


# Classificator API views


class ClassificatorListCreateAPIView(ListCreateAPIView):
    queryset = Classificator.objects.all()
    serializer_class = ClassificatorSerializer
    lookup_field = "id"


class ClassificatorRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Classificator.objects.all()
    serializer_class = ClassificatorSerializer
    lookup_field = "id"


# Specialization API views


class SpecializationListCreateAPIView(ListCreateAPIView):
    queryset = Specialization.objects.all()
    serializer_class = SpecializationSerializer
    lookup_field = "id"


class SpecializationRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Specialization.objects.all()
    serializer_class = SpecializationSerializer
    lookup_field = "id"

    def delete(self, request: HttpRequest, id: int):
        instance = self.get_object()
        instance.active = False
        instance.save()
        return Response({"detail": "Success"})


# Student API views


class StudentListAPIView(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = "id"


class StudentRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = "id"

    def delete(self, request: HttpRequest, id: int):
        instance = self.get_object()
        instance.active = False
        instance.save()
        return Response({"detail": "Success"})


# Nationalization API views


class NationalityListCreateAPIView(ListCreateAPIView):
    queryset = Nationality.objects.all()
    serializer_class = NationalitySerializer
    lookup_field = "id"


class NationalityRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Nationality.objects.all()
    serializer_class = NationalitySerializer
    lookup_field = "id"


@api_view(http_method_names=["GET"])
def get_students_count_by_nationality_all(request: HttpRequest):
    nationalities = Nationality.objects.all().order_by("id")
    data = []
    for nationality in nationalities:
        data.append(
            {
                "id": nationality.id,
                "name": nationality.name,
                "male_count": Student.objects.filter(
                    nationality=nationality, gender="M"
                ).count(),
                "female_count": Student.objects.filter(
                    nationality=nationality, gender="F"
                ).count(),
            }
        )
    return Response(data)


@api_view(http_method_names=["GET"])
def get_students_count_by_nationality(request: HttpRequest, nationality_id):
    if Nationality.objects.filter(id=nationality_id).exists():
        nationality = Nationality.objects.get(id=nationality_id)
    else:
        return Response({"detail": "Nationality doesn't exist"})
    return Response(
        {
            "id": nationality.id,
            "name": nationality.name,
            "male_count": Student.objects.filter(
                nationality=nationality, gender="M"
            ).count(),
            "female_count": Student.objects.filter(
                nationality=nationality, gender="F"
            ).count(),
        }
    )
