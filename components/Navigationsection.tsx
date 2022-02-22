import React from 'react'
import { BellIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from '@heroicons/react/outline'
const Navigation = () => {
    return (

        <div className='m-2'>
            <div>
                <header className='ml-2 h-10 space-x-2 flex justify-start items-center'>
                    <button className='flex justify-center items-center rounded-full h-12 w-12 hover:opacity-80 hover:bg-gray-900'>
                        <img src="/SVG/logowhite.svg" alt="" className="h-7 w-7 " />
                    </button>
                </header>
                {/* make home, explore, navigate, message , bookmarl button*/}
                <main className='text-white '>
                    <div className="mt-2 text-xl font-bold">
                        <button className='nav-button'>
                            <HomeIcon className="nav-icons " />
                            <h1>
                                Home
                            </h1>
                        </button>
                        <button className='nav-button'>
                            <HashtagIcon className="nav-icons" />
                            <h1>
                                Explore
                            </h1>
                        </button> <button className='nav-button'>
                            <BellIcon className="nav-icons " />
                            <h1>
                                Notifications
                            </h1>
                        </button> <button className='nav-button'>
                            <InboxIcon className="nav-icons " />
                            <h1>
                                Messages
                            </h1>
                        </button>
                        <button className='nav-button'>
                            <BookmarkIcon className="nav-icons " />
                            <h1>
                                Bookmarks
                            </h1>
                        </button>
                        <button className='nav-button'>
                            <CollectionIcon className="nav-icons" />
                            <h1>
                                Lists
                            </h1>
                        </button>
                        <button className="nav-button">
                            <UserIcon className="nav-icons" />
                            <h1>
                                Profile
                            </h1>
                        </button>
                        <button className="nav-button">
                            <DotsCircleHorizontalIcon className="nav-icons" />
                            <h1>
                                More
                            </h1>
                        </button>
                        <button className='flex mt-2 mx-2 w-[70%] items-center justify-center mr-24 nav-button bg-blue-500 font-bold text-sm hover:opacity-95 hover:bg-blue-400 '>
                            <h1>
                                Tweet
                            </h1>
                        </button>

                    </div>
                </main>
            </div>
            <div></div>
        </div>
    )
}

export default Navigation