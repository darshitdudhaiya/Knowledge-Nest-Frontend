import instance from "services/Instance";

export const getYearsAsync = async () => {
  try {
    const response = await instance.get("/years/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get years services ${error.message}`);
  }
};

export const addYearAsync = async (data) => {
  try {
    const response = await instance.post("/years/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add Year services ${error.message}`);
  }
};

export const getSingleYearAsync = async (id) => {
  try {
    const response = await instance.get(`/years/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single years services ${error.message}`);
  }
};

export const updateYearAsync = async (id, data) => {
  try {
    const response = await instance.put(`/years/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update years services ${error.message}`);
  }
};

export const deleteYearAsync = async (id) => {
  try {
    const response = await instance.delete(`/years/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete years services ${error.message}`);
  }
};
