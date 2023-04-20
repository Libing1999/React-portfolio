import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    
    <nav
      className={` md:bg-red-400 fixed  left-0 top-0 z-[999]  ${
        sticky ? "md:bg-white/60 text-white" : "text-white "
      }`}
    >
      <div className="flex items-center justify-between ">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            L<span className="text-cyan-600">i</span>b
            <span className="text-cyan-600">i</span>n
          </h4>
        </div>
        <div
          className={`${
            sticky ? "md:bg-white bg-white" : "bg-white"
          }text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 text-gray-900 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5 `}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden  text-gray-900 absolute w-1/4 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          } `}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg mt-[-10rem]">
            {menuLinks?.map((menu, i) => (
              <li key={i}>
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  
  
   
  );
};

export default NavBar;