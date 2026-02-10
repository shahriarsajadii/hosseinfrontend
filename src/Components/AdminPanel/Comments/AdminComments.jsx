import React, { useEffect, useState } from 'react'
import api from '../../../../api'
import { FaTrashAlt } from 'react-icons/fa'

export default function AdminComments() {

    const [comments, setComments] = useState([])

    async function gettingData() {
        const { data } = await api.get('comments')
        setComments(data)
    }

    useEffect(() => {
        gettingData()
    }, [])

    const handleDelete = (id) => {
        if (window.confirm(`آیا مطمئن هستید که کاربر با آیدی ${id} حذف شود؟`)) {
            api.delete(`comments/${id}`)
        }
        gettingData()
    };

    return (
        <>
                {comments && comments.map((comment) => (
                    <>
                        <div className='w-full flex flex-col  border -mr-4 border-black/10 rounded-lg pt-3 p-3  mb-5'>

                        <button
                            onClick={() => handleDelete(comment.id)}
                            className="text-white bg-red-700 hover:text-red-50 cursor-pointer transition-colors p-2 mr-3 px-4 w-max flex gap-4 rounded-full hover:bg-red-600"
                            title="حذف کامنت"
                        >
                            <FaTrashAlt className="w-6 h-6" />
                            <span className='text-xl'>حذف </span>
                        </button>
                        <div className='grid md:grid-cols-2 2xl:grid-cols-4 py-3 space-y-4 items-center'>
                            <div className="px-6 py-5  text-center text-gray-700 text-lg rounded-full w-77 lg:w-80 flex flex-col justify-start  max-h-19 md:shadow">
                                <div className='flex justify-start  '>
                                    <span className='text-md text-indigo-500 font-medium bg-indigo-50 inline-block px-3 ml-10  py-1 rounded-full text-nowrap'> نام و نام خانوادگی  </span>
                                    <span>{comment.name}</span>
                                </div>
                                <hr className='text-black/20  mt-5 md:hidden'/>
                            </div>

                            <div className="px-6 py-5  text-center text-gray-700 text-lg rounded-full w-77 lg:w-80 flex flex-col  max-h-19 md:shadow">
                                <div className='flex   '>
                                    <span className='text-md text-indigo-500 font-medium bg-indigo-50 inline-block px-3 ml-10  py-1 rounded-full text-nowrap'> نام کاربری  </span>
                                    <span>{comment.user}</span>
                                </div>
                                <hr className='text-black/20   mt-5 md:hidden '/>
                            </div>

                            <div className="px-6 py-5  text-center text-gray-700 text-lg rounded-full w-77 lg:w-80 flex flex-col  max-h-19 md:shadow">
                                <div className='flex justify-start  '>
                                    <span className='text-md text-indigo-500 font-medium bg-indigo-50 inline-block px-3 ml-10 max-h-10  py-1 rounded-full text-nowrap'>متن پیام  </span>
                                    <span>{comment.body}</span>
                                </div>
                                <hr className='text-black/20  mt-5 md:hidden'/>
                            </div>
                            <div className="px-6 py-5  text-center text-gray-700 text-lg rounded-full w-77 lg:w-80 flex  max-h-19 justify-start md:shadow   ">
                                <span className='text-md text-indigo-500 font-medium bg-indigo-50 inline-block px-3 ml-10  py-1 rounded-full'> دوره  </span>
                                <span>{comment.course}</span>
                            </div>

                        </div>

                    </div>
                    </>
                    )
                )}
        </>

    )
}
