import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import CheckOutPage from './pages/CheckOutPage';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/checkout' element={<CheckOutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
