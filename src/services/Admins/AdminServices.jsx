import axios from "axios";
import instance from "services/Instance";

export const getAdminsAsync = async () => {
  try {
    const response = await instance.get("/users/getbyuserrole/admin");
    
    return response.data;
  } catch (error) {
    console.log(`Error occurs in get Admins services ${error.message}`);
  }
};

export const addAdminAsync = async (data) => {
  try {
    const response = await instance.post("/users/add/admin", data);
    
    return response.data;
  } catch (error) {
    console.log(`Error occurs in add Admins services ${error.message}`);
  }
};

export const deleteAdminAsync = async (id) => {
  try {
    const response = await instance.delete(`/users/delete/${id}`);
  
    return response;
  } catch (error) {
    console.log(`Error occurs in delete admin services ${error.message}`);
  }
};
// export const getSingleStreamAsync = async (id) => {
//   try {
//     const response = await instance.get(`/streams/getbyid/${id}`);

//     if (response.status == 200) {
//       return response;
//     }
//   } catch (error) {
//     console.log(`Error occurs in get single streams services ${error.message}`);
//   }
// };

// export const updateStreamAsync = async (id, data) => {
//   try {
//     const response = await instance.put(`/streams/update/${id}`, data);

//     if (response.status == 200) {
//       return response;
//     }
//   } catch (error) {
//     console.log(`Error occurs in get update streams services ${error.message}`);
//   }
// };

