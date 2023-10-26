import React from "react";
import { useLocation } from "react-router-dom";

export const OrderReceived = () => {
  const {
    state: { data },
  } = useLocation();

  return (
    <div className="bg-[#FFF6F6] px-5 md:px-[250px] py-10">
      <div className="flex justify-center">
        <p className="font-medium text-3xl  pb-10">Order received</p>
      </div>

      <div className=" bg-white border md:px-10 px-4">
        <div className="flex justify-center p-5 ">
          <p className="md:text-xl text-sm font-medium">
            Thank you. Your order has been received.
          </p>
        </div>
        <div className="border-b py-10">
          <div className=" flex md:flex-row flex-col justify-between pb-5 ">
            <div className="flex justify-between gap-5">
              <p className="font-medium">Fullname:-</p>
              <p>
                {data.firstName}&nbsp;{data.lastName}
              </p>
            </div>
            <div className="flex justify-between gap-5">
              <p className="font-medium">Phone:-</p>
              <p>{data.phone}</p>
            </div>
            <div className="flex justify-between gap-5">
              <p className="font-medium">Email:-</p>
              <p>{data.email}</p>
            </div>
          </div>
          <div className="flex justify-between md:justify-start gap-5">
            <span className="font-medium">Address:-</span>
            <span>
              {data.address}&nbsp;{data.postcode}
            </span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between py-10 border-b">
          <div className="flex justify-between">
            <p>Order number:</p>
            <p className="font-medium">{data.orderid}</p>
          </div>
          <div className="flex justify-between">
            <p>Date:</p>
            <p className="font-medium">{data.date}</p>
          </div>
          <div className="flex justify-between">
            <p>Total:</p>
            <p className="font-medium">${data.totalprice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Payment method:</p>
            <p className="font-medium">{data.paymod}</p>
          </div>
        </div>

        <div className="py-10 border-b ">
          <p className="text-lg py-2">Pay with {data.paymod} upon delivery.</p>
          <p className="font-medium">Order details</p>
          {data.productdetails.map((e, ind) => (
            <div key={ind} className="flex justify-between items-center">
              <p className="">{e.title}</p>
              <div className="w-[50%] flex justify-between">
                <p className="font-medium">x {e.quantity}</p>
                <p className="font-medium">
                  ${(e.quantity * e.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-b py-5">
          <div className="flex justify-between py-2">
            <p>Subtotal:</p>{" "}
            <p className="font-medium">{(data.totalprice - 15).toFixed(2)}</p>
          </div>
          <div className="flex justify-between py-2">
            <p>Shipping:</p> <p className="font-medium">$15</p>
          </div>
          <div className="flex justify-between py-2">
            <p>Payment method:</p>
            <p className="font-medium">Cash</p>
          </div>
        </div>
        <div className="flex justify-between py-10">
          <p className="font-bold text-xl">Total</p>
          <p className="font-medium text-lg">${data.totalprice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
