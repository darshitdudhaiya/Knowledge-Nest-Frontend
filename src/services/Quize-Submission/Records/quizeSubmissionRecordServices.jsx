import instance from "services/Instance";

export const getQuizeSubmissionRecordAsync = async () => {
  try {
    const response = await instance.get("/quize-submission/quize-submission-records/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get quize-submission-records services ${error.message}`);
  }
};

export const addQuizeSubmissionRecordAsync = async (data) => {
  try {
    const response = await instance.post("/quize-submission/quize-submission-records/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add Quize - Question services ${error.message}`);
  }
};

export const getSingleQuizeSubmissionRecordAsync = async (id) => {
  try {
    const response = await instance.get(`/quize-submission/quize-submission-records/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single quize-submission-records services ${error.message}`);
  }
};

export const updateQuizeSubmissionRecordAsync = async (id, data) => {
  try {
    const response = await instance.put(`/quize-submission/quize-submission-records/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update quize-submission-records services ${error.message}`);
  }
};

export const deleteQuizeSubmissionRecordAsync = async (id) => {
  try {
    const response = await instance.delete(`/quize-submission/quize-submission-records/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete quize-submission-records services ${error.message}`);
  }
};
