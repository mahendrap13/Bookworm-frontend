import { configureStore } from "@reduxjs/toolkit";

import CategoriesData from "./Reducer/CategoryReducer";
import ProductData from "./Reducer/ProductReducer";
import CartData from "./Reducer/AddToCartReducer";
import UserData from "./Reducer/userLoginReducer";
import OrderData from "./Reducer/userOrederReducer";
import ContactDetails from "./Reducer/contactReducer";
export default configureStore(
  {
    reducer: {
      categoryData: CategoriesData,
      productData: ProductData,
      userData: UserData,
      cartData: CartData,
      orderData: OrderData,
      contactDetails: ContactDetails,
    },
  },
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);
