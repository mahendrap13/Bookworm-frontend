import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import blogs from "../../Pages/Blog/blog.json";
import { BlogContainer } from "../../Components/Blog/BlogContainer";
import Pagination from "@mui/material/Pagination";
import { PageLocation } from "../../Components/PageLocation/PageLocation";

export const Blog = () => {
  const [current, setCurrent] = useState(1);
  let row = 6;

  const totalpages = useMemo(() => {
    const startind = (current - 1) * row;
    const endind = current * row;
    return blogs.slice(startind, endind);
  }, [current, row]);

  const handlePageChange = (event, value) => {
    setCurrent(value);
  };
  const main = {
    name: "blog",
  };
  return (
    <>
      <PageLocation mainPage={main} />
      <div className="blog md:px-[128px] px-5 md:py-10">
        <div className="blog-tab flex justify-between py-10 text-[#7c6e65]">
          <Link
            to="/category"
            className="text-lg text-[black] font-medium underline underline-offset-8"
          >
            All categories
          </Link>
        </div>
        <div className="blog-contain flex flex-wrap justify-between gap-5">
          {totalpages.map((ele, ind) => (
            <BlogContainer key={ind} value={ele} />
          ))}
        </div>

        <div className="pagination flex justify-center pt-20">
          <Pagination
            count={Math.ceil(blogs.length / row)}
            page={current}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    </>
  );
};
