import instance from "services/Instance";

export const getAssignedSubjectAsync = async () => {
  try {
    const response = await instance.get("/assigned-subjects/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get assigned-subjects services ${error.message}`);
  }
};

export const addAssignedSubjectAsync = async (data) => {
  try {
    const response = await instance.post("/assigned-subjects/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add assigned-subjects services ${error.message}`);
  }
};

export const getSingleAssignedSubjectAsync = async (id) => {
  try {
    const response = await instance.get(`/assigned-subjects/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single assigned-subjects services ${error.message}`);
  }
};

export const getSingleFacultyAssignedSubjectAsync = async (id) => {
  try {
    const response = await instance.get(`/assigned-subjects/getbyfacultyid/${id}`);

      return response.data;
  } catch (error) {
    console.log(`Error occurs in get single assigned-subjects services ${error.message}`);
  }
};

export const updateAssignedSubjectAsync = async (id, data) => {
  try {
    const response = await instance.put(`/assigned-subjects/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update assigned-subjects services ${error.message}`);
  }
};

export const deleteAssignedSubjectAsync = async (id) => {
  try {
    const response = await instance.delete(`/assigned-subjects/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete assigned-subjects services ${error.message}`);
  }
};
