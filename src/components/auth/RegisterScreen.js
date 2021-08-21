import React from 'react';
import {  Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

import { useDispatch, useSelector } from '../../hooks/useDispatchreact-redux';
import { setError, removeError } from '../../actions/ui'

export const RegisterScreen = () => {


    const dispatch = useDispatch();
    const state = useSelector()

    const [ formValues, handleInputChange] = useForm({
            
        nameUser:'Juan',
        email:'josejuanpatron1630@gmail.com',
        password:'123456',
        password2:'123456'

    });


    const { nameUser, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        
        if( isFormValid() ){
            console.log('Formulario valido');
        }
        
    }
    const isFormValid = () => {

        if( nameUser.trim().length === 0 ) {
            //hacemos el dispatch de las acciones
 
            dispatch( setError('Name is required')  )
            return false;
        
        }else if( !validator.isEmail( email )) {

            dispatch(setError('Email is not validate'));
            return false;
        }else if ( password !== password2 || password.length < 5 ) {

            dispatch( setError('Password should  have more than 6 characters'));
            return false;
        }

        dispatch(  removeError() );
        return true;
    }

    return (
        <div>
            <h3 className="auth__title"> Register </h3>

                <div className="auth__alert-error" >
                        Hola mundo
                </div>

            <form  onSubmit={handleRegister}  >

                <input type="text"  
                      className="auth__input" 
                      placeholder="Name" 
                      name="nameUser" 
                      autoComplete="off" 
                      value={nameUser}
                      onChange={ handleInputChange }
                      />

                <input type="email"  
                      className="auth__input" 
                      placeholder="Email" 
                      name="email" 
                      autoComplete="off" 
                      value={email}
                      onChange={ handleInputChange }
                      />

                <input type="password" 
                      className="auth__input" 
                      placeholder="Password" 
                      name="password" 
                      autoComplete="off"
                      value={ password }
                      onChange={ handleInputChange }
                        />

                <input type="password" 
                      className="auth__input" 
                      placeholder="Password confirm" 
                      name="password2" 
                      autoComplete="off"
                      value={ password2 }
                      onChange={ handleInputChange }
                      />


                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                  Register
                </button>

                    Already register
                <Link to="/auth/register" className="link">
                </Link>

        </form>
    </div>
    )
}
