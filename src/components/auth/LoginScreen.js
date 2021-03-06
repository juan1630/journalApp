import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import {  loginWithEmailYPassword, startGoogleLgoin } from '../../actions/auth';


export const LoginScreen = () => {

    // usamos el dispatch de react redux


    const dispatch = useDispatch();
    const { loading } = useSelector( state=> state.ui)
    // hace uso del hook useform
    const [ formValues, handleInputChange ] = useForm({

        email: 'juan1630@gmail.com',
        password: '123456'
    });


    const { email, password } = formValues;

    const handleLoginGoogle = () => {
        // console.log('Heyy!!')
        dispatch( startGoogleLgoin() );
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( loginWithEmailYPassword( email, password ) );
    }

    return (
        <div>
            <h3 className="auth__title"> Login Screen </h3>

            <form  
                onSubmit={handleLogin}
                className="animate__animated animate__fadeIn"
                >

                <input type="text"  
                        className="auth__input" 
                        placeholder="Email" 
                        name="email" autoComplete="off"
                        value= { email}
                        onChange={ handleInputChange }
                        />

                <input type="password" 
                        className="auth__input" 
                        placeholder="Password" 
                        name="pass"
                        value={ password }
                        onChange={ handleInputChange }
                        />
                
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={  loading }
                >
                    Login
                </button>

                <div  className="auth__social-networks" >
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={ handleLoginGoogle }
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
