import { FaInstagram, FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mainTheme text-gray-300  pt-16 pb-30 mt-20 rounded-t-[100%_5%] sm:rounded-t-[100%_20%]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">HoLearn</h2>
                    <p className="text-md text-gray-400 leading-7">
                        یادگیری مدرن، باکیفیت و همیشه در دسترس.
                        HoLearn همراه تو در مسیر برنامه‌نویسی و تکنولوژی.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl text-white mb-5 text-center">لینک‌های مهم</h3>
                    <ul className="space-y-3 text-md text-center">
                        <li className="hover:text-green-400 transition"><Link to='/courses'>دوره‌ها</Link></li>
                        <li className="hover:text-green-400 transition"><Link to='/articles'>مقالات</Link></li>
                        <li className="hover:text-green-400 transition"><Link to='/about'>درباره ما</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl text-white mb-5 text-center">پشتیبانی</h3>
                    <ul className="space-y-3 text-md text-center">
                        <li className="hover:text-green-400 transition">سوالات متداول</li>
                        <li className="hover:text-green-400 transition">قوانین و مقررات</li>
                        <li className="hover:text-green-400 transition">حریم خصوصی</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-white mb-5 text-center">شبکه‌های اجتماعی</h3>

                    <div className="flex items-center gap-4 justify-center">
                        <a className="p-3 bg-gray-600/30 rounded-full hover:bg-pink-800 transition text-xl">
                            <FaInstagram />
                        </a>
                        <a className="p-3 bg-gray-600/30 rounded-full hover:bg-blue-700 transition text-xl">
                            <FaTelegram />
                        </a>
                        <a className="p-3 bg-gray-600/30 rounded-full hover:bg-red-900 transition text-xl">
                            <FaYoutube />
                        </a>
                        <a className="p-3 bg-gray-600/30 rounded-full hover:bg-blue-900 transition text-xl">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

            </div>


        </footer>
    );
}