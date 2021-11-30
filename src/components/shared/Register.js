import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
function Register() {
  const [name, setName] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || '/'

const {googleSignInHandler, registerUser} = useAuth();
const userName= e=>{
 setName(e.target.value);
}
const userEmail = e =>{
  setEmail(e.target.value)
}
const userPassword = e=>{
  setPassword(e.target.value)
}
// email/pass registration
const registerHandler = e =>{
  e.preventDefault()
  registerUser(name, email, password);
}
// google registration
const handleGoogleSignIn =()=>{
  googleSignInHandler()
  .then(res=>{
    history.push(redirectUrl)
  })
};
  return (
    <div className='container text-center mt-5  shadow p-4'>
      <h2 className='fw-bold'>Register your account</h2>
      <form onSubmit={registerHandler}>
            <input type="text" onBlur={userName} className="form-control mt-3 w-50 d-block mx-auto" placeholder="first Name" required/>
            <input type="text" onBlur={userName} className="form-control mt-3 w-50 d-block mx-auto" placeholder="Last Name" required/>
            <input type="email" onBlur={userEmail} className="form-control mt-3 w-50 d-block mx-auto" placeholder="Your Email" required/>
        <input type="password" onBlur={userPassword} className="form-control mt-3 w-50 d-block mx-auto" placeholder="Password" required />
        <p className="text-danger">Please Give Your Information to Register</p>
            <button className='btn btn-success mt-4 px-4 py-2'>Register</button>
      </form>
      <h5 className='mt-3 text-muted'>OR</h5>
      <button className='btn btn-danger my-3 px-4 py-2' onClick={handleGoogleSignIn}><i class="fab fa-google m-2"></i> Register with Google</button>
      <br />
      <Link to='/login' className='text-decoration-none text-dark'><p className="fw-bold">Already Registered?</p></Link>
    </div>
  );
}

export default Register;
