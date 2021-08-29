import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

    // obtengo las notes del store la fuente unica de la verdad
    const { notes } = useSelector( state => state.notes );


    return ( 
        <div className="journal__entries pointer">
                {
                    notes.map(  (note) => (
                        <JournalEntry   
                            key={note.id}
                            {...note}
                            />
                    ))
                }
        </div>
    )
}
