import React from "react";

const Skill = () => {
  
  return (
    <section className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My
          <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
        <div>
           
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            <a href="https://en.wikipedia.org/wiki/HTML5">
          <div className="border-2 border-cyan-600 relative  min-w-[10rem] max-w-[16rem] bg-black p-10 rounded-xl">
          <div style={{ background: 'conic-gradient(rgb(8,145,170) 86%, #ddd 86%)'
          
          }} className="w-32 h-32  flex items-center justify-center rounded-full ">
            <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
              <ion-icon name="logo-html5"></ion-icon>
            </div>
          </div>
          <p className="text-xl mt-10 hover:text-cyan-600">Advance</p>
        </div>
        </a>
<a href="https://www.tutorialrepublic.com/css-tutorial/">
        <div className="border-2 border-cyan-600 relative  min-w-[10rem] max-w-[16rem] bg-black p-10 rounded-xl">
          <div style={{ background: 'conic-gradient(rgb(8,145,170) 95%, #ddd 95%)'
          
          }} className="w-32 h-32  flex items-center justify-center rounded-full ">
            <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
            <ion-icon name="logo-css3"></ion-icon>
            </div>
          </div>
          <p className="text-xl mt-10 hover:text-cyan-600">Expect</p>
        </div>
        </a>
        <a href="https://www.javascript.com/">
        <div className="border-2 border-cyan-600 relative  min-w-[10rem] max-w-[16rem] bg-black p-10 rounded-xl">
          <div style={{ background: 'conic-gradient(rgb(8,145,170) 75%, #ddd 75%)'
          
          }} className="w-32 h-32  flex items-center justify-center rounded-full ">
            <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
            <ion-icon name="logo-javascript"></ion-icon>
            </div>
          </div>
          <p className="text-xl mt-10 hover:text-cyan-600">Advance</p>
        </div>
        </a>
        </div>
        



        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            <a href="https://reactjs.org/">
        <div className="border-2 border-cyan-600 relative  min-w-[10rem] max-w-[16rem] bg-black p-10 rounded-xl">
          <div style={{ background: 'conic-gradient(rgb(8,145,170) 65%, #ddd 65%)'
          
          }} className="w-32 h-32  flex items-center justify-center rounded-full ">
            <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
            <ion-icon name="logo-react"></ion-icon>
            </div>
          </div>
          <p className="text-xl mt-10 hover:text-cyan-600">Advance</p>
        </div>
        </a>
        <a href="https://www.figma.com/">
        <div className="border-2 border-cyan-600 relative  min-w-[10rem] max-w-[16rem] bg-black p-10 rounded-xl">
          <div style={{ background: 'conic-gradient(rgb(8,145,170) 25%, #ddd 25%)'
          
          }} className="w-32 h-32  flex items-center justify-center rounded-full ">
            <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
            <ion-icon name="logo-figma"></ion-icon>
            </div>
          </div>
          <p className="text-xl mt-10 hover:text-cyan-600">Beginner</p>
        </div>
        </a>
        <a href="https://docs.github.com/en/get-started/quickstart/hello-world">
        <div className="border-2 border-cyan-600 relative  min-w-[10rem] max-w-[16rem] bg-black p-10 rounded-xl">
          <div style={{ background: 'conic-gradient(rgb(8,145,170) 55%, #ddd 55%)'
          
          }} className="w-32 h-32  flex items-center justify-center rounded-full ">
            <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
            <ion-icon name="logo-github"></ion-icon>
            </div>
          </div>
          <p className="text-xl mt-10 hover:text-cyan-600">Intermediate</p>
        </div>
        </a>
        
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
