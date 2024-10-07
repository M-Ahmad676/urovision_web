import React from 'react'

export default function Button1({label, width, click, version, height}) {

   const base = "bg-blue-600 text-white hover:bg-[#0d4fa9]"
   const varient = "bg-trasparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  
  return (
    <>
    <button className={`font-medium rounded-md ${width} ${height} w-full text-sm  ${version === "varient" ? varient : base } `} onClick={click}>{label}</button>
    </>
  )
}
