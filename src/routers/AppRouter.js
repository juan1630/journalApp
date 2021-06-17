import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen} from '../components/Journal/JournalScreen';

export const AppRouter = () => {
    return (

        <diV>
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
        </diV>
    )
}
