import { BookOpen, ChevronDown } from 'lucide-react'
import React from 'react'

export default function CourseBoxHeader({ showForm, setShowForm }) {
    return (
        <div className="bg-linear-to-r from-green-600 via-green-500 to-emerald-500 px-6 md:px-10 py-7 flex justify-between items-center gap-4 relative overflow-hidden">
            <div className='flex items-center gap-4'>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                <BookOpen className="text-white w-9 h-9 drop-shadow-md" strokeWidth={1.8} />
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white lalezar tracking-tight drop-shadow-md">
                        افزودن دوره جدید
                    </h2>
                    <p className="text-green-100/90 text-lg  mt-1 opacity-90">
                        ایجاد دوره ی جدید برای دانشجویان
                    </p>
                </div>
            </div>
            <ChevronDown
                className={`${showForm && 'rotate-180'} text-white hover:bg-white/30 transition duration-200 cursor-pointer rounded-full`}
                size={36}
                onClick={() => setShowForm(prev => !prev)}
            />
        </div>
    )
}
