import React from 'react'

function Footer() {
  
    return (
        <footer className="bg-custom">
      <div className='container py-3 mt-5 bg-custom' >
      <div className='row  row-cols-lg-3'>
        <div>
           <h4 className='mb-3 fw-bold text-dark'>Dr.Pro<span className="text-success">HealthCare</span></h4>
           <i className="bi bi-geo-alt-fill text-success"> 468 Boston Drive Rancho Cucamonga.</i>
           <br />
            <i className="bi bi-telephone-fill text-success"> +78-817-368-7964</i>
            <br />
            <i className="bi bi-envelope-fill text-success"> info@drPro.org</i>
            
        </div>
        <div>
          <div>
          <i className="bi bi-facebook text-info me-3 fs-4"></i>
          <i className="bi bi-twitter text-primary me-3 fs-4"></i>
          <i className="bi bi-linkedin text-primary me-3 fs-4"></i>
          <i className="bi bi-youtube text-danger fs-4"></i>
          <p className='my-4 text-success fw-bold'> Copyright &copy; Dr.Pro HealthCare 2021</p>
          </div>
        </div>
        <div>
          <h4 className="text-success">Sign Up for updates</h4>
          
          <input type="text" className="form-control mt-3" placeholder="Enter your email"/>
          <button className='btn btn-success mt-3'>Subscribe</button>
        </div>
      </div>
      </div>
    </footer>
    )
}

export default Footer
