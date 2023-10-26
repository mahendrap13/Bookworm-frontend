import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ProductFetch } from "../../Redux/Reducer/ProductReducer";
import { CategoryFetch } from "../../Redux/Reducer/CategoryReducer";
import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { BookCard } from "../../Components/Books/BookCard";
import { PageLocation } from "../../Components/PageLocation/PageLocation";
export const MainCategory = () => {
  const product = useSelector((state) => state.productData);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductFetch());
    dispatch(CategoryFetch());
  }, [dispatch]);
  const category = useSelector((state) => state.categoryData);

  const filterButton = (e) => {
    const filterdata = product.data.filter((data) => data.categoryId._id === e);
    setData(filterdata);
  };
  useEffect(() => {
    setData(product.data.filter((data, ind) => ind < 10));
  }, [product]);

  const authorBookCounts = {};
  //  for book count
  data.forEach((book) => {
    const author = book.author;

    if (!authorBookCounts[author]) {
      authorBookCounts[author] = 1;
    } else {
      authorBookCounts[author]++;
    }
  });
  //   for book format
  const formatBookCounts = {};

  data.forEach((book) => {
    const bookformat = book.bookformat;

    if (!formatBookCounts[bookformat]) {
      formatBookCounts[bookformat] = 1;
    } else {
      formatBookCounts[bookformat]++;
    }
  });

  const breadcrumb = {
    name: "Category",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch]);
  const [plus, setPlus] = useState(2);
  const handleupdown = (e) => {
    setPlus(e);
  };
  return (
    <>
      <PageLocation mainPage={breadcrumb} />
      <div className="main-category py-[50px] md:px-[128px] px-5 md:flex md:gap-5">
        <div className="cate-left md:w-[26%] w-full">
          <div className="border w-full p-7">
            <div className="categories flex justify-between items-center">
              <p className="text-xl font-medium">Categories</p>
              {plus === 2 ? (
                <AiOutlineMinus
                  className="text-2xl cursor-pointer"
                  onClick={() => handleupdown(1)}
                />
              ) : (
                <AiOutlinePlus
                  className="text-2xl cursor-pointer"
                  onClick={() => handleupdown(2)}
                />
              )}
            </div>
            <div
              className={
                plus === 2
                  ? "mt-7 h-full category-name flex flex-col gap-4   overflow-hidden"
                  : "h-0 category-name flex flex-col gap-4   overflow-hidden"
              }
            >
              {category.data.map((ele, ind) => (
                <Link
                  onClick={() => filterButton(ele._id)}
                  className="text-[#161619] ease-in-out duration-300 hover:text-[#F75454]"
                  key={ind}
                >
                  {ele.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="author-cate border p-7">
            <div className="categories flex justify-between items-center">
              <p className="text-xl font-medium">Author</p>
              {plus === 3 ? (
                <AiOutlineMinus
                  className="text-2xl cursor-pointer"
                  onClick={() => handleupdown(4)}
                />
              ) : (
                <AiOutlinePlus
                  className="text-2xl cursor-pointer"
                  onClick={() => handleupdown(3)}
                />
              )}
            </div>
            <div
              className={
                plus === 3
                  ? "mt-7 h-full category-name flex flex-col gap-4   overflow-hidden"
                  : "h-0 category-name flex flex-col gap-4   overflow-hidden"
              }
            >
              {Object.keys(authorBookCounts).map((ele, ind) => (
                <Link
                  key={ind}
                  className=" flex justify-between text-[#161619] ease-in-out duration-300 hover:text-[#F75454]"
                >
                  {ele} <p>({authorBookCounts[ele]})</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="book-format-cate border p-7">
            <div className="categories flex justify-between items-center">
              <p className="text-xl font-medium">Book Format</p>
              {plus === 5 ? (
                <AiOutlineMinus
                  className="text-2xl cursor-pointer"
                  onClick={() => handleupdown(6)}
                />
              ) : (
                <AiOutlinePlus
                  className="text-2xl cursor-pointer"
                  onClick={() => handleupdown(5)}
                />
              )}
            </div>
            <div
              className={
                plus === 5
                  ? "mt-7 h-full category-name flex flex-col gap-4   overflow-hidden"
                  : "h-0 category-name flex flex-col gap-4   overflow-hidden"
              }
            >
              {Object.keys(formatBookCounts).map((ele, ind) => (
                <Link
                  key={ind}
                  className=" flex justify-between text-[#161619] ease-in-out duration-300 hover:text-[#F75454]"
                >
                  {ele} <p>({formatBookCounts[ele]})</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="cate-right md:w-[74%] w-full ">
          <div className="cate-header flex justify-between items-center border-b md:pb-8 md:py-0 py-5">
            <p className="text-lg font-medium ">
              Showing the {data.length} result
            </p>
            <div className="flex justify-between items-center ">
              <CgMenuGridO className="text-[40px] border p-1.5 cursor-pointer " />
              <TfiMenuAlt className=" hidden text-[40px] border cursor-pointer	 p-1.5" />
            </div>
          </div>
          <div className="filterData flex flex-wrap overflow-hidden">
            {data.map((ele, ind) => (
              <div
                key={ind}
                className="md:w-[212.2px] w-full border overflow-hidden"
              >
                <BookCard value={ele} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
