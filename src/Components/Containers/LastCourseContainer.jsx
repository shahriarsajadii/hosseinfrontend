import React, { useEffect, useState } from 'react'
import CourseCard from '../Cards/CourseCard'
import SectionHeader from '../SectionHeader'
import { FaBookOpen } from 'react-icons/fa'
import axios from 'axios'

export default function LastCourseContainer() {

    const [courses, setCourses] = useState([])
    async function gettingDatas() {
        const { data } = await axios.get(`http://localhost:8000/api/courses`)
        setCourses(data)
    }
    useEffect(() => {
        gettingDatas()
    }, [])

    return (
        <>
            <div className="w-[70%] md:w-[85%] mx-auto 
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    gap-6 py-2">

                {
                    courses.splice(0, 4).map(course => {
                        return <CourseCard key={course.id} {...course} />
                    })
                }

            </div>
        </>
    )
}
