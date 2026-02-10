import { Link } from "react-router-dom";

export default function ArticleCard({ title, body, cover, shortName }) {
    return (
        <div className="flex flex-col bg-white rounded-2xl shadow shadow-gray-400  transition-all duration-300 p-4 border border-gray-100">

            <img
                src={`${cover}`}
                className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 ">
                {title}
            </h3>

            <p className="text-gray-600 text-md md:text-lg mt-2 line-clamp-2">
                {body}
            </p>

            <Link to={`/articles/${shortName}`} className="mt-4 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-semibold  px-4 py-2 rounded-xl  hover:bg-gray-200  transition-all duration-300">
                مشاهده کامل مقاله
            </Link>

        </div>
    );
}