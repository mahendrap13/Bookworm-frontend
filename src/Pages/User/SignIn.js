import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { userSignIn } from "../../Redux/Reducer/userLoginReducer";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Email or username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(userSignIn(values)).then((res) => {
        if (res.error) {
          console.log("errorss");
          setError(true);
        } else {
          navigate(-1);
          formik.resetForm();
        }
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
            <div className="border md:px-10 px-5 md:py-10 py-5 ">
              <div className="flex flex-col gap-3 mb-5">
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
              <div className="flex flex-col gap-3">
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
                  <p className="text-red-400 mt-4">Invalid Credential</p>
                </div>
              ) : (
                <></>
              )}
              <div className="flex justify-between py-3">
                <p className="text-[13px]">
                  Don't have an account?&nbsp;
                  <Link to="/sign-up" className="text-[#228EEE]">
                    Sign Up
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
                  Sign In
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
