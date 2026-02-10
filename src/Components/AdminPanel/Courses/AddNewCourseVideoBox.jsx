import { Clock, Film, Plus, X } from 'lucide-react'
import React from 'react'
import Input from '../Input'

export default function AddNewCourseVideoBox({ fields, append, register, errors, remove }) {
    return (
        <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-800">
                    <Film size={24} className="text-green-600" />
                    ویدیوهای دوره
                </h3>
                <span className="text-sm text-gray-600 bg-gray-100 px-4 py-1.5 rounded-full">
                    {fields.length} ویدیو
                </span>
            </div>

            {fields.map((field, index) => (
                <div
                    key={field.id}
                    className="p-6 bg-linear-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all mb-6 group"
                >
                    <div className="flex justify-between items-start mb-5">
                        <h4 className="text-lg font-semibold text-indigo-700 flex items-center gap-2">
                            <Clock size={18} />
                            ویدیو {index + 1}
                        </h4>
                        {fields.length > 1 && (
                            <button
                                type="button"
                                onClick={() => remove(index)}
                                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">عنوان ویدیو</label>
                            <Input
                                {...register(`videos.${index}.title`, { required: 'عنوان ویدیو الزامی است' })}
                                placeholder="معرفی و نصب پروژه"
                            />
                            {errors.videos?.[index]?.title && (
                                <p className="text-red-600 text-sm mt-1">{errors.videos[index].title.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">آدرس ویدیو</label>
                            <Input
                                {...register(`videos.${index}.src`, { required: 'آدرس ویدیو الزامی است' })}
                                dir="ltr"
                                placeholder="https://aparat.com/v/xxxxxxxx"
                            />
                            {errors.videos?.[index]?.src && (
                                <p className="text-red-600 text-sm mt-1">{errors.videos[index].src.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">مدت زمان</label>
                            <input
                                {...register(`videos.${index}.duration`)}
                                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition text-base"
                                placeholder="22"
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={() => append({ title: '', src: '', duration: '' })}
                className="w-full flex items-center justify-center gap-3 py-4 border-2 border-dashed border-green-400/70 text-green-700 rounded-2xl hover:bg-green-50 hover:border-green-500 transition-all font-medium text-base group"
            >
                <Plus size={22} className="group-hover:scale-110 transition-transform" />
                افزودن ویدیو جدید
            </button>
        </div>

    )
}
