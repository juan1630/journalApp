import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSavedNote } from '../../actions/notes';

export const NoteAppBar = () => {
    
    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );

    const handleSaveNote = () => {
        console.log(active);
        dispatch( startSavedNote( active ) );
    }

    return (
        <div className="notes__appbar" >
            <span> 28 de agosto de 2021</span>
            <div>
                <button className="btn"> Picture </button>    
            </div>
            <div>
                <button 
                    className="btn"
                    onClick={   handleSaveNote }            
                    > Save </button>    
            </div>
        </div>
    )
}
