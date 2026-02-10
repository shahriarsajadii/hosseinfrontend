import React, { useEffect, useState } from 'react'
import { FaTag, FaUser } from 'react-icons/fa'
import CourseCardSkeleton from './CourseCardSkeleton'
import { Link } from 'react-router-dom'

export default function CourseCard({ shortName, title, cover, description, teacher, price }) {
  const [isCardLoaded, setIsCardLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsCardLoaded(true)
    }, 1000)
  }, [])
  return (
    <>
      {
        !isCardLoaded ?
          (<CourseCardSkeleton />) :
          (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer h-95 ">
              <Link to={`/courses/${shortName}`} >
                <div className="relative  rounded-xl">
                  <img
                    src={cover}
                    alt="Course"
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                  />

                  {
                    price === 0 ? (
                      <span className="absolute top-3 left-3 bg-linear-to-r from-red-900 to-red-600 text-white text-xs font-bold px-3 py-2 rounded-full group-hover:rounded-md shadow-md animate-pulse">
                        رایگان
                      </span>
                    ) : ''
                  }
                </div>

                <div className="mt-4 space-y-3 px-5">
                  <h3 className="text-2xl font-extrabold text-green-700 group-hover:text-green-800 transition">
                    {title}
                  </h3>

                  <p className="text-md md:text-lg text-gray-600 line-clamp-1">
                    {description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-gray-700 text-md lg:text-lg">
                      <FaUser className="text-green-600" />
                      <span>{teacher}</span>
                    </div>

                    <div className="flex items-center gap-1 text-green-700 font-extrabold text-md lg:text-lg">
                      <FaTag className="text-green-600" />
                      {
                        price === 0 ? 'رایگان' : `${price.toLocaleString()} تومان`
                      }
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          )
      }

    </>
  )
}
