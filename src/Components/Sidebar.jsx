import React, { useState } from 'react';
import { FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { SiDatabricks } from "react-icons/si";
import { TbLogout } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';



const SideBar = ({ onSideOpen }) => {

  const routes = [
    { href: "/", name: "Home", icon: <GiElectric size={25} className='bg-transparent' /> },
    { href: "/users", name: "Users", icon: <FaUsers size={25} className='bg-transparent' /> },
    { href: "/posts", name: "Posts", icon: <SiDatabricks size={25} className='bg-transparent' /> },
    { href: "/activity", name: "Activity", icon: <LuMessagesSquare size={25} className='bg-transparent' /> },
    { href: "/profile", name: "Profile", icon: <FaRegUser size={25} className='bg-transparent' /> },
    { href: "/logout", name: "Logout", icon: <TbLogout size={25} className='bg-transparent' /> },
  ]

  const [sideOpen, setSideOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  const handlesideopen = () => {
    setSideOpen(!sideOpen)
    onSideOpen(!sideOpen)
  }

  return (
    <div className='w-full h-full bg-[#363164] rounded-[30px] flex flex-col justify-between items-center pb-5 pt-5 '>
      <div className="w-[50px] h-[50px] rounded-full bg-[#0f59fc] ">

      </div>
      <div className="flex flex-col gap-3 bg-[#363164] w-full pl-5 pt-4 pb-4">
        {routes.map((route) => (
          <Link to={route.href} className={`${pathname === route.href && 'routeactive'} route relative text-white flex flex-row gap-2`} >
            <div className={`flex flex-row items-center justify-center gap-2 ${pathname === route.href && "bg-[#6e53de] p-[9px]  rounded-full w-full"} ${sideOpen && "bg-[#363164]"}`}>
              <div className={`${pathname === route.href ? "bg-transparent" : "bg-[#363164]"}`}>{route.icon}</div>
              {sideOpen &&
                <span className={`${pathname === route.href ? "bg-transparent" : "bg-[#363164]"}`}>{route.name}</span>
              }
            </div>
          </Link>
        ))}
      </div>
      <div className="w-[50px] h-[50px] rounded-full bg-[#ff1b6d] text-white flex items-center justify-center cursor-pointer" onClick={handlesideopen}>
        {sideOpen ?
          <IoIosArrowBack className='text-white bg-[#ff1b6d] font-extrabold' />
          :
          <IoIosArrowForward className='text-white bg-[#ff1b6d] font-extrabold' />
        }
      </div>
    </div>
  )
}

export default SideBar