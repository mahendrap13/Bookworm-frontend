import React, { useEffect } from "react";
import "./Css/carousel.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import caroImg from "../Images/block-hero-carousel-1 (1).png";
import caroImg1 from "../Images/caros (1).png";
import caroImg2 from "../Images/caros (2).png";
import AOS from "aos";
import "aos/dist/aos.css";
export const CarousalHome = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="carousal md:px-32 px-5">
        <div className="carousel-in h-auto">
          <Splide
            options={{
              arrows: false,
              type: "Loop",
              // autoplay: true,
              pauseOnHover: false,
            }}
          >
            <SplideSlide>
              <div className="carousel-con md:h-[69vh] h-auto flex flex-col-reverse md:flex md:flex-row  gap-10	pt-5 md:items-center">
                <div className="carousel-left w-full md:w-[60%] md:flex md:flex-col md:gap-5  leading-tight ">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="md:text-start text-center"
                  >
                    <p className="text-[#BEB4B4] md:text-[16px] md:mb-5 text-sm font-bold">
                      THE BOOKWORM EDITORS'
                    </p>
                    <p className="font-normal md:text-[60px] md:mb-5 text-2xl">
                      Featured Books of the
                    </p>
                    <p className="font-bold md:text-[3.5rem] text-3xl mb-5">
                      February
                    </p>
                  </div>
                  <button
                    className="bg-[black] w-full md:w-[200px] text-[white] text-[2xl] md:py-[17px] py-3 px-8 md:px-12"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    See More
                  </button>
                </div>
                <div
                  className="carousel-right md:h-auto h-[250px] md:w-[40%] md:mt-0 mt-10 flex flex-col items-center md:justify-end justify-center"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <div className="img w-full">
                    <img className="w-full h-full" src={caroImg} alt="Caro" />
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="carousel-con md:h-[69vh] h-auto mb-7  flex flex-col-reverse md:flex md:flex-row  gap-10	pt-5 md:items-center">
                <div className="carousel-left w-full md:w-[60%] md:flex md:flex-col md:gap-5  leading-tight ">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="md:text-start text-center"
                  >
                    <p className="text-[#BEB4B4] md:text-[16px] md:mb-5 text-sm font-bold">
                      THE BOOKWORM EDITORS'
                    </p>
                    <p className="font-normal md:text-[60px] md:mb-5 text-2xl">
                      Featured Books of the
                    </p>
                    <p className="font-bold md:text-[3.5rem] text-3xl mb-5">
                      February
                    </p>
                  </div>
                  <button
                    className="bg-[black] w-full md:w-[200px] text-[white] text-[2xl] md:py-[17px] py-3 px-8 md:px-12"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    See More
                  </button>
                </div>
                <div
                  className="carousel-right md:h-auto h-[250px] md:w-[40%] md:mt-0 mt-10  flex flex-col items-center justify-end"
                  data-aos="fade-left"
                >
                  <div className="img w-full h-full ">
                    <img
                      className="w-full h-full object-contain"
                      src={caroImg1}
                      alt="Caro"
                    />
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="carousel-con md:h-[69vh] h-auto flex flex-col-reverse md:flex md:flex-row  gap-10	pt-5 md:items-center">
                <div className="carousel-left w-full md:w-[60%] md:flex md:flex-col md:gap-5  leading-tight ">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="md:text-start text-center"
                  >
                    <p className="text-[#BEB4B4] md:text-[16px] md:mb-5 text-sm font-bold">
                      THE BOOKWORM EDITORS'
                    </p>
                    <p className="font-normal md:text-[60px] md:mb-5 text-2xl">
                      Featured Books of the
                    </p>
                    <p className="font-bold md:text-[3.5rem] text-3xl mb-5">
                      February
                    </p>
                  </div>
                  <button
                    className="bg-[black] w-full md:w-[200px] text-[white] text-[2xl] md:py-[17px] py-3 px-8 md:px-12"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    See More
                  </button>
                </div>
                <div
                  className="carousel-right md:h-auto h-[250px] md:w-[40%] md:mt-0 mt-10 flex flex-col items-center justify-end"
                  data-aos="fade-left"
                >
                  <div className="img w-full h-full">
                    <img className="w-full h-full" src={caroImg2} alt="Caro" />
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="carousel-con md:h-[69vh] h-auto flex flex-col-reverse md:flex md:flex-row  gap-10	pt-5 md:items-center">
                <div className="carousel-left w-full md:w-[60%] md:flex md:flex-col md:gap-5  leading-tight ">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="md:text-start text-center"
                  >
                    <p className="text-[#BEB4B4] md:text-[16px] md:mb-5 text-sm font-bold">
                      THE BOOKWORM EDITORS'
                    </p>
                    <p className="font-normal md:text-[60px] md:mb-5 text-2xl">
                      Featured Books of the
                    </p>
                    <p className="font-bold md:text-[3.5rem] text-3xl mb-5">
                      February
                    </p>
                  </div>
                  <button
                    className="bg-[black] w-full md:w-[200px] text-[white] text-[2xl] md:py-[17px] py-3 px-8 md:px-12"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    See More
                  </button>
                </div>
                <div
                  className="carousel-right md:h-auto h-[250px] md:w-[40%] md:mt-0 mt-10 flex flex-col items-center justify-end"
                  data-aos="fade-left"
                >
                  <div className="img w-full">
                    <img className="w-full h-full" src={caroImg} alt="Caro" />
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
};
