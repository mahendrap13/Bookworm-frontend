import React from "react";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import {  useNavigate } from "react-router-dom";

export const BlogContainer = ({ value }) => {
  console.log(value);
  const navigate = useNavigate();
  const mainblog = () => {
    navigate("/blog/blog-desciption", { state: { data: value } });
  };

  return (
    <>
      <div className="blog-div md:w-[375px] w-full">
        <div className="bog-img w-full rounded overflow-hidden">
          <img className="w-full" src={value.imgurl} alt="img" />
        </div>
        <p className="text-[#F75454] ease-in-out duration-300 text-sm my-2">
          {value.category}
        </p>
        <p className="hover:text-[#F75454] ease-in-out duration-300 cursor-pointer">
          <p className="text-xl font-medium " onClick={mainblog}>
            {value.title}
          </p>
        </p>
        <p className="text-[#7f7f83] line-clamp-2">{value.description}</p>
        <p className="text-[gray]">
          <QueryBuilderIcon sx={{ fontSize: 20 }} />
          &nbsp;
          {value.date}
        </p>
      </div>
    </>
  );
};
