import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div className='row' style={{backgroundColor:"rgb(142, 164, 0)",minHeight:"50px",alignItems:"center"}}>
            <div className='col-lg-7'></div>
            <div className='col-lg-1'>
                <Link to="home">Home</Link>
            </div>
            <div className='col-lg-1'>
                <Link to="signup">SignUp</Link>
            </div>
            <div className='col-lg-1'>
                <Link to="login">Login</Link>
            </div>
            <div className='col-lg-1'>
                <Link to="technologies">Technologies</Link>
            </div>
        </div>
    )
}
export default NavBar;