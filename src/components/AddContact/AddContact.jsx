import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contactsContext } from "../../ContactsContextProvider";

export default function InputWithIcon() {
  const { addContact } = useContext(contactsContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  function createContact() {
    let newContact = {
      name,
      lastName,
      phone,
    };

    for (let key in newContact) {
      if (!newContact[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }

    addContact(newContact);

    setName("");
    setLastName("");
    setPhone("");

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
      <Button variant="contained" onClick={createContact}>
        Add
      </Button>
    </>
  );
}
