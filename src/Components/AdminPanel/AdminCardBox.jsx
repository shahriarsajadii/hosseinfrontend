import React from 'react';

const AdminCardBox = ({ icon, percentage, amount, title }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-around h-50">
            <div className=" mb-2 text-2xl font-extrabold">{title}</div>
            <div className="flex justify-center items-center gap-20">
                <div className="text-2xl font-bold text-gray-800">{amount}</div>
                <div className="text-sm font-semibold text-green-700">{percentage}</div>
                <div className="mt-2">
                    {icon}
                </div>
            </div>
            <div className="text-gray-500 text-sm">{`${title} در یک ماه گذشته`}</div>
        </div>
    );
};

export default AdminCardBox;
