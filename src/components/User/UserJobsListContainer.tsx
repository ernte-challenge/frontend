import React, {useEffect, useState} from "react";
import {API_JOBS_PATH} from "../../routes";
import {UserJob} from "../../global";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import UserJobsList from "./UserJobsList";
import sendRequest from "../../util/request";

interface UserJobsListContainerProperties {
  userId: string,
  title: string,
  jobStatus: "requested" | "accepted"
}

export default function UserJobsListContainer({userId, title, jobStatus}: UserJobsListContainerProperties) {

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userJobs, setUserJobs] = useState<Array<UserJob>>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      sendRequest(`${API_JOBS_PATH}?userId=${userId}&status=${jobStatus}`, 'GET')
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
    return <LoadingSpinner/>;
  }
  return (
    <UserJobsList userJobs={userJobs} title={title}/>
  )
}