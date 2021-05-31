import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Contenido() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Grid container spacing={1} style={{ borderRadius: 15, width: '100%'}}>
        <Grid item xs={12}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
}

export default Contenido;
