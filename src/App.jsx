import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import NotFound from './components/NotFound/NotFound'
import Product from './components/Product/Product'


function App() {
  let [number,setNumber] = useState(0);
    function Increse (param){
        setNumber(number=> number + param)
    }
  const routes = createBrowserRouter ([
    {path: '/', element: <Layout number={number}></Layout>, children: [
      {index: true, element: <Home></Home>},
      {path: '/products', element: <Products></Products>},
      { path: '/product/:id', element: <Product Increse={Increse}></Product> },
      {path: '*', element: <NotFound></NotFound>},
    ]}
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App;
