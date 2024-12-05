import React from 'react'
import TechNavbar from './TechNavbar'
import './all.css'
import { Outlet } from 'react-router-dom' 

function Technologies() {
  return (
    <div>
        <h2>Technologies</h2>
        <p>we provide a lot many technologies , some of our top learned technologies are</p>
        <TechNavbar/>
        <Outlet/>
    </div>
  )
}

export default Technologies