import React from "react";
import ChatForm from "../chatForm/ChatForm";
import Message from "../message/Message";

const Chat = () => {
  return (
    <div className="h-screen bg-[#373843] flex flex-col py-4 gap-y-2">
      <div className="flex rounded-md flex-grow flex-col gap-4 items-center">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="flex justify-center">
        <ChatForm />
      </div>
    </div>
  );
};

export default Chat;
