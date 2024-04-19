import instance from "services/Instance";

export const getAssignmentMarksAsync = async () => {
  try {
    const response = await instance.get("/assignment-marks/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get assignments-marks services ${error.message}`);
  }
};

export const addAssignmentMarkAsync = async (data) => {
  try {
    const response = await instance.post("/assignment-marks/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add assignment-marks services ${error.message}`);
  }
};

export const getSingleAssignmentMarkAsync = async (id) => {
  try {
    const response = await instance.get(`/assignment-marks/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single assignments-marks services ${error.message}`);
  }
};

export const updateAssignmentMarkAsync = async (id, data) => {
  try {
    const response = await instance.put(`/assignment-marks/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update assignments-marks services ${error.message}`);
  }
};

export const deleteAssignmentMarkAsync = async (id) => {
  try {
    const response = await instance.delete(`/assignment-marks/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete assignments-marks services ${error.message}`);
  }
};
