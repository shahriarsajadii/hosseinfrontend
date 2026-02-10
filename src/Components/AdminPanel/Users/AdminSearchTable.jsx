import React from 'react'
import { FaSearch, FaTrashAlt } from 'react-icons/fa'

export default function AdminSearchTable({ filteredUsers, searchQuery, handleSearch, handleDelete }) {
    return (
        <>
            <div className="relative max-w-2xl mx-auto mb-10">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="جستجوی نام کاربر یا نام کاربری..."
                    className="w-full pl-12 pr-6 py-4 bg-white border border-gray-300 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-400/30 transition-all shadow-md text-center md:text-right"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 text-xl" />
            </div>

            {
                searchQuery && (
                    <div className="mb-12 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center lalezar">
                            نتایج جستجو ({filteredUsers.length})
                        </h2>
                        {filteredUsers.length > 0 ? (
                            <div className="space-y-6">
                                {filteredUsers.map((user) => (

                                    <div
                                        key={user.id}
                                        className="flex items-center gap-6 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all"
                                        dir="rtl"
                                    >
                                        <img
                                            src={user.profile}
                                            alt="پروفایل"
                                            className="w-12 h-12 rounded-full border-2 border-green-500"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-800">{user.name}</h3>
                                            <p className="text-sm text-gray-600">@{user.username}</p>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50"
                                        >
                                            <FaTrashAlt className="w-5 h-5 " />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">هیچ کاربری یافت نشد.</p>
                        )}
                    </div>
                )
            }
        </>
    )
}
