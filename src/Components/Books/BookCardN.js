import React from "react";

export const BookCardN = ({ value }) => {
  return (
    <>
      <div className="newcard flex md:gap-10 gap-5 md:p-[35px] p-5">
        <div className="md:w-[40%] w-[100px] md:h-[310px]">
          <img
            className="w-full h-full object-cover"
            src={"http://localhost:7001/uploads/product/" + value.images[0]}
            alt={value.title}
          />
        </div>
        <div className="w-[60%]">
          <p className="format text-[#f75454] mb-1 text-sm uppercase">
            {value.bookformat}
          </p>
          <h2 className="title line-clamp-2 font-medium md:text-xl text-sm">
            {value.title}
          </h2>
          <p className="author mb-1 text-[#7c6e65] line-clamp-1 ">
            {value.author}
          </p>
          <h1 className="text-lg font-medium text-[#161619]">${value.price}</h1>
        </div>
      </div>
    </>
  );
};
