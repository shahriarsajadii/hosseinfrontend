import React from 'react'

export default function CourseTeacher({ courseTeacher }) {
    return (
        <div className="max-w-7xl mx-auto px-6 mt-24 mb-24">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
                مدرس دوره
            </h2>
            <div className="p-8 rounded-3xl shadow-lg flex flex-col text-center xl:flex-row  items-center gap-6 hover:shadow-xl transition">
                <img
                    src="/images/instructor.jpg"
                    alt="مدرس دوره"
                    className="w-24 h-24 rounded-full object-cover border-4 border-green-200 shadow-md"
                />
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{courseTeacher?.name}</h3>
                    <p className="text-gray-600 text-sm mt-2 leading-6">
                        مدرس با تجربه در حوزه جاوااسکریپت و فریم‌ورک‌های مدرن وب.
                        بیش از ۱۰ سال سابقه تدریس و اجرای پروژه‌های واقعی در شرکت‌های بزرگ.
                        هدف او آماده‌سازی دانشجویان برای ورود حرفه‌ای به بازار کار است.
                    </p>
                </div>
            </div>
        </div>
    )
}
