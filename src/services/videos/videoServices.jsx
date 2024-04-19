import instance from "services/Instance";

export const getVideosAsync = async () => {
  try {
    const response = await instance.get("/videos/get");

    return response.data;
  } catch (err) {
    console.log(`Error occurs in get videos services ${err.message}`);
  }
};

export const addVideoAsync = async (data) => {
  try {
    const response = await instance.post("/videos/add", data);

    return response;
  } catch (err) {
    console.log(`Error occurs in add video services ${err.message}`);
  }
};
