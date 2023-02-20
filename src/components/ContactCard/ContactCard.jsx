import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contactsContext } from "../../ContactsContextProvider";
import { display } from "@mui/system";

export default function BasicCard({ item }) {
  const navigate = useNavigate();
  const { deleteContact } = useContext(contactsContext);

  return (
    <Card
      sx={{
        width: "25%",
        margin: "3%",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Name: {item.name}
        </Typography>
        <Typography variant="h5" component="div">
          LastName: {item.lastName}
        </Typography>
        <Typography variant="h5" component="div">
          Phone: {item.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="warning"
          onClick={() => navigate(`/edit/${item.id}`)}
        >
          Edit
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={() => deleteContact(item.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
