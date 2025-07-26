import React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const ChatbotButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-2xl
                 flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300
                 animate-pulse hover:animate-none active:animate-ripple mr-[70px]"
    >
      <IoChatbubbleEllipsesOutline size={30} />
    </button>
  );
};

export default ChatbotButton;

//https://app.chatling.ai/register/?utm_source=chatling_blog&utm_medium=article&utm_campaign=free-chatbot-for-website
//https://botpenguin.com/
//https://tinychat.ai/