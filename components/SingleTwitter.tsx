import { ChatAltIcon, DotsHorizontalIcon, HeartIcon, ReplyIcon, SparklesIcon, UploadIcon } from '@heroicons/react/outline'
import React from 'react'

const SingleTwitter = ({ tweets }: any) => {
    console.log(tweets, "SINGLE TWEET")
    return (
        <div className="relative px-5 bg-black text-white" >
            <header className='sticky backdrop-blur-lg  opacity-80 top-0 h-10 text-white font-bold flex justify-start items-center'>
                <button className="flex w-full justify-between">
                    <h1 className="font-bold">Tweet</h1>
                    <SparklesIcon className='nav-icons' />
                </button>
            </header>

            <div className='w-full flex space-x-2 border-2'>
                <div className="w-[10%]">
                    <img src={tweets.profile_image_url} alt="user_image" />
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col border-2'>
                        <button >
                            <h1 className='text-left'>
                                {tweets.name}
                            </h1>
                        </button>
                        <button>
                            <h1>
                                {tweets.screen_name}
                            </h1>
                        </button>
                    </div>
                    <button>
                        <DotsHorizontalIcon className='input-icons h-6' />
                    </button>
                </div>
            </div>
            <div className='my-2'>
                <p className='text-2xl'>
                    {tweets.tweet}
                </p>
            </div>
            <div className='flex text-sm text-gray-600'>
                <h1>23.23 12th Feb</h1>
                <h1>
                    Twitter for iPhone
                </h1>
            </div>
            <hr className='border-gray-900 border-[.1px] my-2' />
            <div className='flex justify-start space-x-3'>
                <button className='flex space-x-2'>
                    <h2>
                        234
                    </h2>
                    <h1 className='text-gray-500'>Retweets</h1>
                </button>
                <button className='flex space-x-2'>
                    <h2>
                        234
                    </h2>
                    <h1 className='text-gray-500'>Quote Retweets</h1>
                </button>
                <button className='flex space-x-2'>
                    <h2>
                        234
                    </h2>
                    <h1 className='text-gray-500'>
                        Likes
                    </h1>
                </button>
            </div>
            <hr className='border-gray-900 border-[.1px] my-2' />


            <hr className='border-gray-900 border-[.1px] my-2' />
            <div className='flex justify-evenly'>
                {/* add chatalt icon, upload icon,  heart icon, reply icon */}
                <button className='h-9 '>
                    <ChatAltIcon className='input-icons h-6 w-6   hover:text-blue-500' />
                </button>
                <button className='h-9'>
                    <ReplyIcon className='input-icons h-6 w-6  hover:text-green-500' />
                </button>
                <button className='h-9'>
                    <HeartIcon className='input-icons h-6 w-6  hover:text-pink-500' />
                </button>
                <button className='h-9'>
                    <UploadIcon className='input-icons h-6 w-6  hover:text-blue-500' />
                </button>
            </div>
            <hr className='border-gray-900 border-[.1px] my-2' />

        </div>
    )
}

export default SingleTwitter