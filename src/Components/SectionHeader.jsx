import React from 'react'
import { Link } from 'react-router-dom'

export default function SectionHeader({ title, description, btnTitle, icon, path }) {
    return (
        <section class="md:flex items-center justify-between w-[70%] md:w-[85%] mx-auto md:my-4 gap-6 py-8 rtl">

            <div class="text-right bg-green-600/30 h-8 px-4 rounded-tl-full rounded-br-full  ">
                <h2 class="text-2xl font-bold flex gap-2 items-center ">
                    {icon}  {title}
                </h2>
                <p class="text-lg text-black mt-1 text-center">
                    {description}
                </p>
            </div>

            {btnTitle &&
                <div class="opacity-0 md:opacity-100">
                    <Link
                        to={path}
                        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 text-white text-md font-medium transition hover:bg-green-700 hover:-translate-y-0.5"
                    >
                        <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {btnTitle}
                    </Link>
                </div>}


        </section>

    )
}
