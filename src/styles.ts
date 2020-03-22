import { makeStyles } from "@material-ui/core/styles";

export const PRIMARY = "#4D917E";
export const SECONDARY01 = "#39A852";
export const SECONDARY02 = "#2D8641";
export const SECONDARY03 = "#D8EA86";
export const PRIMARYBACKGROUND = "#DCDCDC";
export const SECONDARYBACKGROUND = "#3F3E55";
export const PRIMARYFONT = "#000000";
export const SECONDARYFONT = "#7F7F7F";

const styles = makeStyles({
  fullScreenSize: {
    width: "100vw",
    height: "100vh",
    background: PRIMARYBACKGROUND
  },
  header: {
    width: "100%",
    position: "fixed",
    textAlign: "center",
    fontSize: "1.8rem",
    borderBottom: "1px solid white",
    textTransform: "uppercase",
    paddingTop: "1rem",
    paddingBottom: "0.5rem",
    height: "4rem"
  }
});

export default styles;
