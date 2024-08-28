import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
  const navigate=useNavigate()
  const {register,updateUserInfo}=useContext(authContext)
  const handleUpdate=(name,photoURL)=>{
    updateUserInfo(name,photoURL)
    .then(res=>{console.log('updated')})
    .catch(error=>console.log(error))

  }
  const handleReg=(e)=>{
    e.preventDefault()
    const form=e.target
    const name=form.name.value
    const email=form.email.value
    const password=form.password.value
    const photoURL=form.photoURL.value
    register(email,password)
    .then(res=>{
      handleUpdate(name,photoURL)
      form.reset()
      navigate('/courses')
    })
    .catch(error=>console.log(error))

  }
return (
<div>
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col w-96">
      <div className='flex gap-4'>
        <Link to={'/login'}>
          <button className="btn btn-outline btn-primary rounded-3xl w-28 text-lg ">Login</button>
        </Link>
        <button className="btn btn-active btn-primary rounded-3xl text-lg">Register</button>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">

        <form onSubmit={handleReg}>
            <div className="form-control" >
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input  required type="text" name='name' placeholder="full name" className="input input-bordered" />
            </div> 
             <div className="form-control" >
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input   type="text" name='photoURL' placeholder="photo url" className="input input-bordered" />
            </div>
            <div className="form-control" >
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input required  type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input  required type="password" name='password' placeholder="password" className="input input-bordered" />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type='submit'>Register</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default Register;