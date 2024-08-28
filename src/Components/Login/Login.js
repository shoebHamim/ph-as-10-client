import React, { useContext, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    const {  googleLogin, githubLogin, login } = useContext(authContext)
    const [error,setError]=useState('')
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form[0].value
        const password = form[1].value
        login(email, password)
        .then(res=>{
            navigate(from,{replace:true})
        })
        .catch(error=>{
            setError(error.message)
            console.log(error)})
    }
    const handleGooglelogin = () => {
        googleLogin()
        .then(res=>{
            navigate(from,{replace:true})
        })
        .catch(error=>console.log(error))

    }
    const handleGithublogin = () => {
        githubLogin()
        .then(res=>{
            navigate(from,{replace:true})
        })
        .catch(error=>console.log(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col ">
                    <div className='flex gap-4'>
                        <button className="btn btn-active btn-primary rounded-3xl w-28 text-lg ">Login</button>
                        <Link to={'/register'}>
                            <button className="btn btn-outline btn-primary rounded-3xl text-lg">Register</button>
                        </Link>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className='flex sm:flex-row flex-col gap-2 justify-center '>
                                <button onClick={handleGooglelogin} className="normal-case btn btn-outline ">
                                    <FaGoogle className='mr-2'></FaGoogle> Login with Google
                                </button>
                                <button onClick={handleGithublogin} className=" normal-case btn btn-outline ">
                                    <FaGithub className='mr-2' />
                                    Login with Github</button>

                            </div>
                            <form onSubmit={handleLogin}>
                                <div className="form-control" >
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label htmlFor="" className='text-error'>
                                        {error}
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit'>Login</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;