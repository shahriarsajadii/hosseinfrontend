import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaSearch } from 'react-icons/fa';
import api from '../../../api';
import AdminTable from '../../Components/AdminPanel/Users/AdminTable';
import AdminSearchTable from '../../Components/AdminPanel/Users/AdminSearchTable';

export default function Users() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([])

    async function gettingData() {
        const { data } = await api.get('users')
        setUsers(data)
    }

    useEffect(() => {
        gettingData()
    }, [])

    const handleDelete = (id) => {
        if (window.confirm(`آیا مطمئن هستید که کاربر با آیدی ${id} حذف شود؟`)) {
            api.delete(`users/${id}`)
        }
        gettingData()
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query) {
            const results = users.filter(
                (user) =>
                    user.name.toLowerCase().includes(query) ||
                    user.username.toLowerCase().includes(query)
            );
            setFilteredUsers(results);
        } else {
            setFilteredUsers([]);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-8">
            <div className="max-w-screen-2xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 md:mb-10 text-center lalezar">
                    پنل مدیریت کاربران
                </h1>

                <AdminSearchTable filteredUsers={filteredUsers} searchQuery={searchQuery} handleSearch={handleSearch} handleDelete={handleDelete} />

                <div className="hidden md:block overflow-x-auto rounded-xl shadow-xl border border-gray-200 bg-white">
                    <AdminTable users={users} handleDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
}