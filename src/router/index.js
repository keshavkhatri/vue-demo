import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import LoginRegister from "../views/LoginRegister.vue";
import Register from "../views/Register.vue";
import EditProfile from "../views/EditProfile.vue";
import Announcements from "../views/Announcements.vue";
import Dashboard from "../views/Dashboard.vue";
import Courses from "../views/Courses.vue";
import FacultyDirectory from "../views/FacultyDirectory.vue";
import Events from "../views/Events.vue";
import Messages from "../views/Messages.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "LoginRegister",
    component: LoginRegister,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/announcements",
    name: "Announcements",
    component: Announcements,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/faculty-directory",
    name: "FacultyDirectory",
    component: FacultyDirectory,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;