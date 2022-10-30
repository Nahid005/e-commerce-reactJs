import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import ProductDetails from './component/product/ProductDetails';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/checkout' element={<CheckOut />}></Route>
          <Route path='/product-details' element={<ProductDetails />}> </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
