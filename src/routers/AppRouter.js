import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen} from '../components/Journal/JournalScreen';
import { useEffect } from 'react';

import  { firebase } from '../firebase/firebase-config';

import  { useDispatch } from 'react-redux'
import { login } from '../actions/auth';

export const AppRouter = () => {
    

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [ isLoggedIn, setIsLoggedIn] = useState( false);


    useEffect(() => {

        firebase.auth().onAuthStateChanged( (user) => {
            // console.log(user);
            if(user?.uid){
                // hacer el dispatch
                dispatch( login(user.uid, user.displayName));
                setIsLoggedIn( true )
            }else {
                setChecking(false);
            }
            setChecking(false);
        })
        
    }, [dispatch, setChecking, setIsLoggedIn]);


    if( checking ) {
        return (
            <h1> Espere... </h1>
        )
    }

    return (
        <div>
            <Router>
                <Switch>
                    <Route 
                        path="/auth"  
                        component={ AuthRouter} />

                    <Route path="/" 
                            exact  
                            component={ JournalScreen } 
                            />
                </Switch> 

            </Router>
        </div>
    )
}
