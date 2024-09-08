import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import RootLayout from './assets/RootLayout/RootLayout';
import About from './assets/About';
import Contact from './assets/Contact';
import Home from './assets/Home';
import Success from './assets/Success';
import Blog from './assets/Blog';
const router = createBrowserRouter ([
  {
    path : "/",
    element : <RootLayout/>,
    errorElement : "this page have some issue",
    children : ([
      {
        index: true,
        element : <Home/>
      },
      {
        path : "/About-us",
        element : <About/>,
      },
      {
        path : "/Success",
        element: <Success/>,
      },
      {
        path : "/Blog",
        element : <Blog/>,
      },
      {
        path : "/Contact",
        element : <Contact/>,
      }
    ])
  }
])
const App = () => {
  return (
    <RouterProvider router = {router}>
 <div>App</div>
    </RouterProvider>
   
  )
}

export default App