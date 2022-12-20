import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import project1 from "../assets/images/project1.jpg";
import project3 from "../assets/images/project3.gif";
import project5 from "../assets/images/project5.webp";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  return (
    <section className="py-10 mt-5 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl mt-12 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={2.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={project1} alt="" className="rounded-lg" />
                <h3 className="text-xl my-4">Country Guide App</h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Libing1999/Country-Guide-App.git"
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                  <a
                    href="https://libin-country-info.netlify.app"
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={project3} alt="" className="rounded-lg" />
                <h3 className="text-xl my-4">Weather App</h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Libing1999/Weather-app.git"
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    {" "}
                    Github{" "}
                  </a>
                  <a
                    href="https://github.com/Libing1999/Form-validation-Javascript.git"
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={project5} alt="" className="rounded-lg" />
                <h3 className="text-xl my-4">Tech Serve Website</h3>
                <div className="flex gap-3">
                  <a
                    href=" "
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    {" "}
                    Github{" "}
                  </a>
                  <a
                    href=" "
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <img src="" className="h-96 w-80 ml-48" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
