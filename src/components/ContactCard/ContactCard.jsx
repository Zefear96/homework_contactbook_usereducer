import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contactsContext } from "../../ContactsContextProvider";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ item }) {
  const navigate = useNavigate();
  const { deleteContact } = useContext(contactsContext);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <br />
        <Typography variant="h5" component="div">
          {item.lastName}
        </Typography>
        <Typography variant="body2">{item.phone}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>

        <Button variant="outlined" color="warning">
          Edit
        </Button>

        <Button variant="outlined" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
