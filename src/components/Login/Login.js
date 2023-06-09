import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'> Log In</h2>
            <form>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='submit-btn' type="submit" value="Log in" />
            </form>
            <p>New to Ema-john? <Link to="/signup">Click to Sign Up</Link></p>
        </div>
    );
};

export default Login;