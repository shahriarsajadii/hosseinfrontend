import React, { useState, useEffect } from 'react';
import { FaUser, FaLock, FaLockOpen } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Notification from '../Components/Notification';
import axios from 'axios'
import { useAuth } from '../Context/AuthContext';
import api from '../../api'

const schema = yup.object().shape({
    name: yup.string().required("وارد کردن نام الزامی است").min(6, 'تعداد حروف باید حداقل 6 تا باشد').max(12, 'تعداد حروف باید حداکثر 12 حرف باشد'),
    username: yup.string().required("وارد کردن نام کاربری الزامی است").min(6, 'تعداد حروف باید حداقل 6 تا باشد').max(12, 'تعداد حروف باید حداکثر 12 حرف باشد'),
    password: yup.string().required("وارد کردن رمز عبور الزامی است").min(6, 'تعداد حروف باید حداقل 6 تا باشد').max(16, 'تعداد حروف باید حداکثر 16 حرف باشد'),
    rePassword: yup.string().required("تکرار رمز عبور الزامی است").oneOf([yup.ref("password")], "رمز عبور و تکرار آن یکسان نیست"),
})

export default function Register() {

    const { userInfo, login } = useAuth()

    const [showWelcome, setShowWelcome] = useState(false);

    const [statusCode, setStatusCode] = useState(0)

    const [timer, setTimer] = useState(5)


    const { handleSubmit, register, formState: { errors }, getFieldState } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const nameState = getFieldState('name')
    const userNameState = getFieldState('username')
    const passwordState = getFieldState('password')
    const rePasswordState = getFieldState('rePassword')

    const navigate = useNavigate()

    async function registerNewUser(formData) {
        try {
            const { data, status } = await api.post('/users/register', formData)

            setStatusCode(status)
            login(data.user)
            setShowWelcome(true)

        } catch (error) {
            if (error.response?.status === 409) {
                setStatusCode(409)
                setShowWelcome(true)
                return
            }

            setStatusCode(500)
            setShowWelcome(true)
        }
    }
    useEffect(() => {
        if (statusCode === 0) return;

        if (statusCode === 409) {
            const errorTimeout = setTimeout(() => {
                setShowWelcome(false);
            }, 3000);
            return () => clearTimeout(errorTimeout);
        }

        if (statusCode === 201) {
            if (timer === 0) {
                navigate('/');
                return;
            }

            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [timer, statusCode, userInfo]);

    return (
        <div className="min-h-screen mainTheme flex items-center justify-center px-6 py-12 ">
            <div className="absolute inset-0 backdrop-blur-xl bg-black/50" />

            {
                statusCode === 201 &&
                <Notification
                    isOpen={showWelcome}
                    title={`${userInfo.name} خوش آمدی !`}
                    message={`تا ${timer} ثانیه دیگر وارد سایت میشوید`}
                    icon={<FaLockOpen />}
                />
            }
            {
                statusCode === 409 &&
                <Notification
                    isOpen={showWelcome}
                    title={`خطا رخ داد !`}
                    message={`نام کاربری شما قبلا ثبت شده`}
                    icon={<FaLockOpen />}
                />
            }

            <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10 text-center">
                    <h1 className="text-5xl font-extrabold text-white lalezar mb-2 drop-shadow-lg">
                        HoLearn
                    </h1>
                    <p className="text-green-200 text-xl mb-8">عضو خانواده برنامه‌نویسان شو</p>

                    <form className="space-y-6" onSubmit={handleSubmit(registerNewUser)}>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-4 text-green-400 text-xl" />
                            <input
                                type="text"
                                id="name"
                                placeholder="نام و نام خانوادگی"
                                className={`w-full pl-12 pr-6 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-green-200 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/30 transition
                                    ${nameState.isDirty && !nameState.invalid ? 'border-green-400' : errors.name ? 'border-red-400' : 'border-white/30'}  `}
                                {...register('name')}
                            />
                            {errors.name && <p className='mt-4 text-red-500'>{errors.name.message}</p>}

                        </div>

                        <div className="relative">
                            <FaUser className="absolute left-4 top-4 text-green-400 text-xl" />
                            <input
                                type="text"
                                id="username"
                                placeholder="نام کاربری"
                                className={`w-full pl-12 pr-6 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-green-200 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/30 transition
                                    ${userNameState.isDirty && !userNameState.invalid ? 'border-green-400' : errors.username ? 'border-red-400' : 'border-white/30'}  `}
                                {...register('username')}
                            />
                            {errors.username && <p className='mt-4 text-red-500'>{errors.username.message}</p>}

                        </div>

                        <div className="relative">
                            <FaLock className="absolute left-4 top-4 text-green-400 text-xl" />
                            <input
                                type="password"
                                id="password"
                                placeholder="رمز عبور"
                                className={`w-full pl-12 pr-6 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-green-200 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/30 transition
                                    ${passwordState.isDirty && !passwordState.invalid ? 'border-green-400' : errors.password ? 'border-red-400' : 'border-white/30'}  `}
                                {...register('password')}
                            />
                            {errors.password && <p className='mt-4 text-red-500'>{errors.password.message}</p>}

                        </div>

                        <div className="relative">
                            <FaLock className="absolute left-4 top-4 text-green-400 text-xl" />
                            <input
                                type="password"
                                id="rePassword"
                                placeholder="تکرار رمز عبور"
                                className={`w-full pl-12 pr-6 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-green-200 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/30 transition
                                    ${rePasswordState.isDirty && !rePasswordState.invalid ? 'border-green-400' : errors.rePassword ? 'border-red-400' : 'border-white/30'}  `}
                                {...register('rePassword')}
                            />
                            {errors.rePassword && <p className='mt-4 text-red-500'>{errors.rePassword.message}</p>}

                        </div>

                        <button type="submit"
                            className="w-full bg-linear-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300" >
                            ایجاد حساب جدید
                        </button>
                    </form>
                    <p className="mt-8 text-sm text-gray-300">
                        قبلاً ثبت‌نام کردی؟
                        <Link to={'/login'} className="text-green-400 font-semibold hover:underline px-1">
                            وارد شو
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}