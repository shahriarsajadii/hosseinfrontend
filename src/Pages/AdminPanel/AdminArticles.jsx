// src/components/admin/AdminArticles.jsx
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import api from '../../../api';
import AdminArticleCard from '../../Components/AdminPanel/Articles/AdminArticleCard';
import ArticleFormModal from '../../Components/AdminPanel/Articles/ArticleFormModal';

export default function AdminArticles() {
    const [articles, setArticles] = useState([]);
    const [modalType, setModalType] = useState(null);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const { data } = await api.get('/articles');
            setArticles(data || []);
        } catch (err) {
            console.error('خطا در بارگذاری مقالات:', err);
        }
    };

    const handleAdd = () => {
        setSelectedArticle(null);
        setModalType('add');
    };

    const handleEdit = (article) => {
        setSelectedArticle(article);
        setModalType('edit');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('آیا مطمئن هستید که این مقاله حذف شود؟')) return;
        try {
            await api.delete(`/articles/${id}`);
            setArticles(prev => prev.filter(a => a.id !== id));
        } catch (err) {
            console.error('خطا در حذف مقاله:', err);
        }
    };

    const handleSave = async (data) => {
        try {
            if (modalType === 'add') {
                const { data: newArticle } = await api.post('/articles', data);
                setArticles(prev => [...prev, newArticle]);
            } else if (modalType === 'edit' && selectedArticle) {
                const { data: updated } = await api.put(`/articles/${selectedArticle.id}`, data);
                setArticles(prev => prev.map(a => a.id === updated.id ? updated : a));
            }
            setModalType(null);
            setSelectedArticle(null);
        } catch (err) {
            console.error('خطا در ذخیره مقاله:', err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* هدر */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 lalezar">
                        مدیریت مقالات
                    </h1>
                    <button
                        onClick={handleAdd}
                        className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all"
                    >
                        <Plus size={20} />
                        مقاله جدید
                    </button>
                </div>

                {articles.length === 0 ? (
                    <div className="text-center py-20 text-gray-500 text-xl">
                        هنوز هیچ مقاله‌ای ثبت نشده است
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {articles.map(article => (
                            <AdminArticleCard
                                key={article.id}
                                article={article}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}

                {modalType && (
                    <ArticleFormModal
                        isOpen={!!modalType}
                        onClose={() => setModalType(null)}
                        onSave={handleSave}
                        initialData={selectedArticle}
                        mode={modalType}
                    />
                )}
            </div>
        </div>
    );
}