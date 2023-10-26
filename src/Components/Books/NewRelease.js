import React, { useEffect, useState } from "react";
import addimg from "../../Images/caros (1).png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import { ProductFetch } from "../../Redux/Reducer/ProductReducer";
import { BookCard } from "./BookCard";
import { Skeleton, Stack } from "@mui/material";
export const NewRelease = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductFetch());
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, [dispatch, isLoading]);
  const state = useSelector((state) => state.productData);
  const [value, setValue] = React.useState("64eb206839874a25309a2874");
  const [data, setData] = useState([]);
  useEffect(() => {
    const Data = state.data.filter((e) => e.categoryId._id === value);
    setData(Data);
  }, [state, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const filterData = state.data.filter(
      (item, ind) => item.categoryId._id === newValue
    );
    setData(filterData);
  };
  return (
    <>
      <div className="new-release md:px-[128px] px-5 py-[50px]">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <div className="Product-best md:flex justify-between pb-8">
              <p className="text-[1.875rem] font-medium text-[#161619] font-sans	">
                New Releases
              </p>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                className="custom-tabss"
              >
                <Tab
                  label="History"
                  value="64eb206839874a25309a2874"
                  style={{ color: "#7c6e65", fontWeight: "500" }}
                />
                <Tab
                  label="Business & Money"
                  value="64eb200c39874a25309a2864"
                  style={{ color: "#7c6e65", fontWeight: "500" }}
                />
                <Tab
                  label="Romance"
                  value="64eb20c339874a25309a2888"
                  style={{ color: "#7c6e65", fontWeight: "500" }}
                />
                <Tab
                  label="Travel"
                  value="64eb207a39874a25309a2878"
                  style={{ color: "#7c6e65", fontWeight: "500" }}
                />
              </TabList>
            </div>
            <div className="new-books md:flex border">
              <div className="adds bg-[#FFF6F6] md:px-[60px] px-4 py-[99px] md:w-[387px] ">
                <div className="add-img w-[262px] h-[262px]">
                  <img className="w-full" src={addimg} alt={addimg} />
                </div>
                <div className="add-details ">
                  <p className="text-4xl font-[400] text-[#161619] mb-4">
                    Get Extra
                  </p>
                  <p className="text-[#F75454] text-5xl mb-4 font-medium">
                    Sale -25%
                  </p>
                  <p className="text-[#beb4b4] text-3xl mb-5">
                    ON ORDER OVER $100
                  </p>
                  <button className="bg-[#F75454] px-[55px] py-[13px] text-[white]">
                    View More
                  </button>
                </div>
              </div>
              <TabPanel
                style={{ padding: "0" }}
                value="64eb206839874a25309a2874"
              >
                <div className="flex flex-wrap">
                  {data.map((ele, ind) =>
                    isLoading !== false ? (
                      <div
                        key={ind}
                        className="md:w-[196px] w-full border ease-in-out duration-300 hover:border-black border-l-2"
                      >
                        <BookCard value={ele} />
                      </div>
                    ) : (
                      <Stack
                        key={ind}
                        spacing={1}
                        style={{
                          width: "196px",
                          height: "360px",
                          padding: "30px",
                        }}
                        className="border"
                      >
                        <Skeleton variant="vertical" width={130} height={180} />
                        <Skeleton variant="rounded" width={100} height={20} />
                        <Skeleton variant="rounded" width={130} height={18} />
                        <Skeleton variant="rounded" width={100} height={18} />
                        <Skeleton variant="rounded" width={100} height={18} />
                      </Stack>
                    )
                  )}
                </div>
              </TabPanel>
              <TabPanel
                style={{ padding: "0" }}
                value="64eb200c39874a25309a2864"
              >
                <div className="flex flex-wrap">
                  {data.map((ele, ind) => (
                    <div
                      key={ind}
                      className="w-[196px] border ease-in-out duration-300 hover:border-black border-l-2"
                    >
                      <BookCard value={ele} />
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel
                style={{ padding: "0" }}
                value="64eb20c339874a25309a2888"
              >
                <div className="flex flex-wrap">
                  {data.map((ele, ind) => (
                    <div
                      key={ind}
                      className="w-[196px] border ease-in-out duration-300 hover:border-black border-l-2"
                    >
                      <BookCard value={ele} />
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel
                style={{ padding: "0" }}
                value="64eb207a39874a25309a2878"
              >
                <div className="flex flex-wrap">
                  {data.map((ele, ind) => (
                    <div
                      key={ind}
                      className="w-[196px] border ease-in-out duration-300 hover:border-black border-l-2"
                    >
                      <BookCard value={ele} />
                    </div>
                  ))}
                </div>
              </TabPanel>
            </div>
          </TabContext>
        </Box>
      </div>
    </>
  );
};
