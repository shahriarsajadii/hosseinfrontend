import Banner from '../Components/Banner'
import LastCourseContainer from '../Components/Containers/LastCourseContainer'
import SectionHeader from '../Components/SectionHeader'
import { FaBookOpen, FaQuestion } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import AboutUs from '../Components/Containers/AboutUs';
import LastArticlesContainer from '../Components/Containers/LastArticlesContainer';
import AnimatedSection from '../AnimatedSection';

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Banner />
      <AnimatedSection>
        <SectionHeader title={'جدیدترین دوره‌ها'} description={'سکوی پرتاب شما به سمت موفقیت'} btnTitle={'تمامی دوره ها'} icon={<FaBookOpen />} path={'/courses'} />
        <LastCourseContainer />
      </AnimatedSection>

      <AnimatedSection direction='right'>
        <SectionHeader title={'چرا ما را انتخاب کنید '} description={'هلرن بهترین انتخاب هست چون :'} icon={<FaQuestion />} />
        <AboutUs />
      </AnimatedSection>

      <AnimatedSection direction='left'>
        <SectionHeader title={'جدیدترین مقاله ها'} description={'به روز ترین اخبار تکنولوژی :'} icon={<FaBook />} btnTitle={'تمامی مقالات'} path={`/articles`} />
        <LastArticlesContainer />
      </AnimatedSection>
    </div>
  )
}
