import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "../../data/projectcontent.json";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  return (
    <section className="py-10 mt-5 text-white  max-w-7xl mx-auto">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl mt-12 px-5 mx-auto items-center relative flex-wrap">
        <div className="lg:w-3/3 w-full ">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
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
            {Data.map((item) => (
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={item.image} alt="" className="rounded-lg md:h-60" />
                  <h3 className="md:text-xl text-sm my-4">{item.title}</h3>
                  <div className="flex gap-3">
                    <a
                      href={item.codelink}
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={item.demolink}
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
