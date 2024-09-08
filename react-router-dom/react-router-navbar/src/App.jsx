import React from 'react'
import RouterLayout from './assets/RouterLayout/RouterLayout'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Home';
import About from './assets/About';
import Blog from './assets/Blog';
import Contact from './assets/Contact';
import Success from './assets/Success';
const router = createBrowserRouter ([
  {
    path: "/",
    element: <RouterLayout/>,
    errorElement: "this page not found",
    children: 
      [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "/About-Us",
          element: <About/>,
        },
        {
          path: "/Blog",
          element: <Blog/>,
        },
        {
          path: "/Success",
          element: <Success/>,
        },
        {
          path: "/Contact",
          element: <Contact/>
        }
      ]
    
  }
])
const App = () => {
  return (
    <RouterProvider router = {router}>
<RouterLayout/>
    </RouterProvider>
  )
}

export default App