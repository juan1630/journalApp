import React from 'react';
// importamos el provider
import { Provider } from 'react-redux';

import { store } from './store/store';
//importamos el store
import { AppRouter } from './routers/AppRouter'

export const JournalApp = () => {
    return (
        <div>   
            <Provider  store={store } >
                <AppRouter />
            </Provider>
        </div>
    )
}


