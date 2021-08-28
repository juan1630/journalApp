import React from 'react';
import { useSelector } from 'react-redux';
import { NoteScreen } from '../notes/NoteScreen';

import { Sidebar } from './Sidebar';
import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {

    // el hook de useSelector nos tare toda la iformacion del state de redux
    const {active} = useSelector (state => state.notes)

    return (
        <div  className="journal__screen-main-content"  >
        
                <Sidebar />


                <main>
                    {    (active) ? (<NoteScreen />) : ( <NothingSelected />) 
                    
                }
                
                </main>
        
        </div>
    )
}
