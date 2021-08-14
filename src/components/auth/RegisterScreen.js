import React from 'react';
import {  Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div>
            <h3 className="auth__title"> Register </h3>

            <form>

                <input type="text"  className="auth__input" placeholder="Name" name="name" autoComplete="off" />

                <input type="email"  className="auth__input" placeholder="Email" name="email" autoComplete="off" />

                <input type="password" className="auth__input" placeholder="Password" name="pass" />

                <input type="password" className="auth__input" placeholder="Password confirm" name="pass2" />


                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                  Register
                </button>

                <Link to="/auth/register" className="link">
                    Already register
                </Link>

        </form>
    </div>
    )
}
