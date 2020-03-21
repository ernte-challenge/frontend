import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface LocationCardProperties {
  locationName: string,
  usersRegistered: number,
  usersNeeded: number,
  distance: number,
  salary: number,
  imageUrl: string
};

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const LocationCard = ({
                        locationName, usersRegistered, usersNeeded, distance,
                        salary, imageUrl
                      }: LocationCardProperties) => {

  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://image.shutterstock.com/image-photo/tractor-spraying-pesticides-on-soybean-600w-653708227.jpg"
          title={locationName}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {locationName}
          </Typography>
          <Typography gutterBottom component="div">
            {usersRegistered} / {usersNeeded}
          </Typography>
          <Typography gutterBottom component="div">
            {distance} km      {salary} €
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default LocationCard;