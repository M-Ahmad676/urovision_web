import React from "react";
import Navbar from "../Components/Navbar";
import { IoChatboxSharp } from "react-icons/io5";
import { FaUserInjured } from "react-icons/fa6";
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

export default function DashBoard() {
  const data = [
    {
      name: "M.wajahat Imram",
      purpose: "Medical CheckUp",
      time: "11:30pm",
    },

    {
      name: "Obaidullah",
      purpose: "Report Discussion",
      time: "12:00pm",
    },

    {
      name: "Tabish Khizer",
      purpose: "Medical CheckUp",
      time: "12:30pm",
    },

    {
      name: "Asad Ejaz",
      purpose: "Medical CheckUp",
      time: "01:30pm",
    },
  ];

  const status_data = [
    {
      icon: <FaRegCalendarTimes />,
      label: "Cancelled Appointments",
      Number: 2,
    },

    {
      icon: <FaUserInjured />,
      label: "Total Patients",
      Number: 30,
    },

    {
      icon: <FaCalendarAlt />,
      label: "Pending Appointments",
      Number: 5,
    },

    {
      icon: <BsCalendar2CheckFill />,
      label: "Total Consultations",
      Number: 20,
    },
  ];

  return (
    <div className="p-2 sm:p-5 bg-gray-50 min-h-screen">

    <Navbar label="DashBoard" />

      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-2 lg:px-5 font-poppins">
       
        {/*DashBoard */}

        <div className="my-7 p-5 sm:p-10 bg-gradient-to-r from-[#0d4fa9] to-[#52a9f6] text-white space-y-5 rounded-lg">
          <h2 className="text-[1.6rem] font-semibold">Welcome Dr.David</h2>
          <p className="font-medium text-sm">
            Your Patients are waiting for You. lets get started
          </p>
        </div>

        <div>
          <h2 className="text-[1.1rem] xl:text-[1.3rem] font-semibold">
            Quick Status
          </h2>
          <div className="flex flex-wrap justify-center gap-5 py-5 w-full">
            {status_data.map((data, index) => (
              <div
                key={index}
                className="bg-white flex items-center justify-around w-full min-[440px]:gap-x-3 shadow-sm shadow-gray-400 p-3 xl:p-5 rounded-xl flex-1 max-w-[100%] min-[440px]:max-w-[17rem] min-w-[12rem] 2xl:max-w-full"
              >
                <div className="text-blue-600 text-[1.9rem] xl:text-[2.2rem]">
                  {data.icon}
                </div>
                <div className="text-center w-full max-w-[12rem]">
                  <p className="font-medium text-[0.8rem] xl:text-[0.9rem] text-gray-500">
                    {data.label}
                  </p>
                  <h1 className="text-[1.6rem] xl:text-[1.8rem] text-blue-600 font-semibold">
                    {data.Number}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between flex-col min-[1070px]:flex-row items-start gap-x-7 min-h-[30rem] mt-0 lg:mt-10">

            <div className=" max-w-[100%] min-[1070px]:max-w-[50%] w-full flex-grow flex-1 mt-7 lg:mt-0">
              <h2 className="text-[1.1rem] xl:text-[1.3rem] font-semibold mb-5 sm:mb-8">
                Upcomming Appointments
              </h2>
              <div className="space-y-4 sm:space-y-8">
                {data.map((appointment, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer justify-between bg-white rounded-lg p-3 shadow-sm shadow-gray-400 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-x-4">
                      <FaUserCircle className="text-blue-600 text-[2.4rem] " />
                      <div className="space-y-2">
                        <h3 className="text-sm xl:text-[1rem] font-medium">
                          {appointment.name}
                        </h3>
                        <p className="text-[0.8rem] font-medium text-gray-400">
                          {appointment.purpose}
                        </p>
                      </div>
                    </div>

                    <div className="px-2 py-1 min-[440px]:p-2 bg-blue-600 rounded-full">
                      <p className="text-xs xl:text-sm font-medium text-white">
                        {appointment.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-[100%] min-[1070px]:max-w-[50%] w-full flex-grow flex-1 mt-10 min-[1070px]:mt-0">
              <h2 className="text-[1.1rem] xl:text-[1.3rem] font-semibold mb-5 sm:mb-8">
                Next Patient Details
              </h2>

              <div className="px-2 py-4 sm:p-5 bg-white shadow-sm shadow-gray-400 rounded-lg">
                <div className="flex justify-between">
                  <div className="flex gap-x-3 items-center">
                    <FaUserCircle className="text-blue-600 text-[2.5rem]" />
                    <h3 className="text-[1rem] xl:text-[1.1rem] font-medium">
                      Ilyas Ahmad
                    </h3>
                  </div>
                  <div className="text-end">
                    <h4 className="font-medium text-[0.8rem] xl:text-sm">
                      Last Appointment
                    </h4>
                    <p className="text-red-600 text-[0.8rem] xl:text-sm">
                      12-Dec-2024
                    </p>
                  </div>
                </div>

                <div className=" py-7 flex justify-between gap-x-3">
                  <div className="text-center space-y-2">
                    <h4 className="text-[0.8rem] xl:text-sm font-medium">
                      Date of Birth
                    </h4>
                    <p className="text-blue-500 text-[0.7rem] xl:text-sm">
                      12-Nov-1999
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="text-[0.8rem] xl:text-sm font-medium">
                      Weight
                    </h4>
                    <p className="text-blue-500 text-[0.7rem] xl:text-sm">
                      60kg
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="text-[0.8rem] xl:text-sm font-medium">
                      Gender
                    </h4>
                    <p className="text-blue-500 text-[0.7rem] xl:text-sm">
                      Male
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="text-[0.8rem] xl:text-sm font-medium">
                      Appointment Date
                    </h4>
                    <p className="text-blue-500 text-[0.7rem] xl:text-sm">
                      09-Dec-2024
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-3 justify-center min-[440px]:justify-end">
                  <button className="border border-blue-500 flex items-center w-full min-[440px]:max-w-[10rem] py-2 justify-center font-medium text-sm rounded-lg gap-x-2 text-blue-600 hover:bg-blue-600 hover:text-white">
                    <IoDocumentTextSharp />
                    Documents
                  </button>
                  <button className="bg-blue-600 flex items-center w-full min-[440px]:max-w-[10rem] py-2 justify-center text-sm font-medium rounded-lg gap-x-2 text-white hover:bg-blue-700">
                    <IoChatboxSharp />
                    Message
                  </button>
                </div>
              </div>

              <div className="pt-10 lg:pt-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-[1.1rem] xl:text-[1.3rem] font-semibold">
                    Appointment Request
                  </h2>
                  <a
                    href="/"
                    className="text-blue-600 font-medium text-xs sm:text-sm hover:underline"
                  >
                    See All
                  </a>
                </div>
                <div className="my-5 sm:my-8">
                  <div className="flex items-center justify-between bg-white rounded-lg  px-2 py-4 lg:p-3 shadow-sm shadow-gray-400">
                    
                    <div className="flex items-center gap-x-4">
                      <FaUserCircle className="text-blue-600 text-[2.4rem] " />

                      <div className="space-y-2">
                        <h3 className="text-sm xl:text-[1rem] font-medium">
                          Shahreyar Sabir
                        </h3>
                        <p className="text-[0.8rem] font-medium text-gray-400">
                          Consultation
                        </p>
                      </div>
                    </div>
                   
                   <div className="flex gap-x-10 flex-col min-[440px]:flex-row lg:flex-col xl:flex-row items-center gap-y-3">
                    <div className="block min-h-[1070px]:hidden xl:block px-2 py-1 bg-blue-600 rounded-full">
                      <p className="text-[0.7rem] font-medium text-white">
                        12/09/2024 - 2PM
                      </p>
                    </div>

                    <div className="flex text-[1.5rem] gap-x-5">
                      <FaRegCheckCircle className="text-green-500 cursor-pointer" />

                      <FaRegTimesCircle className="text-red-600 cursor-pointer" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
