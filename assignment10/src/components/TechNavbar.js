import React from 'react'
import { Link } from 'react-router-dom'

function TechNavbar() {
  return (
    <div className='row TechNavBarDiv'>
        <div className='col-lg-4'></div>
        <div className='row col-lg-5 TechNavBarElements'>
            <div className='col-lg-3 '>
                <Link to='c'>C Programming</Link>
            </div>
            <div className='col-lg-1'>
                <Link to="java">Java</Link>
            </div>
            <div className='col-lg-2'>
                <Link to="python">Python</Link>
            </div>
            <div className='col-lg-1'>
                <Link to="frontend">Frontend</Link>
            </div>
        </div>
    </div>
  )
}

export default TechNavbar