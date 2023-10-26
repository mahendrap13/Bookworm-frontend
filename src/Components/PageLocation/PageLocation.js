import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

export const PageLocation = ({ mainPage }) => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <>
      <div onClick={handleClick} className="md:px-[128px] px-5 py-5 border-b">
        <Breadcrumbs
          separator={
            <NavigateNextIcon fontSize="small" style={{ fontSize: "14px" }} />
          }
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            color="inherit"
            to="/"
            className="text-sm hover:text-[#F75454]"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            to="#"
            style={{ fontSize: "14px" }}
          >
            {mainPage.name}
          </Link>
        </Breadcrumbs>
      </div>
    </>
  );
};
