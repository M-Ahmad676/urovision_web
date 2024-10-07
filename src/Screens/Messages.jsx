import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaUserCircle } from "react-icons/fa";
import ChatInterface from "../Components/ChatInterface";
import MobileChatInterface from "../Components/MobileChatInterface";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(0);

  const handleChat = (index) => {
    setSelectedChat(index);
  };

  const Chats = [
    { SenderName: "ObaidUllah", Messages: "Sent a report", Time: "3:14 PM", Status: "unread" },
    { SenderName: "Kamran", Messages: "Doc give me drugs ", Time: "12:14 PM", Status: "read" },
    { SenderName: "Tabish", Messages: "tschuss bis spater", Time: "11:14 AM", Status: "unread" },
    { SenderName: "Zubair", Messages: "My kidney hurts ", Time: "2:14 PM", Status: "unread" },
    { SenderName: "Kamran", Messages: "Doc give me drugs ", Time: "12:14 PM", Status: "read" },
    { SenderName: "Tabish", Messages: "How about using car filters", Time: "11:14 AM", Status: "unread" },
    { SenderName: "Zubair", Messages: "My kidney hurts ", Time: "2:14 PM", Status: "unread" },
  ];

  return (
    <div className="p-2 sm:p-5 bg-gray-50 min-h-screen">
      <Navbar label="Messages" />

      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-2 lg:px-5 ">

        {/* Recent Messages List */}
        <div className={`mt-12 flex shadow-sm shadow-gray-300 rounded-b-lg h-[80vh] ${selectedChat !== null ? "hidden lg:flex" : "block"}`}>
          
          <div className="lg:max-w-[23rem] w-full border-r border-gray-200 font-poppins">
            <div className="bg-blue-700 text-white rounded-t-lg  lg:rounded-t-none lg:rounded-tl-lg px-5 justify-start sm:justify-center min-h-[70px] flex items-center">
              <h2 className=" text-base xl:text-[1.2rem] font-medium font-poppins">Recent Messages</h2>
            </div>

            <div className="flex flex-col gap-y-2 overflow-auto max-h-[69vh] custom-scrollbar py-2">
              {Chats.map((text, index) => (
                <div
                  key={index}
                  className="flex items-center px-5 py-4 sm:py-5 gap-x-3 hover:bg-gray-100"
                  onClick={() => handleChat(index)}
                >
                  <FaUserCircle className="text-[3rem] text-blue-200" />
                  <div className="flex justify-between w-full">
                    <div>
                      <h3 className="font-medium text-[0.9rem] sm:text-base">{text.SenderName}</h3>
                      <p className="text-gray-400 text-xs">{text.Messages}</p>
                    </div>
                    <span className="text-[0.62rem]">{text.Time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Interface */}

       <ChatInterface Chats={Chats} selectedChat={selectedChat}/>   
      
        </div>

        {/* Chat Interface for Small Screens */}
        {selectedChat !== null && (

          <MobileChatInterface Chats={Chats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />  )}
      </div>
    </div>
  );
}
