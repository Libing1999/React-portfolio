import React from "react";

const Contact = () => {
  return (
    <section className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5 ">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your message" rows={10}></textarea>
            <button className="bg-cyan-600 w-fit font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2 mt-10">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            <div className="flex gap-4 w-full items-center">
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ion-icon name="mail"></ion-icon>
              </div>
              <p>libing8490@gmail.com</p>
            </div>
            <div className="flex gap-4 w-full items-center">
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </div>
              <p>+91-8089528490</p>
            </div>
            <div className="flex gap-4 w-full items-center">
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ion-icon name="location"></ion-icon>
              </div>
              <p>Alappuzha, Kerala, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
