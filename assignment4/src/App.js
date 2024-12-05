import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <h1 className='Heading'>React Assignment - 4</h1>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
