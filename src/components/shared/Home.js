import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../media/images/header-image.jpg'
import Mission from './extra/Mission';
import News from './extra/News';
import Services from './Services';
function Home() {
    return (
      <>
          <div className=" container d-lg-flex">
          <div className="w-50 mt-5">
            <p className="text-dark">20 YEARS OF EXPERIENCE</p>
            <h1 className="fw-bold display-4 mt-2 text-success">
              Pioneer in Medical Healthcare 
            </h1>
            <p className='lead mt-3 lh-lg'>Established by Dr William D Kane in 2000, Dr.Pro has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Medicare has touched more than 120 million lives from over 60 countries, offering the best clinical outcomes.</p>
            <Link to ='/about'>
              <button className="btn btn-outline-dark mt-4 py-2 px-4 rounded-pill fw-bold"> MORE ABOUT </button>
            </Link>
          </div>
          <div className="w-50 ms-3 mt-5">
            <img src={image} className='img-fluid mt-5' alt="" />
          </div>
        </div>
        <Services/>
        <Mission/>
        <News/>
      </>
    )
}

export default Home;
