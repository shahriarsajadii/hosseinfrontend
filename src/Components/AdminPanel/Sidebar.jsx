import { DollarSign, House, MessageSquareText, ShoppingBag, ShoppingCart, Users, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar(items) {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const mobileMenuClass = isMenuOpen ? 'translate-x-0' : 'translate-x-full';

    return (
        <>


            <button
                onClick={handleToggleMenu}
                className={`fixed top-4 ${isMenuOpen ? 'left-4' : 'right-4'}  z-100 p-2 bg-gray-800 text-yellow-400 rounded-lg lg:hidden shadow-lg border border-gray-700`}
                aria-label="Toggle Sidebar Menu"
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div className={`
                fixed top-0 right-0 h-full w-full sm:w-64 lg:w-[20%] bg-linear-to-b from-gray-900 to-black shadow-xl z-50 
                transition-transform duration-300 ease-in-out 
                ${mobileMenuClass} lg:translate-x-0 lg:block
            `}>

                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h1 className="text-gray-200 font-extrabold text-2xl py-4 grow text-center">
                        👑 پنل مدیریت هُلرن
                    </h1>

                </div>

                <nav className="mt-4 ">
                    <ul>
                        {items.items.map((item, index) => {
                            const isActive = location.pathname === item.path ||
                                (item.path === '/p-admin' && location.pathname === '/');

                            return (
                                <div key={index}>
                                    <li>
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`flex items-center px-6 py-3 gap-3 transition-all duration-100 relative text-base
                                               ${isActive
                                                    ? 'bg-gray-800 text-green-400 border-r-4 border-green-400'
                                                    : 'text-gray-300 hover:bg-gray-800 hover:text-green-400 hover:border-r-4 hover:border-green-400'}
                                            `}
                                        >
                                            <span>{item.icon}</span>
                                            <span className="px-2 font-semibold text-xl">{item.text}</span>
                                        </Link>
                                    </li>
                                    <hr className="border-gray-800 mx-3" />
                                </div>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}
