import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import CartPage from "../pages/books/cartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/singleBook";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <div>Orders</div>
      },
      {
        path: "/about",
        element: <div>About</div>
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      },
      {
        path: "/books/:id",
        element: <SingleBook />
      }
    ]
  },
]);


export default router;