import { useContext, createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [paymentDetails, setPaymentDetails] = useState({})

    const login = (userData) => {
        const normalizedUser = {
            ...userData,
            courses: Array.isArray(userData.courses)
                ? userData.courses
                : JSON.parse(userData.courses || "[]")
        }

        setUserInfo(normalizedUser)
        console.log(normalizedUser);
        setIsLoggedIn(true)
        localStorage.setItem('user', userData.token)
    }

    const logout = () => {
        setUserInfo()
        setIsLoggedIn(false)
        localStorage.clear()
    }
    const paymentData = (id, title, shortname, price, students) => {
        setPaymentDetails({
            id,
            title,
            shortname,
            price,
            students
        })
    }

    const globalValues = {
        userInfo,
        isLoggedIn,
        login,
        logout,
        paymentData,
        paymentDetails,
    }

    return (
        <AuthContext.Provider value={globalValues}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuth = () => {
    return useContext(AuthContext)
}