import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'> Sign Up</h2>
            <form>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input type="password" name="confirm-password" required />
                </div>
                <input className='submit-btn' type="submit" value="SIgn Up" />
            </form>
            <p>Already Have a Account? <Link to="/login">Click to Login</Link></p>
        </div>
    );
};

export default SignUp;