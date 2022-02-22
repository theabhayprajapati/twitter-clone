import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, GlobeIcon, HomeIcon, LocationMarkerIcon, PhotographIcon, SparklesIcon } from '@heroicons/react/outline'
import React from 'react'

const Feed = () => {
    return (
        <div className="relative px-5 bg-black">

            <header className='sticky backdrop-blur-lg  opacity-80 top-0 h-10 text-white font-bold flex justify-start items-center'>
                <button className="flex w-full justify-between">
                    <h1 className="font-bold">Home</h1>
                    <SparklesIcon className='nav-icons' />
                </button>
            </header>

            {/* input feed to let users' tweet */}
            <div className='text-white flex space-x-2'>

                <div className='w-[10%]  self-start'>
                    <div className='rounded-full hover:bg-gray-500 h-12 w-12 items-center flex justify-center ' tabIndex={0}>
                        <img src="/SVG/logowhite.svg" alt="" className="h-7 object-contain " />
                    </div>
                </div>

                <div className='w-[90%]  self-center'>
                    <textarea className='w-full h-12 bg-transparent outline-none self-center items-center ' placeholder='What’s happening?' />

                    <button className='flex px-2  hover:bg-blue-600 hover:bg-opacity-30 transition transform duration-200 text-xs items-center rounded-full'>
                        <GlobeIcon className="nav-icons h-4 text-blue-500 text-xs" />
                        <h1 className='text-blue-500 font-bold'>
                            Everyone can reply
                        </h1>
                    </button>
                    <hr className="my-3 border-[#6E767D]" />
                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex justify-between items-center gap-1'>
                            <button className='flex justify-center items-center rounded-full h-8 w-8 hover:opacity-80 hover:bg-gray-900'>
                                <PhotographIcon className="input-btn" />
                            </button>
                            <button className="input-icons">
                                <h1 className='text-[5px] border-[1.4px]  rounded-sm p-1 text-blue-500 border-blue-500'>
                                    GIF
                                </h1>
                            </button>
                            <button className="input-icons">
                                <ChartBarIcon className="input-btn h-[20px]" />
                            </button>
                            <button className="input-icons">
                                <EmojiHappyIcon className="input-btn h-[20px]" />
                            </button>
                            <button className="input-icons">
                                <CalendarIcon className="input-btn h-[20px]" />
                            </button>
                            <button className="input-icons">
                                <LocationMarkerIcon className="input-btn h-[20px]" />
                            </button>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 font-bold px-4 py-1 rounded-full ">
                            Tweet
                        </button>
                    </div>
                </div>

            </div>
            <hr className="my-3 border-[#6E767D]" />
        </div>)
}

export default Feed