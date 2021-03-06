import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../../media/images/mission.jpg';
function Mission() {
    return (
        <>
        <div className=" container d-lg-flex my-5">
            <div className="w-50 ms-3">
            <img src={image} className='img-fluid mt-2' alt="" />
            </div>
            <div className="w-50 mt-5">
            <h1 className="fw-bold mt-2">
                Our Goal
            </h1>
            <p className='lead mt-3 lh-lg'>“Our Goal is to bring healthcare of International standards within the reach of every individual. We are committed to the achievement and maintenance of excellence in education, research and healthcare for the benefit of humanity”</p>
            <Link to ='/contact'>
                <button className="btn btn-outline-dark mt-4 py-2 px-4 rounded-pill fw-bold">Contact Us</button>
            </Link>
            </div>
      </div>
        </>
    )
}

export default Mission;
