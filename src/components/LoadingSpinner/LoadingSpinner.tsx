import React from "react";
import {Grid} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingSpinner() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <CircularProgress disableShrink/>
      </Grid>
    </Grid>
  )
};
