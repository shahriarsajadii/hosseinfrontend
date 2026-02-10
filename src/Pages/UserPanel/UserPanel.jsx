import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import Sidebar from '../../Components/AdminPanel/Sidebar'
import { BookOpenText, Info } from 'lucide-react'

export default function UserPanel() {

    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()

    if (!isLoggedIn) navigate('/login')

    const menuItems = [
        { icon: <BookOpenText size={26} />, text: 'دوره های من', path: '/p-user/courses' },
        { icon: <Info size={26} />, text: 'اطلاعات من', path: '/p-user/my-information' },
    ]
    return (
        <>
            <div className='flex'>
                <Sidebar items={menuItems} />
                <main className='flex-1 lg:mr-[20%]'>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
