import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../media/images/notfound.jpg"

function NotFound() {
    return (
        <div className='container text-center mt-5'>
      <h2 className='text-danger'>Opps!! You have followed a bad url 😿</h2>
      <div>
      <img src={image} alt="" />
      </div>
      <Link to='/'>
      <button className='btn btn-dark mb-5 py-2 px-4 fw-bold'>HOME</button>
      </Link>
    </div>
    )
}

export default NotFound
