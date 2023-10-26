import React, { useEffect, useState, useMemo } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { ProductFetch } from "../../Redux/Reducer/ProductReducer";
import { BookCard } from "./BookCard";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineCreditCard } from "react-icons/hi";
import { GiTimeBomb } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { addToCartFeach } from "../../Redux/Reducer/AddToCartReducer";
import { getCartData } from "../../Redux/Reducer/AddToCartReducer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const BookcardDetails = () => {
  const [filter, setFilter] = useState([]);
  const [random, setRandom] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductFetch());
  }, [dispatch]);

  const store = useSelector((store) => store.productData);

  const {
    state: { data },
  } = useLocation((state) => (state.data ? state.data : ""));

  useEffect(() => {
    const filter = store.data.filter(
      (i, ind) => i.categoryId._id === data.categoryId._id
    );
    setFilter(filter);
  }, [data.categoryId._id, store.data]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const start = Math.floor(Math.random() * 60);
    const randomData = store.data.slice(start, start + 3);
    setRandom(randomData);
  }, [store.data]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/category/bookdetails", { state: { data: e } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  const add = useMemo(() => {
    return {
      title: data.title,
      price: data.price,
      quantity: quantity,
      userId: user && user._id,
      productId: data._id,
      image: data.images[0],
    };
  }, [quantity, data, user]);

  const addtocart = () => {
    if (token) {
      dispatch(addToCartFeach(add)).then(() => {
        dispatch(getCartData());
      });
    } else {
      navigate("/sign-in");
    }
  };

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const state = useSelector((state) => state.cartData);

  const cartItems = useMemo(() => {
    return Array.isArray(state.data)
      ? state.data.filter((e) => e?.userId === user?._id)
      : [];
  }, [state.data, user]);

  const isItemInCart = cartItems.some((item) => item.productId === data._id);
  const viewCart = () => {
    navigate("/category/cart-list");
  };
  return (
    <>
      <div className="book-details">
        <div className="md:px-[128px] px-5 md:py-[70px] py-[30px] md:flex ">
          <div className="details-left md:w-[75%] w-full md:pr-5 ">
            <div className="md:flex w-full mb-5">
              <div className="md:w-[40%]">
                <Splide options={{ arrows: false }} className="pb-10">
                  <SplideSlide
                    style={{
                      width: "100%",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <div className="img w-[300px] h-[449px]  overflow-hidden border">
                      <img
                        className="w-full h-full object-cover"
                        src={
                          data
                            ? "http://localhost:7001/uploads/product/" +
                              data.images[0]
                            : ""
                        }
                        alt={data ? data.images[0] : ""}
                      />
                    </div>
                  </SplideSlide>
                  <SplideSlide
                    style={{
                      width: "100%",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <div className="img w-[300px] h-[449px] overflow-hidden border">
                      <img
                        className="w-full h-full object-cover"
                        src={
                          data
                            ? "http://localhost:7001/uploads/product/" +
                              data.images[0]
                            : ""
                        }
                        alt={data ? data.images[0] : ""}
                      />
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
              <div className="md:w-[60%] py-6 md:px-10 ">
                <p className="title font-medium text-3xl mb-3 line-clamp-2">
                  {data ? data.title : ""}
                </p>
                <p className="title font-medium">
                  By (author)&nbsp;
                  <span className="text-[grey]">{data ? data.author : ""}</span>
                </p>
                <p className="title font-medium text-2xl my-5">
                  ${data ? data.price : ""}
                </p>
                <p className="title text-[14px]">
                  {data ? data.shortDescription : ""}
                </p>
                <div className="botton w-full flex flex-col md:flex-row  gap-5 justify-between items-center mt-5">
                  <div className="inddec md:w-auto w-[140px] flex items-center border md:h-[60px] h-[50px]">
                    <button
                      className="md:px-6 px-5  text-2xl"
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : quantity)
                      }
                    >
                      -
                    </button>
                    <p className="w-5 text-xl text-center">{quantity}</p>
                    <button
                      className="md:px-6 px-5  text-2xl"
                      onClick={() =>
                        setQuantity(quantity < 10 ? quantity + 1 : quantity)
                      }
                    >
                      +
                    </button>
                  </div>
                  {isItemInCart ? (
                    <button
                      onClick={viewCart}
                      className="bg-black md:w-auto w-full text-white text-sm md:text-lg md:h-[60px] h-[50px] px-5 md:px-16  md:py-4 focus:outline-none focus:ring focus:ring-zinc-400"
                    >
                      <ShoppingCartIcon />
                      &nbsp;View Cart
                    </button>
                  ) : (
                    <button
                      onClick={addtocart}
                      className="bg-black text-white md:w-auto w-full text-sm md:text-lg md:h-[60px] h-[50px] px-5 md:px-16  md:py-4 focus:outline-none focus:ring focus:ring-zinc-400"
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="des md:flex border-t w-full">
              <Box className="md:w-[25%] border-r p-5">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Description" {...a11yProps(0)} />
                  <Tab label="Product Details" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0} className="md:w-[75%]">
                {data.description}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1} className="md:w-[75%]">
                <div className="md:p-5">
                  <p className="mb-4">
                    <span className=" text-lg inline-block w-[50%] font-bold ">
                      Category:
                    </span>
                    <span className="text-[#F75454]">
                      {data.categoryId.title}
                    </span>
                  </p>
                  <p className="mb-4">
                    <span className=" text-lg inline-block w-[50%] font-bold ">
                      Book Author:
                    </span>
                    <span className="text-[#F75454]">{data.author}</span>
                  </p>
                  <p className="mb-4">
                    <span className=" text-lg inline-block w-[50%] font-bold">
                      Book Format:
                    </span>
                    <span>{data.bookformat}</span>
                  </p>
                </div>
              </CustomTabPanel>
            </div>
          </div>
          <div className="details-right md:w-[25%]">
            <div className="border flex flex-col gap-6 p-6">
              {random.map((ele, ind) => (
                <div
                  key={ind}
                  className="flex gap-5 cursor-pointer"
                  onClick={() => handleSubmit(ele)}
                >
                  <div>
                    <div className="w-[60px] h-[80px] overflow-hidden">
                      <img
                        className="w-full h-full object-cover	"
                        src={
                          "http://localhost:7001/uploads/product/" +
                          ele.images[0]
                        }
                        alt={ele.images[0]}
                      />
                    </div>
                  </div>
                  <div className="w-auto">
                    <p className="line-clamp-2 text-sm  mb-2">{ele.title}</p>
                    <p className="font-medium">${ele.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className=" mt-5 flex flex-col ">
              <div className="flex p-6 border gap-6">
                <div>
                  <TbTruckDelivery className="text-5xl text-[#F75454]" />
                </div>
                <div>
                  <p className="font-medium text-lg">Free Delivery</p>
                  <p>Orders over $100</p>
                </div>
              </div>
              <div className="flex p-6 border gap-6">
                <div>
                  <HiOutlineCreditCard className="text-5xl text-[#F75454]" />
                </div>
                <div>
                  <p className="font-medium text-lg">Secure Payment</p>
                  <p>100% Secure Payment</p>
                </div>
              </div>
              <div className="flex p-6 border gap-6">
                <div>
                  <IoMdCheckmarkCircleOutline className="text-5xl text-[#F75454]" />
                </div>
                <div>
                  <p className="font-medium text-lg">Money Back Guarantee</p>
                  <p>Within 30 Days</p>
                </div>
              </div>
              <div className="flex p-6 border gap-6">
                <div>
                  <GiTimeBomb className="text-5xl text-[#F75454]" />
                </div>
                <div>
                  <p className="font-medium text-lg">24/7 Support</p>
                  <p>Within 1 Business Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related-product md:px-[128px] px-5">
          <p className="text-2xl font-medium mb-8">Related products</p>
          <div className="pro flex  flex flex-wrap md:mb-[100px] mb-10">
            {filter.map((ele, ind) => (
              <div
                key={ind}
                className="md:w-[233px] w-full border  ease-in-out duration-300 hover:border-black border-l-2"
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
