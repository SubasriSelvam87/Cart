// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { cartContext } from './CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{cart,setCart}}>
    
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/Cart' element={<Cart   />} />
          </Routes>
        </div>
      </BrowserRouter>
   
    </cartContext.Provider>
  );
}

export default App;

