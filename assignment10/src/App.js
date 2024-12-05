import './App.css';
import RootLayout from './components/rootLayout';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// components
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Technologies from './components/Technologies';
import C from './components/C';
import Java from './components/Java';
import Python from './components/Python';
import Frontend from './components/Frontend';
import ErrorPage from './components/ErrorPage';

function App() {
  // creating router object
  let router = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'home',
          element:<Home/>
        },
        {
          path:'signUp',
          element:<SignUp/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'technologies',
          element:<Technologies/>,
          children:[
            {
              path:'c',
              element:<C/>
            },
            {
              path:'java',
              element:<Java/>
            },
            {
              path:'python',
              element:<Python/>
            },
            {
              path:'frontend',
              element:<Frontend/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <div className="App">
      {/* create brower router to application */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
