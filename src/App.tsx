import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./components";
import {
  DetailedProduct,
  ForgotPassword,
  HomePage,
  Login,
  Register,
  ResetPassword,
  ShippingAddress,
} from "./pages";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products/:id",
        element: <DetailedProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "delivery",
        element: <ShippingAddress />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "reset-password/:token",
    element: <ResetPassword />,
  },
]);

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#ffff]">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
