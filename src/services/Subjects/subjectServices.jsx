import instance from "services/Instance";

export const getsubjectsAsync = async () => {
  try {
    const response = await instance.get("/subjects/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get subjects services ${error.message}`);
  }
};

export const addSubjectAsync = async (data) => {
  try {
    const response = await instance.post("/subjects/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add subject services ${error.message}`);
  }
};

export const getSingleSubjectAsync = async (id) => {
  try {
    const response = await instance.get(`/subjects/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single subjects services ${error.message}`);
  }
};

export const updateSubjectAsync = async (id, data) => {
  try {
    const response = await instance.put(`/subjects/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update subjects services ${error.message}`);
  }
};

export const deleteSubjectAsync = async (id) => {
  try {
    const response = await instance.delete(`/subjects/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete subjects services ${error.message}`);
  }
};
