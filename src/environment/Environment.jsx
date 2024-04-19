export const environment = {
  production: false,
  // baseurl: "http://192.168.210.171:3001/KnowledgeNest",
  baseurl: "http://127.0.0.1:3001/KnowledgeNest",
  baseurlForFiles: "http://127.0.0.1:3001/uploads",
  // baseurlForFiles: "http://192.168.210.171:3001/uploads",
  userTokenDetails:
    localStorage.getItem("token") !== null &&
    atob(localStorage.getItem("token").split(".")[1]),
};
