import React from 'react'
import image from '../../media/images/about.jpg'
function About() {
    return (
        <div>
            <article className ='container d-lg-flex'>
                <div className='mt-5 w-50'>
                <h2 className='fw-bold mt-5'>About Us</h2>
                <p className='text-muted lh-lg mt-3'>Dr.Pro HealthCare was established in 2000 by Dr. William D Kane, renowned as the architect of modern healthcare in IRELAND. As the nation’s first corporate hospital, MediCare is acclaimed for pioneering the private healthcare revolution in the country.</p>
                <p className='text-muted lh-lg'>      
                We believe Learning is the source of human progress. It has the power to transform our world from illness to health, from poverty to prosperity, from conflict to peace. It has the power to transform our livesfor ourselves, for our families, for our communities.
                No matter who we are or where we are, learning empowers us to change and grow and redefine what’s possible. That’s why access to the best learning is a right, not a privilege.
                </p>
                </div>
                <div className='w-50'>
                <img src={image} className='img-fluid rounded-circle mt-4' alt="aboutus" />
                </div>
            </article>
        </div>
    )
}

export default About
