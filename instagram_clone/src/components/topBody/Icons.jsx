import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { BiMessageSquareX } from "react-icons/bi";
import { IoIosCompass } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import Mlogo from '../../assets/m_logo.png'

function Icons() {
  return (
    <div className='icons'>
      <GoHomeFill/>
      <FaFacebookMessenger/>
      <BiMessageSquareX/>
      <IoIosCompass/>
      <FaRegHeart/>
      <img src={Mlogo} className='m-icon' alt="" />
    </div>
  )
}

export default Icons
