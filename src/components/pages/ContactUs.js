import React from 'react'
import image from "../../media/images/contact.jpg"
function ContactUs() {
    return (
    <div className='container d-lg-flex my-3'>
        <div className='w-50 mt-5'>
            <h2 className='mt-4 fw-bold'>Contact Us</h2>
            <p className='fst-italic mt-4 text-dark'>Great to see you here!</p>
            <div>
            <input type="text" className="form-control " placeholder="First Name"/>
            <input type="text" className="form-control my-3" placeholder="Last Name"/>
            <input type="email" className="form-control" placeholder="Email"/>
            <div className="input-group  my-3">
                <span className="input-group-text text-muted">Your Message</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
            <button className='btn btn-dark'>Submit</button>
            </div>
        </div>
            <div className='w-50'>
            <img src={image} className='img-fluid ms-3 mt-5 rounded-3' style={{width:'650px'}} alt="contactus" />
            </div>
    </div>
    );
}

export default ContactUs;
