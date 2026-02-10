import React from 'react'
import AdminComments from '../../Components/AdminPanel/Comments/AdminComments'

export default function Menus() {
    return (
        <>

            <div className='p-10'>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 md:mb-12 text-center lalezar">
                    پنل مدیریت کامنت ها
                </h1>
                <AdminComments />
            </div>
        </>
    )
}
