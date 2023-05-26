import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Error from "../components/Error";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Chef from "../pages/Chef/Chef";
import Protected from "./Protected";
import Public from "./Public";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "chef/:id",
        element: (
          <Protected>
            <Chef />
          </Protected>
        ),
      },
      {
        path: "login",
        element: (
          <Public>
            <Login />
          </Public>
        ),
      },
      {
        path: "signup",
        element: (
          <Public>
            <Signup />
          </Public>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
