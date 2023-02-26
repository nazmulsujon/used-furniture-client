import Main from "../../Layouts/Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Products/Products/Products";
import SingleProductDetails from "../../Pages/Products/SingleProductDetails/SingleProductDetails";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/product/:id",
        element: <SingleProductDetails></SingleProductDetails>,
      },
    ],
  },
]);

export default router;
