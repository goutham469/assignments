import React from 'react'
import { useEffect } from 'react'
import { Location, useLocation } from 'react-router-dom'

function Products() {
    let state = useLocation();
    console.log(state.state);
    state=state.state;
  return (
    <div>
        <h2 className='text-danger'>Products</h2>
        <div className='row'>
            <div className='col-lg-3'>
                {/* user details goees here */}
                <h3 className='text-warning'>Hi,{state.First_Name}</h3>
                <h3 className='text-secondary'>your details are here:</h3>
                <p className='text-danger'>full name:{state.First_Name}-{state.Last_name}<br/>roll no : {state.Rool_no}<br/>age:{state.age}</p>
            </div>
        </div>
        <h2 className='text-danger'>continue your browsing here</h2>
        <div className='mainDiv row'>
            {

            }
        </div>
    </div>
  )
}

export default Products