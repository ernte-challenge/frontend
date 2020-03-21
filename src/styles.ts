import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
  fullScreenSize: {
    width: '100vw',
    height: '100vh',
    background: '#e1e1e1',
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