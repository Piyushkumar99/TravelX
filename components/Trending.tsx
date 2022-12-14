import React from 'react';
import Image from "next/image";
import One from "../public/images/1.jpg";
import Two from "../public/images/2.jpg";
import { AiFillStar } from "react-icons/ai";
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Trending = () => {
  return (
    <div className="my-20 flex  items-center justify-center">
      {/* images section  */}
      <div className="flex w-11/12 flex-col items-center justify-center gap-4 p-5 md:ml-20 md:flex-row">
        <motion.div className="relative" whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: [1, 1.2, 1.1],
          rotate: [0, 10, -10, 0],
          transition: {
            duration: .2
          }
        }}>
          <Image 
            src={One}
            alt="first"
            width={400}
            height={300}
            objectFit="cover"
            className="rounded-xl shadow-md"
          />
          <div className=" flex h-auto w-full flex-col items-start justify-start rounded-xl bg-white pl-4 shadow-xl">
            <p className="mt-5 text-sm font-thin uppercase text-gray-500">
              Beach
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Baga Beach</h2>
            <div className="mb-5 mt-2 flex items-center justify-center">
              <AiFillStar className="text-yellow-600" />
              <p className=" pl-2 text-sm text-gray-500"> 5.0 (12 reviews)</p>
            </div>
          </div>
        </motion.div>
        <motion.div className="relative" whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: [1, 1.2, 1.1],
          rotate: [0, 10, -10, 0],
          transition: {
            duration: .2
          }
        }}>
          <Image
            src={Two}
            alt="second"
            width={400}
            height={300}
            objectFit="cover"
            className="rounded-xl shadow-md"
          />
          <div className="flex h-auto flex-col items-start justify-start rounded-xl bg-white pl-4 shadow-xl">
            <p className="mt-5 text-sm font-thin uppercase text-gray-500">
              Forest
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Antonia</h2>
            <div className="mb-5 mt-2 flex items-center justify-center">
              <AiFillStar className="text-yellow-600" />
              <p className=" pl-2 text-sm text-gray-500"> 4.8 (48 reviews)</p>
            </div>
          </div>
        </motion.div>
        {/* textual content */}
        <div className="flex-col items-start justify-start sm:mt-8 md:mt-0 md:ml-20">
          <h1 className="text-5xl font-bold text-gray-900">Best Of The Week</h1>
          <p className="mt-5 w-3/4 text-base text-gray-600 md:text-xl">
            Traveling is one of the best way to enhance personal growth. It
            enables you to do things different from your daily routine
            activities
          </p>
          <div className="flex items-start justify-start gap-5">
            <div className="my-5 flex-col">
              <CountUp end={50} start={0} delay={2} prefix="+" className='text-4xl font-bold text-gray-600' />
              <p className="text-xl font-medium text-gray-600">Destination</p>
            </div>
            <div className="my-5 flex-col">
              <CountUp end={800} start={0} delay={2} prefix="+" className='text-4xl font-bold text-gray-600' />
              <p className="text-xl font-medium text-gray-600">Tourists</p>
            </div>
            <div className="my-5 flex-col">
              <CountUp end={300} start={0} delay={2} prefix="+" className='text-4xl font-bold text-gray-600' />
              <p className="text-xl font-medium text-gray-600">Hotels</p>
            </div>
          </div>
          <button className="h-14 w-auto rounded-xl bg-violet-600 px-8  text-white shadow-xl hover:bg-violet-900 group-hover:animate-bounce">
            <p className='hover:scale-110 hover:transition-shadow'>Find Place</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Trending