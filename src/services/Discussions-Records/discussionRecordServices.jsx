import instance from "services/Instance";

export const getDiscussionsRecordsAsync = async () => {
  try {
    const response = await instance.get("/discussions-records/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(
      `Error occurs in get discussions-records services ${error.message}`
    );
  }
};

export const addDiscussionRecordAsync = async (data) => {
  try {
    const response = await instance.post("/discussions-records/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(
      `Error occurs in add discussion-records services ${error.message}`
    );
  }
};

export const getSingleDiscussionRecordAsync = async (id) => {
  try {
    const response = await instance.get(`/discussions-records/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(
      `Error occurs in get single discussions-records services ${error.message}`
    );
  }
};

export const updateDiscussionRecordAsync = async (id, data) => {
  try {
    const response = await instance.put(
      `/discussions-records/update/${id}`,
      data
    );

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(
      `Error occurs in get update discussions-records services ${error.message}`
    );
  }
};

export const deleteDiscussionRecordAsync = async (id) => {
  try {
    const response = await instance.delete(
      `/discussions-records/getbyid/${id}`
    );

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(
      `Error occurs in delete discussions-records services ${error.message}`
    );
  }
};
