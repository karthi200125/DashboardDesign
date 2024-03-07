import './SideBar.scss'

import React, { useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { SiDatabricks } from "react-icons/si";
import { TbLogout } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';


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
        <div className='sidebar'>
            <div className='stop'>
                <div className="logocon ">
                    <img src={logo} alt="" />
                </div>
                {sideOpen &&
                    <h1>InfoNest</h1>
                }
            </div>
            <div className="smid">
                {routes.map((route) => (
                    <Link to={route.href} key={route.href} className={`${pathname === route.href && 'routeactive'} route`} >
                        <div className={`roundcon ${pathname === route.href && "roundconactive"} ${sideOpen && "bg-[#363164]"}`} style={{ background: sideOpen && "" }}>
                            <div style={{ backgroundColor: pathname === route.href ? "transparent" : "#363164" }} >{route.icon}</div>
                            {sideOpen &&
                                <span style={{ backgroundColor: pathname === route.href ? "transparent" : "#363164" }}>{route.name}</span>
                            }
                        </div>
                    </Link>
                ))}
            </div>
            <div className="sbtm " onClick={handlesideopen}>
                {sideOpen ?
                    <IoIosArrowBack className='sbtmiarrow' />
                    :
                    <IoIosArrowForward className='sbtmiarrow' />
                }
            </div>
        </div>
    )
}

export default SideBar