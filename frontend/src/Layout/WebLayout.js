import React, { Children } from 'react'
import Header from '../components/Home/Header/Header'
import Footer from '../components/Shared/Footer/Footer'

function WebLayout({children}) {
  return (
    <>
            <Header/>
            {children}
            <Footer/>
    </>
  )
}

export default WebLayout