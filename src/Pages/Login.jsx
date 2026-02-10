import { FaUser, FaLock, FaLockOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Notification from '../Components/Notification';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuth } from '../Context/AuthContext';
import api from "../../api.js";

const schema = yup.object().shape({
    username: yup.string().required("وارد کردن نام کاربری الزامی است").min(6, 'تعداد حروف باید حداقل 6 تا باشد').max(12, 'تعداد حروف باید حداکثر 12 حرف باشد'),
    password: yup.string().required("وارد کردن رمز عبور الزامی است").min(6, 'تعداد حروف باید حداقل 6 تا باشد').max(16, 'تعداد حروف باید حداکثر 16 حرف باشد'),
})

export default function Login() {

    const { userInfo, login } = useAuth()

    const [showWelcome, setShowWelcome] = useState(false);
    const [statusCode, setStatusCode] = useState(0)
    const [isAdmin, setIsAdmin] = useState()
    const [timer, setTimer] = useState(5)


    const { handleSubmit, register, formState: { errors }, getFieldState } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const userNameState = getFieldState('username')
    const passwordState = getFieldState('password')

    const navigate = useNavigate()

    async function handleLogin(formData) {
        try {
            const { data, status } = await api.post(`users/login`, formData)
            console.log(data);
            setStatusCode(status)
            login(data.user)
            setIsAdmin(data.user.isAdmin)

        } catch {
            setStatusCode(401)
        }
        setShowWelcome(true)
    }
    useEffect(() => {
        if (statusCode === 0) return;

        if (statusCode !== 200) {
            const errorTimeout = setTimeout(() => {
                setShowWelcome(false);
            }, 3000);
            return () => clearTimeout(errorTimeout);
        }

        if (statusCode === 200) {
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
        <div className="min-h-screen mainTheme flex items-center justify-center px-6 py-12">
            <div className="absolute inset-0 backdrop-blur-xl bg-black/40" />
            {
                statusCode === 200 ? (
                    <Notification
                        isOpen={showWelcome}
                        onClose={() => setShowWelcome(false)}
                        title={`${userInfo.name} خوش آمدی !`}
                        message={` تا ${timer} ثانیه دیگه به عنوان ${isAdmin ? 'مدیر' : 'کاربر'} وارد میشید.`}
                        icon=<FaLockOpen />
                    />
                ) : (
                    <>
                        <Notification
                            isOpen={showWelcome}
                            onClose={() => setShowWelcome(false)}
                            title="چنین کاربری وجود ندارد"
                            message="اگر تاحالا ثبت نام نکردید وارد شوید"
                            icon=<FaLockOpen />
                        />
                    </>
                )
            }
            <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10 text-center">
                    <h1 className="text-5xl font-extrabold text-white lalezar mb-2 drop-shadow-lg">
                        HoLearn
                    </h1>
                    <p className="text-green-200 text-lg mb-10">به خانواده برنامه‌نویسان خوش آمدی!</p>

                    <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-4 text-green-400 text-xl" />
                            <input
                                type="text"
                                placeholder="نام کاربری خود را وارد کنید"
                                className={`w-full pl-12 pr-6 py-4 bg-white/10 border  rounded-2xl text-white placeholder-green-200 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/30 transition
                                    ${userNameState.isDirty && !userNameState.invalid ? 'border-green-400' : errors.username ? 'border-red-400' : 'border-white/30'}  `}
                                {...register('username')}
                            />
                            {errors.username && <p className='mt-4 text-red-500'>{errors.username.message}</p>}
                        </div>

                        <div className="relative">
                            <FaLock className="absolute left-4 top-4 text-green-400 text-xl" />
                            <input
                                type="password"
                                placeholder="رمز عبور"
                                className={`w-full pl-12 pr-6 py-4 bg-white/10 border  rounded-2xl text-white placeholder-green-200 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/30 transition
                                    ${passwordState.isDirty && !passwordState.invalid ? 'border-green-400' : errors.password ? 'border-red-400' : 'border-white/30'}  `}
                                {...register('password')}
                            />
                            {errors.password && <p className='mt-4 text-red-500'>{errors.password.message}</p>}
                        </div>

                        <button type="submit" className="w-full bg-linear-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300">
                            ورود به حساب
                        </button>
                    </form>
                    <div className="mt-8 text-sm text-gray-300">
                        <p>
                            حساب نداری؟
                            <Link to={'/signup'} className="text-green-400 font-semibold hover:underline px-1">
                                ثبت‌نام کن
                            </Link>
                        </p>
                        <Link to={'/resetPassword'} className="block mt-3 text-green-300 hover:underline">
                            رمز عبور را فراموش کردم
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
