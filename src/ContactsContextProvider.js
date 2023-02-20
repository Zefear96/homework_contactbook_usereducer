import React, { createContext, useState } from "react";
import axios from "axios";

export const contactsContext = createContext();

const INIT_STATE = {
  contacts: [],
  oneContact: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "GET_ONE_CONTACT":
      return { ...state, oneContact: action.payload };
    default:
      return state;
  }
}

const ContactsContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

  const API = "http://localhost:8000/contacts";

  async function getContacts() {
    let res = await axios(API);
    dispatch({
      type: "GET_CONTACTS",
      payload: res.data,
    });
  }

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  async function getOneContact(id) {
    let res = await axios.post(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_CONTACT",
      payload: res.data,
    });
  }

  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  const values = {
    contacts: state.contacts,
    oneContact: state.oneContact,

    getContacts,
    addContact,
    getOneContact,
    updateContact,
    deleteContact,
  };

  return (
    <contactsContext.Provider value={values}>
      {children}
    </contactsContext.Provider>
  );
};

export default ContactsContextProvider;
