import React, { useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NoteAppBar } from './NoteAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNotes } from '../../actions/notes';
// import { useRef } from 'react';

export const NoteScreen = () => {

        const { active: note } = useSelector(state => state.notes);
        const dispatch = useDispatch();
        // Renombemos la varibale por note
        
        const [ formValues, handleInputChange, reset ] = useForm(note);
        // incializamos el form con los valores del note

        const activeId = useRef(note.id);
        // este hook hace referencia a una variable que no redibuja el DOM cuando el valor cambia
        // console.log(note);

        const { body, title} = formValues;

        useEffect(() => {  
            
            // con el currente entramos al valor actual de la variable
            if(note.id !== activeId.current) {
                reset(note);
                activeId.current = note.id;
            }
         }, [note, reset]);

         useEffect(() => {
            dispatch( activeNotes(formValues.id, {
                ...formValues,
            }) )
         }, [formValues])

    return (
        <div  className="note-screen-content">
            
            <NoteAppBar />

            <div className="notes__content" >
                <input type="text" 
                        className="notes__title-input"
                        placeholder="an aweson titlfor everyone"
                        autoComplete="off"
                        value={title}
                        name="title"
                        onChange={handleInputChange}
                        />
                <textarea 
                    placeholder="What happend today"
                    className="notes__textarea"
                    value={ body }
                    name="body"
                    onChange={handleInputChange}
                    >

                </textarea>
            </div>
               
                {
                    (note.url) && 
                    (   <div  className="notes__image" >
                            <img src="http://2.bp.blogspot.com/-JanvBHsi2p4/VUSYPnvG9DI/AAAAAAAAFxk/jCixiE0gtJQ/s1600/silicon-valley-segunda-temporada-online.jpg" alt="an im" />
                        </div>
                    )
                }

        </div>
    )
}
