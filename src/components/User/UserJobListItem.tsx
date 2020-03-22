import {Grid} from "@material-ui/core";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {UserJob} from "../../global";

interface UserJobListItemProperties {
  userJob: UserJob
  index: number
}

export default function UserJobListItem({userJob, index}: UserJobListItemProperties) {
  const salaryString = `${userJob.location.salary} €/Std.`;

  return (
    <ListItem>
      <Grid container justify="center" spacing={2}>
        <Grid container>
          <Grid justify="space-between" container>
            <ListItemText primary={userJob.location.name}/>
          </Grid>
          <Grid justify="space-between" container>
            <ListItemText secondary={userJob.startDate}/>
            <ListItemText primary={salaryString}/>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  )
};

