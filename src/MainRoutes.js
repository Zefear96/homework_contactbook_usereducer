import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactsContextProvider from "./ContactsContextProvider";
import ContactList from "./components/ContactList/ContactList";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";

const MainRoutes = () => {
  return (
    <ContactsContextProvider>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </ContactsContextProvider>
  );
};

export default MainRoutes;
