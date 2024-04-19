import instance from "services/Instance";

export const getCircularsAsync = async () => {
  try {
    const response = await instance.get("/circulars/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get circulars services ${error.message}`);
  }
};

export const addCircularsAsync = async (data) => {
  try {
    const response = await instance.post("/circulars/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add class services ${error.message}`);
  }
};

export const getSingleCircularsAsync = async (id) => {
  try {
    const response = await instance.get(`/circulars/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single circulars services ${error.message}`);
  }
};

export const updateCircularsAsync = async (id, data) => {
  try {
    const response = await instance.put(`/circulars/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update circulars services ${error.message}`);
  }
};

export const deleteCircularsAsync = async (id) => {
  try {
    const response = await instance.delete(`/circulars/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete circulars services ${error.message}`);
  }
};
