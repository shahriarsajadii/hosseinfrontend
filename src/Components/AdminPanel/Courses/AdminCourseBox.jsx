import { Link } from 'react-router-dom'
import React from 'react'
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'

export default function AdminCourseBox({ courses, handleDelete, handleEdit }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-20">
            {courses && courses.map((course) => (
                <div
                    key={course.id}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
                >
                    <img
                        src={course.cover}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                    />

                    <div className="p-6 text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-2 lalezar">
                            {course.title}
                        </h2>
                        <p className="text-sm text-gray-600">مدرس: {course.teacher}</p>
                    </div>

                    <div className="flex justify-around bg-gray-50 py-4 border-t border-gray-200">
                        <button
                            onClick={() => handleEdit(course)}
                            className="text-green-600 hover:text-green-800 p-3 rounded-full hover:bg-green-100 transition"
                            title="ویرایش"
                        >
                            <FaEdit className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => handleDelete(course.id)}
                            className="text-red-600 hover:text-red-800 p-3 rounded-full hover:bg-red-100 transition"
                            title="حذف"
                        >
                            <FaTrashAlt className="w-6 h-6" />
                        </button>
                        <Link
                            to={`/courses/${course.shortName}`}
                            className="text-blue-600 hover:text-blue-800 p-3 rounded-full hover:bg-blue-100 transition"
                            title="مشاهده"
                        >
                            <FaEye className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
