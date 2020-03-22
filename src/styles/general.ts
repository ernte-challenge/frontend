import { makeStyles } from "@material-ui/core/styles";
import {PRIMARYBACKGROUND} from './styles';

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
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  fullFlex: {
    flex: '1 1 0',
  },
});

export default styles;
