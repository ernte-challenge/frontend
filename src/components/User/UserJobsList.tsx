import React from "react";
import {UserJob} from "../../global";
import {createStyles, List} from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import {makeStyles} from "@material-ui/core/styles";
import {SECONDARY03} from "../../styles/styles";
import UserJobListItem from "./UserJobListItem";

interface UserJobsListProperties {
  userJobs: Array<UserJob>
  title: string
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

export default function UserJobsList({userJobs, title}: UserJobsListProperties) {
  const classes = useStyles();

  const userJobListItems = userJobs.map((job, idx) => <UserJobListItem userJob={job} index={idx}/>);
  return (
    <List className={classes.root} subheader={<ListSubheader color="primary">{title}</ListSubheader>} component="nav">
      {userJobListItems}
    </List>
  )
}