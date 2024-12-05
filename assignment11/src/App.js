import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
// components
import Home from './components/Home';
import SignIn from './components/SignIn';
import Login from './components/Login';
import Products from './components/Products';

function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<Home/>
    },
    {
      path:"SignIn",
      element:<SignIn/>
    },
    {
      path:"Login",
      element:<Login/>
    },
    {
      path:"Products",
      element:<Products/>
    }
  ])
  return (
    <div className="App">
      <h1>User registration & login with support of local API</h1>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
