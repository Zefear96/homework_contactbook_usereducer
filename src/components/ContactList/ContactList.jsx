import React, { useEffect, useContext } from "react";
import ContactCard from "../ContactCard/ContactCard";
import { contactsContext } from "../../ContactsContextProvider";

const ContactList = () => {
  const { contacts, getContacts } = useContext(contactsContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="mx-auto mt-5 w-50 d-flex justify-content-between flex-wrap">
      {contacts.map((item) => (
        <ContactCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
