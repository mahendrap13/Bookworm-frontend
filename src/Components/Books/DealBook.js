import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { BookCardN } from "./BookCardN";
import { useDispatch, useSelector } from "react-redux";
import { ProductFetch } from "../../Redux/Reducer/ProductReducer";

export const DealBook = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductFetch());
  }, [dispatch]);
  const state = useSelector((state) => state.productData);
  useEffect(() => {
    const filterData = state.data.filter((i, ind) => ind < 10);
    setData(filterData);
  }, [state]);

  return (
    <div className="bg-[#FFF6F6] py-[100px] md:px-[128px] px-5">
      <div className="Product-best flex justify-between pb-8">
        <p className="md:text-[1.875rem] font-medium text-[#161619]">
          Deals of the Week
        </p>
        <Link
          to="/category"
          className="md:text-[1rem] text-[#161619]  ease-in-out duration-300  hover:text-[#F75454] flex items-center"
        >
          <p>View All</p> &nbsp;
          <BsChevronRight className="md:text-xl mt-1" />
        </Link>
      </div>
      <div className="deals">
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            perMove: 1,
            breakpoints: {
              640: { perPage: 1, gap: 0, arrows: false },
            },
          }}
        >
          {data.map((ele, ind) => (
            <SplideSlide
              key={ind}
              className="bg-white border shadow-sm md:h-full	h-auto"
            >
              <BookCardN value={ele} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
