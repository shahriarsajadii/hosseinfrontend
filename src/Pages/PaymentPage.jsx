import React, { useState, useCallback } from 'react';
import bankDatas from "../bankDatas.js";
import { useAuth } from '../Context/AuthContext';
import api from '../../api.js';

const PaymentPage = () => {

    const { userInfo, paymentDetails } = useAuth()
    const [logos] = useState(bankDatas)
    const [cardNumber, setCardNumber] = useState('');
    const [bankCode, setBankCode] = useState('');
    const [operation, setOperation] = useState('در انتظار پرداخت')

    const formatCardNumber = useCallback((value) => {
        const numbers = value.replace(/\D/g, '');

        const formatted = numbers.replace(/(.{4})/g, '$1 ').trim().slice(0, 19);

        if (numbers.length >= 4) {
            const firstFour = numbers.slice(0, 4);
            setBankCode(firstFour);
        } else {
            setBankCode('');
        }

        return formatted;
    }, []);

    const handleCardInput = (e) => {
        const formattedValue = formatCardNumber(e.target.value);
        setCardNumber(formattedValue);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cardNumber.length !== 19) {
            console.log('شماره کارتت رو بنویس');
            return;
        }
        let currentUserCourses = [];
        try {
            if (Array.isArray(userInfo.courses)) {
                currentUserCourses = userInfo.courses;
            } else {
                currentUserCourses = JSON.parse(userInfo.courses || "[]");
            }
        } catch (error) {
            console.error("Error parsing user courses:", error);
            currentUserCourses = [];
        }
        const finalUserCourses = [...new Set([...currentUserCourses, paymentDetails.shortname])];


        let currentCourseStudents = [];
        try {
            if (Array.isArray(paymentDetails.students)) {
                currentCourseStudents = paymentDetails.students;
            } else {
                currentCourseStudents = JSON.parse(paymentDetails.students || "[]");
            }
        } catch (error) {
            console.error("Error parsing course students:", error);
            currentCourseStudents = [];
        }

        const finalCourseStudents = [...new Set([...currentCourseStudents, userInfo.username])];

        try {
            await api.put(`courses/${paymentDetails.id}`, {
                students: finalCourseStudents
            });

            await api.put(`users/${userInfo.id}`, {
                courses: finalUserCourses
            });

            setOperation('پرداخت موفق');
            alert(`پرداخت ${paymentDetails?.price?.toLocaleString()} برای دوره "${paymentDetails?.title}" با موفقیت انجام شد! `);

            const paymentTimeout = setTimeout(() => {
                location.pathname = `/courses/${paymentDetails.shortname}`;
            }, 3000);
            return () => clearTimeout(paymentTimeout);

        } catch (error) {
            console.error("Payment failed:", error);
            setOperation('خطا در پرداخت');
        }
    };



    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in zoom-in duration-300">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-indigo-500/50 max-w-md w-full border border-white/50 max-h-[90vh] overflow-y-auto">
                <div className="p-8 pb-4 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-6">

                        <div className="text-center flex-1">
                            {
                                operation === 'پرداخت موفق' && <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-green-600 rounded-2xl mx-auto mb-3 shadow-lg flex items-center justify-center animate-pulse">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            }
                            <h2 className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                {operation}
                            </h2>
                        </div>
                    </div>
                    <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 shadow-inner">
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">📚</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-xl text-gray-900 pb-3">{paymentDetails?.title}</h3>
                                <p className="text-2xl font-black text-black">
                                    {paymentDetails?.price?.toLocaleString()} تومان
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            شماره کارت
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-4 flex items-center">
                                {bankCode && logos[bankCode] ? (
                                    <img
                                        src={`/images/bank/${logos[bankCode]}`}
                                        alt="لوگوی بانک"
                                        className="w-10 h-8 object-contain shadow-lg rounded-lg"
                                    />
                                ) : (
                                    <div className="w-10 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={handleCardInput}
                                placeholder="XXXX XXXX XXXX XXXX"
                                maxLength={19}
                                dir="ltr"
                                className="w-full pl-16 pr-4 py-4 bg-linear-to-r from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl text-lg font-mono tracking-wider font-semibold text-right focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                                autoComplete="cc-number"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-5 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-xl tracking-wide flex items-center justify-center space-x-2"
                    >
                        <span>تأیید پرداخت</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
