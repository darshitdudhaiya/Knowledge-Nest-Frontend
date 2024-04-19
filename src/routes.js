import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import FacultyDashboard from "views/faculty/default";
import StudentDashboard from "views/student/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import AssignedSubject from "views/admin/assigned-subject";
import Classes from "views/admin/classes";
import Semesters from "views/admin/semesters";
import Streams from "views/admin/streams";
import Subjects from "views/admin/subjects";
import Teachers from "views/admin/teachers";
import Users from "views/admin/users";
import VideoReview from "views/admin/video-review";
import Years from "views/admin/years";
import AdminAdmins from "views/admin/admins";
import { environment } from "./environment/Environment";
import Videos from "views/faculty/videos";
import ViewVideo from "views/faculty/view-video";

const userTokenDetails = JSON.parse(environment.userTokenDetails);
const routes = [
  userTokenDetails.Role == "Admin" && {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  userTokenDetails.Role == "Faculty" && {
    name: "Faculty Dashboard",
    layout: "/faculty",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <FacultyDashboard />,
  },
  userTokenDetails.Role == "Student" && {
    name: "Student Dashboard",
    layout: "/student",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <StudentDashboard />,
  },

  {
    name: "Admins",
    layout: "/admin",
    path: "admins",
    icon: <MdLock className="h-6 w-6" />,
    component: <AdminAdmins />,
  },
  {
    name: "Teachers",
    layout: "/admin",
    path: "teachers",
    icon: <MdLock className="h-6 w-6" />,
    component: <Teachers />,
  },
  {
    name: "Streams",
    layout: "/admin",
    path: "streams",
    icon: <MdLock className="h-6 w-6" />,
    component: <Streams />,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "users",
    icon: <MdLock className="h-6 w-6" />,
    component: <Users />,
  },
  {
    name: "Subjects",
    layout: "/admin",
    path: "subjects",
    icon: <MdLock className="h-6 w-6" />,
    component: <Subjects />,
  },
  {
    name: "Years",
    layout: "/admin",
    path: "years",
    icon: <MdLock className="h-6 w-6" />,
    component: <Years />,
  },
  {
    name: "Semesters",
    layout: "/admin",
    path: "semesters",
    icon: <MdLock className="h-6 w-6" />,
    component: <Semesters />,
  },
  {
    name: "Classes",
    layout: "/admin",
    path: "classes",
    icon: <MdLock className="h-6 w-6" />,
    component: <Classes />,
  },
  {
    name: "Assigned Subject",
    layout: "/admin",
    path: "assigned-subject",
    icon: <MdLock className="h-6 w-6" />,
    component: <AssignedSubject />,
  },
  {
    name: "Video Review",
    layout: "/admin",
    path: "video-review",
    icon: <MdLock className="h-6 w-6" />,
    component: <VideoReview />,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Video",
    layout: "/faculty",
    path: "videos",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Videos />,
  },
  {
    name: "View Video",
    layout: "/faculty",
    path: "view-video/:id",
    icon: <MdPerson className="h-6 w-6" />,
    component: <ViewVideo />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
];
export default routes;
