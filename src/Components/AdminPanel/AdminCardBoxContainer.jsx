import React from 'react';
import AdminCardBox from './AdminCardBox';
import { Search, Bell, LogOut } from 'lucide-react';

const AdminCardBoxContainer = () => {
    const data = [
        {
            title: 'هزینه',
            icon: <Search className="w-8 h-8" />,
            percentage: '5.2+',
            amount: '$2,420',
        },
        {
            title: 'فروش',
            icon: <Bell className="w-8 h-8" />,
            percentage: '5.2+',
            amount: '$2,420',
        },
        {
            title: 'درآمد',
            icon: <LogOut className="w-8 h-8" />,
            percentage: '5.2+',
            amount: '$2,420',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.map((item, index) => (
                <AdminCardBox key={index} {...item} />
            ))}
        </div>
    );
};

export default AdminCardBoxContainer;
