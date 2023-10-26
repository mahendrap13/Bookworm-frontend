import React, { useState, useEffect, useMemo } from "react";
import "./appbar.css";
import logosvg from "../../Images/svgexport-1.svg";
import { Link, useNavigate } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { RiMenu2Line } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { getCartData } from "../../Redux/Reducer/AddToCartReducer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

export const Appbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  const state = useSelector((state) => state.cartData);

  const user = JSON.parse(localStorage.getItem("user"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");

    handleClose1();
  };
  const handleLogin = () => {
    navigate("/sign-in");
    handleClose1();
  };

  const cartItems = useMemo(() => {
    return Array.isArray(state.data)
      ? state.data.filter((e) => e?.userId === user?._id)
      : [];
  }, [state.data, user]);

  return (
    <>
      <div className="appbar  flex flex-wrap md:flex md:flex-nowrap	 md:justify-between md:items-center md:gap-10 gap-3 py-5 md:px-16 px-5 border-b">
        <div className="menubar flex justify-start items-center mt-2">
          <RiMenu2Line className="text-[28px]" onClick={() => setNav(!nav)} />
        </div>
        <div className=" logo logonavbar md:ml-10 md:w-1/5 flex md:justify-start justify-between items-center">
          <Link to="/">
            <img className="w-full" src={logosvg} alt="logo" />
          </Link>
          <div className=" md:hidden w-[60px] flex justify-between items-center">
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open1 ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open1 ? "true" : undefined}
                    sx={{ padding: 0 }}
                  >
                    {user ? (
                      <PersonIcon className="text-[#F75454]" />
                    ) : (
                      <PersonIcon className="text-black" />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open1}
                onClose={handleClose1}
                onClick={handleClose1}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {user ? (
                  <MenuItem>
                    <ListItemIcon>
                      <PersonIcon
                        fontSize="small"
                        className={user ? "text-[#728FCE]" : ""}
                      />
                    </ListItemIcon>
                    {user.name}
                  </MenuItem>
                ) : (
                  <MenuItem
                    sx={{ padding: "10px 20px " }}
                    onClick={() => navigate("/sign-up")}
                  >
                    <ListItemIcon>
                      <PersonIcon
                        fontSize="small"
                        className={user ? "text-[#728FCE]" : ""}
                      />
                    </ListItemIcon>
                    Sign Up
                  </MenuItem>
                )}

                {user ? (
                  <MenuItem
                    onClick={handleLogout}
                    sx={{ padding: "10px 20px ", backgroundColor: "#FFF6F7" }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" className="text-[#F75454]" />
                    </ListItemIcon>
                    Sign Out
                  </MenuItem>
                ) : (
                  <MenuItem
                    onClick={handleLogin}
                    sx={{ padding: "10px 20px " }}
                  >
                    <ListItemIcon>
                      <LockOpenIcon
                        fontSize="small"
                        className="text-[#F75454]"
                      />
                    </ListItemIcon>
                    Sign In
                  </MenuItem>
                )}
              </Menu>
            </React.Fragment>

            <Link to="/category/cart-list">
              <ThemeProvider theme={theme}>
                <Badge color="primary" badgeContent={cartItems.length}>
                  {/* <BsHandbag className="text-[21px] -mt-[5px] font-thin	" /> */}
                  <ShoppingCartIcon />
                </Badge>
              </ThemeProvider>
            </Link>
          </div>
        </div>
        <div
          className={`${
            nav
              ? "h-[180px] ease-in-out duration-300 overflow-hidden"
              : "h-0 overflow-hidden"
          } md:h-full  duration-300 ease-in-out page-link md:w-2/4 w-full flex justify-center items-center`}
        >
          <ul className="w-full flex flex-col md:flex-row md:gap-0 gap-3 justify-between md:items-center">
            <li onClick={() => setNav(false)}>
              <Link to="/">Home</Link>
            </li>

            <li onClick={() => setNav(false)}>
              <Link to="category">Categories</Link>
            </li>
            <li onClick={() => setNav(false)}>
              <Link to="/blog">Blog</Link>
            </li>
            <li onClick={() => setNav(false)}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={() => setNav(false)}>
              <Link to="/order-list">Orders</Link>
            </li>
          </ul>
        </div>
        <div className="search md:flex md:justify-end justify-center items-center w-full md:w-1/4">
          <div className="bg-[#F6F5F3] flex md:w-5/6 w-full  py-1 px-3">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "14px" }}
              placeholder="Search by Keywords"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
