import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutInvite() {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="mainTheme rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">هنوز شک داری؟</h2>
                    <p className="mb-10 text-indigo-100 max-w-xl mx-auto text-lg leading-relaxed">
                        همین الان می‌تونی با دوره‌های رایگان ما شروع کنی و کیفیت آموزش رو خودت بسنجی.
                        هیچ ریسکی نداره، فقط شروع کن!
                    </p>
                    <Link to="/courses" className="inline-block bg-yellow-400 text-indigo-900 text-lg py-4 px-10 rounded-full hover:bg-yellow-300 transition-all shadow-[0_10px_20px_rgba(250,204,21,0.3)] hover:-translate-y-1 transform">
                        مشاهده دوره‌ها
                    </Link>
                </div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            </div>
        </div>
    )
}
