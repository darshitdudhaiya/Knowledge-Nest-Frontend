import instance from "services/Instance";

export const getDiscussionsAsync = async () => {
  try {
    const response = await instance.get("/discussions/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get discussions services ${error.message}`);
  }
};

export const addDiscussionAsync = async (data) => {
  try {
    const response = await instance.post("/discussions/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add discussion services ${error.message}`);
  }
};

export const getSingleDiscussionAsync = async (id) => {
  try {
    const response = await instance.get(`/discussions/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(
      `Error occurs in get single discussions services ${error.message}`
    );
  }
};

export const updateDiscussionAsync = async (id, data) => {
  try {
    const response = await instance.put(`/discussions/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(
      `Error occurs in get update discussions services ${error.message}`
    );
  }
};

export const deleteDiscussionAsync = async (id) => {
  try {
    const response = await instance.delete(`/discussions/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete discussions services ${error.message}`);
  }
};
