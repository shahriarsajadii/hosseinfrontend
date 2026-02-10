import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function AboutBanner() {

  const [sequence1] = useState([
    'درباره آکادمی HoLearn'
  ])
  const [sequence2] = useState([
    ' ما اینجا هستیم تا یادگیری برنامه‌نویسی رو از یک کابوس سخت، به یک ماجراجویی شیرین تبدیل کنیم. '
  ])

  return (
    <div className="relative mainTheme rounded-b-[100%_30%] px-6 text-center text-white overflow-hidden py-30  sm:py-50 shadow-lg">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="green" />
        </svg>
      </div>
      <div className='flex flex-col'>
        <TypeAnimation
          sequence={sequence1}
          wrapper="span"
          speed={210}
          className="text-white text-3xl sm:text-lg md:text-6xl text-center lalezar mb-10!"
        />
        <TypeAnimation
          sequence={sequence2}
          wrapper="span"
          speed={160}
          className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed"
        />
      </div>


    </div>
  )
}
