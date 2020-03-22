import {Grid} from "@material-ui/core";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {UserJob} from "../../global";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {PRIMARYBACKGROUND, SECONDARYBACKGROUND} from "../../styles/styles";

interface UserJobListItemProperties {
  userJob: UserJob
  index: number
}

const useStyles = makeStyles({
  root: {
    borderTop: `1px solid ${SECONDARYBACKGROUND}`,
  },
});

export default function UserJobListItem({userJob, index}: UserJobListItemProperties) {
  const salaryString = `${userJob.location.payedPerHour} EUR`;
  const distanceString = `${userJob.location.distance} KM`;

  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <Grid container justify="center" spacing={1}>
        <Grid container sm={12}>
          <Grid justify="space-between" container spacing={1}>
            <ListItemText style={{"width":"70%"}} primary={userJob.location.name}/>
            <ListItemText secondary={salaryString}/>
          </Grid>
          <Grid justify="space-between" container spacing={1}>
            <ListItemText style={{"width":"70%"}} secondary={userJob.location.whatToDoSubline + ", ab " + userJob.startDate}/>
            <ListItemText secondary={distanceString}/>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  )
};

