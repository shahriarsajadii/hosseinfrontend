// src/components/admin/ArticleFormModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Save, BookOpen, FileText, User, Calendar, Image as ImageIcon } from 'lucide-react';

export default function ArticleFormModal({ isOpen, onClose, onSave, initialData = {}, mode = 'add' }) {
    const [formData, setFormData] = useState({
        title: '',
        shortName: '',
        body: '',
        author: '',
        createdAt: 1404,
        cover: '',
    });

    useEffect(() => {
        if (initialData && mode === 'edit') {
            setFormData({
                title: initialData.title || '',
                shortName: initialData.shortName || '',
                body: initialData.body || '',
                author: initialData.author || '',
                createdAt: initialData.createdAt || '',
                cover: initialData.cover || '',
            });
        }
    }, [initialData, mode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl">
                <div className="sticky top-0 bg-white border-b z-10 px-6 md:px-10 py-5 flex justify-between items-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 lalezar">
                        {mode === 'add' ? 'افزودن مقاله جدید' : 'ویرایش مقاله'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <X size={28} className="text-gray-600" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="px-6 md:px-10 py-8 space-y-7">
                    <FormField
                        icon={<BookOpen size={20} />}
                        label="عنوان مقاله"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />

                    <FormField
                        icon={<FileText size={20} />}
                        label="نام کوتاه (slug)"
                        name="shortName"
                        value={formData.shortName}
                        onChange={handleChange}
                        dir="ltr"
                        required
                    />

                    <FormField
                        icon={<FileText size={20} />}
                        label="محتوای مقاله (body)"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        as="textarea"
                        rows={10}
                        required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            icon={<User size={20} />}
                            label="نویسنده"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                        />

                        <FormField
                            icon={<Calendar size={20} />}
                            label="تاریخ ایجاد"
                            name="createdAt"
                            type="number"
                            value={formData.createdAt}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <FormField
                        icon={<ImageIcon size={20} />}
                        label="آدرس تصویر کاور"
                        name="cover"
                        value={formData.cover}
                        onChange={handleChange}
                        dir="ltr"
                        required
                    />

                    <div className="flex justify-end gap-4 pt-6 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-8 py-3.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl transition font-medium"
                        >
                            لغو
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl transition shadow-md font-medium"
                        >
                            <Save size={20} />
                            {mode === 'add' ? 'ثبت مقاله' : 'ذخیره تغییرات'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function FormField({ icon, label, name, value, onChange, as = 'input', ...props }) {
    const InputComponent = as === 'textarea' ? 'textarea' : 'input';

    return (
        <div className="space-y-2">
            <label className="flex items-center gap-2.5 text-base font-semibold text-gray-800">
                {icon}
                {label}
            </label>
            <InputComponent
                name={name}
                value={value}
                onChange={onChange}
                className="
          w-full px-5 py-4 bg-gray-50 border border-gray-300 
          rounded-2xl focus:border-green-500 focus:ring-4 
          focus:ring-green-100/70 outline-none transition-all 
          text-base leading-7 resize-none
        "
                {...props}
            />
        </div>
    );
}