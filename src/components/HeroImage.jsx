import React from "react";
import hero4 from "../assets/images/hero4.jpg";
const HeroImage = () => {
  const socialMedia = ["logo-instagram", "logo-facebook", "logo-linkedin"];

  return (
    <section className="min-h-screen flex py-10 md:flex-row flex-col items-center ">
      <div className="flex-1 flex items-center justify-center h-full mt-16">
        <img
          src={hero4}
          alt="Hero_image"
          className="md:w-8/12 h-full object-cover rounded-full heroImag"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center ">
          <h1 className="md:text-5xl text-2xl md:leading-normal  leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span className=" animate-pulse">Libin George</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal  leading-5 mt-2 font-bold text-gray-500">
            Frontend Developer
          </h4>
          <button className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2 mt-10">
            Contact Us
          </button>
          
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-4">
            <a href="https://www.linkedin.com/in/libin-george-b0b452259">
            {socialMedia?.map((icon) => (
              <div key={icon} className="text-gray-600 hover:text-white">
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
