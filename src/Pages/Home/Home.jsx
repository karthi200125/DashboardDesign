import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { MdFormatAlignRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import MainChart from '../../Components/MainChart';
import { POSTS, USERS } from '../../dummy';
import './Home.scss'

const Home = () => {

    const fromStudentsCount = USERS.filter((user) => user.from === "student")
    const fromTeacherCount = USERS.filter((user) => user.from === "teacher")

    return (
        <div className='homecon '>

            {/* top details cards totla users */}
            <div className='homeleft '>
                <div className='hometotaluser'>
                    <span className='htu'>Users</span>
                    <div className='h-full bg-[#363164] rounded-[25px] flex flex-row gap-2 p-5'>
                        <div className='flex w-[40%] h-full items-center justify-center'>
                            <div className="roundcon w-[100px] h-[100px] bg-[#6c11dd] rounded-full p-[3px]">
                                <div className="round w-full h-full bg-[#363164] rounded-full p-[4px]">
                                    <div className="round w-full h-full bg-[#564ea0] rounded-full flex items-center justify-center flex-col text-[#02a9a0] text-[12px]">
                                        <h1 className='text-white font-bold text-lg'>{USERS.length}</h1>
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
                                <p className='pl-4 text-white'>{fromStudentsCount.length}</p>
                            </div>
                            <div className="flex flex-col w-full ">
                                <div className='flex flex-row gap-2 items-center text-[#5b5ab4] font-bold'>
                                    <span className='w-[10px] h-[10px] rounded-full bg-[#02a9a0]'></span>
                                    From Teacher
                                </div>
                                <p className='pl-4 text-white'>{fromTeacherCount.length}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hometotaluser2 '>
                    <div className='cardsarrow '>
                        <span >New Users</span>
                        <div className='arrows'>
                            <FaArrowLeftLong size={20} />
                            <FaArrowRightLong size={20} />
                            <div className='arrowburger'>
                                <MdFormatAlignRight size={20} style={{ color: "white" }} />
                            </div>
                        </div>
                    </div>
                    <div className="cardscon">
                        {USERS.slice(0, 4).map((card) => (
                            <div className="usercard " key={card.img}>
                                <img src={card.char} alt="" />
                                <Link to={'/profile'} className='usercardname'>{card.username}</Link>
                                <p>{card.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* bottom details bar chart */}
            <div className='homeright'>

                <div className="left">
                    <div className="lefttop ">
                        <span>Analysis</span>
                        <button className='week'>Week</button>
                    </div>
                    <div className="">
                        <MainChart />
                    </div>
                </div>

                <div className="right ">
                    <div className="righttop">
                        <span >Recent Activity</span>
                        <button className='week '>Week</button>
                    </div>
                    <div className="boxes">
                        <div className="box" style={{ backgroundColor: "#1e4fff" }}>
                            <span>{USERS.length}</span>
                            <p >Total users</p>
                        </div>
                        <div className="box" style={{ backgroundColor: "#079696" }}>
                            <span>{POSTS.length}</span>
                            <p >Totla Posts</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home