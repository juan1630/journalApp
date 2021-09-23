import React from "react";
import { mount } from "enzyme";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";

// permite finguir la rutas en el ambiente de testing

import { Provider } from "react-redux";
import { JournalEntry } from "../../../../components/Journal/JournalEntry";
import { activeNotes } from "../../../../actions/notes";

// creamos un mock de la funcion que vamos a llamar

const middlewares = [thunk];

// mocks
const mockStore = configureStore(middlewares);
const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
  id: 123,
  date: 0,
  title: "Un titulo",
  body: "Algo en el body",
  url: "http://algo.com/foto.jpg",
};

const wrapper = mount(
  <Provider store={store}>
    <JournalEntry {...note} />
  </Provider>
);

describe("Pruebas en el componente jorunal entrry", () => {

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="journal__entry"
        onClick={[Function]}
      >
        <div
          className="journal__entry-picture"
          style={
            Object {
              "backgroundImage": "http://algo.com/foto.jpg",
              "backgroundSize": "cover",
            }
          }
        >
           
        </div>
        <div
          className="jorunal__entry-body"
        >
          <div
            className="journal__entry-title"
          >
            Un titulo
          </div>
          <div
            className="journal__entry-content"
          >
            Algo en el body
          </div>
        </div>
        <div
          className="jorunal__entry-date-box"
        >
          <span>
            Wednesday
          </span>
          <h4>
             
            22nd
             
          </h4>
        </div>
      </div>
    `);
  });

  test('Debe de activar la nota', () => {

    wrapper.find('.journal__entry').prop('onClick')();

    expect( store.dispatch ).toHaveBeenCalledWith(
        activeNotes(note.id, {...note})
    );
});

});
