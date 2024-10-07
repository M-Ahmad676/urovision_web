import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../Assets/UroVision Logo.png'
import healthCareVector from '../Assets/vector1.png'
import Button1 from '../Components/Button1';
import {FaApple  } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import {  FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'
import PasswordField from '../Components/PasswordField';
import axios from 'axios'

export default function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [model, setmodel] = useState(false);

    const navigate = useNavigate()

    const handleLogin = async (e) => {

        // e.preventDefault()

        // try {
        //     const response = await axios.post('http://localhost:5000/api/auth/signin', {
        //         email: email,  // Ensure userEmail contains the correct input
        //         password: password  // Ensure userPassword contains the correct input
        //     });

        //     console.log('Login Success:', response.data);

            navigate('/Dashboard')

        // } catch (error) {
        //     console.error('Login Error:', error.response ? error.response.data : error.message);
        // }
    };

  return (
    <div className='flex items-center justify-center px-2 sm:20px md:px-16 lg:px-22 xl:px-36 bg-[#ededfc] min-h-screen font-poppins'>

      <div className='flex justify-center w-[95%] sm:h-auto sm:w-[75%] rounded-xl shadow-sm shadow-gray-500 bg-white'>

            <div className='hidden flex-1 flex-grow w-full md:flex justify-center items-center bg-gradient-to-b from-[#0d4fa9] to-[#52a9f6] rounded-l-xl '>
                <img src={healthCareVector} alt="healthcare" className='max-w-[27rem] w-full'  />
            </div>
        
        <div className="flex flex-col flex-1 flex-grow w-full max-w-[100%] md:max-w-[50%] px-3 min-[420px]:px-10 md:px-4 lg:px-7 xl:px-10 rounded-r-xl">
              
           <div className='flex justify-center sm:justify-start'>   
            <img src={logo} alt="UroVision" className='max-w-[7rem] xl:max-w-[9rem] my-5 2xl:my-2' />
            </div>

            <div className='space-y-2'>
                <div className='text-center sm:text-start'>
                <h1 className='text-[1.5rem] font-semibold'>Welcome Back !</h1>
                <p className='text-gray-400 text-[0.8rem]'>Login to access your account</p>
                </div>
                <form className='py-5'>
                    <div>
                    <label htmlFor="email" className='font-medium text-[0.8rem]'>Email <span className='text-red-500'>*</span></label>
                    <br />
                    <input type="email" name="email" className='border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md' onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div className='py-3'>
                    <label htmlFor="password"  className='font-medium text-[0.8rem]'>Password <span className='text-red-500'>*</span></label>
                    <br />
                    <PasswordField name="password" width="max-w-[30rem]" position="right-3" change={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className='flex justify-between my-3'>
                    <div className='flex items-center'>
                    <input type="checkbox" name="remember_me" className='w-[0.8rem] h-[0.8rem] lg:w-[1.1rem] lg:h-[1.1rem]' />
                    <label htmlFor="remember_me" className='font-medium pl-1 lg:pl-3 text-xs'>Remember me</label> 
                    </div>
                    <Link to="/ForgotPassword" className='text-blue-600 text-xs hover:underline hover:text-blue-700'>Forgot Password ?</Link>
                    </div>

                    <div className='w-full bg-red-300 rounded-lg text-red-600 gap-x-3 items-center p-2 hidden'>
                      <BiError className='text-[1.5rem]'/>
                      <p className='text-sm font-medium'>Invalid Credentials</p>
                    </div>

                    <div className='py-5'>
                    <Button1 label="Sign In" click={handleLogin} height="h-[2.7rem]"/>
                    </div>

                    <p className=' text-gray-500 text-xs xl:text-[0.8rem]'>Don't Have an Account ? <Link to='/SignUp'className='text-blue-600 font-medium hover:underline' > Register </Link>Here</p>
                    <br />
                    <div className='flex justify-center items-center'>
                        <div className='flex-grow border-t border-gray-300'></div>
                        <span className='mx-4 text-gray-400 text-sm font-medium'>OR</span>
                        <div className='flex-grow border-t border-gray-300'></div>
                    </div>

                    
                    <div className='flex justify-evenly py-5'>
                       
                       <button className='py-2 px-5 flex items-center text-sm font-medium border border-gray-300 gap-x-2 rounded-full hover:bg-gray-100'><FcGoogle className='text-[1.5rem]'/>Google</button>
                       <button className='py-2  px-5 flex items-center text-sm font-medium border border-gray-300 gap-x-2 rounded-full hover:bg-gray-100'><FaApple className='text-[1.5rem]'/>Apple</button>
                        
                    </div>
                     
                   
                </form>
               
            </div>
            </div>
        </div>

    </div>
  )
}
