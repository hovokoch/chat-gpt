import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChatPage, PricePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <PricePage /> },
      {
        path: "chat",
        element: <ChatPage />,
      },
    ],
  },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};
