import React from 'react'
import Search from './Search'
import { GoBellFill } from "react-icons/go";
import User from './User';

const NavBar = () => {
    return (
        <div className='w-full h-[10%] flex flex-row justify-between items-center'>
            <h1 className='text-[25px] text-white font-bold'>DashBoard</h1>
            <div>
                <Search />
            </div>
            <div className='flex flex-row gap-5'>
                <div className="w-[40px] h-[40px] relative flex items-center justify-center rounded-full bg-[#6e53de] cursor-pointer transition">
                    {/* <span className='absolute top-0 bg-red-600 rounded-full w-[10px] h-[10px] '>1</span> */}
                    <GoBellFill size={20} className='text-white'/>
                </div>
                <User />
            </div>
        </div>
    )
}

export default NavBar