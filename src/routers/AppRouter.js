import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen} from '../components/Journal/JournalScreen';
import { useEffect } from 'react';

import  { firebase } from '../firebase/firebase-config';

import  { useDispatch } from 'react-redux'
import { login } from '../actions/auth';

export const AppRouter = () => {
    

    const dispatch = useDispatch();

    useEffect(() => {

        firebase.auth().onAuthStateChanged( (user) => {
            // console.log(user);
            if(user?.uid){
                // hacer el dispatch
                dispatch( login(user.name, user.displayName));
            }
        })
        
    }, [dispatch]);

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
