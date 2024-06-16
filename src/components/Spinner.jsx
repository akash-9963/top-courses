import React from 'react'
import './Spinner.css'
function Spinner() {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className="spinner1"></div>
        <p className='text-bgDark text-lg font-semibold'>Loading.....</p>
    </div>
  )
}

export default Spinner