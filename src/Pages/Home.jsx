import React from 'react'
import { MdFormatAlignRight } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'


const Home = () => {

    const cards = [
        { img: one, name: 'karthi' },
        { img: two, name: 'karthi' },
        { img: three, name: 'karthi' },
        { img: four, name: 'karthi' },
    ]

    return (
        <div className='w-full h-full flex flex-col gap-5 mt-5'>

            {/* top details cards totla users */}
            <div className='h-[70%] flex flex-row items-center gap-5'>
                <div className='w-[40%] h-full flex flex-col gap-2'>
                    <span className='text-white w-full font-bold'>Earings</span>
                    <div className='h-full bg-[#363164] rounded-[25px] flex flex-row gap-2 p-5'>
                        <div className='flex w-[40%] h-full items-center justify-center'>
                            <div className="roundcon w-[100px] h-[100px] bg-[#6c11dd] rounded-full p-[3px]">
                                <div className="round w-full h-full bg-[#363164] rounded-full p-[4px]">
                                    <div className="round w-full h-full bg-[#564ea0] rounded-full flex items-center justify-center flex-col text-[#02a9a0] text-[12px]">
                                        <h1 className='text-white font-bold text-lg'>100</h1>
                                        users
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-[60%] h-full flex-col gap-2 items-center justify-center'>
                            <div className="flex flex-col w-full ">
                                <div className='flex flex-row gap-2 items-center text-[#5b5ab4] font-bold'>
                                    <span className='w-[10px] h-[10px] rounded-full bg-[#6c11dd]'></span>
                                    From students
                                </div>
                                <p className='pl-4 text-white'>500</p>
                            </div>
                            <div className="flex flex-col w-full ">
                                <div className='flex flex-row gap-2 items-center text-[#5b5ab4] font-bold'>
                                    <span className='w-[10px] h-[10px] rounded-full bg-[#02a9a0]'></span>
                                    From students
                                </div>
                                <p className='pl-4 text-white'>500</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-full flex flex-col gap-2'>
                    <div className='w-full flex flex-row items-center justify-between'>
                        <span className='text-white font-bold'>Nearly jobs</span>
                        <div className='flex flex-row items-center gap-5 text-[#6e53de]'>
                            <FaArrowLeftLong size={25} className='text-white cursor-pointer' />
                            <FaArrowRightLong size={25} className='cursor-pointer' />
                            <div className='bg-[#6e53de] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                                <MdFormatAlignRight size={20} className='text-white cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-wrap flex-row items-center justify-between">
                        {cards.map((card) => (
                            <div className="usercard group w-[23%] h-[100%] bg-[#363164] hover:bg-[#6e53de] cursor-pointer rounded-[20px] flex flex-col gap-1 items-center justify-center" key={card.img}>
                                <img src={card.img} alt="" className='w-[110px] h-[100px] group-hover:h-[150px] group-hover:mt-[-30px] object-cover' />
                                <h1 className='text-white capitalize font-bold mt-2 '>{card.name}</h1>
                                <p className='text-[#5b5ab4] capitalize group-hover:text-white'>description</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* bottom details bar chart */}
            <div className='h-full w-full flex flex-row gap-5'>

                <div className="w-[70%] h-full flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-between">
                        <span className='text-white font-bold'>Analysis</span>
                        <div className="flex flex-row items-center gap-2">
                            <div className='flex flex-row gap-2 items-center text-[#5b5ab4] font-bold'>
                                <span className='w-[10px] h-[10px] rounded-full bg-[#6c11dd]'></span>
                                From students
                            </div>
                            <div className='flex flex-row gap-2 items-center text-[#5b5ab4] font-bold'>
                                <span className='w-[10px] h-[10px] rounded-full bg-[#6c11dd]'></span>
                                From students
                            </div>
                            <button className='ml-5 px-3 py-1 rounded-full text-[#6c11dd] bg-[#16122b] font-bold text-[12px] cursor-pointer border-[1px] border-solid border-[#6c11dd]'>Week</button>
                        </div>
                    </div>
                    <div className="flex">btm</div>
                </div>

                <div className="w-[30%] h-full bg-[#363164] rounded-[25px] p-5 flex flex-col gap-3">
                    <div className="flex flex-row items-center justify-between">
                        <span className='font-bold text-white'>Recent Activity</span>
                        <button className='px-3 py-1 rounded-full text-[#6c11dd] bg-[#16122b] font-bold text-[12px] cursor-pointer border-[1px] border-solid border-[#6c11dd]'>Week</button>
                    </div>
                    <div className="flex flex-row items-center gap-2 w-full h-[80px] font-bold text-white">
                        <div className="flex items-center justify-center rounded-lg w-full h-full bg-[#1e4fff] flex-col">
                            <p>400</p>
                            <p className='text-[10px]'>totla users</p>
                        </div>
                        <div className="flex items-center justify-center rounded-lg w-full h-full bg-[#079696] flex-col">
                            <p>400</p>
                            <p className='text-[10px]'>totla users</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home