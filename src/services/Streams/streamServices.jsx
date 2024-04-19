import instance from "services/Instance";

export const getStreamsAsync = async () => {
  try {
    const response = await instance.get("/streams/get");

    // if (response.status == 200) {
      return response.data;
    // }
  } catch (error) {
    console.log(`Error occurs in get streams services ${error.message}`);
  }
};

export const addStreamAsync = async (data) => {
  try {
    const response = await instance.post("/streams/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add stream services ${error.message}`);
  }
};

export const getSingleStreamAsync = async (id) => {
  try {
    const response = await instance.get(`/streams/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single streams services ${error.message}`);
  }
};

export const updateStreamAsync = async (id, data) => {
  try {
    const response = await instance.put(`/streams/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update streams services ${error.message}`);
  }
};

export const deleteStreamAsync = async (id) => {
  try {
    const response = await instance.delete(`/streams/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete streams services ${error.message}`);
  }
};
