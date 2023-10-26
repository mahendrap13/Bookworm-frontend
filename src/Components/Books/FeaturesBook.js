import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { ProductFetch } from "../../Redux/Reducer/ProductReducer";
import { BookCard } from "./BookCard";
import { Skeleton, Stack } from "@mui/material";
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
        <Box
          sx={{ display: "flex", flexWrap: "wrap" }}
          className="md:px-[128px] px-5"
        >
          {children}
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

export const FeaturesBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductFetch());
  }, [dispatch]);

  const state = useSelector((state) => state.productData);

  function shuffleArray(array) {
    if (!array || !Array.isArray(array)) {
      return [];
    }

    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  const SetDataFun = useCallback(() => {
    if (!state.data || !Array.isArray(state.data)) {
      console.error("Invalid or empty data array");
      return;
    }
    const startRandom = Math.floor(Math.random() * 53);

    const shuffledArray = shuffleArray(state.data);
    const randomdata = shuffledArray.slice(startRandom, startRandom + 12);
    setData(randomdata);
  }, [state.data]);

  useEffect(() => {
    SetDataFun();
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, [state.data, SetDataFun, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="features pt-[100px]">
        <div className="flex justify-center items-center">
          <p className="text-[1.875rem] font-medium text-[#161619]">
            Featured Books
          </p>
        </div>
        <Box sx={{ width: "100%" }} className="pt-[20px] pb-[50px]">
          <Box className="flex justify-center">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="custom-tabs p-5"
            >
              <Tab
                label="Featured"
                style={{ color: "#7c6e65", fontWeight: "500" }}
                {...a11yProps(0)}
              />
              <Tab
                label="On Sale"
                style={{ color: "#7c6e65", fontWeight: "500" }}
                {...a11yProps(1)}
              />
              <Tab
                label="Most Viewed"
                style={{ color: "#7c6e65", fontWeight: "500" }}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {data.map((ele, ind) =>
              isLoading !== false ? (
                <div
                  key={ind}
                  className="md:w-[194px] w-full overflow-hidden border  ease-in-out duration-300 hover:border-black border-l-2"
                >
                  <BookCard value={ele} />
                </div>
              ) : (
                <Stack
                  key={ind}
                  spacing={1}
                  style={{
                    // width: "194px",
                    // height: "360px",
                    padding: "30px",
                    margin: "auto",
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
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {data.map((ele, ind) => (
              <div
                key={ind}
                className="md:w-[194px] w-full overflow-hidden border  ease-in-out duration-300 hover:border-black border-l-2"
              >
                <BookCard value={ele} />
              </div>
            ))}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {data.map((ele, ind) => (
              <div
                key={ind}
                className="md:w-[194px] w-full overflow-hidden border  ease-in-out duration-300 hover:border-black border-l-2"
              >
                <BookCard value={ele} />
              </div>
            ))}
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
};
