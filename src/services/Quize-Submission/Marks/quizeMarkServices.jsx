import instance from "services/Instance";

export const getQuizeMarksAsync = async () => {
  try {
    const response = await instance.get("/quize-submission/quize-marks/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get quize-marks services ${error.message}`);
  }
};

export const addQuizeMarksAsync = async (data) => {
  try {
    const response = await instance.post("/quize-submission/quize-marks/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add Quize - Question services ${error.message}`);
  }
};

export const getSingleQuizeMarksAsync = async (id) => {
  try {
    const response = await instance.get(`/quize-submission/quize-marks/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single quize-marks services ${error.message}`);
  }
};

export const updateQuizeMarksAsync = async (id, data) => {
  try {
    const response = await instance.put(`/quize-submission/quize-marks/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update quize-marks services ${error.message}`);
  }
};

export const deleteQuizeMarksAsync = async (id) => {
  try {
    const response = await instance.delete(`/quize-submission/quize-marks/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete quize-marks services ${error.message}`);
  }
};
