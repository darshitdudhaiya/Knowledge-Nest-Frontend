import instance from "services/Instance";

export const getStudentdataAsync = async () => {
  try {
    const response = await instance.get("/studentdata/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get studentdata services ${error.message}`);
  }
};

export const addStudentdataAsync = async (data) => {
  try {
    const response = await instance.post("/studentdata/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add studentdata services ${error.message}`);
  }
};

export const getSingleStudentdataAsync = async (id) => {
  try {
    const response = await instance.get(`/studentdata/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single studentdata services ${error.message}`);
  }
};

export const updateStudentdataAsync = async (id, data) => {
  try {
    const response = await instance.put(`/studentdata/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update studentdata services ${error.message}`);
  }
};

export const deleteStudentdataAsync = async (id) => {
  try {
    const response = await instance.delete(`/studentdata/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete studentdata services ${error.message}`);
  }
};
