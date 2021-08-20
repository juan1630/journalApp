import React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';


export const LoginScreen = () => {

    // usamos el dispatch de react redux
     const dispatch = useDispatch();

    // hace uso del hook useform
    const [ formValues, handleInputChange ] = useForm({

        email: 'Juan@gmail.com',
        password: '123456'
    });


    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( login(123456, 'Juan') )
    }

    return (
        <div>
            <h3 className="auth__title"> Login Screen </h3>

            <form onSubmit={handleLogin} >

                <input type="text"  className="auth__input" 
                        placeholder="Email" 
                        name="email" autoComplete="off"
                        value= { email}
                        />

                <input type="password" className="auth__input" 
                        placeholder="Password" 
                        name="pass"
                        value={ password }
                        />
                
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Login
                </button>

                <div  className="auth__social-networks" >
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link" >
                    Create a new account
                </Link>
           
            </form>
        </div>
    )
}
