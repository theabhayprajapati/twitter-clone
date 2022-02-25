import { BellIcon, ChatAlt2Icon, HomeIcon, SearchIcon, SparklesIcon, UserIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React from 'react'

const LowerNav = () => {
    const { data: session } = useSession<any>()
    const image = session?.user?.image || ''
    return (
        <div className=" bottom-0 text-white fixed h-14 bg-black  border-2 md:hidden shadow-lg flex justify-evenly w-full items-center">
            <button className='hover:scale-95 active:scale-95 rounded-full h-9 w-9   flex justify-center items-center focus:text-blue-500 focus:scale-95 focus:shadow-lg'>

                <HomeIcon className="h-7 w-7  " />

            </button>
            <button className='hover:scale-95 active:scale-95 rounded-full h-9 w-9   flex justify-center items-center focus:scale-95 focus:text-blue-500'>
                <SearchIcon className="h-7" />
            </button>
            <button className='hover:scale-95 active:scale-95 rounded-full h-9 w-9   flex justify-center items-center focus:scale-95 focus:text-blue-500'>
                <BellIcon className="h-7" />
            </button>
            <button className='hover:scale-95 active:scale-95 rounded-full h-9 w-9  flex justify-center items-center  focus:scale-95 focus:text-blue-500 border'>

                <img src={image} alt="notfound" className='border h-7 rounded-full w-7' />

            </button>
        </div>
    )
}

export default LowerNav