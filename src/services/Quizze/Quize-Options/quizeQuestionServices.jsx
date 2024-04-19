import instance from "services/Instance";

export const getQuizeOptionsAsync = async () => {
  try {
    const response = await instance.get("/quizze/quize-options/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get quize-options services ${error.message}`);
  }
};

export const addQuizeOptionsAsync = async (data) => {
  try {
    const response = await instance.post("/quizze/quize-options/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add Quize - Question services ${error.message}`);
  }
};

export const getSingleQuizeOptionsAsync = async (id) => {
  try {
    const response = await instance.get(`/quizze/quize-options/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single quize-options services ${error.message}`);
  }
};

export const updateQuizeOptionsAsync = async (id, data) => {
  try {
    const response = await instance.put(`/quizze/quize-options/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update quize-options services ${error.message}`);
  }
};

export const deleteQuizeOptionsAsync = async (id) => {
  try {
    const response = await instance.delete(`/quizze/quize-options/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete quize-options services ${error.message}`);
  }
};
