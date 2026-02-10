import React from 'react'
import { Link } from 'react-router-dom'
export default function RelatedCourseCard({ title, shortName, cover, description }) {

  return (
    <Link to={`/courses/${shortName}`}>
      <div className='flex p-2 shadow-lg'>
        <img src={`${cover}`} className='w-33 h-23 rounded-2xl' />
        <div className='flex flex-col justify-center items-center gap-2 mr-10'>
          <p className='text-2xl'>{title}</p>
          <p className='text-black/70'>{description}</p>
        </div>
      </div>
    </Link>
  )
}
