import { Navigate, useRoutes } from "react-router-dom";
import { Blog } from "./Pages/Blog/Blog";
import { Contact } from "./Pages/Contact/Contact";
import { Home } from "./Pages/Home/Home";
import { MainCategory } from "./Pages/Category/MainCategory";
import { BookcardDetails } from "./Components/Books/BookcardDetails";
import { Cart } from "./Components/AddToCart/Cart";
import { SignIn } from "./Pages/User/SignIn";
import { PlaceOrder } from "./Components/Place order/PlaceOrder";
import { OrderReceived } from "./Components/Place order/OrderReceived";
import { BlogContainerMain } from "./Components/Blog/BlogContainerMain";
// import { ErrorPage } from "./Pages/Error/ErrorPage";
import { ErrorPage2 } from "./Pages/Error/ErrorPage2";
import { Orders } from "./Pages/Orders/Orders";
import { Signup } from "./Pages/User/Signup";

export const Router = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const Routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
    { path: "/blog", element: <Blog /> },
    { path: "/contact", element: <Contact /> },
    { path: "/category/bookdetails", element: <BookcardDetails /> },
    { path: "/category", element: <MainCategory /> },
    {
      path: "/order-list",
      element: user ? <Orders /> : <Navigate to="/sign-in" />,
    }, 
    { path: "/category/cart-list", element: <Cart /> },
    { path: "/blog/blog-desciption", element: <BlogContainerMain /> },
    {
      path: "/category/cart-list/check-out/place-order",
      element: <OrderReceived />,
    },
    {
      path: "/category/cart-list/check-out",
      element: <PlaceOrder />,
    },

    { path: "404", element: <ErrorPage2 /> },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
  return Routes;
};
