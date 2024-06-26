import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[5rem] bg-[#222222] flex items-center justify-center'>
     <div className='flex items-center gap-2'>
     <h5 className='text-white text-xl'>
        &copy;{new Date().getFullYear()}
        <span className='text-[#AB7B60]'>ComfySloth</span>
      </h5>
      <h5 className='text-white text-xl'>All rights reserved</h5>
     </div>
    </footer>
  )
}

export default Footer