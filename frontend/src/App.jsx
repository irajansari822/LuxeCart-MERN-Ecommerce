import React from 'react'
import {Route, Routes} from 'react-router'
import Success from './Pages/Success'
import Cancel from './Pages/Cancel'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Checkout from './Pages/Checkout'
import Feature from './Components/Feature'
import Fotter from './Components/Fotter'
function App() {
  const product =[
    {
      name: "Tshirt",
      price: 34,
      image: 'https://i.pinimg.com/736x/81/e8/ee/81e8ee293dd4617448ed814b309fa49b.jpg'
    },
    {
      name: "Bangles",
      price: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8s41_iV7e7x4N7sBakHKvmYRreLBHfQ9J305AI2YSA&s=10'
    },
        {
      name: "Shoes",
      price: 5,
      image: 'https://i.pinimg.com/736x/c9/30/7b/c9307b165df7cc7878f62683d3de9193.jpg'
    },
        {
      name: "Purse",
      price: 15,
      image: 'https://i.pinimg.com/1200x/4f/a9/9b/4fa99b8f537e4f77f19c9f9a9835ea1a.jpg'
    },
       {
      name: "Iphone 18 pro max",
      price: 56,
      image: 'https://i.pinimg.com/1200x/03/48/1f/03481f737c8d2c2fe33131d66add89b4.jpg'
    },
     {
      name: "Mac pro",
      price: 14,
      image: 'https://i.pinimg.com/1200x/18/30/7d/18307dfde0f655618d822607bda8c931.jpg'
    },
        {
      name: "Rolex ",
      price: 34,
      image: 'https://i.pinimg.com/1200x/9b/36/0c/9b360c3de8c6130ffa8b35971a3b29b0.jpg'
    },
        {
      name: "Tesla flying car",
      price:3,
      image: 'https://i.pinimg.com/736x/1c/5e/e9/1c5ee92b190490f5ae5c26b4167d381e.jpg'
    },
  ]
  return (
    <div>
<Navbar />
<Hero/>

<Routes>
  <Route path='/' element={
    <div style={{padding:"20px"}}>
      <h1 style={{textAlign:"center"}}>Smit Store</h1>
  <div style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
    {product.map((product,index)=>(
    <Checkout key={index} product={product} />
  ))}
  </div>
    </div>
  }  />
<Route path='/success' element={<Success/>}  />
<Route path='/cancel' element={<Cancel/>}  />
</Routes>
<Feature />
<Fotter/>
    </div>
  )
}

export default App