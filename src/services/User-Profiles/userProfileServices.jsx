import instance from "services/Instance";

export const getUserProfilesAsync = async () => {
  try {
    const response = await instance.get("/userprofiles/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get userprofiles services ${error.message}`);
  }
};

export const addUserProfileAsync = async (data) => {
  try {
    const response = await instance.post("/userprofiles/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add userprofile services ${error.message}`);
  }
};

export const getSingleUserProfileAsync = async (id) => {
  try {
    const response = await instance.get(`/userprofiles/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single userprofiles services ${error.message}`);
  }
};

export const updateUserProfileAsync = async (id, data) => {
  try {
    const response = await instance.put(`/userprofiles/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update userprofiles services ${error.message}`);
  }
};

export const deleteUserProfileAsync = async (id) => {
  try {
    const response = await instance.delete(`/userprofiles/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete userprofiles services ${error.message}`);
  }
};
