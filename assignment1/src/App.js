import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import img1 from './images1.jpeg'

function App() {
  let name = "goutham reddy";
  let num=100;
  let a=[10,20,30,40,50,60]
  return (
    <div className="App">
      <h1>React Assignement - 1</h1>
      <h2 className='nameH2'>My name is : {name}</h2>
      <h2>The dynamic value i.e. a={num}</h2>
      <h2>Given below is an array that is iterated using map()</h2>
      {
        a.map(value=><h3 className="valueOfArray">{value}</h3>)
      }
      <h2>Bootstrap tesing</h2>
      <div>
        <h2 className='text-danger'>hello this is text-danger</h2>
        <h2 className='text-warning'>this is text-warning</h2>
        <h2 className='text-success'>this is text-success</h2>
        <h2 className='text-primary'>this is text-primary</h2>
        <h3 className='text-secondary'>this text-secondary</h3>
      </div>
      <h2>below is image using CDN link element</h2>
      <img className='image1' src='https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg'></img>
      <h2>below is image using downloaded image</h2>
      <img src={img1}></img><br/><br/>
    </div>
  );
}

export default App;
