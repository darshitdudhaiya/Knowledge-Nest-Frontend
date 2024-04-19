import instance from "services/Instance";

export const getQuizzesAsync = async () => {
  try {
    const response = await instance.get("/quizze/quizzes/get");

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get quizzes services ${error.message}`);
  }
};

export const addQuizzeAsync = async (data) => {
  try {
    const response = await instance.post("/quizze/quizzes/add", data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in add quizze services ${error.message}`);
  }
};

export const getSingleQuizzeAsync = async (id) => {
  try {
    const response = await instance.get(`/quizze/quizzes/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get single quizzes services ${error.message}`);
  }
};

export const updateQuizzeAsync = async (id, data) => {
  try {
    const response = await instance.put(`/quizze/quizzes/update/${id}`, data);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in get update quizzes services ${error.message}`);
  }
};

export const deleteQuizzeAsync = async (id) => {
  try {
    const response = await instance.delete(`/quizze/quizzes/getbyid/${id}`);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(`Error occurs in delete quizzes services ${error.message}`);
  }
};
