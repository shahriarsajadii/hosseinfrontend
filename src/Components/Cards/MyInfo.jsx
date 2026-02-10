import React from 'react';
import { User, Mail, Lock, ShieldCheck, User2Icon } from 'lucide-react';

export default function MyInfo({ name, username, profile, password }) {


    const maskedPassword = '●'.repeat(password?.length);
    return (
        <div className="w-full max-w-sm mx-auto bg-linear-to-br from-white max-h-max to-gray-50/80 rounded-3xl shadow-2xl border border-gray-200/70 overflow-hidden hover:shadow-3xl transition-all duration-300 group">
            <div className="relative h-32 bg-linear-to-r from-green-600 via-green-500 to-emerald-500">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                        <img
                            src={`${profile}`}
                            alt={name}
                            className="w-28 h-28 rounded-full border-4 border-white shadow-xl object-cover ring-2 ring-green-400/50 transition-transform group-hover:scale-105 duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 p-1.5 rounded-full border-2 border-white">
                            <User2Icon size={16} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-16 pb-8 px-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-1 lalezar tracking-tight">
                    {name}
                </h3>

                <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
                    <Mail size={16} className="text-green-600" />
                    <span className="font-medium text-base">@{username}</span>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 shadow-inner">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <Lock size={18} className="text-gray-700" />
                        <span className="text-sm font-medium text-gray-700">رمز عبور:</span>
                    </div>

                    <div className="font-mono text-2xl tracking-widest text-gray-800 bg-white py-3 px-6 rounded-xl border border-gray-300 inline-block shadow-sm">
                        {maskedPassword}
                    </div>
                </div>

            </div>
        </div>
    );
}