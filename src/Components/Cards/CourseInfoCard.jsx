import React from 'react'

export default function CourseInfoCard({ icon, label, value }) {
    return (
        <div
            className="
              bg-white rounded-3xl p-6 shadow-sm
              hover:shadow-xs hover:shadow-green-500/50 hover:-translate-y-1 
              transition-all duration-300 
              flex items-center gap-5 border border-gray-100
            "
        >
            <div className="
              w-14 h-14 rounded-2xl bg-green-100 text-green-700 
              flex items-center justify-center text-2xl shadow-inner
            ">
                {icon}
            </div>
            <div>
                <p className="text-md text-gray-500 mb-1">{label}</p>
                <p className="font-bold text-gray-800 text-lg">{value}</p>
            </div>
        </div>
    )
}
