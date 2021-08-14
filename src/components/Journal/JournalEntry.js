import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry" >
            <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://media.comicbook.com/2020/12/attack-on-titan-season-four-1249758-1280x0.jpeg)'
            }}
             >
            
            </div>
            <div className="jorunal__entry-body" >
                <div className="journal__entry-title"  >
                    Un nuevo día
                </div>
                <div className="journal__entry-content"  >
                    lpowefgjpgwjpgwj
                </div>
            </div>
            <div className="jorunal__entry-date-box" >
                <span>
                    Monday
                </span>
                <h4> 28 </h4>
            </div>
        </div>
    )
}
