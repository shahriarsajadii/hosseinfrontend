import React from 'react';

export default function Input({ className = '', ...props }) {
    return (
        <input
            {...props}

            className="w-full px-5 py-4 bg-white border border-gray-300 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100/70 outline-none transition-all shadow-sm hover:shadow-md text-lg"
        />
    );
}
