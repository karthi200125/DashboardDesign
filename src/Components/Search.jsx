import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='flex items-center justify-center gap-2 w-[300px] bg-[#423e66] rounded-md px-2'>
      <CiSearch size={25} className='text-[#6e53de]' />
      <input type="text" placeholder='Search...' className='p-[10px] w-full text-white bg-[#423e66] placeholder:text-[#6e53de] placeholder:font-bold' />
    </div>
  )
}

export default Search