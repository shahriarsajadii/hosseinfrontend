import React from 'react'

export default function AboutStory() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-200 rounded-3xl blur-lg opacity-30"></div>
            <img
              src="/team.webp"
              alt="تیم ما"
              className="relative rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500 w-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 border-r-4 border-green-600 pr-4">
            ما کی هستیم؟
          </h2>
          <p className="text-gray-600 leading-8 text-justify text-xl">
            داستان HoLearn از یک ایده ساده شروع شد: "چرا آموزش‌های فارسی باید خسته‌کننده باشن؟".
            ما جمعی از برنامه‌نویس‌های عاشق تکنولوژی هستیم که دور هم جمع شدیم تا با کیفیت‌ترین دوره‌ها رو با
            زبان ساده و پروژه‌محور ارائه بدیم. هدف ما فقط فروش دوره نیست؛ هدف ما ساختن متخصص‌هایی هست که
            بتونن توی بازار کار واقعی حرفی برای گفتن داشته باشن.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="block text-3xl font-extrabold text-green-600 mb-1">50+</span>
              <span className="text-md text-gray-500 font-medium">دوره آموزشی فعال</span>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="block text-3xl font-extrabold text-green-600 mb-1">10+ هزار</span>
              <span className="text-md text-gray-500 ">دانشجوی راضی</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
