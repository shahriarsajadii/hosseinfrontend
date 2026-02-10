import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function TeamCard({ name, role, img }) {
    return (
        <div className="group bg-white rounded-2xl p-6 text-center hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-green-500 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
            <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <img src={img} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
            <p className="text-md text-indigo-500 font-medium bg-indigo-50 inline-block px-3 mt-3 py-1 rounded-full">{role}</p>

            <div className="flex justify-center gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><FaTelegram className="text-3xl" /></Link>
                <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><FaInstagram className="text-3xl" /></Link>
            </div>
        </div>
    );
}