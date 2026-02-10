import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import RelatedCourseModal from './RelatedCourseModal'

export default function Banner() {

  const [searchValue, setSearchValue] = useState('')
  const [showRelatedCourse, setShowRelatedCourse] = useState(false)
  const navigate = useNavigate()

  const goToSearchPage = () => {
    navigate(`/search/${searchValue}`)
  }
  const searchHandler = (e) => {
    setSearchValue(e.target.value)
    setShowRelatedCourse(true)
  }

  const [sequence] = useState([
    'مرجع تخصصی آموزش برنامه نویسی',
    2000,
    'مرجع تخصصی تحلیل مقالات روز دنیای تکنولوژی',
    2000
  ])

  const [sequence2] = useState([
    'یادگیری تضمینی با کمترین قیمت و بیشترین کیفیت'
  ])

  return (
    <div className="relative h-125! sm:h-100 md:h-125 lg:h-170! overflow-x-hidden rounded-b-[100%_30%] md:mb-10">

      <img src="banner3.jpg" alt="" className="w-full h-full object-cover" />

      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/45 pt-20 sm:pt-28 md:pt-36">

        <div className="flex h-full items-center justify-around flex-col px-4">

          <div className="flex flex-col gap-6 sm:gap-10">
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={180}
              className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center lalezar leading-relaxed"
              repeat={Infinity}
            />

            <TypeAnimation
              sequence={sequence2}
              wrapper="span"
              speed={180}
              className="text-white text-md sm:text-xl md:text-2xl text-center"
            />
          </div>

          <div className='w-full max-w-87.5 sm:max-w-112.5 md:max-w-137.5'>
            <div className="flex items-center justify-between backdrop-blur-md border border-green-300/40 shadow-sm rounded-2xl px-4 py-3 sm:py-4 transition focus-within:ring-2 focus-within:ring-green-400 mb-10 w-full max-w-87.5 sm:max-w-112.5 md:max-w-137.5">
              <input
                type="text"
                placeholder="دنبال چه دوره ای هستی ؟"
                className="bg-transparent outline-none text-sm sm:text-base md:text-lg text-white text-center placeholder-green-300 w-full"
                value={searchValue}
                onChange={(e) => searchHandler(e)}
              />
              <FaSearch
                onClick={goToSearchPage}
                className="text-green-400 ml-2 text-xl sm:text-2xl md:text-3xl cursor-pointer" />
            </div>
            {
              searchValue.length >= 3 && <RelatedCourseModal searchValue = {searchValue} />
            }
          </div>

        </div>
      </div>
    </div>
  )
}
