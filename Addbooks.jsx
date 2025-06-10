import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Addbooks() {

    const [book_title, setBookTitle] = useState('');
    const [book_writer, setBookWriter] = useState(''); 
    const [book_type, setBookType] = useState('');
    const [price, setPrice] = useState(0);
    const [edition, setEdition] = useState('');
    const [publisher, setPublisher] = useState('');
    const [stock_quantity, setStockQuantity] = useState(0);

    const navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/addbks', {
            book_title,
            book_writer,
            book_type,
            price,
            edition,
            publisher,
            stock_quantity
        })
        .then(res => {
            console.log(res);
            navigate('/');
            alert('Book Added Successfully');
        })
        .catch(err => {
            console.log(err);
            alert('Error Adding Book');
        })
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-success'>
        
        <div className='w-50 bg-light rounded p-4'> 
            <form onSubmit={handleSubmit}>
                <h1 className='text-center text-white bg-primary p-2 rounded'>Add Books</h1>
                <div className='mb-3'>
                    <label htmlFor="book_title" className='form-label'>Book Title</label>
                    <input type="text" className='form-control' id='book_title' placeholder='Enter Book Title'
                    onChange={e=>setBookTitle(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="book_writer" className='form-label'>Book Writer</label>
                    <input type="text" className='form-control' id='book_writer' placeholder='Enter Book Writer'
                    onChange={e=>setBookWriter(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="book_type" className='form-label'>Book Type</label>
                    <input type="text" className='form-control' id='book_type' placeholder='Enter Book Type'
                    onChange={e=>setBookType(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="price" className='form-label'>Price</label>
                    <input type="number" className='form-control' id='price' placeholder='Enter Price'
                    onChange={e=>setPrice(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="edition" className='form-label'>Edition</label>
                    <input type="text" className='form-control' id='edition' placeholder='Enter Edition'
                    onChange={e=>setEdition(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="publisher" className='form-label'>Publisher</label>
                    <input type="text" className='form-control' id='publisher' placeholder='Enter Publisher'
                    onChange={e=>setPublisher(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="stock_quantity" className='form-label'>Stock Quantity</label>
                    <input type="number" className='form-control' id='stock_quantity' placeholder='Enter Stock Quantity'
                    onChange={e=>setStockQuantity(e.target.value)} />
                </div>
                <input type="submit" value="Add Books" className='btn btn-primary' />
               
            </form>    
    </div>
    </div>

  )
}

export default Addbooks