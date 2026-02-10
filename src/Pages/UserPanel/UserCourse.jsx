import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import api from '../../../api'
import CourseCard from '../../Components/Cards/CourseCard'

export default function UserCourse() {

    const { userInfo } = useAuth()
    const [allCourse, setAllCourse] = useState([])
    const [loading, setLoading] = useState(true)
    const [userCourse, setUserCourse] = useState([])




    async function gettingAllCourse() {
        const { data } = await api.get('courses')
        setAllCourse(data)
        setLoading(false)
    }


    useEffect(() => {
        gettingAllCourse()
    }, [])

    useEffect(() => {
        if (!loading && userInfo?.courses?.length) {
            const filteredCourses = allCourse.filter(course =>
                userInfo.courses.includes(course.shortName)
            )
            setUserCourse(filteredCourses)
        }
    }, [loading, allCourse, userInfo?.courses])

    return (
        <>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 md:mb-12 mt-10 text-center lalezar">
                دوره های من
            </h1>
            <div className='w-[70%] md:w-[85%] mx-auto
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                    gap-6 py-2'>
                {
                    userCourse.length && userCourse.map(course => {
                        return <CourseCard key={course.id} {...course} />
                    })
                }
            </div>
        </>
    )
}
