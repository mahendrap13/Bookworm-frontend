import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsImages } from "react-icons/bs";
import { FaBaby } from "react-icons/fa";
import { GiLoveLetter } from "react-icons/gi";
import { PiStethoscope } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { CategoryFetch } from "../../Redux/Reducer/CategoryReducer";
export const CategoryCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cateData, setCateData] = useState([]);
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.categoryData);

  useEffect(() => {
    dispatch(CategoryFetch());
  }, [dispatch]);

  useEffect(() => {
    const filteredData = categoryData.data.filter((e, ind) => ind < 5);
    setCateData(filteredData);
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, [categoryData]);

  let icons = [
    <BsImages className="text-[#AB1AFC] text-5xl" />,
    <FaBaby className="text-[#F79400] text-5xl" />,
    <GiLoveLetter className="text-[#F01B0C] text-5xl" />,
    <PiStethoscope className="text-[#00CDEF] text-5xl" />,
    <GiMoneyStack className="text-[#FF8E8E] text-5xl" />,
  ];
  let bgColor = [
    "bg-[#FAF1FF]",
    "bg-[#FAF4EB]",
    "bg-[#F4E6E5]",
    "bg-[#E6F2F4]",
    "bg-[#FFF6F6]",
  ];

  return (
    <>
      <div className="category md:p-[128px] py-10 px-5 ">
        <div className="cate-feature flex justify-between pb-8">
          <p className="md:text-[1.875rem] font-medium text-[#161619]">
            Featured Categories
          </p>
          <Link
            to="/category"
            className="md:text-[1rem] text-[#161619]  ease-in-out duration-300  hover:text-[#F75454] flex items-center"
          >
            <p>All Categories</p> &nbsp;
            <BsChevronRight className="md:text-xl mt-1" />
          </Link>
        </div>
        <div className="cate-cards md:flex justify-between ">
          {cateData.map((ele, ind) =>
            isLoading !== false ? (
              <Link
                to="/category"
                key={ind}
                className={`cate-card md:w-[210px] mb-4 h-[200px] ${bgColor[ind]} flex justify-left items-center pl-8 pr-3`}
              >
                <div className="flex flex-col gap-1">
                  {icons[ind]}
                  <p className="font-medium text-lg line-clamp-1 mt-2 text-[#161619]">
                    {ele.title}
                  </p>
                  <p className="text-[#161619]">Shop Now</p>
                </div>
              </Link>
            ) : (
              <Stack
                key={ind}
                spacing={1}
                style={{
                  backgroundColor: "#ebebebc9",
                  borderRadius: "5px",
                  padding: "20px 30px",
                  gap: "10px",
                }}
                className="md:m-0 mb-5"
              >
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton variant="rectangular" width={150} height={20} />
                <Skeleton variant="rounded" width={100} height={20} />
              </Stack>
            )
          )}
        </div>
      </div>
    </>
  );
};
