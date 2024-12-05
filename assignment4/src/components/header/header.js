import './header.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo1 from './google img.jpeg'
function header(){
    return(
        <div className='row HeaderDiv'>
            <div className='col-lg-1'><img className='logo01' src={logo1}></img></div>
            <div className='col-lg-7'></div>
            <div className='col-lg-1'><a href='https://www.google.com/'>Home</a></div>
            <div className='col-lg-1'><a href='https://myaccount.google.com/'>Signup</a></div>
            <div className='col-lg-1'><a href='https://myaccount.google.com/'>Login</a></div>
        </div>
    )
}

export default header;