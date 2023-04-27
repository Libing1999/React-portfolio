import React from "react";
import libincv from "../../assets/images/libincv.jpg";
import cv from "../../assets/pdf/cv.pdf";

const Resume = () => {
  return (
    <section className="py-10 text-white max-w-3xl mx-auto ">
      <div className="text-center sm:mt-12 mt-8">
        <h3 className="text-4xl font-semibold">
          My<span className="text-cyan-600">Resume</span>
        </h3>
        <div className="mt-4">
          <a href={cv} download="cv" className="text-gray-400 hover:text-white">
            Download
          </a>
        </div>
      </div>
      <div className="mt-12 sm:mt-24 m-2 sm:m-0">
        <img className=" rounded-2xl" src={libincv} alt="" />
      </div>
    </section>
  );
};

export default Resume;
