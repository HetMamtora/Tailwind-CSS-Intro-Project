import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12'>
      <ul className='flex gap-6 font-lato text-white'>
        <li>
          <a href='#' className='flex gap-2 bg-black rounded-md px-2 py-2 w-32 justify-center'><p className='pb-1 mt-1'><FaGithub className='text-white'/></p>GitHub</a>
        </li>
        <li>
          <a href='#' className='flex gap-2 bg-blue-900 rounded-md px-2 py-2 w-32 justify-center'><p className='pb-1 mt-1'><FaLinkedin className='text-white'/></p>LinkedIn</a>
        </li>
        <li>
          <a href='#' className='flex gap-2 bg-black rounded-md px-2 py-2 w-32 justify-center'><p className='pb-1 mt-1'><FaXTwitter /></p>Twitter</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src="./assets/Help-Avatar.svg"alt='help'/>
        <div>
          <p className='font-playfair font-thin'>Have any questions ?</p>
          <a href='#' className='font-lato font-medium'>Talk to a Specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer