import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrderdetails } from "../../Redux/Reducer/userOrederReducer";
import { deleteManyCartData } from "../../Redux/Reducer/AddToCartReducer";

export const PlaceOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\d{10}$/, "Phone must be exactly 10 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    postcode: Yup.string().required("Postcode is required"),
  });
  const orderno = Math.floor(Math.random() * 10000);
  const date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

  const {
    state: { Tprice, data },
  } = useLocation();
  const fit = data.map((e) => e._id);

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(addOrderdetails(values)).then(() => {
      navigate("/category/cart-list/check-out/place-order", {
        state: { data: values },
      });
      dispatch(deleteManyCartData(fit));
    });
    formik.resetForm();
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      postcode: "",
      date: currentDate,
      orderid: orderno,
      totalprice: Tprice + 15,
      productdetails: data,
      paymod: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="bg-[#FFF6F6] md:px-[128px] px-5 pb-24">
      <div className="flex justify-center">
        <p className="font-medium text-3xl py-10">Checkout</p>
      </div>
      <div className="flex md:flex-row flex-col gap-10">
        <div className="md:w-[65%]  flex flex-col gap-5">
          <div className=" bg-white border p-5 ">
            <p className="font-bold text-2xl mb-3">Billing details</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex md:flex-row flex-col w-full md:gap-5">
                <div className="w-full h-[90px]">
                  <label className="font-medium pb-2" htmlFor="firstName">
                    First Name*
                  </label>
                  <TextField
                    size="small"
                    type="text"
                    name="firstName"
                    className="w-full"
                    id="firstName"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-red-500">
                      {formik.errors.firstName}
                    </div>
                  )}
                </div>
                <div className="w-full h-[90px]">
                  <label className="font-medium pb-2" htmlFor="lastName">
                    Last Name*
                  </label>
                  <TextField
                    size="small"
                    type="text"
                    name="lastName"
                    className="w-full"
                    id="lastName"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-red-500">{formik.errors.lastName}</div>
                  )}
                </div>
              </div>
              <div className="h-[90px]">
                <label className="font-medium pb-2" htmlFor="phone">
                  Phone*
                </label>
                <TextField
                  size="small"
                  type="number"
                  name="phone"
                  className="w-full"
                  id="phone"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-500">{formik.errors.phone}</div>
                )}
              </div>
              <div className="h-[90px]">
                <label className="font-medium pb-2" htmlFor="email">
                  Email*
                </label>
                <TextField
                  size="small"
                  type="text"
                  name="email"
                  className="w-full"
                  id="email"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500">{formik.errors.email}</div>
                )}
              </div>
              <div className="h-[90px]">
                <label className="font-medium pb-2" htmlFor="address">
                  Address*
                </label>
                <TextField
                  size="small"
                  type="text"
                  name="address"
                  className="w-full"
                  id="address"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address && (
                  <div className="text-red-500">{formik.errors.address}</div>
                )}
              </div>
              <div className="h-[90px]">
                <label className="font-medium pb-2" htmlFor="postcode">
                  Postcode/Zip
                </label>
                <TextField
                  size="small"
                  type="text"
                  name="postcode"
                  className="w-full"
                  id="postcode"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.postcode}
                />
                {formik.touched.postcode && formik.errors.postcode && (
                  <div className="text-red-500">{formik.errors.postcode}</div>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-[35%] ">
          <div className="border border-black bg-white ">
            <div className="p-5 py-7 border-b-2">
              <p className="font-medium text-xl pb-5">Your Order</p>
              {data?.map((e, ind) => (
                <div key={ind} className="flex justify-between">
                  <span className="text-sm">
                    ○&nbsp;{e.title}&nbsp;
                    <b>x</b>&nbsp;
                    <b>{e.quantity}</b>
                  </span>
                  <span className="font-medium">
                    ${(e.price * e.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-5 py-7 border-b-2">
              <p className="font-medium text-xl pb-5">Cart Totals</p>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">${Tprice.toFixed(2)}</span>
              </div>
            </div>
            <div className="p-5 py-7 border-b-2">
              <p className="font-medium text-xl pb-5">Shipping</p>
              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span className="font-medium">$15</span>
              </div>
            </div>
            <div className="p-5">
              <p className="flex justify-between">
                <span className="font-bold text-xl">Total</span>
                <span className="font-bold">${(Tprice + 15).toFixed(2)}</span>
              </p>
            </div>
          </div>
          <div className="bg-white border border-black mt-4 p-5">
            <p className="font-medium py-2 text-xl">Payment Methods</p>
            <div className="flex items-center gap-3 py-2 ">
              <input
                type="radio"
                name="paymod"
                id="card"
                value="Card"
                onChange={formik.handleChange}
              />
              <label className="cursor-pointer" htmlFor="card">
                Card Payments
              </label>
            </div>

            <div className="flex items-center gap-3 py-2 ">
              <input
                type="radio"
                name="paymod"
                id="cash"
                value="Cash"
                onChange={formik.handleChange}
              />
              <label className="cursor-pointer" htmlFor="cash">
                Cash on delivery
              </label>
            </div>
          </div>
          <button
            onClick={formik.handleSubmit}
            type="submit"
            className="mt-10 w-full bg-black text-white text-lg px-16 py-5 focus:outline-none focus:ring focus:ring-zinc-400"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
