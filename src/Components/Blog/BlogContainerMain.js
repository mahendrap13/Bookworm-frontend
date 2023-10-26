import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useLocation } from "react-router-dom";

export const BlogContainerMain = () => {
  const {
    state: { data },
  } = useLocation();
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <div className="main-blog md:px-[128px] px-5 py-16">
        <div className="mainblog-img overflow-hidden">
          <img className="w-full" src={data.imgurl} alt="img" />
        </div>
        <div className="contain p-5 md:w-[78%] w-[95%]  m-auto md:-translate-y-[100px] -translate-y-[50px] bg-white md:px-[100px] md:py-[48px]">
          <p className="category text-[#F75454] text-xl">{data.category}</p>
          <p className="text-4xl title md:text-4xl text-xl font-bold md:leading-10	">
            {data.description}
          </p>
          <p className="date-main text-[grey] font-medium">{data.date}</p>
          <p className="main-des">
            <b className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, erat in malesuada aliquam, est erat faucibus purus,
              eget viverra nulla sem vitae neque. Quisque id sodales libero. In
              nec enim nisi, in ultricies quam. Sed lacinia feugiat velit,
              cursus molestie lectus mollis et.
            </b>
            <br /> <br />
            Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
            fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl
            vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices
            massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui
            mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.
            Pellentesque vitae eros eget enim mollis placerat. Aliquam non
            tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. <br />
            <br />
            Proin sed ultrices erat. Praesent varius ultrices massa at faucibus.
            Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim
            tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque
            vitae eros eget enim mollis placerat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam quis diam erat. Duis velit
            lectus, posuere a blandit sit amet, tempor at lorem. Donec
            ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel
            vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie
            massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris,
            tristique quis sapien eu, rutrum vulputate enim. Pellentesque
            sodales augue eget ultricies ultricies. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Curabitur
            sagittis ultrices condimentum.
          </p>
          <div className="main-caro my-16">
            <div className="carousel">
              <Splide
                options={{
                  arrows: false,
                  padding: 100,
                  type: "loop",
                  breakpoints: {
                    640: { padding: 0 },
                  },
                }}
              >
                <SplideSlide>
                  <div className="h-[400px] mx-[15px]">
                    <div className="h-[350px]">
                      <img
                        className="w-full h-full"
                        src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/gallery-2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="h-[400px] mx-[15px]">
                    <div className="h-[350px]">
                      <img
                        className="w-full h-full"
                        src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/gallery-3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="h-[400px] mx-[15px]">
                    <div className="h-[350px]">
                      <img
                        className="w-full h-full"
                        src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/gallery-1-1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
            diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at
            lorem. Donec ultricies, lorem sed ultrices interdum, leo metus
            luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu
            nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris
            metus mauris, tristique quis sapien eu, rutrum vulputate enim.
          </p>
        </div>
      </div>
    </>
  );
};
