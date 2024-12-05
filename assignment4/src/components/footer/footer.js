import './footer.css'
function footer(){
    return(
        <div className='row footerDiv'>
            <div className='col-lg-3'></div>
            <div className='col-lg-2'>
                <a>Privacy</a><br/>
                <a>Help</a><br/>
                <a>About</a><br/>
                <a>Terms</a>
            </div>
            <div className='col-lg-2'></div>
            <div className='col-lg-2'>
                <p>Developed and maintained by</p>
                <p>Goutham reddy</p>
                <p>22071A12K0</p>
                <p>VNR VJIET</p>
            </div>
            <div className='col-lg-3'></div>
        </div>
    )
}
export default footer;