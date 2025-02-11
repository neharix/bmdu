import {defineStore} from 'pinia';
import axiosInstance from "@/api/axiosInstance.js";


export const useDashboardStore =  defineStore({
  id: 'root',
  state: () => ({
    data: {}
  }),
  actions: {
    async get() {
      try {
        const response = await axiosInstance.get('/dashboard/');
        this.data = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    }
  }
});



export const useHighSchoolsStore =  defineStore({
  id: 'high-schools',
  state: () => ({
    highSchools: [],
    highSchoolsResponse: [],
    highSchoolAbout: {},
    deleteStatus: null,
    updateStatus: null,
    createStatus: null,
    facultyRemoveStatus: null,
    highSchool: {},
  }),
  actions: {
    async getAll() {
      try {
        const response = await axiosInstance.get('/high-schools/');
        this.highSchoolsResponse = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async getAllAdditional() {
      try {
        const response = await axiosInstance.get('/high-schools-with-additional/');
        this.highSchools = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async create(data) {
      try {
        const response = await axiosInstance.post('/create-high-school/', data);
        this.createStatus = 'success';
      } catch (error) {
        this.createStatus = 'error';
      }
    },
    async delete(id) {
      try {
        const response = await axiosInstance.delete(`/high-schools/${id}/`);
        this.deleteStatus = 'success';
      } catch (error) {
        this.deleteStatus = 'error';
      }
    },
    async get(id) {
      try {
        const response = await axiosInstance.get(`/high-schools/${id}/`);
        this.highSchool = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async getAbout(id) {
      try {
        const response = await axiosInstance.get(`/high-school-about/${id}/`);
        this.highSchoolAbout = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async put(id, data) {
      try {
        const response = await axiosInstance.put(`/update-high-school/${id}/`, data);
        this.updateStatus = 'success';
      } catch (error) {
        console.error('Error', error);
        this.updateStatus = 'error';
      }
    },
  }
});


export const useFacultiesStore =  defineStore({
  id: 'faculties',
  state: () => ({
    removeStatus: null,
    faculty: {},
    faculties: [],
    facultiesAdditional: [],
    createStatus: null,
    createHighSchoolFacultiesStatus: null,
    updateStatus: null,
    deleteStatus: null,
    highSchoolFaculties: [],
    highSchoolExcFaculties: [],
  }),
  actions: {
    async get(id) {
      try {
        const response = await axiosInstance.get(`/faculties/${id}/`);
        this.faculty = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async getAll() {
      try {
        const response = await axiosInstance.get('/faculties/');
        this.faculties = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async getAllAdditional() {
      try {
        const response = await axiosInstance.get('/faculties-with-additional/');
        this.facultiesAdditional = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async create(data) {
      try {
        const response = await axiosInstance.post('/faculties/', data);
        this.createStatus = 'success';
      } catch (error) {
        this.createStatus = 'error';
      }
    },
    async delete(id) {
      try {
        const response = await axiosInstance.delete(`/faculties/${id}/`);
        this.deleteStatus = 'success';
      } catch (error) {
        this.deleteStatus = 'error';
      }
    },
    async getHighSchoolFaculties(highSchoolId) {
      try {
        const response = await axiosInstance.get(`/high-school-faculties/${highSchoolId}/inc/`);
        this.highSchoolFaculties = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async getHighSchoolExcFaculties(highSchoolId) {
      try {
        const response = await axiosInstance.get(`/high-school-faculties/${highSchoolId}/exc/`);
        this.highSchoolExcFaculties = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async createHighSchoolFaculty(data) {
      try {
        const response = await axiosInstance.post("/create-high-school-faculties/", data);
        this.createHighSchoolFacultiesStatus = 'success';
      } catch (error) {
        this.createHighSchoolFacultiesStatus = 'error';
      }
    },
    async removeFaculty(highSchoolId, facultyId) {
      try {
        const response = await axiosInstance.get(`/high-school/${highSchoolId}/faculty/${facultyId}/remove/`);
        this.removeStatus = 'success';
      } catch (error) {
        console.error('Error', error);
        this.removeStatus = 'error';
      }
    },
    async put(id, data) {
      try {
        const response = await axiosInstance.put(`/faculties/${id}/`, data);
        this.updateStatus = 'success';
      } catch (error) {
        console.error('Error', error);
        this.updateStatus = 'error';
      }
    },
  }
});



export const useDepartmentsStore =  defineStore({
  id: 'departments',
  state: () => ({
    department: {},
    departments: [],
    departmentsAdditional: [],
    createStatus: null,
    deleteStatus: null,
    removeStatus: null,
    updateStatus: null,
    createFacultyDepartmentsStatus: null,
    highSchoolDepartments: [],
    highSchoolExcDepartments: [],
  }),
  actions: {
    async get(id) {
      try {
        const response = await axiosInstance.get(`/departments/${id}/`);
        this.department = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async getAll() {
      try {
        const response = await axiosInstance.get('/departments/');
        this.departments = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async getAllAdditional() {
      try {
        const response = await axiosInstance.get('/departments-with-additional/');
        this.departmentsAdditional = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async create(data) {
      try {
        const response = await axiosInstance.post('/departments/', data);
        this.createStatus = 'success';
      } catch (error) {
        this.createStatus = 'error';
      }
    },
    async delete(id) {
      try {
        const response = await axiosInstance.delete(`/departments/${id}/`);
        this.deleteStatus = 'success';
      } catch (error) {
        this.deleteStatus = 'error';
      }
    },
    async put(id, data) {
      try {
        const response = await axiosInstance.put(`/departments/${id}/`, data);
        this.updateStatus = 'success';
      } catch (error) {
        console.error('Error', error);
        this.updateStatus = 'error';
      }
    },
    async getHighSchoolDepartments(highSchoolId) {
      try {
        const response = await axiosInstance.get(`/high-school-departments/${highSchoolId}/inc/`);
        this.highSchoolDepartments = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async getHighSchoolExcDepartments(highSchoolId) {
      try {
        const response = await axiosInstance.get(`/high-school-departments/${highSchoolId}/exc/`);
        this.highSchoolExcDepartments = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
    async createFacultyDepartment(data) {
      try {
        const response = await axiosInstance.post("/create-faculty-departments/", data);
        this.createFacultyDepartmentsStatus = 'success';
      } catch (error) {
        this.createFacultyDepartmentsStatus = 'error';
      }
    },
    async removeDepartment(facultyDepartmentId) {
      try {
        const response = await axiosInstance.get(`/remove/faculty-department/${facultyDepartmentId}/`);
        this.removeStatus = 'success';
      } catch (error) {
        console.error('Error', error);
        this.removeStatus = 'error';
      }
    }
  }
});



export const useSpecializationsStore =  defineStore({
  id: 'specilizations',
  state: () => ({
    specialization: {},
    specializations: [],
    specializationsAdditional: [],
    createStatus: null,
    deleteStatus: null,
    removeStatus: null,
    updateStatus: null,
    // createFacultyDepartmentsStatus: null,
    // highSchoolDepartments: [],
    // highSchoolExcDepartments: [],
  }),
  actions: {
  //   async get(id) {
  //     try {
  //       const response = await axiosInstance.get(`/departments/${id}/`);
  //       this.department = response.data;
  //     } catch (error) {
  //       console.error('Error', error);
  //     }
  //   },
  //   async getAll() {
  //     try {
  //       const response = await axiosInstance.get('/departments/');
  //       this.departments = response.data;
  //     } catch (error) {
  //       console.error('Error', error);
  //     }
  //   },
    async getAllAdditional() {
      try {
        const response = await axiosInstance.get('/specializations-with-additional/');
        this.specializationsAdditional = response.data;
      } catch (error) {
        console.error('Error', error);
      }
    },
  //   async create(data) {
  //     try {
  //       const response = await axiosInstance.post('/departments/', data);
  //       this.createStatus = 'success';
  //     } catch (error) {
  //       this.createStatus = 'error';
  //     }
  //   },
    async delete(id) {
      try {
        const response = await axiosInstance.delete(`/specializations/${id}/`);
        this.deleteStatus = 'success';
      } catch (error) {
        this.deleteStatus = 'error';
      }
    },
  //   async put(id, data) {
  //     try {
  //       const response = await axiosInstance.put(`/departments/${id}/`, data);
  //       this.updateStatus = 'success';
  //     } catch (error) {
  //       console.error('Error', error);
  //       this.updateStatus = 'error';
  //     }
  //   },
  //   async getHighSchoolDepartments(highSchoolId) {
  //     try {
  //       const response = await axiosInstance.get(`/high-school-departments/${highSchoolId}/inc/`);
  //       this.highSchoolDepartments = response.data;
  //     } catch (error) {
  //       console.error('Error', error);
  //     }
  //   },
  //   async getHighSchoolExcDepartments(highSchoolId) {
  //     try {
  //       const response = await axiosInstance.get(`/high-school-departments/${highSchoolId}/exc/`);
  //       this.highSchoolExcDepartments = response.data;
  //     } catch (error) {
  //       console.error('Error', error);
  //     }
  //   },
  //   async createFacultyDepartment(data) {
  //     try {
  //       const response = await axiosInstance.post("/create-faculty-departments/", data);
  //       this.createFacultyDepartmentsStatus = 'success';
  //     } catch (error) {
  //       this.createFacultyDepartmentsStatus = 'error';
  //     }
  //   },
  //   async removeDepartment(facultyDepartmentId) {
  //     try {
  //       const response = await axiosInstance.get(`/remove/faculty-department/${facultyDepartmentId}/`);
  //       this.removeStatus = 'success';
  //     } catch (error) {
  //       console.error('Error', error);
  //       this.removeStatus = 'error';
  //     }
  //   }
  }
});
