import './parent.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react'
import Child from './child/child';
function Parent(){
    let [a,changea] = useState(0);
    function incrementaValue(){changea(a+1)}
    function decrementaValue(){changea(a-1)}
    return (
        <div>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 parentDiv'>
                    <p>Parent</p>
                    <p className='Counter'>Counter = {a}</p>
                    <div className='row'>
                        <div className='col-lg-4'></div>

                        <div className='col-lg-4'>
                            <Child in={incrementaValue} de={decrementaValue}/>
                        </div>

                        <div className='col-lg-4'></div>
                    </div>
                </div>
                <div className='col-lg-3'></div>
            </div>
        </div>
    )
}
export default Parent;