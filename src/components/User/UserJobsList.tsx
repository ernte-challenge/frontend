import React, {useEffect, useState} from "react";
import {API_JOBS_PATH} from "../../routes";
import {UserJob} from "../../global";
import {createStyles, List} from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import {makeStyles} from "@material-ui/core/styles";
import {PRIMARYBACKGROUND, SECONDARY01, SECONDARY02, SECONDARY03, SECONDARYBACKGROUND} from "../../styles/styles";
import UserJobListItem from "./UserJobListItem";
import CircularProgress from "@material-ui/core/CircularProgress";

interface UserJobsListProperties {
  userId: string,
  title: string,
  jobStatus: "requested" | "accepted"
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: SECONDARY03,
      borderRadius: '0.7rem',
      marginTop: '2rem'
    },
  }),
);

export default function UserJobsList({userId, title, jobStatus}: UserJobsListProperties) {
  const classes = useStyles();

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userJobs, setUserJobs] = useState<Array<UserJob>>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      await fetch(`${API_JOBS_PATH}?userId=${userId}&status=${jobStatus}`, {
        credentials: "same-origin"
      })
        .then(response => response.json())
        .then(setUserJobs)
        .then(data => setLoading(false))
        .catch(setError);
    })();
  }, [userId, jobStatus]);

  if (error) {
    return <div>Error!</div>;
  }
  if (loading) {
    return <CircularProgress disableShrink />;
  }
  console.log(userJobs);
  const userJobListItems = userJobs.map((job, idx) => <UserJobListItem userJob={job} index={idx}/>);
  return (
    <List className={classes.root} subheader={<ListSubheader color="primary">{title}</ListSubheader>} component="nav">
      {userJobListItems}
    </List>
  )
}