import { ROUTES } from "./routes";
import { AppLayout } from "./Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
// import MainPage from "@/pages/MainPage.tsx";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.HOME,
        // element: <MainPage />,
      },
      {
        path: ROUTES.SIGNIN,
        // element: <SignInPage />,
      },
      {
        path: ROUTES.SIGNUP,
        // element: <SignUpPage />,
      },
      {
        path: ROUTES.LOGOUT,
        // element: <LogoutPage />,
      },
    ],
  },
]);
