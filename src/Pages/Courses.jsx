import React, { useEffect, useState } from 'react'
import CourseCard from '../Components/Cards/CourseCard'
import SectionHeader from '../Components/SectionHeader'
import { FaBookOpen } from 'react-icons/fa'
import axios from 'axios'
import PaginationBox from '../Components/PaginationBox'
import api from "../../api.js";

export default function Courses() {

    const [courses, setCourses] = useState([])
    const [currentDatas, setCurrentDatas] = useState([])
   

    async function gettingDatas() {
        const { data } = await api.get(`courses`)
        setCourses(data)
    }
    useEffect(() => {
        gettingDatas()
    }, [])

    return (
        <div className='mt-30'>
            <SectionHeader title={'همه ی دوره‌ها'} description={'تمامی دوره های هلرن'} icon={<FaBookOpen />} />
            <div className="w-[70%] md:w-[85%] mx-auto
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    gap-6 py-2">

                {
                    currentDatas.length && currentDatas.map(course => {
                        return <CourseCard key={course.id} {...course} />
                    })
                }
            </div>
            <PaginationBox items={courses} itemsPerPage={4} setCurrentDatas={setCurrentDatas} />
            
        </div>
    )
}
