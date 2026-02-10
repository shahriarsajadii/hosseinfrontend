import React, { useEffect, useState } from 'react'
import api from '../../api'
import RelatedCourseCard from './Cards/RelatedCourseCard'

export default function RelatedCourseModal({ searchValue }) {

    const [foundedCourse, setFoundedCourse] = useState([])

    async function gettingData() {
        const { data } = await api.get('courses')
        setFoundedCourse(data.filter(course => course.title.includes(searchValue)))
    }
    useEffect(() => {
        const courseTimeout = setTimeout(() => {
            gettingData()
        }, 1000)
        return () => clearTimeout(courseTimeout)

    }, [searchValue])

    return (
        <>
            {
                <div className='bg-white/70 w-full rounded-2xl h-50 overflow-y-scroll'>
                    {
                        foundedCourse && foundedCourse.map(course => {
                            return <RelatedCourseCard {...course} />
                        })
                    }
                </div>
            }

        </>
    )
}
