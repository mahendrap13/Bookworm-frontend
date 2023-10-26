import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useDispatch, useSelector } from "react-redux";
import { ProductFetch } from "../../Redux/Reducer/ProductReducer";
import { BookCard } from "./BookCard";
import { Skeleton, Stack } from "@mui/material";

export const BestSelling = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productData);
  useEffect(() => {
    dispatch(ProductFetch());
  }, [dispatch]);

  useEffect(() => {
    const filteredData = productData.data.filter((e, ind) => ind < 10);
    setProduct(filteredData);
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, [productData]);

  return (
    <>
      <div className="Best_product">
        <div className="Product-best flex justify-between pb-8 px-5 md:px-[128px]">
          <p className="md:text-[1.875rem] font-medium text-[#161619]">
            Bestselling Books
          </p>
          <Link
            to="/category"
            className="md:text-[1rem] text-[#161619]  ease-in-out duration-300  hover:text-[#F75454] flex items-center"
          >
            <p>View All</p> &nbsp;
            <BsChevronRight className="text-xl mt-1" />
          </Link>
        </div>
        <div className="Product-splide md:px-[128px] px-5">
          <Splide
            options={{
              type: "loop",
              perPage: 5,
              perMove: 1,
              pagination: false,
              breakpoints: {
                640: { perPage: 1, gap: 0, arrows: false ,pagination:true ,padding:"0px 0px 20px 0px" },
              },
            }}
            className=" border border-l-1 border-r-1"
          >
            {product.map((ele, ind) =>
              isLoading !== false ? (
                <SplideSlide
                  key={ind}
                  className="border  ease-in-out duration-300 hover:border-black border-l-2"
                >
                  <BookCard value={ele} />
                </SplideSlide>
              ) : (
                <SplideSlide className="border" key={ind}>
                  <Stack
                    key={ind}
                    spacing={1}
                    style={{
                      width: "200px",
                      height: "360px",
                      padding: "30px",
                      gap: "10px",
                      margin: "auto",
                    }}
                  >
                    <Skeleton variant="vertical" width={130} height={200} />
                    <Skeleton variant="rounded" width={130} height={20} />
                    <Skeleton variant="rounded" width={130} height={20} />
                    <Skeleton variant="rounded" width={130} height={20} />
                    <Skeleton variant="rounded" width={130} height={20} />
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
