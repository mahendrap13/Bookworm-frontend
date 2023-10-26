import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../Redux/Reducer/AddToCartReducer";
import IconButton from "@mui/material/IconButton";
import { BsHandbag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { updateCartData } from "../../Redux/Reducer/AddToCartReducer";
import { deleteCartData } from "../../Redux/Reducer/AddToCartReducer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
export const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  const state = useSelector((state) => state.cartData);

  const updateCart = (e) => {
    dispatch(updateCartData(e)).then(() => {
      dispatch(getCartData());
    });
  };

  const deleteCart = (e) => {
    dispatch(deleteCartData(e)).then(() => {
      dispatch(getCartData());
    });
  };
  const user = JSON.parse(localStorage.getItem("user"));

  const cartItems = useMemo(() => {
    return Array.isArray(state.data)
      ? state.data.filter((e) => e?.userId === user?._id)
      : [];
  }, [state.data, user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [totalPrice, setTotalPrice] = useState(0);
  const fPrice = cartItems.map((e) => Number(e.price * e.quantity));
  useEffect(() => {
    const totalPriceSum = fPrice.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    setTotalPrice(totalPriceSum);
  }, [fPrice]);
  const navigate = useNavigate();

  const placeOrder = () => {
    navigate("/category/cart-list/check-out", {
      state: { data: cartItems, Tprice: totalPrice },
    });
  };
  return (
    <>
      <div className="bg-[#FFF6F6] md:px-[128px] px-5 pb-24">
        <div>
          {cartItems.length >= 1 ? (
            <div>
              <div className="flex justify-center p-[50px]">
                <p className="text-3xl font-medium text-[#191916]">
                  Your Cart: {cartItems.length} item
                </p>
              </div>
              <div className="flex md:flex-row flex-col gap-10">
                <div className="md:w-[72%] w-full">
                  <table className="w-full text-left bg-white">
                    <thead className="border">
                      <tr>
                        <td className=" font-medium md:w-[350px] w-auto md:p-5 pl-2 py-3 text-[#161619] text-[12px] md:text-lg">
                          Product
                        </td>
                        <td className=" font-medium pr-5 text-[#161619] text-[12px] md:text-lg">
                          Price
                        </td>
                        <td className=" font-medium pr-5 md:pl-0 pl-2 text-[#161619] text-[12px] md:text-lg">
                          Quantity
                        </td>
                        <td className=" font-medium pr-5  text-[#161619] text-[12px] md:text-lg">
                          Subtotal
                        </td>
                        <td className=" font-medium pr-5 text-[#161619] text-[12px] md:text-lg">
                          Action
                        </td>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {cartItems.map((ele, ind) => (
                        <tr key={ind} className="border">
                          <td className="md:flex gap-5 md:p-5 p-2 w-[67px] md:w-[350px]">
                            <div className="md:w-[35%] w-[60px] md:h-[120px] overflow-hidden">
                              <img
                                className="w-full h-full object-cover"
                                src={
                                  "http://localhost:7001/uploads/product/" +
                                  ele.image
                                }
                                alt={ele.image}
                              />
                            </div>
                            <p className="md:w-[65%] md:block hidden">
                              {ele.title}
                            </p>
                          </td>
                          <td className="font-medium">${ele.price}</td>
                          <td>
                            <div className="flex items-center justify-between border md:w-[120px] md:px-2">
                              {ele.quantity === 1 ? (
                                <div
                                  className=" md:py-2 md:text-2xl"
                                  onClick={() =>
                                    updateCart({ id: ele._id, type: "dec" })
                                  }
                                >
                                  <IconButton sx={{ padding: "2px" }}>
                                    <DeleteIcon className="text-[#F75454]" />
                                  </IconButton>
                                </div>
                              ) : (
                                <div
                                  className=" md:py-2 md:text-2xl"
                                  onClick={() =>
                                    updateCart({ id: ele._id, type: "dec" })
                                  }
                                >
                                  <IconButton sx={{ padding: "2px" }}>
                                    <RemoveIcon className="" />
                                  </IconButton>
                                </div>
                              )}
                              <p className=" md:text-xl text-lg text-center md:px-1">
                                {ele.quantity}
                              </p>
                              <div
                                className=" md:py-2 md:text-2xl"
                                onClick={() =>
                                  updateCart({ id: ele._id, type: "inc" })
                                }
                              >
                                <IconButton sx={{ padding: "2px" }}>
                                  <AddIcon />
                                </IconButton>
                              </div>
                            </div>
                          </td>
                          <td className="font-medium md:pl-0 pl-5">
                            $
                            {(Number(ele.quantity) * Number(ele.price)).toFixed(
                              2
                            )}
                          </td>
                          <td>
                            <IconButton onClick={() => deleteCart(ele._id)}>
                              <CloseIcon className="text-black" />
                            </IconButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="md:w-[28%]">
                  <div className="bg-white border border-black">
                    <div className="border-b-2 p-5 py-7">
                      <p className="font-medium text-xl pb-5 text-[#161619]">
                        Cart Totals
                      </p>
                      <ul>
                        <li className=" flex justify-between mb-3">
                          <span>Sub Total</span>
                          <span>${totalPrice.toFixed(2)}</span>
                        </li>
                        <li className=" flex justify-between">
                          <span>Shipping Charge</span>
                          <span>$15</span>
                        </li>
                      </ul>
                    </div>
                    <div className=" border-b-2 p-5 py-7">
                      <p className="font-medium text-xl pb-5 text-[#161619]">
                        Shipping Address
                      </p>
                      <div>
                        <p className="font-medium text-[#161619]">
                          Shipping To:-
                        </p>
                        <textarea
                          className="w-full h-[100px] border-0 outline-none bg-white"
                          type="text"
                          multiple={2}
                          disabled={true}
                          name=""
                          id=""
                          defaultValue="83 West New Avenue, Non ut illo dolor ha, Vietnam."
                        />
                        <Link className="text-[#F75454]">Change Address</Link>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="flex justify-between">
                        <span className="font-bold text-xl text-[#161619]">
                          Total
                        </span>
                        <span className="font-medium">
                          ${(totalPrice + 15).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={placeOrder}
                    className="mt-10 w-full bg-black text-white text-lg px-16 py-5 focus:outline-none focus:ring focus:ring-zinc-400"
                  >
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid place-items-center pt-20">
              <div className="flex flex-col gap-5 justify-center items-center">
                <BsHandbag className="md:text-9xl text-7xl" />
                <p className="md:text-3xl text-lg">
                  Your cart is currently empty.
                </p>
                <Link to="/category">
                  <button className="bg-black text-white md:text-lg md:px-12 px-7 py-4 focus:outline-none focus:ring focus:ring-zinc-400">
                    Return to shop
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
