import React from 'react'

export default function ToggleSwitch() {
  return (
    <label className='w-10 h-5 relative cursor-pointer block'>
      <input type="checkbox" className='sr-only peer'/>
      <div className='bg-gray-200 peer-checked:bg-blue-500 w-full h-full rounded-full transition-all duration-300'></div>
      <span className='w-3 h-3 bg-white rounded-full absolute top-1 left-1 transition-all duration-300 peer-checked:left-6'></span>
    </label>
  )
}
