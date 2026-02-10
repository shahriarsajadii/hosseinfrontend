import React from 'react'

export default function CourseCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse h-95">

            <div className="mt-4 space-y-3 px-5">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>

                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-20"></div>
                    </div>
                    <div className="h-5 bg-gray-300 rounded w-24"></div>
                </div>
            </div>
        </div>
    )
}
