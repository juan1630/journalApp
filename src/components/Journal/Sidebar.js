import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {JournalEntries} from './JournalEntries';

// actions
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';


export const Sidebar = () => {
        
    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth) 
        
    
    const handleLogOut = () => {
            dispatch(  startLogout() );
        }

    // Funcion que se dispara con el click 
    const handleAddNewEntry = () => {
        dispatch( startNewNote() );
    }


        return (
            <aside className="jorunal__sidebar" >
                <div className="jorunal__sidebar-navbar" >
                    <h3 className="mt-5"  > 
                        <i className="far fa-moon"></i>
                         <span> {name} </span>
                    </h3>

                    <button  
                            className="btn"
                            onClick={handleLogOut}
                            >
                        Log out
                    </button>
                </div>

                <div 
                    className="jorunal__new-entry"
                    onClick={ handleAddNewEntry }
                    >
                    
                    <i className="far fa-calendar-plus fa-5x"></i>
                    <p className="mt-5" > New entry </p>

                </div>

                <JournalEntries />


                
            </aside>
        )
    }
    