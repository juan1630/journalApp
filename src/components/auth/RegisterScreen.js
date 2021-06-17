import React from 'react';
import {  Link } from 'react-dom';

export const RegisterScreen = () => {
    return (
        <div>
            <h3 className="auth__title"> Register </h3>

            <form>
                <input type="text"  className="auth__input" placeholder="Email" name="email" autoComplete="off" />
                <input type="password" className="auth__input" placeholder="Password" name="pass" />
                
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Login
                </button>

                <Link to="/auth/register" className="link mt-1" >
                    Al ready register
                </Link>
        
        </form>
    </div>
    )
}
