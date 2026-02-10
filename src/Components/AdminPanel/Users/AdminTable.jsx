import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export default function AdminTable({ users, handleDelete }) {
    return (
        <table className="min-w-full divide-y divide-gray-200 table-auto" dir="rtl">
            <thead className="bg-linear-to-l from-green-700 to-green-600 text-white">
                <tr>
                    <th className="px-6 py-4 text-lg font-semibold text-center rounded-tr-xl">
                        عکس پروفایل
                    </th>
                    <th className="px-6 py-4 text-lg font-semibold text-center">
                        نام و نام خانوادگی
                    </th>
                    <th className="px-6 py-4 text-lg font-semibold text-center">
                        نام کاربری
                    </th>
                    <th className="px-6 py-4 text-lg font-semibold text-center">
                        رمز عبور
                    </th>
                    <th className="px-6 py-4 text-lg font-semibold text-center">
                        درس‌ها
                    </th>
                    <th className="px-6 py-4 text-lg font-semibold text-center rounded-tl-xl">
                        عملیات
                    </th>
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
                {users.map((user) => (
                    user?.role != 'admin' && (
                        <tr
                            key={user.id}
                            className="hover:bg-green-50 transition-colors duration-150"
                        >
                            <td className="px-6 py-5 whitespace-nowrap text-center">
                                <img
                                    src={user.profile}
                                    alt="پروفایل"
                                    className="w-20 h-20 rounded-full border-2 border-green-400 shadow-sm mx-auto"
                                />
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap text-center text-gray-800 font-medium text-base">
                                {user.name}
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap text-center text-gray-700 font-medium text-base">
                                {user.username}
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap text-center text-gray-600 font-mono text-sm">
                                {user.password}
                            </td>
                            <td className="px-6 py-5 text-center text-gray-700 text-base">
                                <div className="max-w-xs mx-auto truncate">
                                    {user.courses}
                                </div>
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap text-center">
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="text-red-600 hover:text-red-800 cursor-pointer transition-colors p-2 rounded-full hover:bg-red-50"
                                    title="حذف کاربر"
                                >
                                    <FaTrashAlt className="w-6 h-6" />
                                </button>
                            </td>
                        </tr>)
                ))}
            </tbody>
        </table>
    )
}
