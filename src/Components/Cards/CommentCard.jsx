import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function CommentCard({ courseComments }) {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseComments.length && courseComments.map((comment, index) => (
                <div
                    key={index}
                    className=" bg-white/70 backdrop-blur-xl p-7 rounded-3xl shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-200 "
                >
                    <p className="text-gray-700 text-lg leading-7">
                        {comment.body}
                    </p>
                    <div className="mt-4 text-md text-gray-500">-- {comment.name} -- </div>
                </div>
            ))}
        </div>
    )
}
