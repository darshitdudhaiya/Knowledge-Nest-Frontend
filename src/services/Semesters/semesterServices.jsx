import instance from "services/Instance";

export const getSemestersAsync = async () => {
  try {
    const response = await instance.get("/semesters/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get semesters services ${error.message}`);
  }
};

export const addSemesaterAsync = async (data) => {
  try {
    const response = await instance.post("/semesters/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add semesater services ${error.message}`);
  }
};

export const getSingleSemesaterAsync = async (id) => {
  try {
    const response = await instance.get(`/semesters/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single semesters services ${error.message}`);
  }
};

export const updateSemesaterAsync = async (id, data) => {
  try {
    const response = await instance.put(`/semesters/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update semesters services ${error.message}`);
  }
};

export const deleteSemesaterAsync = async (id) => {
  try {
    const response = await instance.delete(`/semesters/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete semesters services ${error.message}`);
  }
};
