import React from 'react'
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/'
    const{googleSignInHandler, logInUser}=useAuth();

    const userEmail = e =>{
      setEmail(e.target.value)
    }
    const userPassword = e=>{
      setPassword(e.target.value)
    }
    // email/pass signin
    const loginHandler = e =>{
      e.preventDefault()
      logInUser(email, password)
      .then(res=>{
        history.push(redirectUrl)
      })
      
    }
    // google signIn
    const handleGoogleSignIn =()=>{
      googleSignInHandler()
      .then(res=>{
        history.push(redirectUrl)
      })
    };
    return (
        <div className='container text-center mt-5  shadow p-4'>
      <h2 className='fw-bold mb-5'>Great to have you back!</h2>
      <form onSubmit={loginHandler}>
            <input type="email" onBlur={userEmail} className="form-control mt-3 w-50 d-block mx-auto" placeholder="Your Email" required/>
            <input type="password" onBlur ={userPassword} className="form-control mt-3 w-50 d-block mx-auto" placeholder="Password" required/>
            <button className='btn btn-primary mt-4 px-4 py-2'>Log In</button>
      </form>
      <h5 className='mt-3 text-muted'>OR</h5>
      <button className='btn btn-dark my-3 px-4 py-2' onClick={handleGoogleSignIn}><i class="fab fa-google m-2"></i> Log In with Google</button>
      <br />
      <Link to='/register' className='text-decoration-none text-primary'><p>New Here?</p></Link>
    </div>
    )
}

export default LogIn;
