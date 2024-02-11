import './child.css'
function Child(props){
    return(
        <div className='childDiv'>
            <h3>Child</h3>
            <button className='b1' onClick={props.in}>Increment</button>
            <button className='b2' onClick={props.de}>Decrement</button>
        </div>
    )
}
export default Child;