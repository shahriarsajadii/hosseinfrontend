import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../../Components/AdminPanel/Sidebar'
import api from '../../../api.js';
import { MessageSquareText, InfoIcon, Users, BookOpen, Notebook, Info } from 'lucide-react';

export default function AdminPanel() {

    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    async function gettingAdmin() {
        const { data } = await api.get('admins')
        const foundedUser = data.find(user => user.token === localStorage.getItem('user'))
        foundedUser?.role === 'owner' || foundedUser?.role === 'admin' ? setAdmin(true) : null
        setLoading(false)

    }

    useEffect(() => {
        gettingAdmin()
    }, []);

    if (loading) {
        return
    }
    const menuItems = [
        { icon: <BookOpen size={26} />, text: 'دوره ها', path: '/p-admin/courses' },
        { icon: <MessageSquareText size={26} />, text: 'کامنت ها', path: '/p-admin/comments' },
        { icon: <Notebook size={26} />, text: 'مقاله ها', path: '/p-admin/articles' },
        { icon: <Users size={26} />, text: 'کاربران', path: '/p-admin/users' },
        { icon: <Info size={26} />, text: 'اطلاعات من', path: '/p-admin/my-information' },
    ]
    return (
        <>
            {
                admin === true ? (
                    <div className='flex'>
                        <SideBar items={menuItems} />
                        <main className='flex-1 lg:mr-[20%]'>
                            <Outlet />
                        </main>
                    </div>
                ) : navigate('/')
            }
        </>
    )
}
