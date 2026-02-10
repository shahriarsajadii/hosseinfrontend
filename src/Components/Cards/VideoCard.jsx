import { FaPlayCircle, FaDownload, FaLockOpen, FaLock } from "react-icons/fa";

export default function VideoCard({ id, title, duration, isUserRegisteredToThisCourse }) {
    return (
        <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center gap-3 justify-between hover:shadow-xl transition">

            <div className="flex items-center gap-4">
                {
                    isUserRegisteredToThisCourse ? (
                        <FaLockOpen className="text-green-600 text-xl" />
                    ) : (
                        <FaLock className="text-red-600 text-xl" />
                    )
                }

                <div className="flex flex-col">
                    <h3 className="font-bold text-gray-800 text-lg">
                        {id}. {title}
                    </h3>
                    <span className="text-gray-500 text-sm">{duration}</span>
                </div>
            </div>


            {
                isUserRegisteredToThisCourse ? (
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                            <FaPlayCircle className="text-base" />
                            پخش
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm">
                            <FaDownload className="text-base" />
                            دانلود
                        </button>
                    </div>

                ) : (
                    <div className="flex items-center gap-3">
                        <button disabled className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg transition text-sm">
                            <FaLock className="text-base" />
                            ویدیو قفل است
                        </button>

                    </div>
                )
            }

        </div>
    );
}