import React from 'react'
import Home from './Components/Home/Home.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import {createHashRouter, RouterProvider} from 'react-router-dom'

export default function App() {
  const routes = [
    {path:'/' , element: <Home/>},
    {path:'*' , element: <Notfound/>}
  ]

  let routers = createHashRouter(routes);

  return<>
<RouterProvider router={routers}></RouterProvider>
  </>
}

