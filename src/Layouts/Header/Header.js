import React, { useMemo, useEffect } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import Badge from "@mui/material/Badge";
import {
  CiMobile3,
  CiLocationOn,
  CiCircleQuestion,
  CiHeart,
} from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { getCartData } from "../../Redux/Reducer/AddToCartReducer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

export const Header = () => {
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
      <div className=" hidden md:flex md:justify-between md:items-center border md:px-16 px-5 py-2.5">
        <div className="left-h md:w-3/12 md:flex md:justify-between md:items-center">
          <div className="help">
            <p>
              <Link
                to="/contact"
                className="flex md:justify-between justify-center items-center gap-1"
              >
                <CiCircleQuestion className="text-xl" />
                Can we help you?
              </Link>
            </p>
          </div>
          <div className="cell">
            <p>
              <Link
                to="/contact"
                className=" flex md:justify-between justify-center items-center "
              >
                <CiMobile3 className="text-lg" />
                &nbsp; +1 246-345-0695
              </Link>
            </p>
          </div>
        </div>
        <div className="right-h ">
          <div className="icons flex justify-between items-center md:w-44	">
            <Link>
              <CiLocationOn className="text-2xl" />
            </Link>
            <Link>
              <CiHeart className="text-2xl" />
            </Link>
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
                  >
                    {user ? (
                      <PersonIcon fontSize="small" className="text-[#F75454]" />
                    ) : (
                      <CiUser className="text-black" />
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
                  <MenuItem onClick={() => navigate("/sign-up")}>
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
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" className="text-[#F75454]" />
                    </ListItemIcon>
                    Sign Out
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleLogin}>
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
                  <BsHandbag className="text-lg" />
                </Badge>
              </ThemeProvider>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
