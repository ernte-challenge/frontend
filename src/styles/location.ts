import { makeStyles } from "@material-ui/core/styles";
import {SECONDARY01, SECONDARY02} from './styles';

const styles = makeStyles({
  bannerImage: {
    height: '200px',
  },
  locationCard: {
    margin: '2rem 1rem 0 1rem',
    borderRadius: '2rem'
  },
  usersNeeded: {
    backgroundColor: SECONDARY01,
    color: 'white',
    display: 'inline-flex',
    padding: '4px',
    borderRadius: '4px',
    marginTop: '12px',
    marginLeft: '12px',
    fontSize: '0.85rem',
  },
  bookmarkIcon: {
    marginRight: '12px',
    marginTop: '12px',
    color: 'white',
  },
  distance: {
    fontWeight: 500,
    marginLeft: '10px',
    color: SECONDARY02,
  }
});

export default styles;
