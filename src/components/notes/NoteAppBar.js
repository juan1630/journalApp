import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFileUpload, startSavedNote } from '../../actions/notes';

export const NoteAppBar = () => {
    
    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );

    const handleSaveNote = () => {
        console.log(active);
        dispatch( startSavedNote( active ) );
    }

    const handlePictureUpload  =  () => {
        // console.log("click");
        document.querySelector('#fileSelector').click();
    }


    const handleFileChange = (e) => {
        // console.log( e );
        const file = e.target.files[0];

        if(file) {

            dispatch(  startFileUpload( file )  )

        }
    }

    return (
        <div className="notes__appbar" >
            <span> 28 de agosto de 2021</span>

                <input
                    name="fileInput"
                    id="fileSelector"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={ handleFileChange }
                />

            <div>
                <button 
                    className="btn"
                    onClick={ handlePictureUpload }
                    > Picture </button>    
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
