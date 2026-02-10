import React from 'react';
import { FaBookOpen, FaClipboardList } from 'react-icons/fa';

export default function ArticleBanner({ title, description, body, cover }) {
    return (
        <>
            <div className="relative overflow-hidden mainTheme text-white py-20 px-6 shadow-2xl pt-35 rounded-b-[100%_30%]">

                <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div className="space-y-7">
                        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-xl lalezar">
                            {title && title}
                        </h1>
                    </div>

                    <div className=" rounded-3xl overflow-hidden shadow-2xl border border-white/20  backdrop-blur-xl bg-white/10 ">
                        <img
                            src={`${cover}`}
                            alt="کاور مقاله React Hooks"
                            className="w-full h-80 object-cover"
                        />
                    </div>

                </div>
            </div>
        </>
    );
}