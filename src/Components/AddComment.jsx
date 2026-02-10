import React, { useContext, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import api from '../../api'

export default function AddComment({ submitComment }) {

    const { userInfo, isLoggedIn } = useAuth()

    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    return (
        isLoggedIn ? (
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mt-10">

                <h3 className="text-2xl text-gray-800 mb-4">ثبت نظر شما</h3>


                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="نظر خود را وارد کنید..."
                    className="w-full border border-gray-300 rounded-xl p-4 text-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4 min-h-30"
                />

                <button
                    className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition shadow-md"
                    onClick={() => {
                        comment.length && submitComment(comment)
                        setComment('')
                    }}
                >
                    ارسال نظر
                </button>
            </div>
        ) : (
            <div className="text-2xl bg-red-300 text-center py-10 rounded-2xl mt-10">
                <Link to='/login '>برای ثبت کامنت و ورود به سایت اینجا را کلیک کنید</Link>
            </div>

        )
    )
}
