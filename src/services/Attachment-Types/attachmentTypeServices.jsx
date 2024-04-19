import instance from "services/Instance";

export const getAttachmentTypesAsync = async () => {
  try {
    const response = await instance.get("/attachment-types/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get attachment-types services ${error.message}`);
  }
};

export const addAttachmentTypeAsync = async (data) => {
  try {
    const response = await instance.post("/attachment-types/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add Attachment - Type services ${error.message}`);
  }
};

export const getSingleAttachmentTypeAsync = async (id) => {
  try {
    const response = await instance.get(`/attachment-types/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single attachment-types services ${error.message}`);
  }
};

export const updateAttachmentTypeAsync = async (id, data) => {
  try {
    const response = await instance.put(`/attachment-types/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update attachment-types services ${error.message}`);
  }
};

export const deleteAttachmentTypeAsync = async (id) => {
  try {
    const response = await instance.delete(`/attachment-types/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete attachment-types services ${error.message}`);
  }
};
