
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import {startNewNote, startLoadNotes } from '../../../actions/notes' 
import { db } from '../../../firebase/firebase-config';
import { types } from '../../../types/types';

const middlewares = [ thunk ];

const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: "TEST"
    }
})

describe('Pruebas en el notes actions' , ( ) => {
    
    test('Debe de crear una nueva nota', async () => {
       await store.dispatch( startNewNote() );

       const actions = store.getActions();
    //    console.log(actions);
        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                
                    id: expect.any(String),
                    title: '',
                    body: '',
                    dates: expect.any(Number)
                
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                dates: expect.any(Number)
            }
        });

        const docId = actions[0].payload.id;

        // borramos de la db el nuevo registro que se creo
        await db.doc(`TEST/journal/notes/${docId}`).delete();

   });

   test('Debe de cargar las notes con el startNewNotes', async () => {

    await store.dispatch( startLoadNotes('TEST') );

    const actions = store.getActions();

    console.log( actions);

   });

});
