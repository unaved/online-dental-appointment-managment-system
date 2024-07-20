import React from 'react'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'
import Header from '../components/Home/Header/Header'

function Layout({children}) {
  return (
    <>
        
        <div className="container-fluid">            
            <div className="row">
            <Sidebar></Sidebar>
            <div className="col-10 px-4">
                <div className="row">
                    {children}
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Layout