import { FaBars, FaTimes } from "react-icons/fa"; // آیکون‌های جدید
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from '../Context/AuthContext';
import api from "../../api.js";

export default function Header() {

  const [allMenus, setAllMenus] = useState([])
  const { isLoggedIn, userInfo, logout } = useAuth()
  const [isHovered, setIsHovered] = useState(false)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const gettingData = async () => {
    const {data} = await api.get('menus')
    setAllMenus((data))
  }

  useEffect(() => {
    gettingData()
  }, [])

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="backdrop-blur-xl bg-black/35 shadow-lg fixed w-full top-0 z-50 border-b border-green-300/10 h-20 md:h-24 flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src="/HoLearn.svg"
            alt="HoLearn Logo"
            className="w-16 md:w-24 h-auto"
          />
        </div>

        <div className="lg:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="text-red-500" /> : <FaBars />}
          </button>
        </div>

        <nav className="hidden lg:flex gap-8 text-white font-medium">
          <Link to={`/`} className="relative group text-lg">
            خانه
            <span className="absolute left-0 -bottom-3 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {allMenus.length > 0 && allMenus.map((menu, index) => (
            <Link key={index} to={`${menu.href}`} className="relative group text-lg">
              {menu.title}
              <span className="absolute left-0 -bottom-3 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )
          )}
        </nav>

        <div className="hidden lg:block">
          {isLoggedIn ? (
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative group">
              <Link to={userInfo.isAdmin ? '/p-admin' : '/p-user'} className={`block bg-green-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-green-700 transition duration-300 hover:scale-105`}>
                {isHovered ? 'ورود به پنل' : userInfo.name}
              </Link>

              <Link to={'/'} onClick={() => logout()} className="opacity-0 group-hover:opacity-100 group-hover:translate-y-14 absolute top-0 left-0 right-0 bg-red-600 text-white px-4 py-3 rounded-2xl shadow-md hover:bg-red-700 transition duration-300 text-center z-10">
                خروج
              </Link>
            </div>
          ) : (
            <Link to={'/login'} className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-green-700 transition duration-300 hover:scale-105">
              ورود / ثبت‌نام
            </Link>
          )}
        </div>



        <div className={`fixed inset-0 bg-black/90 z-40 h-screen transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          <Link to={`/`} onClick={closeMenu} className="text-white text-2xl font-bold hover:text-green-400 transition">
            خانه
          </Link>

          {allMenus.length > 0 && allMenus.map((menu, index) => (
            <Link key={index} to={`${menu.href}`} onClick={closeMenu} className="text-white text-2xl font-bold hover:text-green-400 transition">
              {menu.title}
            </Link>
          ))}

          <hr className="w-1/2 border-gray-700" />

          {isLoggedIn ? (
            <div className="flex flex-col gap-4 text-center w-full px-10">
              <span className="text-gray-400 text-lg">کاربر: {userInfo.name}</span>
              <div className="flex gap-10 mt-5">
                <Link to={userInfo.isAdmin ? '/p-admin' : '/p-user'} onClick={closeMenu} className="bg-green-600 text-white px-3 py-3 rounded-xl w-full text-lg">
                  پنل کاربری
                </Link>
                <button onClick={() => { logout(); closeMenu(); }} className="bg-red-600 text-white px-6 py-3 rounded-xl w-full text-lg">
                  خروج از حساب
                </button>
              </div>
            </div>
          ) : (
            <Link to={'/login'} onClick={closeMenu} className="bg-green-600 text-white px-8 py-3 rounded-xl text-lg shadow-lg hover:bg-green-700">
              ورود / ثبت‌نام
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
