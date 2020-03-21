import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
  fullScreenSize: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(217,212,98,1) 0%, rgba(195,212,98,1) 31%, rgba(177,212,98,1) 100%)',
  },
  header: {
    width: '100%',
    position: 'fixed',
    textAlign: 'center',
    fontSize: '1.8rem',
    borderBottom: '1px solid white',
    textTransform: 'uppercase',
    paddingTop: '1rem',
    paddingBottom: '0.5rem',
    height: '4rem',
  },
});

export default styles;