import React from "react";
import hero4 from "../../assets/images/hero4.jpg";
import Slide from "react-reveal/Slide";

const HeroImage = () => {
  const socialMedia = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/li_bin_liby/?igshid=YmMyMTA2M2Y%3D",
      icon: "logo-instagram",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/libin.george.587/",
      icon: "logo-facebook",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/libin-george-b0b452259/",
      icon: "logo-linkedin",
    },
  ];
  return (
    <section className=" md:mt-28 max-w-7xl mx-auto flex  md:flex-row flex-col items-center ">
      <div className="flex-1 flex items-center justify-center  mt-16 ">
        <img
          src={hero4}
          alt="Hero_image"
          className="md:w-8/12 h-full object-cover rounded-full heroImag"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center ">
          <Slide left>
            <h1 className="md:text-5xl md:mt-0 mt-4 text-2xl md:leading-normal  leading-10 text-white font-bold">
              <span className="text-cyan-600 md:text-6xl text-5xl">
                Hello!
                <br />
              </span>{" "}
            </h1>{" "}
          </Slide>
          <Slide right>
            {" "}
            <h1 className="md:text-5xl text-2xl md:leading-normal  leading-10 text-white font-bold">
              My Name is Libin George{" "}
            </h1>{" "}
          </Slide>

          <h4 className="md:text-2xl text-lg md:leading-normal  leading-5 mt-2 font-bold text-gray-500">
            <span role="img" aria-label="tiger">
              💡
            </span>{" "}
            Developer |{" "}
            <span role="img" aria-label="tiger">
              🎨
            </span>{" "}
            Designer |
             <span role="img" aria-label="tiger">
              💤
            </span>{" "} Dreamer
          </h4>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-4">
            {socialMedia?.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-white"
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
