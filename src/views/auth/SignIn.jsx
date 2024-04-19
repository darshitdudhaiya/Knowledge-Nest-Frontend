import InputField from "components/fields/InputField";
import { useState } from "react";
import loginAsync from "services/Auth/login";

export default function SignIn() {
  const [form, setForm] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  const onSubmit = async () => {
    const response = await loginAsync(form);
    if (response.status == 200) {
      const token = atob(localStorage.getItem("token").split(".")[1])
      const userData = JSON.parse(token)
      const userRole = userData.Role
      switch (userRole) {
        case "Admin":
          return window.location.href = "/admin/default"
        case "Faculty":
          return window.location.href = "/faculty/default"
        case "Student":
          return window.location.href = "/student/default"
        default:
          return window.location.href = "/auth/sign-in"
      }
    }
  };

  return (
    <div className="mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>

        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
          name="Email"
          onChange={(e) => handleChange(e)}
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
          name="Password"
          onChange={(e) => handleChange(e)}
        />
        <button
          onClick={onSubmit}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}