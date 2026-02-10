import Home from './Pages/Home'
import ArticleInfo from './Pages/ArticleInfo'
import CourseInfo from './Pages/CourseInfo'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Courses from './Pages/Courses'
import Articles from './Pages/Articles'
import AdminPanel from './Pages/AdminPanel/AdminPanel'
import Users from './Pages/AdminPanel/Users'
import AdminCourses from './Pages/AdminPanel/AdminCourses'
import AdminArticles from './Pages/AdminPanel/AdminArticles'
import AboutUs from './Pages/AboutUs'
import PaymentPage from "./Pages/PaymentPage.jsx";
import Comments from './Pages/AdminPanel/Comments.jsx'
import UserPanel from './Pages/UserPanel/UserPanel.jsx'
import UserCourse from './Pages/UserPanel/UserCourse.jsx'
import UserInfoChange from './Pages/UserPanel/UserInfoChange.jsx'

const routes = [
    { path: '/', element: <Home /> },
    { path: '/courses/:CourseName', element: <CourseInfo /> },
    { path: '/articles/:articleName', element: <ArticleInfo /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Register /> },
    { path: '/courses', element: <Courses /> },
    { path: '/articles', element: <Articles /> },
    { path: '/search/:value', element: <Search /> },
    { path: '/about', element: <AboutUs /> },
    { path: '/payment', element: <PaymentPage /> },

    {
        path: '/p-admin/*', element:
            <AdminPanel />
        , children: [
            { index: true, element: <Users /> },
            { path: 'users', element: <Users /> },
            { path: 'courses', element: <AdminCourses /> },
            { path: 'comments', element: <Comments /> },
            { path: 'articles', element: <AdminArticles /> },
            { path: 'my-information', element: <UserInfoChange /> },
        ]
    },
    {
        path: '/p-user/*', element:
            <UserPanel />
        , children: [
            { index: true, element: <UserCourse /> },
            { path: 'courses', element: <UserCourse /> },
            { path: 'my-information', element: <UserInfoChange /> },
        ]
    }

]

export default routes