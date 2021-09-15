
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import {startNewNote, startLoadNotes, startSavedNote } from '../../../actions/notes' 
import { db } from '../../../firebase/firebase-config';
import { types } from '../../../types/types';

const middlewares = [ thunk ];

const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: "TEST"
    }
}


let store = mockStore(initState);

describe('Pruebas en el notes actions' , ( ) => {


    beforeEach(() => {
        // esta funcion se dispara antes de cada prueba

        store = mockStore(initState);
    });
    
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

    expect( actions[0] ).toEqual({
        type: types.notesLoad,
        payload: expect.any(Array)
    });

    const expectedData = {

        id: expect.any(String),
        title: expect.any(String),
        body: expect.any(String),
        dates: expect.any(Number),
    }

    expect( actions[0].payload[0] ).toMatchObject(expectedData);

   });


   test('StartSaveNote debe de actualizar la nota' , async () => {

        const note = {
           id: 'WAEdoOYMU1tcXRTceoGO',
            title: 'titulo',
            body: 'body'
        }

        await store.dispatch( startSavedNote( note));

        const actions = store.getActions();

        // console.log(actions);

        expect( actions[0].type).toBe( types.notesUpdated );
        
        const doc =  await db.doc(`/TEST/journal/notes/${note.id}`).get();


        expect( doc.data().title ).toBe(note.title);
   });

});
