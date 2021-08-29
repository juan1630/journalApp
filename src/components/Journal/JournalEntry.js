import React from 'react';
import moment from 'moment';

export const JournalEntry = ({id, title, body, url, date }) => {

    const newDate = moment();

    return (
        <div className="journal__entry" >
        
        { 
            url &&
        <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://media.comicbook.com/2020/12/attack-on-titan-season-four-1249758-1280x0.jpeg)'
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
