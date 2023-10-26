import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductFetch } from "../../Redux/Reducer/ProductReducer";
import AuthorImg from "../Authors/AuthorImg.json";
import { Skeleton, Stack } from "@mui/material";
export const AuthorCaro = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductFetch());
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, [dispatch]);
  const state = useSelector((state) => state.productData);

  const authorBookCounts = {};

  // Calculate author-wise book counts
  state.data.forEach((book) => {
    const author = book.author;

    if (!authorBookCounts[author]) {
      authorBookCounts[author] = 1;
    } else {
      authorBookCounts[author]++;
    }
  });

  return (
    <>
      <div className="authors pb-[70px]">
        <div className="Product-best flex justify-between pb-8 md:px-[128px] px-5">
          <p className="md:text-[1.875rem] font-medium text-[#161619]">
            Favorite Authors
          </p>
          <Link className="md:text-[1rem] text-[#161619]  ease-in-out duration-300  hover:text-[#F75454] flex items-center">
            <p>View All</p> &nbsp;
            <BsChevronRight className="md:text-xl mt-1" />
          </Link>
        </div>
        <div className="caro md:px-[128px] px-5">
          <Splide
            options={{
              // pagination: true,
              perPage: 5,
              perMove: 1,
              pagination: false,
              breakpoints: {
                640: { perPage: 1, gap: 0, arrows: false },
              },
            }}
          >
            {Object.keys(authorBookCounts).map((ele, ind) =>
              isLoading !== false ? (
                <SplideSlide key={ind}>
                  <div className="flex flex-col gap-4 items-center">
                    <div className="w-[142px] h-[142px] rounded-full overflow-hidden ">
                      <img
                        className="w-full"
                        src={AuthorImg[ind].img}
                        alt={ind}
                      />
                    </div>
                    <div className="author-details text-center">
                      <p className="text-[#161619] font-medium text-xl capitalize ">
                        {ele}
                      </p>
                      <p className="text-[#7c6e65] text-lg">
                        {authorBookCounts[ele]} Published Books
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              ) : (
                <SplideSlide key={ind}>
                  <Stack
                    spacing={1}
                    style={{
                      height: "200px",
                      borderRadius: "5px",
                      padding: "10px 20px",
                      gap: "5px",
                    }}
                  >
                    <Skeleton variant="circular" width={120} height={120} />
                    <Skeleton variant="rectangular" width={150} height={20} />
                    <Skeleton variant="rounded" width={100} height={20} />
                  </Stack>
                </SplideSlide>
              )
            )}
          </Splide>
        </div>
      </div>
    </>
  );
};
