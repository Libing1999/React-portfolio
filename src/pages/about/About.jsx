import React from "react";
const About = () => {
  return (
    <section className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About<span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row justify-center flex-col-reverse items-center md:gap-8 gap-10 px-10   mx-auto">
          <div>
            <div className="text-gray-400 max-w-2xl  my-3 text-lg">
              <p className="text-justify  leading-7 md:leading-8 ">
                I'm from Alleppey, Kerala (India). I have completed my
                graduation in Bsc Computer Science from S.N College, Cherthala.
                Iam a Passionate Front-end developer and using various
                Javascript framework. Now, I'm currently working at Streben
                Technik. I create responsive secure websites for my clients. And
                I create web pages with UI/UX user interface. I'm very
                passionate and dedicate to my work.              
              </p>
              </div>
              <p className="pt-6 pr-60 text-gray-400"> Mail me @{" "}
                <a href="https://mail.google.com/" className="text-gray-400 hover:text-white">libing8490@gmail.com</a></p>
              <div className="flex justify-center sm:hidden">
                <a href="/assets/pdf/cv.pdf" download="cv.pdf">
                  <button className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex  items-center gap-2 mt-14">
                    Download CV
                  </button>
                </a>
              </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
