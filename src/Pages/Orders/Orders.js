import React, { useEffect, useMemo } from "react";
import { getOrderdetails } from "../../Redux/Reducer/userOrederReducer";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PageLocation } from "../../Components/PageLocation/PageLocation";
export const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderdetails());
  }, [dispatch]);

  const state = useSelector((state) => state.orderData);
  const user = JSON.parse(localStorage.getItem("user"));

  const cartItems = useMemo(() => {
    return Array.isArray(state?.data?.data)
      ? state.data.data.filter((e) => e.productdetails[0]?.userId === user?._id)
      : [];
  }, [state?.data?.data, user]);
  console.log(cartItems);
  const date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
  let currentDate1 = `${currentDay - 2}-${currentMonth}-${currentYear}`;

  return (
    <>
      <PageLocation mainPage={{ name: "Orders" }} />

      <div className="bg-[#FFF6F6] md:pl-[128px] px-5 py-10">
        <div className="md:w-[67%] w-full">
          <div className="pb-5">
            <p className="text-xl font-medium">All Orders</p>
          </div>
          <div>
            {cartItems.length > 0
              ? cartItems.map((ele, ind) => (
                  <div key={ind} className="py-2">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <div className="flex gap-5 ">
                          <div className="flex md:flex-row flex-col md:gap-2">
                            <span className="font-medium text-black-400">
                              Order No:-
                            </span>

                            <span className="text-red-400">#{ele.orderid}</span>
                          </div>
                          <div className="flex md:flex-row flex-col md:gap-2">
                            <span className="font-medium text-black-400">
                              Date:
                            </span>

                            <span className="">{ele.date}</span>
                          </div>
                          <div className="md:block hidden flex md:flex-row flex-col md:gap-2">
                            <span className="font-medium text-black-400">
                              Product Quantity:
                            </span>

                            <span className="">
                              {ele.productdetails.length}
                            </span>
                          </div>
                          <div className="flex md:flex-row flex-col md:gap-2">
                            <span className="font-medium text-black-400">
                              Total Price:
                            </span>

                            <span className="">
                              ${ele.totalprice.toFixed(2)}
                            </span>
                          </div>
                          <div className="md:block hidden flex md:flex-row flex-col md:gap-2">
                            <span className="font-medium text-black-400">
                              Status:-
                            </span>

                            <span
                              className={
                                currentDate === ele.date
                                  ? `font-bold text-black-400`
                                  : currentDate1 >= ele.date
                                  ? "text-green-400"
                                  : `text-yellow-400`
                              }
                            >
                              {currentDate === ele.date
                                ? "Place order"
                                : currentDate1 >= ele.date
                                ? "Delivered"
                                : "Out of delivery"}
                            </span>
                          </div>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <table className="w-full text-left bg-white">
                          <thead className="border">
                            <tr>
                              <td className=" font-medium md:w-[350px] w-[80px] p-5 text-[#161619] text-sm md:text-lg">
                                Product
                              </td>
                              <td className=" font-medium pr-5 text-[#161619] text-sm md:text-lg">
                                Price
                              </td>
                              <td className=" font-medium pr-5 text-[#161619] text-sm md:text-lg">
                                Quantity
                              </td>
                              <td className=" font-medium pr-5 text-[#161619] text-sm md:text-lg">
                                Subtotal
                              </td>
                            </tr>
                          </thead>
                          <tbody className="w-full">
                            {ele.productdetails.map((e, ind) => (
                              <tr key={ind} className="border">
                                <td className="md:flex gap-5 md:p-5 p-3  md:w-[350px]">
                                  <div className="md:w-[35%] w-[70px] md:h-[120px] overflow-hidden">
                                    <img
                                      className="w-full h-full object-cover"
                                      src={
                                        "http://localhost:7001/uploads/product/" +
                                        e.image
                                      }
                                      alt=""
                                    />
                                  </div>
                                  <p className="md:w-[65%] w-full line-clamp-2">
                                    {e.title}
                                  </p>
                                </td>
                                <td className="font-medium">${e.price}</td>
                                <td className="font-medium">{e.quantity}</td>
                                <td className="font-medium">
                                  $
                                  {(
                                    Number(e.quantity) * Number(e.price)
                                  ).toFixed(2)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))
              : "Empty Order Details"}
          </div>
        </div>
      </div>
    </>
  );
};
