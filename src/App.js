import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import CheckOutPage from './pages/CheckOutPage';
import Authentication from './component/auth/Authentication';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/checkout' element={<CheckOutPage />}></Route>
          <Route path='/authentication' element={<Authentication />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
