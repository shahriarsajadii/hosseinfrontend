import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // آیکون‌ها
import api from '../../../api';
import { Pencil, Trash } from 'lucide-react';
import AddNewCourseBox from '../../Components/AdminPanel/Courses/AddNewCourseBox';
import Notification from '../../Components/Notification';
import CourseEditModal from '../../Components/AdminPanel/Courses/CourseEditModal';
import AdminCourseBox from '../../Components/AdminPanel/Courses/AdminCourseBox';

export default function AdminCourses() {
    const [courses, setCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [delModal, setDelModal] = useState(false)
    const [editModal, setEditModal] = useState(false)

    async function gettingData() {
        try {
            const { data } = await api.get('courses')
            setCourses(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        gettingData()
    }, [])

    const handleEdit = (course) => {
        let parsedVideo = [];
        try {
            parsedVideo = typeof course.video === 'string' ? JSON.parse(course.video) : course.video;
        } catch (e) {
            parsedVideo = [];
        }

        setSelectedCourse({ ...course, video: parsedVideo });
        setModalOpen(true);
    };

    const handleSave = async (e) => {
        if (e) e.preventDefault();

        try {
            const res = await api.put(`courses/${selectedCourse.id}`, selectedCourse);

            if (res.status === 200) {
                setModalOpen(false);
                gettingData();

                setEditModal(true)
            }
        } catch (err) {
            console.error("خطا در ویرایش:", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`courses/${id}`)
            setDelModal(true)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        gettingData()
        const notifTimeout = setTimeout(() => {
            setDelModal(false);
            setEditModal(false);
        }, 3000);
        return () => clearTimeout(notifTimeout);
    }, [delModal, editModal])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedCourse((prev) => ({ ...prev, [name]: value }));
    };

    const handleVideoChange = (index, field, value) => {
        const updatedVideos = [...selectedCourse.video];
        updatedVideos[index][field] = value;
        setSelectedCourse(prev => ({ ...prev, video: updatedVideos }));
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-8">
            {delModal && <Notification
                isOpen={delModal}
                onClose={() => setDelModal(false)}
                title={`حذف دوره`}
                message={`دوره با موفقیت حذف شد`}
                icon={<Trash />}
                iconColor='red'
            />}
            {editModal && <Notification
                isOpen={editModal}
                onClose={() => setEditModal(false)}
                title={`ویرایش دوره`}
                message={`دوره با موفقیت ویرایش شد`}
                icon={<Pencil />}
            />}

            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 md:mb-12 text-center lalezar">
                    پنل مدیریت دوره‌ها
                </h1>

                <AddNewCourseBox />

                <AdminCourseBox courses={courses} handleDelete={handleDelete} handleEdit={handleEdit} />

                {modalOpen && (
                    <CourseEditModal
                        selectedCourse={selectedCourse}
                        handleInputChange={handleInputChange}
                        handleSave={handleSave}
                        setModalOpen={setModalOpen}
                        handleVideoChange={handleVideoChange}
                    />
                )}
            </div>
        </div>
    );
}
