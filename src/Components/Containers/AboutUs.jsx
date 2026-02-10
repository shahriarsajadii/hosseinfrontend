import React from 'react'
import AboutUsBox from '../Cards/AboutUsBox'
import { RiVipFill } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import { LuHeadset } from "react-icons/lu";


export default function AboutUs() {
    return (
        <div className='w-[85%] mx-auto gap-5 flex flex-wrap pt-10 md:pt-0'>
            <AboutUsBox title={'دوره های اختصاصی'} desc={'بالاترین کیفیت برای دوره ها تضمین شده'} icon={<RiVipFill className='text-6xl text-green-600 rounded-4xl' />} />
            <AboutUsBox title={'امکان دریافت گواهینامه'} desc={'پایان دوره گواهینامه با قابلیت تایید اعتبار ارائه می‌شود'} icon={<TbCertificate className='text-6xl text-green-600 rounded-4xl' />} />
            <AboutUsBox title={'پشتیبانی حرفه‌ای و مادام‌العمر'} desc={'تیم پشتیبانی ما در تمام طول دوره و حتی بعد از اتمام آن، کنار شماست تا هیچ سوالی بی‌پاسخ نماند'} icon={<LuHeadset className='text-6xl text-green-600 rounded-4xl' />} />
        </div>
    )
}
