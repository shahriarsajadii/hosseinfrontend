import React, { useState } from 'react';
import { User, Mail, Lock, Upload, Save, X } from 'lucide-react';
import api from '../../../api'

export default function EditMyInfo({ userInfo, setShowNotif }) {
    const [formData, setFormData] = useState({
        name: userInfo.name,
        username: userInfo.username,
        password: userInfo.password,
        profile: userInfo.profile,
    });
    const [previewImage, setPreviewImage] = useState(`${formData.profile}`);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImage = (e) => {
        const imageUrl = e.target.value
        const finalPath = `/images/profiles/${imageUrl.slice(12, imageUrl.length)}`
        console.log(finalPath);
        setFormData(prev => ({ ...prev, profile: finalPath }))
        setPreviewImage(`${finalPath}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userInfo.isAdmin) {
            const { data } = await api.put(`admins/${userInfo.id}`, formData)
        } else {
            const { data } = await api.put(`users/${userInfo.id}`, formData)
        }
        setShowNotif(true)
    };

    return (
        <div className=" w-full max-w-sm mx-auto bg-white rounded-3xl  shadow-2xl border border-gray-200/70  overflow-hidden  p-6 md:p-8 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-extrabold text-gray-900 lalezar">
                    ویرایش اطلاعات کاربری
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3 text-center">
                    <label className="block text-base font-semibold text-gray-800 mb-2">
                        عکس پروفایل
                    </label>
                    <div className="relative inline-block">
                        <img
                            src={previewImage}
                            alt="پروفایل"
                            className="w-32 h-32 rounded-full object-cover border-4 border-green-500/20 shadow-lg mx-auto"
                        />
                        <label
                            htmlFor="profile-upload"
                            className="absolute bottom-0 right-0 bg-green-500 p-2.5 rounded-full text-white shadow-md cursor-pointer hover:bg-green-600 transition"
                        >
                            <Upload size={18} />
                            <input
                                id="profile-upload"
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImage(e)}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-base font-semibold text-gray-800">
                        <User size={20} className="text-green-600" />
                        نام کامل
                    </label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100/70 outline-none transition-all text-base"
                    />
                </div>

                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-base font-semibold text-gray-800">
                        <Mail size={20} className="text-green-600" />
                        نام کاربری
                    </label>
                    <input
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100/70 outline-none transition-all text-base"
                    />
                </div>

                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-base font-semibold text-gray-800">
                        <Lock size={20} className="text-green-600" />
                        رمز عبور جدید
                    </label>
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100/70 outline-none transition-all text-base"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-linear-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-bold text-lg"
                >
                    <Save size={22} />
                    ذخیره تغییرات
                </button>
            </form>
        </div>
    );
}