import React from "react";

const About = () => {
  const info = [
    { text: "Months experience", count: "04" },
    { text: "Completed Projects", count: "05" },
   
  ];
  return (
    <section className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About<span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-8 gap-10 px-10 max-w-5xl mx-auto">
          <div>
            <div className="text-gray-400 my-3 text-lg">
              <p className="text-justify leading-7 md:leading-8 ">
                Iam from Alappuzha, Kerala (India). I have completed my
                graduation in Bsc Computer Science from S.N College, Cherthala.
                Iam a react Front-end developer. I create responsive secure
                websites for my clients. And I create web pages with UI/UX user
                interface. Iam very passionate and dedicate to my work.
              </p>
              <div className="flex mt-14 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span>{content.text}</span>
                  </div>
                ))}
              </div>
              <a href="src\assets\libin.pdf" download>
                <button className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2 mt-14">
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
