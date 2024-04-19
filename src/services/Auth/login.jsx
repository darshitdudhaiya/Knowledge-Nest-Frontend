import axios from "axios";
import { environment } from "environment/Environment";

export default async function loginAsync(data) {
  try {
    const response = await axios.post(
      `${environment.baseurl}/auth/login`,
      data
    );

    if (response.status == 200) {
      localStorage.setItem("token", response.data.token);
    }

    return response;
  } catch (error) {
    console.log(`Error occurs in login services ${error.message}`);
  }
}
