import React from 'react';
import HeroImage from "../public/images/main.jpg";
import Image from 'next/image';
import { motion } from 'framer-motion'

const MainPage = () => {
  return (
    <>
        <div className='w-screen'>
            <div className='flex h-auto w-screen items-center justify-center p-8'>
                <div className='ml-10 md:ml-20 md:w-1/2'>
                    <motion.h1 initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .8
                            }
                        },
                    }} 
                        className='my-5 text-5xl font-bold text-gray-800 md:text-7xl'>Explore World</motion.h1>
                    <p className='text-base text-gray-500 md:text-xl'>
                        Traveling is plays a vital role in accomplishing greater habit of routing the World.
                        It enables you to do things differently apart from the daily rutine.
                    </p>
                    <div className='mt-12 flex items-start justify-start gap-5 text-center'>
                        <button className='h-14 cursor-pointer rounded-xl bg-violet-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow'> 
                            Book Now!
                        </button>
                        <button className='h-14 cursor-pointer rounded-xl border border-violet-600 px-8 font-semibold text-violet-900 hover:bg-violet-900 hover:text-white hover:shadow'>
                            Get a Price   
                        </button>
                    </div>
                </div>
                <div className='hidden md:block relative z-10 bg-white'>
                    <Image src={HeroImage} width={900} height={700} objectFit="contain" alt='hero img' />
                </div>
            </div>
        </div>
    </>
  )
}

export default MainPage