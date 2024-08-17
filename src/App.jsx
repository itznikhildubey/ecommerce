import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Navbar from './components/Navbar';
import ViewDetails from './pages/ViewDetails';
import { useState } from 'react';

function App() {
  const [cartArr, setcartArr] = useState([]);
  console.log(cartArr)

  function getData(ans){
    console.log(ans)
    let  yourObj = {
      ...ans,
      quantity:1
    }
    
    console.log(yourObj)
      setcartArr([...cartArr,yourObj])
  }

  
  
 

  return (
    <div className="App">
     
        <BrowserRouter>
        <Navbar cartArr={cartArr} />
            <Routes>
              <Route path='/' element={<Home getData = {getData}/>}/>
              <Route path='/cart' element={<Cart cartArr={cartArr} cart={setcartArr} />}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Signup />}/>
              <Route path='/view' element={<ViewDetails getData={getData} />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;