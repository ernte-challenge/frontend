import Box from "@material-ui/core/Box";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Typography from "@material-ui/core/Typography";
import React from "react";

interface ValidationMessageBoxProperties {
  message?: string
}

export default function ValidationMessageBox({message}: ValidationMessageBoxProperties) {
  const style = {
    height: '70px',
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: message? '#F8F8F8' : 'white',
    border: message? '2px solid #F3F3F3': '0',
    borderRadius: '5px',
    padding: '0.8rem 0.8rem'
  };

  return (
    <Box mt={3} style={style}>
      {message && <ErrorOutlineIcon fontSize={"large"}/>}
      <Typography style={{marginLeft: "1.5rem"}}>{message}</Typography>
    </Box>
  )
}
