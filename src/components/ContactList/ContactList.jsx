import React, { useEffect, useContext } from "react";
import ContactCard from "../ContactCard/ContactCard";
import { contactsContext } from "../../ContactsContextProvider";

const ContactList = () => {
  const { contacts, getContacts } = useContext(contactsContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {contacts.map((item) => (
        <ContactCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
