import React from 'react'

export default function AboutUsBox({ title, desc, icon }) {
    return (
        <div className='flex flex-2 items-center gap-7 shadow shadow-gray-400 w-max p-5 rounded-2xl  hover:bg-gray-200/20  transition duration-700'>
            {icon}
            <div className='flex flex-col gap-2'>
                <h1 className='lalezar text-xl md:text-2xl'>{title}</h1>
                <p className='text-md md:text-lg'>{desc}</p>
            </div>
        </div>
    )
}
