import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
//  elements
import Home from './components/Home';
import SignIn from './components/SignIn';
import Login from './components/Login';
import Products from './components/Products';

function App() {
  let router = createBrowserRouter([
    {
      path:'',
      element:<Home/>
    },
    {
      path:'Home',
      element:<Home/>
    },
    {
      path:'SignIn',
      element:<SignIn/>
    },
    {
      path:'Login',
      element:<Login/>
    },
    {
      path:'Products/:user',
      element:<Products/>
    }
  ])
  return (
    <div className="App">
      <h2 className='text-primary'>Implement active links & transferring state while navigating in the previous app. Also, apply validation rules to user registration and login forms.</h2>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
