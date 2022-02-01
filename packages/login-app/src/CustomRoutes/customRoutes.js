import LoginUser from "../components/LoginUser";
import RegisterUser from "../components/RegisterUser";
import WelcomePage from "../components/WelcomePage";

export const customRoute = [
  {
    path: "/",
    key: "Welcome Page",
    name: "Welcome Page",
    component: WelcomePage,
    exact: true,
  },

  {
    path: "/login",
    key: "Login Page",
    name: "Login Page",
    component: LoginUser,
    exact: true,
  },

  {
    path: "/register",
    key: "Register Page",
    name: "Register Page",
    component: RegisterUser,
    exact: true,
  },
];
