import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import {
    BookOpen, BookText, FileText, User, Image as ImageIcon, DollarSign,
    Calendar, Video, Plus, Save, X, Clock, Film,
    CircleCheck,
    ChevronDown
} from 'lucide-react';
import Input from '../Input';
import AddNewCourseVideoBox from './AddNewCourseVideoBox';
import api from '../../../../api';
import Notification from '../../Notification';
import CourseBoxHeader from './CourseBoxHeader';


export default function AddNewCourseBox() {

    const [showNotification, setShowNotification] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const { register, handleSubmit, control, formState: { errors }, reset, } = useForm({
        defaultValues: {
            createdAt: new Date().getFullYear().toLocaleString(),
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'videos',
    });

    const onSubmit = async (data) => {
        console.log('data => ', data);
        const { status } = await api.post('courses', data)
        reset()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        status && setShowNotification(true)
    };
    useEffect(() => {
        const notifTimeout = setTimeout(() => {
            setShowNotification(false);
        }, 3000);
        return () => clearTimeout(notifTimeout);
    }, [showNotification])

    return (
        <div>
            {
                showNotification && (
                    <Notification
                        isOpen={showNotification}
                        onClose={() => setShowNotification(false)}
                        title={`ثبت دوره`}
                        message={`دوره ی جدید با موفقیت اضافه شد`}
                        icon=<CircleCheck />
                    />
                )
            }
            <div className="bg-linear-to-b from-white to-gray-50/80 rounded-3xl shadow-2xl border border-gray-200/70 overflow-hidden mb-12 backdrop-blur-sm">

                <CourseBoxHeader showForm={showForm} setShowForm={setShowForm} />

                {
                    (
                        <form onSubmit={handleSubmit(onSubmit)} className={`${showForm ? 'opacity-100 max-h-max translate-y-0' : 'opacity-0 h-0 translate-y-6 p-0!'} transform p-6 md:p-10 space-y-8 transition-all duration-300 ease-in-out  `}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2.5 text-base font-semibold text-gray-800">
                                        <BookText size={20} className="text-green-600" />
                                        عنوان دوره
                                    </label>
                                    <Input
                                        {...register('title', { required: 'عنوان الزامی است' })}
                                        placeholder="مثال: React Hooks پیشرفته ۲۰۲۶"
                                    />
                                    {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2.5 text-base font-semibold text-gray-800">
                                        <FileText size={20} className="text-green-600" />
                                        نام کوتاه
                                    </label>
                                    <Input
                                        {...register('shortName', { required: 'نام کوتاه الزامی است' })}
                                        dir="ltr"
                                        placeholder="react-hooks-advanced-2026"
                                    />
                                    {errors.shortName && <p className="text-red-600 text-sm mt-1">{errors.shortName.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2.5 text-base font-semibold text-gray-800">
                                    <FileText size={20} className="text-green-600" />
                                    توضیحات دوره
                                </label>
                                <textarea
                                    {...register('description', { required: 'توضیحات الزامی است' })}
                                    rows={5}
                                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100/70 outline-none transition-all shadow-sm hover:shadow-md resize-none text-base leading-7"
                                    placeholder="توضیح کامل دوره، مخاطبان هدف، سرفصل‌ها..."
                                />
                                {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2.5 text-base font-semibold text-gray-800">
                                        <User size={20} className="text-green-600" />
                                        نام مدرس
                                    </label>
                                    <Input
                                        {...register('teacher', { required: 'نام مدرس الزامی است' })}
                                        placeholder="نام و نام خانوادگی مدرس"
                                    />
                                    {errors.teacher && <p className="text-red-600 text-sm mt-1">{errors.teacher.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2.5 text-base font-semibold text-gray-800">
                                        <ImageIcon size={20} className="text-green-600" />
                                        آدرس کاور (URL)
                                    </label>
                                    <Input
                                        {...register('cover', { required: 'کاور الزامی است' })}
                                        dir="ltr"
                                        placeholder="https://example.com/cover.jpg"
                                    />
                                    {errors.cover && <p className="text-red-600 text-sm mt-1">{errors.cover.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2.5 text-base font-semibold text-gray-800">
                                        <DollarSign size={20} className="text-green-600" />
                                        قیمت (تومان)
                                    </label>
                                    <Input
                                        {...register('price', {
                                            required: 'قیمت الزامی است',
                                            valueAsNumber: true,
                                            min: { value: 0, message: 'قیمت نمی‌تواند منفی باشد' }
                                        })}
                                        type="number"
                                        placeholder="1,800,000"
                                    />
                                    {errors.price && <p className="text-red-600 text-sm mt-1">{errors.price.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2.5 text-base font-semibold text-gray-800">
                                        <Calendar size={20} className="text-green-600" />
                                        سال ایجاد
                                    </label>
                                    <Input
                                        {...register('createdAt', {
                                            required: 'سال الزامی است',
                                            valueAsNumber: true
                                        })}
                                        type="number"
                                        placeholder="1404"
                                    />
                                    {errors.createdAt && <p className="text-red-600 text-sm mt-1">{errors.createdAt.message}</p>}
                                </div>
                            </div>

                            <AddNewCourseVideoBox fields={fields} append={append} remove={remove} register={register} errors={errors} />

                            <div className="pt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="flex items-center gap-3 bg-linear-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-bold text-lg min-w-55 justify-center"
                                >
                                    <Save size={22} />
                                    ثبت و انتشار دوره
                                </button>
                            </div>
                        </form>
                    )
                }

            </div>
        </div>

    );
}