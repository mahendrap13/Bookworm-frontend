import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook, BiLogoPinterest } from "react-icons/bi";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { addContactdetails } from "../../Redux/Reducer/contactReducer";
import { useDispatch } from "react-redux";
import { PageLocation } from "../../Components/PageLocation/PageLocation";
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  details: Yup.string().required("Details are required"),
});

export const Contact = () => {
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      details: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addContactdetails(values)).then(() => {
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 2000);
      });
      formik.resetForm();
    },
  });

  return (
    <>
      <PageLocation mainPage={{ name: "Contact" }} />
      <div className="contact">
        <div className="md:h-[150px] h-20 flex justify-center items-center">
          <h2 className=" flex font-medium md:text-4xl text-2xl">Contact Us</h2>
        </div>
        <div className="map">
          <iframe
            title="Embedded Web Page"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.215218746953!2d72.84961067547835!3d19.22944994713675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d42c95bdf9%3A0x5a3374a957943f4b!2sTryCatch%20Classes%20%7C%20Full%20Stack%20Web%20Development%20%7C%20Data%20Science%20Python%20Alteryx%20%7C%20Software%20Testing%20%7C%20Android%20IOS%20Flutter%20Training!5e0!3m2!1sen!2sin!4v1694167384538!5m2!1sen!2sin"
            width="100%"
            height="550"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-details -translate-y-[100px] bg-white mx-auto md:w-[60%] w-[90%] md:px-[100px] px-5 md:pt-[70px] pt-[20px]">
          <h2 className="pb-10 md:text-5xl text-4xl font-medium">
            Contact Information
          </h2>
          <p className="italic text-[#161619]">
            We will answer any questions you may have about our online sales,
            rights or partnership service right here.
          </p>
          <div className="md:flex gap-5 mt-10">
            <div className="contact-left flex flex-col">
              <h3 className="font-medium text-lg mb-5">New York Office</h3>
              <p className="mb-5 text-[#161619]">
                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
              </p>
              <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                sale@bookworm.com
              </Link>
              <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                +1 246-345-0695
              </Link>
            </div>
            <div className="contact-right flex flex-col md:m-0 mt-5">
              <h3 className="font-medium text-lg mb-5">London Office</h3>
              <p className="mb-5 text-[#161619]">
                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
              </p>
              <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                sale@bookworm.com
              </Link>
              <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                +1 246-345-0695
              </Link>
            </div>
          </div>
          <h2 className="font-bold text-xl pt-10">Social Media</h2>
          <ul className="flex gap-8 mt-5">
            <li>
              <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                <AiOutlineInstagram className="text-xl" />
              </Link>
            </li>
            <li>
              <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                <BiLogoFacebook className="text-xl" />
              </Link>
            </li>
            <li>
              <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                <AiFillYoutube className="text-xl" />
              </Link>
            </li>
            <li>
              <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                <AiOutlineTwitter className="text-xl" />
              </Link>
            </li>
            <li>
              <Link className=" ease-in-out duration-300 hover:text-[#F75454]">
                <BiLogoPinterest className="text-xl" />
              </Link>
            </li>
          </ul>
          <p className="pt-10 text-4xl font-medium">Get In Touch</p>
          <div className="inputs py-5">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              className="flex flex-col gap-3"
            >
              <div className="input flex flex-col md:flex md:flex-row w-full md:gap-5 gap-3">
                <div className="w-full">
                  <TextField
                    className="w-full"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500">{formik.errors.name}</div>
                  )}
                </div>
                <div className="w-full">
                  <TextField
                    className="w-full"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500">{formik.errors.email}</div>
                  )}
                </div>
              </div>
              <TextField
                className="w-full"
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.subject && formik.errors.subject && (
                <div className="text-red-500">{formik.errors.subject}</div>
              )}
              <TextField
                className="w-full"
                id="outlined-basic"
                label="Details please! Your review helps other shoppers."
                variant="outlined"
                placeholder="What did you like or dislike? What should other shoppers know before buying?"
                multiline
                rows={4}
                name="details"
                value={formik.values.details}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.details && formik.errors.details && (
                <div className="text-red-500">{formik.errors.details}</div>
              )}
            </Box>
            {message ? (
              <p className="font-medium mt-4">Message send successfully </p>
            ) : (
              ""
            )}
            <button
              type="submit"
              onClick={formik.handleSubmit}
              className="bg-black w-full md:w-[220px] text-white px-9 py-4 mt-10 text-lg"
            >
              Submit Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
