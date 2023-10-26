import React, { useEffect, useMemo } from "react";
import "./Css/bookcard.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { addToCartFeach } from "../../Redux/Reducer/AddToCartReducer";
import { getCartData } from "../../Redux/Reducer/AddToCartReducer";
import { useDispatch, useSelector } from "react-redux";

export const BookCard = ({ value }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const state = useSelector((state) => state.cartData);

  const cartItems = useMemo(() => {
    return Array.isArray(state.data)
      ? state.data.filter((e) => e?.userId === user?._id)
      : [];
  }, [state.data, user]);

  const isItemInCart = cartItems.some((item) => item.productId === value._id);

  const addToCart = (data) => {
    if (token) {
      dispatch(
        addToCartFeach({
          title: data.title,
          price: data.price,
          quantity: 1,
          userId: user && user._id,
          productId: data._id,
          image: data.images[0],
        })
      ).then(() => {
        dispatch(getCartData());
      });
    } else {
      navigate("/sign-in");
    }
  };

  const handleView = () => {
    navigate("/category/bookdetails", { state: { data: value } });
  };
  const viewCart = () => {
    navigate("/category/cart-list");
  };
  return (
    <>
      <div className="cardss py-7 px-5 md:h-[360px] w-full cursor-pointer">
        <div onClick={handleView}>
          <div className="card-img px-5  md:w-[150px] w-[200px] overflow-hidden m-auto ">
            <img
              className="w-full"
              src={"http://localhost:7001/uploads/product/" + value.images[0]}
              alt="product"
            />
          </div>
          <div className="card-details px-2">
            <p className="format text-[#f75454] mb-1 text-sm uppercase">
              {value.bookformat}
            </p>
            <h2 className="title line-clamp-2 font-medium pr-6 h-12">
              {value.title}
            </h2>
            <p className="author mb-1 text-[#7c6e65] line-clamp-1">
              {value.author}
            </p>
            <h1 className="text-lg font-medium text-[#161619]">
              ${value.price}
            </h1>
          </div>
        </div>
        <div className="cart flex justify-between mt-2 items-center ease-in-out duration-300 hover:underline underline-offset-8 ">
          {isItemInCart ? (
            <p className="text-sm  text-[red]" onClick={() => viewCart()}>
              VIEW CART
            </p>
          ) : (
            <p className="text-sm" onClick={() => addToCart(value)}>
              ADD TO CART
            </p>
          )}
          <AiOutlineHeart className="text-2xl p-1 ease-in-out duration-300 rounded-full w-[35px] h-[35px] cursor-pointer hover:bg-[#f75454] hover:text-[white] " />
        </div>
      </div>
    </>
  );
};
