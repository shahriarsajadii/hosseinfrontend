import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseCard from '../Components/Cards/CourseCard'
import ArticleCard from '../Components/Cards/ArticleCard'

export default function Search() {
    const [courses, setCourses] = useState([])
    const [articles, setArticles] = useState([])

    const { value } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/v1/search/${value}`)
            .then(res => res.json())
            .then(data => {
                setArticles(data.allResultArticles)
                setCourses(data.allResultCourses)
            })
    }, [])

    return (
        <>
            <SectionHeader title={'دوره ها'} description={`دوره های مرتبط با : ${value}`} icon={<FaBookOpen />} />
            <div className="w-[70%] md:w-[85%] mx-auto 
                                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                                gap-6 py-2">

                {
                    courses.length ? (courses.map(course => {
                        <CourseCard {...course} />
                    })) : (
                        <span className="w-100 h-70 text-4xl bg-red-300 font-bold">
                            دوره ای یافت نشد
                        </span>
                    )
                }
            </div>

            <SectionHeader title={'مقالات'} description={`مقالات مرتبط با : ${value}`} icon={<FaBookOpen />} />
            <div className="w-[70%] md:w-[85%] mx-auto 
                                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                                gap-6 py-2">

                {
                    articles.length ? (articles.map(article => {
                        <ArticleCard {...article} />
                    })) : (
                        <span className="w-100 h-70 text-4xl bg-red-300 font-bold">
                            مقاله ای یافت نشد
                        </span>
                    )
                }
            </div>
        </>
    )
}
