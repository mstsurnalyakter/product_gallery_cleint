import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import Products from "../page/Products/Products";
import ProductDetail from "../page/ProductDetail/ProductDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/productDetail/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
