import instance from "services/Instance";

export const getQuizeQuestionsAsync = async () => {
  try {
    const response = await instance.get("/quizze/quize-questions/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get quize-questions services ${error.message}`);
  }
};

export const addQuizeQuestionAsync = async (data) => {
  try {
    const response = await instance.post("/quizze/quize-questions/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add Quize - Question services ${error.message}`);
  }
};

export const getSingleQuizeQuestionAsync = async (id) => {
  try {
    const response = await instance.get(`/quizze/quize-questions/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single quize-questions services ${error.message}`);
  }
};

export const updateQuizeQuestionAsync = async (id, data) => {
  try {
    const response = await instance.put(`/quizze/quize-questions/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update quize-questions services ${error.message}`);
  }
};

export const deleteQuizeQuestionAsync = async (id) => {
  try {
    const response = await instance.delete(`/quizze/quize-questions/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete quize-questions services ${error.message}`);
  }
};
