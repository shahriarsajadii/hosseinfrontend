import React, { useCallback, useEffect, useState } from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import axios from 'axios'
import { useAuth } from './Context/AuthContext';
export default function App() {

  // router
  const router = useRoutes(routes)
  const showHeaderFooter =
    router.props.match.pathname != '/login' &&
    router.props.match.pathname != '/signup' &&
    !router.props.match.pathname.includes('/p-admin') &&
    !router.props.match.pathname.includes('/p-user') &&
    !router.props.match.pathname.includes('/payment')

  const { isLoggedIn, login } = useAuth()

  useEffect(() => {
    const userToken = localStorage.getItem('user')
    const gettingData = async () => {
      const { data } = await api.get('users/')
      const user = data.find(user => user.token === userToken)
      user && login(user)
    }
    userToken && gettingData()
  }, [isLoggedIn])


  return (
    <>
      {showHeaderFooter && <Header />}
      {router}
      {showHeaderFooter && <Footer />}
    </>
  )
}
