import React from "react";
import { Link } from "react-router-dom";

const ChatForm = () => {
  return (
    <div className="flex flex-col gap-y-2 items-center w-full">
      <button className="text-[#C7D4DA] text-sm border-2 px-4 py-1 rounded-md">
        regenerate response
      </button>
      <form className="flex flex-col gap-y-4 text-[#C7D4DA] min-w-[700px] items-center">
        <label
          htmlFor="message"
          className="w-full relative rounded-md overflow-hidden"
        >
          <input
            id="message"
            type="text"
            className="bg-[#424350] w-full px-2 py-1"
          />
          <button className="absolute right-3 top-1 bottom-1">send</button>
        </label>
      </form>
      <div className="flex text-center align-middle">
        <p className="text-[#C7D4DA] text-sm">
          <span href="" className="underline text-[#C7D4DA] text-sm">
            <Link to="/">chatGPT jan 9 version.</Link>
          </span>
          &nbsp; Free research preview. our goal is to make AI systems more
          natural and safe to interect with. Your feedback will help us improve.
        </p>
      </div>
    </div>
  );
};

export default ChatForm;
