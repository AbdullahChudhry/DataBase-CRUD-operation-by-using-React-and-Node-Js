import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import ShowAll from './ShowAll.jsx';
import Addbooks from './Addbooks.jsx';
import UpdateBook from './UpdateBook.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowAll />} />
        <Route path='/addbks' element={<Addbooks />} />
        <Route path='/updatebook/:book_ac_no' element={<UpdateBook />} />
        
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
