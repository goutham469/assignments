import './child.css'
function child(props){

    return(
        <div className='countDisplay'>
            <h2>{props.num}</h2>
        </div>
    )
}
export default child;