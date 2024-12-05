import React from 'react'
import NavBar from './navBar';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
        <NavBar/>
        <div style={{minHeight:"60vh",backgroundColor:"rgb(142, 164, 120)",padding:"20px"}}>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout;