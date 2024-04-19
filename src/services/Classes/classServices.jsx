import instance from "services/Instance";

export const getClassesAsync = async () => {
  try {
    const response = await instance.get("/classes/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get classes services ${error.message}`);
  }
};

export const addClassAsync = async (data) => {
  try {
    const response = await instance.post("/classes/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add class services ${error.message}`);
  }
};

export const getSingleClassAsync = async (id) => {
  try {
    const response = await instance.get(`/classes/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single classes services ${error.message}`);
  }
};

export const updateClassAsync = async (id, data) => {
  try {
    const response = await instance.put(`/classes/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update classes services ${error.message}`);
  }
};

export const deleteClassAsync = async (id) => {
  try {
    const response = await instance.delete(`/classes/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete classes services ${error.message}`);
  }
};
