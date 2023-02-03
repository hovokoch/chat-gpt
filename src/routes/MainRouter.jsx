import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { ChatPage, PricePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PricePage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};
