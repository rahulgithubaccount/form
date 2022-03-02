
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route index element ={<Home/>}></Route>
      <Route path = "/" element={<Home/>}></Route>
    </Routes>
    
    </BrowserRouter>
   </div>
  );
}

export default App;
