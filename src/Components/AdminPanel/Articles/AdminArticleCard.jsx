// src/components/admin/ArticleCard.jsx
import React from 'react';
import { Edit, Trash2, Eye, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminArticleCard({ article, onEdit, onDelete }) {
    return (
        <div className="
      bg-white rounded-2xl shadow-lg overflow-hidden 
      border border-gray-200 hover:shadow-2xl hover:border-green-200 
      transition-all duration-300 group
    ">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={article.cover}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold lalezar line-clamp-2">{article.title}</h3>
                    <p className="text-sm opacity-90 mt-1">نویسنده: {article.author}</p>
                </div>
            </div>

            <div className="p-6">
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-6 min-h-18">
                    {article.body}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {article.createdAt}
                    </span>
                    <span className="text-green-600 font-medium">{article.shortName}</span>
                </div>

                <div className="flex justify-between gap-3">
                    <button
                        onClick={() => onEdit(article)}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition"
                    >
                        <Edit size={18} />
                        ویرایش
                    </button>
                    <button
                        onClick={() => onDelete(article.id)}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl transition"
                    >
                        <Trash2 size={18} />
                        حذف
                    </button>
                    <Link
                        to={`/articles/${article.shortName}`}
                        className="flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition"
                    >
                        <Eye size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
}