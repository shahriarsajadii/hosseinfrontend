import {
  User,
  Clock,
  CalendarDays,
  Users,
  Eye,
  MessageCircle,
  PlayCircle,
  BadgeCheck,
  Wallet
} from "lucide-react";

import CourseInfoCard from "../Components/Cards/CourseInfoCard";
import { useEffect, useState } from "react";
import CourseInfoBanner from "../Components/CourseInfoBanner";
import CommentCard from "../Components/Cards/CommentCard";
import VideoCard from "../Components/Cards/VideoCard";
import AddComment from "../Components/AddComment";
import { useParams } from "react-router-dom";
import { useAuth } from '../Context/AuthContext';
import api from '../../api'
import Notification from '../Components/Notification';
import { FaRegCommentDots } from "react-icons/fa";



export default function CourseInfo() {

  const { userInfo, paymentData } = useAuth()
  const [courseDetails, setCourseDetails] = useState({})
  const [courseComments, setCourseComments] = useState([])
  const [courseLength, setCourseLength] = useState(0)
  const [courseBoxVal, setCourseBoxVal] = useState();
  const [isUserRegisteredToThisCourse, setIsUserRegisteredToThisCourse] = useState(false)
  const [sendComment, setSendComment] = useState(false)

  const { CourseName } = useParams()

  const gettingData = async () => {
    const { data } = await api.get(`courses/${CourseName}`)
    const { data: comments } = await api.get(`comments`)
    setCourseComments(comments?.filter(com => com.course === CourseName))
    setCourseDetails(data)
    paymentData(data?.id, data?.title, data?.shortName, data?.price, data?.students)
  }
  useEffect(() => {
    gettingData()
  }, [])

  useEffect(() => {
    userInfo?.isAdmin == true && setIsUserRegisteredToThisCourse(true)

    let durationMinute = 0
    courseDetails?.video?.map(vid => {
      durationMinute += vid.duration
    })

    const userBuy = courseDetails?.students?.find(student => student === userInfo.username)
    userBuy && setIsUserRegisteredToThisCourse(true)
    courseDetails?.price === 0 && setIsUserRegisteredToThisCourse(true)
    setCourseLength(Math.ceil(durationMinute / 60))

    setCourseBoxVal([
      { icon: <User />, label: "مدرس", value: courseDetails.teacher },
      { icon: <Clock />, label: "مدت دوره", value: `${courseLength} ساعت` },
      { icon: <CalendarDays />, label: "زمان برگذاری", value: courseDetails.createdAt },
      { icon: <Users />, label: "دانشجو", value: courseDetails?.students?.length },
      { icon: <Eye />, label: "تهیه دوره", value: isUserRegisteredToThisCourse === true ? 'شما دانشجوی دوره هستید' : 'دوره خریداری نشده' },
      { icon: <MessageCircle />, label: "دیدگاه‌ها", value: courseComments?.length },
      { icon: <PlayCircle />, label: "نوع مشاهده", value: "ضبط‌شده / آنلاین" },
      { icon: <Wallet />, label: "قیمت دوره", value: courseDetails?.price?.toLocaleString() },
    ])
  }, [courseDetails, courseLength, courseComments, userInfo]);

  const submitComment = async (newCommentBody) => {
    const newComment = {
      name: userInfo.name,
      user: userInfo.username,
      body: newCommentBody,
      course: CourseName
    }
    await api.post('comments', newComment)
    setSendComment(true)
    const commentTimeOut = setTimeout(() => {
      setSendComment(false);
    }, 3000);
    return () => clearTimeout(commentTimeOut);
  }

  return (
    <div className="min-h-screen">
      <CourseInfoBanner isUserRegisteredToThisCourse={isUserRegisteredToThisCourse} title={courseDetails.title} description={courseDetails.description} cover={courseDetails.cover} />

      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {courseBoxVal && courseBoxVal.map((item, i) => (
          <CourseInfoCard
            key={i}
            icon={item.icon}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>


      <div className="max-w-7xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          ویدیوهای دوره
        </h2>
        <div className="space-y-6">
          {
            courseDetails?.video?.length ? (
              courseDetails.video.map((session, index) => (
                <VideoCard
                  key={index + 1}
                  id={index + 1}
                  title={session.title}
                  duration={session.time}
                  isUserRegisteredToThisCourse={isUserRegisteredToThisCourse}
                />
              ))
            ) : (
              <p className="text-2xl bg-red-300 text-center py-10 rounded-2xl">متاسفانه هنوز برای این دوره ویدیویی ثبت نشده . لطفا بعدا دوباره چک کنید</p>
            )

          }

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24">
        {
          sendComment && <Notification
            isOpen={sendComment}
            title={`تبریک میگم`}
            message={`کامنت شما با موفقیت ثبت شد`}
            icon={<FaRegCommentDots />}
          />
        }
        {
          courseComments.length ? (
            <>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
                نظرات دانشجویان
              </h2>
              <CommentCard courseComments={courseComments} />
            </>
          ) : (
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
              هنوز کامنتی ثبت نشده
            </h2>
          )
        }

        <AddComment submitComment={submitComment} />
      </div>
    </div >
  );
}