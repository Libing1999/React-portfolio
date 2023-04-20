import React from "react";
import Content from "../../data/skillcontent.json";
const Skill = (data) => {
  return (
    <section className="py-10 bg-gray-800 max-w-7xl mx-auto relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My
          <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
        <div>
          <div className="flex items-center justify-center mt-12 flex-wrap  gap-x-40 gap-y-10 ">
            {Content.map((item) => (
              <a href={item.link}>
                <div className="border-2 border-cyan-600 relative  min-w-40 max-w-64 bg-black p-10 rounded-xl">
                  <div
                    style={{
                      background:
                        "conic-gradient(rgb(8,145,170) 86%, #ddd 86%)",
                    }}
                    className="w-32 h-32  flex items-center justify-center rounded-full  "
                  >
                    <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex  items-center justify-center hover:text-cyan-600">
                      <ion-icon name={item.name}></ion-icon>
                    </div>
                  </div>
                  <p className="text-xl mt-10 hover:text-cyan-600">
                    {item.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
