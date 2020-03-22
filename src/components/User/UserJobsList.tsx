import React, {useEffect, useState} from "react";
import {API_JOBS_PATH, API_LOCATIONS_PATH} from "../../routes";
import {FarmLocation, UserJob} from "../../global";
import {CardActions, createStyles, Grid, List, Theme} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import {makeStyles} from "@material-ui/core/styles";
import {PRIMARYBACKGROUND, SECONDARYBACKGROUND} from "../../styles/styles";
import UserJobListItem from "./UserJobListItem";

interface UserJobsListProperties {
  userId: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: PRIMARYBACKGROUND,
      borderRadius: '0.7rem',
      marginTop: '2rem'
    },
  }),
);

export default function UserJobsList({userId}: UserJobsListProperties) {
  const classes = useStyles();

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userJobs, setUserJobs] = useState<Array<UserJob>>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      await fetch(`${API_JOBS_PATH}?userId=${userId}`, {
        credentials: "same-origin"
      })
        .then(response => response.json())
        .then(setUserJobs)
        .then(data => setLoading(false))
        .catch(setError);
    })();
  }, [userId]);

  if (error) {
    return <div>Error!</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(userJobs);
  const userJobListItems = userJobs.map((job, idx) => <UserJobListItem userJob={job} index={idx}/>);
  return (
    <List className={classes.root} subheader={<ListSubheader>Deine nächsten Jobs:</ListSubheader>} component="nav">
      {userJobListItems}
    </List>
  )
}