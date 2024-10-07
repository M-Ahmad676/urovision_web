import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import healthCareVector from '../Assets/vector1.png'
import Button1 from '../Components/Button1';
import { BiError } from "react-icons/bi";
import {Link} from 'react-router-dom'
import PasswordField from '../Components/PasswordField';

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className="flex items-center px-2 xl:px-36 bg-[#ededfc] min-h-screen font-poppins">
      <div className="flex justify-center w-[95%] sm:h-auto sm:w-[75%] m-auto rounded-xl shadow-sm shadow-gray-500 bg-white">
        <div className="hidden flex-1 flex-grow w-full md:flex justify-center items-center bg-gradient-to-b from-[#0d4fa9] to-[#52a9f6] rounded-l-xl ">
          <img
            src={healthCareVector}
            alt="healthcare"
            className="max-w-[27rem] w-full"
          />
        </div>

        <div className="flex flex-col flex-1 flex-grow w-full max-w-[100%] md:max-w-[50%] px-3 min-[420px]:px-10 md:px-4 lg:px-7 xl:px-10 rounded-r-xl">
          <div className='py-5'>
            <div className="text-center sm:text-start space-y-1">
              <h1 className="text-[1.3rem] sm:text-[1.5rem] font-semibold font-poppins">Create an <span className='text-blue-500'>Account</span></h1>
              <p className=" text-gray-500 text-xs xl:text-[0.8rem]">
                Already have an Account ?{" "}
                <Link
                  to="/"
                  className="text-blue-600 font-medium hover:underline"
                >
                  {" "}
                  Login{" "}
                </Link>
              </p>
            </div>
            <form className="pt-5 space-y-3">

            <div>
                <label htmlFor="Name" className="font-medium text-[0.8rem]">
                  Name <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="Name"
                  className="border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="DateOfBirth" className="font-medium text-[0.8rem]">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="date"
                  name="Name"
                  className="border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className='flex gap-x-5 py-3'>
                 <label htmlFor='Gender' className='font-medium text-[0.85rem]'>Gender <span className="text-red-500">*</span></label>
                 <div className='flex items-center gap-x-2'>
                 <input type="radio" name="Gender"/>
                 <label htmlFor="male" className='text-sm'>Male</label>
                 </div>
                 <div className='flex items-center gap-x-2'>
                 <input type="radio" name="Gender"/>
                 <label htmlFor="Female" className='text-sm'>Female</label> 
                 </div>
              </div>
             
             
              <div>
                <label htmlFor="cnic" className="font-medium text-[0.8rem]">
                  CNIC No <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="number"
                  name="cnic"
                  className="border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="font-medium text-[0.8rem]">
                  Email <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  className="border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="font-medium text-[0.8rem]">
                  Password <span className="text-red-500">*</span>
                </label>
                <br />
                <PasswordField
                  name="password"
                  width="max-w-[30rem]"
                  position="right-3"
                  change={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="w-full bg-red-300 rounded-lg text-red-600 gap-x-3 items-center p-2 hidden">
                <BiError className="text-[1.5rem]" />
                <p className="text-sm font-medium">Invalid Credentials</p>
              </div>

              <div className="pt-5">
                <Button1
                  label="Register"
                  height="h-[2.7rem]"
                  width="max-w-[30rem]"
                />
              </div>  
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
