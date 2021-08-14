import React from 'react'
    
import {JournalEntries} from './JournalEntries'; 

    export const Sidebar = () => {
        return (
            <aside className="jorunal__sidebar" >
                <div className="jorunal__sidebar-navbar" >
                    <h3 className="mt-5"  > 
                        <i className="far fa-moon"></i>
                         <span> Juan </span>
                    </h3>

                    <button className="btn"  >
                        Log out
                    </button>
                </div>

                <div className="jorunal__new-entry" >
                    <i className="far fa-calendar-plus fa-5x "></i>
                    <p className="mt-5" > New entry </p>
                </div>

                <JournalEntries />


                
            </aside>
        )
    }
    