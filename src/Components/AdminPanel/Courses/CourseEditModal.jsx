import { Bookmark, CircleX, X } from 'lucide-react'
import Input from '../Input'

export default function CourseEditModal({ selectedCourse, handleInputChange, handleSave, setModalOpen, handleVideoChange }) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">

                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 lalezar">
                        ویرایش دوره: {selectedCourse?.title}
                    </h2>
                    <button
                        onClick={() => setModalOpen(false)}
                        className="text-gray-500 hover:text-red-600 transition p-2 rounded-full hover:bg-red-50"
                    >
                        <X size={28} />
                    </button>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">عنوان دوره</label>
                        <Input name="title" value={selectedCourse?.title || ''} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">نام کوتاه</label>
                        <Input name="shortName" value={selectedCourse?.shortName || ''} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">توضیحات</label>
                        <textarea name="description" value={selectedCourse?.description || ''} onChange={handleInputChange} className="w-full p-4 border border-gray-300 rounded-xl focus:border-green-500 min-h-30 text-gray-800" />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">مدرس</label>
                        <Input name="teacher" value={selectedCourse?.teacher || ''} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">قیمت (تومان)</label>
                        <Input name="price" type="number" value={selectedCourse?.price || 0} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">سال ساخت</label>
                        <Input name="createdAt" type="number" value={selectedCourse?.createdAt || ''} onChange={handleInputChange} />
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span>ویدیوهای دوره</span>
                        </h3>

                        {selectedCourse?.video && Array.isArray(selectedCourse.video) &&
                            selectedCourse.video.map((video, index) => (
                                <div key={video.id || index} className="mb-6 p-4 bg-gray-50/40 rounded-xl border border-gray-200">
                                    <div className="flex justify-between items-center mb-3">
                                        <h4 className="text-md text-indigo-500 font-medium bg-indigo-50 inline-block px-3 mt-3 py-1 rounded-full">
                                            ویدیو {index + 1}
                                        </h4>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">عنوان ویدیو</label>
                                            <Input
                                                type="text"
                                                value={video.title}
                                                onChange={(e) => handleVideoChange(index, 'title', e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">آدرس / src</label>
                                            <Input
                                                type="text"
                                                dir="ltr"
                                                value={video.src}
                                                onChange={(e) => handleVideoChange(index, 'src', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                        {(!selectedCourse?.video || selectedCourse.video.length === 0) && (
                            <p className="text-center text-gray-500 py-4">هیچ ویدیویی ثبت نشده است.</p>
                        )}
                    </div>
                </form>

                <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
                    <button
                        onClick={() => setModalOpen(false)}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition w-full sm:w-auto"
                    >
                        <CircleX size={20} />
                        لغو
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition w-full sm:w-auto"
                    >
                        <Bookmark size={20} />
                        ذخیره تغییرات
                    </button>
                </div>
            </div>
        </div>
    )
}
