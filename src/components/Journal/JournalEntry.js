import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNotes } from '../../actions/notes';

export const JournalEntry = ({id, title, body, url, date }) => {

    const newDate = moment();
    const dispatch = useDispatch();   

    const handleActiveNoteEntry = () => {
    
        dispatch( activeNotes(id, {
            body,
            url,
            date,
            title
        }) );
    }

    return (
        <div 
            className="journal__entry"  
            onClick={ handleActiveNoteEntry }
            >
        
        { 
            url &&
        <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: url
            }}
             > </div>
             
             }
            
            <div className="jorunal__entry-body" >
                <div className="journal__entry-title"  >
                   { title}
                </div>
                <div className="journal__entry-content"  >
                    {body}
                </div>
            </div>
            <div className="jorunal__entry-date-box" >
                <span>
                    { newDate.format('dddd') }
                </span>
                <h4> { newDate.format('Do')} </h4>
            </div>
        </div>
    )
}
