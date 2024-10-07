import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Button1 from "../Components/Button1";

export default function RegisterForm1({handleNext}) {

  const [formData, setFormData] = useState({
     
    firstName:"",
    lastName:"",
    gender:"",
    dateOfBirth:"",
    phoneNo:""

  })

  const [error, setError] = useState(null)


  const handleChange = (e) => {
       setFormData({

        ...formData,[e.target.name]:e.target.value
       })
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
  
    console.log("Form Data to send:", JSON.stringify(formData));
  
    try {
      const response = await fetch('http://localhost:5000/register/step1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  // Sending formData
      });
  
      if (!response.ok) {
        const errorText = await response.text(); // Log the actual error from server
        console.log("Error details from server:", errorText);
        throw new Error("Failed to Submit Form");
      }
  
      const result = await response.json();
      console.log(result);
      handleNext(2)
    } catch (error) {
      console.error("Error while submission: " + error);
      setError("Failed to submit form. Try again.");
    }
  };
  


  return (
    <>
       <form action="/" className="pt-5 flex-1 flex-shrink" onSubmit={handleSubmit}>
  <div className="space-y-3">
    <div className="space-y-2">
      <label htmlFor="firstName" className="font-medium text-[0.7rem] lg:text-[0.8rem]">
        First Name
      </label>
      <br />
      <input
        type="text"
        name="firstName"  // Match the name with state
        className={`border text-sm border-gray-400 p-3 w-full rounded-md `}
        required
        onChange={handleChange}
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="lastName" className="font-medium text-[0.7rem] lg:text-[0.8rem]">
        Last Name
      </label>
      <br />
      <input
        type="text"
        name="lastName"  // Match the name with state
        className={`border text-sm border-gray-400 p-3 w-full rounded-md `}
        required
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="gender" className="font-medium text-[0.7rem] lg:text-[0.8rem]">
        Gender
      </label>
      <div className="pt-4">
        <input
          type="radio"
          name="gender"  // Match the name with state
          value="Male"
          onChange={handleChange}
        />
        <label htmlFor="male" className="mr-10 ml-2 text-[0.7rem] lg:text-[0.8rem]">Male</label>
        <input
          type="radio"
          name="gender"  // Match the name with state
          value="Female"
          onChange={handleChange}
        />
        <label htmlFor="Female" className="ml-2 text-[0.7rem] lg:text-[0.8rem]">Female</label>
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="dateOfBirth" className="font-medium text-[0.7rem] lg:text-[0.8rem]">
        Date of Birth
      </label>
      <br />
      <input
        type="date"
        name="dateOfBirth"  // Match the name with state
        className="border border-gray-400 text-xs lg:text-sm p-3 rounded-md w-full"
        required
        onChange={handleChange}
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="phoneNo" className="font-medium text-[0.7rem] lg:text-[0.8rem]">
        Phone No
      </label>
      <br />
      <input
        type="number"
        name="phoneNo"  // Match the name with state
        className="border border-gray-400 text-xs lg:text-sm p-3 w-full rounded-md"
        required
        onChange={handleChange}
      />
    </div>

    <div className="pt-4">
      <Button1 label="Next" height="h-[2.7rem]" />
    </div>
     
     {error && <p className='text-xs text-red-500'>{error}</p>}

    <p className="font-medium text-gray-400 text-xs lg:text-[0.8rem] py-5">
      Already Have an Account{" "}
      <Link to="/" className="underline text-blue-500">Log in</Link>
    </p>
  </div>
</form>
    </>
  )
}
