import instance from "services/Instance";

export const getAssignmentsAsync = async () => {
  try {
    const response = await instance.get("/assignments/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get assignments services ${error.message}`);
  }
};

export const addAssignmentAsync = async (data) => {
  try {
    const response = await instance.post("/assignments/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add assignment services ${error.message}`);
  }
};

export const getSingleAssignmentAsync = async (id) => {
  try {
    const response = await instance.get(`/assignments/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single assignments services ${error.message}`);
  }
};

export const updateAssignmentAsync = async (id, data) => {
  try {
    const response = await instance.put(`/assignments/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update assignments services ${error.message}`);
  }
};

export const deleteAssignmentAsync = async (id) => {
  try {
    const response = await instance.delete(`/assignments/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete assignments services ${error.message}`);
  }
};
