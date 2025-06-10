import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function ShowAll() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(res=>setBooks(res.data)) 
    .catch(err=>console.log(err))

  },[]);
  const handleDelete = async(book_ac_no) => {
    try {
      await axios.delete(('http://localhost:3000/deletebook/' + book_ac_no));
      window.location.reload();
       } catch (error) {
      console.log(error);
    }
  }     

  return (
    
  <div className='container mt-4'>
    <h1 className="text-center text-primary mb-4 bg-light p-3 rounded ">
      Online Book Store
    </h1>
    <div className='d-flex justify-content-center align-items-center vh-100 bg-success'>
  
        <div className='w-70 bg-light rounded'> 
            <Link to='/addbks' className='btn btn-primary'>Add Books +</Link>
            <table className='table table-bordered table-striped table-hover'>
                <caption>List of Books</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Edition</th>
                        <th>Publisher</th>
                        <th>In Stock</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    books.map((data, i) => (
                      <tr key={i}>
                        <td>{data.book_ac_no}</td>
                        <td>{data.book_title}</td>
                        <td>{data.book_writer}</td>
                        <td>{data.book_type}</td>
                        <td>RS {data.price}</td>
                        <td>{data.edition}</td>
                        <td>{data.publisher}</td>
                        <td>{data.stock_quantity}</td>
                        <td><Link to={`/updatebook/${data.book_ac_no}`} className='btn btn-warning'>Update</Link></td>

                        <td><button onClick={e=>handleDelete(data.book_ac_no)} className='btn btn-danger ms-2'>Delete</button></td>
                      

                      </tr>
                    ))
                  }

                </tbody>
            </table>
            

        </div>
    </div>
  </div>
  )
}

export default ShowAll