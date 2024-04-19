import instance from "services/Instance";

export const getQuizeSubmissionAsync = async () => {
  try {
    const response = await instance.get("/quize-submission/quize-submissions/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get quize-submissions services ${error.message}`);
  }
};

export const addQuizeSubmissionAsync = async (data) => {
  try {
    const response = await instance.post("/quize-submission/quize-submissions/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add Quize - Question services ${error.message}`);
  }
};

export const getSingleQuizeSubmissionAsync = async (id) => {
  try {
    const response = await instance.get(`/quize-submission/quize-submissions/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single quize-submissions services ${error.message}`);
  }
};

export const updateQuizeSubmissionAsync = async (id, data) => {
  try {
    const response = await instance.put(`/quize-submission/quize-submissions/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update quize-submissions services ${error.message}`);
  }
};

export const deleteQuizeSubmissionAsync = async (id) => {
  try {
    const response = await instance.delete(`/quize-submission/quize-submissions/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete quize-submissions services ${error.message}`);
  }
};
