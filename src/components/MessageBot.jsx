import React from "react";

const MessageBot = () => {
  return (
    <div className=" fixed bottom-5 right-4 sm-right-8 z-[999] cursor-pointer  text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
      <ion-icon name="chatbubble-ellipses"></ion-icon>
    </div>
  );
};

export default MessageBot;
