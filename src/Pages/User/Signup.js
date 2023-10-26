import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../Redux/Reducer/userLoginReducer";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    contact: Yup.string()
      .required("Contact no is required")
      .matches(/^\d{10}$/, "Contact no must be exactly 10 digits"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      contact: "",
      password: "",
      role: "user",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(userSignUp(values)).then((res) => {
        setError(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
        formik.resetForm();
      });
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#FFF6F6]">
        <div className="md:w-[55%] w-full md:p-20 p-5 m-auto ">
          <form onSubmit={formik.handleSubmit} className="bg-white">
            <div className=" flex justify-between border border-b-0 p-4">
              <div className="flex items-center gap-3">
                <CiUser className="text-2xl" />
                <p className="text-xl">Account</p>
              </div>
            </div>
            <div className="border md:px-10 px-5 md:py-5 py-5 ">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="username">Username *</label>
                <TextField
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  variant="outlined"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500">{formik.errors.username}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="name">Name *</label>
                <TextField
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  variant="outlined"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="email">Email*</label>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="contact">Contact *</label>
                <TextField
                  type="number"
                  id="contact"
                  name="contact"
                  placeholder="Contact"
                  variant="outlined"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contact}
                />
                {formik.touched.contact && formik.errors.contact ? (
                  <div className="text-red-500">{formik.errors.contact}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password *</label>
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
              </div>
              {error ? (
                <div>
                  <p className="text-green-600 mt-4">
                    Registration successfully, Go to SignIn
                  </p>
                </div>
              ) : (
                <></>
              )}
              <div className="flex justify-between py-3">
                <p className="text-[13px]">
                  Don't have an account?&nbsp;
                  <Link to="/sign-in" className="text-[#228EEE]">
                    Sign In
                  </Link>
                </p>
                <Link className="text-[13px]">Forget Password</Link>
              </div>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  style={{ backgroundColor: "black", padding: "10px" }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
