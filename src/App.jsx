import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import FacultyLayout from "layouts/faculty";
import StudentLayout from "layouts/student";
import { environment } from "environment/Environment";
import ErrorPage from "views/not-found/ErrorPage";
import ViewVideo from "views/faculty/view-video";

const App = () => {

  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  const getUserRole = () => {
    const userTokenDetails = JSON.parse(environment.userTokenDetails);
    return userTokenDetails.Role
  };

  return (
    <Routes>
      {isLoggedIn() ? (
        <>
          {getUserRole() === "Admin" && (
            <Route path="admin/*" element={<AdminLayout />} />
          )}
          {getUserRole() === "Faculty" && (
            <Route path="faculty/*" element={<FacultyLayout />} />
          )}
          {getUserRole() === "Student" && (
            <Route path="student/*" element={<StudentLayout />} />
          )}
          {/* <Route path="*" element={<Navigate to="/admin" replace />} /> */}
        </>
      ) : (
        <>
          <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
          <Route path="auth/*" element={<AuthLayout />} />
          {/* <Route path="faculty/video/view-video/:id" element={<ViewVideo />} /> */}
        </>
      )}

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
