import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactsContext } from "../../ContactsContextProvider";

const EditContact = () => {
  const { oneContact, getOneContact, updateContact } =
    useContext(contactsContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setLastName(oneContact.lastName);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);

  function saveChanges() {
    let editedContact = {
      name,
      lastName,
      phone,
    };
    updateContact(id, editedContact);
    navigate("/");
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="LastName"
          variant="filled"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Phone"
          variant="filled"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={saveChanges}>
        Save
      </Button>
    </>
  );
};

export default EditContact;
