import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contactsContext } from "../../ContactsContextProvider";

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
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={item.name}
          subheader={item.lastName}
        />
        <Typography variant="h5" component="div">
          <b>Name:</b> {item.name}
        </Typography>
        <Typography variant="h5" component="div">
          <b>LastName:</b> {item.lastName}
        </Typography>
        <Typography variant="h5" component="div">
          <b>Phone:</b> {item.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="warning"
          onClick={() => navigate(`/edit/${item.id}`)}
        >
          <EditIcon />
          Edit
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={() => deleteContact(item.id)}
        >
          <DeleteIcon />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
