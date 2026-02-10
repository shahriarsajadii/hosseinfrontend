import React from 'react'
import { FaClipboardList, FaPlayCircle } from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function CourseInfoBanner({ title, description, cover, isUserRegisteredToThisCourse }) {
    return (
        <>
            <div className=" relative overflow-hidden  mainTheme  text-white py-20 px-6 shadow-2xl pt-35 rounded-b-[100%_30%] ">

                <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    <div className="space-y-7">
                        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-xl ">
                            {title}
                        </h1>

                        <p className="text-green-100 text-base leading-8 max-w-lg">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <button className="bg-white text-green-700 px-7 py-3 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 font-semibold">
                                <FaPlayCircle className="text-xl" />
                                مشاهده ویدیو معرفی
                            </button>
                            {
                                isUserRegisteredToThisCourse ? (
                                    <button className="bg-green-900/40 backdrop-blur-xl border border-white/30 text-white px-7 py-3 rounded-2xl hover:bg-green-900/60  transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg">
                                        <FaClipboardList className="text-xl" />
                                        دوره خریداری شده
                                    </button>
                                ) : (
                                    <Link to='/payment' className="bg-green-900/40 backdrop-blur-xl border border-white/30 text-white px-7 py-3 rounded-2xl hover:bg-green-900/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg">
                                        <FaClipboardList className="text-xl" />
                                        ثبت‌نام در دوره
                                    </Link>
                                )
                            }
                        </div>
                    </div>

                    <div className="
                    rounded-3xl overflow-hidden shadow-2xl border border-white/20 
                    backdrop-blur-xl bg-white/10
                  ">
                        <img src={`${cover}`} className="w-full h-80 object-cover" />
                    </div>

                </div>
            </div>
        </>
    )
}
