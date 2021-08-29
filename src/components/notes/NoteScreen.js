import React from 'react';
import { NoteAppBar } from './NoteAppBar';


export const NoteScreen = () => {
    return (
        <div  className="note-screen-content">
            
            <NoteAppBar />

            <div className="notes__content" >
                <input type="text" 
                        className="notes__title-input"
                        placeholder="an aweson titlfor everyone"
                        autoComplete="off"
                        />
                <textarea 
                    placeholder="What happend today"
                    className="notes__textarea"
                    >

                </textarea>
            </div>
            <div  className="notes__image" >
                <img src="http://2.bp.blogspot.com/-JanvBHsi2p4/VUSYPnvG9DI/AAAAAAAAFxk/jCixiE0gtJQ/s1600/silicon-valley-segunda-temporada-online.jpg" alt="an im" />
            </div>
        </div>
    )
}
