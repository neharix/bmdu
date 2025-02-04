# Generated by Django 5.1.4 on 2025-02-04 19:37

import datetime
import django.core.validators
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Classificator',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Degree',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('duration', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(7)])),
            ],
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('abbreviation', models.CharField(max_length=100)),
                ('active', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('abbreviation', models.CharField(max_length=100)),
                ('active', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='HighSchool',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('abbreviation', models.CharField(max_length=100)),
                ('active', models.BooleanField(default=False)),
                ('lat', models.FloatField(blank=True, default=37.95)),
                ('lng', models.FloatField(blank=True, default=58.38)),
            ],
        ),
        migrations.CreateModel(
            name='Nationality',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='HighSchoolFaculty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.faculty')),
                ('high_school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.highschool')),
            ],
        ),
        migrations.CreateModel(
            name='FacultyDepartment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.department')),
                ('high_school_faculty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.highschoolfaculty')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(blank=True, max_length=200, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='highschool',
            name='manager',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.profile'),
        ),
        migrations.CreateModel(
            name='Specialization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('abbreviation', models.CharField(max_length=100)),
                ('active', models.BooleanField(default=False)),
                ('classificator', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.classificator')),
                ('degree', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.degree')),
            ],
        ),
        migrations.CreateModel(
            name='DepartmentSpecialization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('faculty_department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.facultydepartment')),
                ('specialization', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.specialization')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=400)),
                ('gender', models.CharField(choices=[('M', 'Oglan'), ('F', 'Gyz')], max_length=1)),
                ('family_status', models.CharField(choices=[('FR', 'Hossarly'), ('HO', 'Ýarym ýetim'), ('CO', 'Doly ýetim'), ('OE', 'Ýetimler öýünde ösen')], max_length=2)),
                ('payment_type', models.CharField(choices=[('P', 'Tölegli'), ('B', 'Býudjet')], max_length=1)),
                ('birth_date', models.DateField(default=datetime.date(1970, 1, 1))),
                ('admission_date', models.DateField()),
                ('registered_place', models.TextField()),
                ('study_year', models.IntegerField(default=1)),
                ('phone_number', models.CharField(max_length=20)),
                ('passport', models.CharField(max_length=20)),
                ('military_service', models.CharField(blank=True, max_length=20, null=True)),
                ('label', models.TextField(blank=True, null=True)),
                ('active', models.BooleanField(default=True)),
                ('country', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.country')),
                ('high_school', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.highschool')),
                ('nationality', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.nationality')),
                ('region', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.region')),
                ('specialization', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.departmentspecialization')),
            ],
        ),
    ]
