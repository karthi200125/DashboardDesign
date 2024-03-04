import React from 'react'
import { MdFormatAlignRight } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


const Home = () => {
    const image = 'https://images.pexels.com/photos/20447470/pexels-photo-20447470/free-photo-of-kawah-ijen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    const cards = [
        { img: image, name: 'karthi' },
        { img: image, name: 'karthi' },
        { img: image, name: 'karthi' },
        { img: image, name: 'karthi' },
    ]

    return (
        <div className='w-full h-full flex flex-col gap-2 mt-5'>

            <div className='h-[70%] flex flex-row items-center gap-5'>
                <div className='w-[40%] h-full flex flex-col gap-2'>
                    <span className='text-white w-full'>Earings</span>
                    <div className='h-full bg-[#363164] rounded-[25px]'>
                        left
                    </div>
                </div>
                <div className='w-full h-full flex flex-col gap-2'>
                    <div className='w-full flex flex-row items-center justify-between'>
                        <span className='text-white font-bold'>Nearly jobs</span>
                        <div className='flex flex-row items-center gap-5'>
                            <FaArrowLeftLong size={25} />
                            <FaArrowRightLong size={25} />
                            <MdFormatAlignRight size={25} />
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-wrap flex-row items-center justify-between">
                        {cards.map((card) => (
                            <div className="group w-[23%] h-full bg-[#363164] hover:bg-[#6e53de] cursor-pointer rounded-[20px] flex flex-col gap-3 items-center justify-center" key={card.img}>
                                <img src={card.img} alt="" className='w-[50px] h-[50px] object-cover group-hover:h-[140px] group-hover:w-[80px] transition' />
                                <h1 className='text-white capitalize font-bold'>{card.name}</h1>
                                <p className='text-neutral-400 capitalize'>description</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='h-full w-full'>
                two
            </div>
        </div>
    )
}

export default Home