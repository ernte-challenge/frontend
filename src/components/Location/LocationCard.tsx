import React from "react";
import {
  Card,
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core/";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import styles from "../../styles/location";

interface LocationCardProperties {
  locationName: string;
  whatToDoSubline: string;
  usersRegistered: number;
  usersNeeded: number;
  distance: number;
  salary: number;
  imageUrl: string;
  key: string;
}

const LocationCard = ({
  locationName,
  whatToDoSubline,
  usersRegistered,
  usersNeeded,
  distance,
  salary,
  imageUrl,
  key
}: LocationCardProperties) => {
  const classes = styles();
  return (
    console.log(distance),
    (
      <Card className={classes.locationCard}>
        <CardActionArea>
          <CardMedia
            className={classes.bannerImage}
            image="https://image.shutterstock.com/image-photo/tractor-spraying-pesticides-on-soybean-600w-653708227.jpg"
            title={locationName}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography className={classes.usersNeeded}>
                {usersRegistered} / {usersNeeded} benötigt
              </Typography>
              <Grid
                aria-label="bookmark"
                className={classes.bookmarkIcon}
                onClick={() => {
                  console.log(`${locationName} add to favorites`);
                }}
              >
                <BookmarkBorderIcon />
              </Grid>
            </Grid>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h6">
              {locationName}
            </Typography>
            <Typography variant="body2">{whatToDoSubline}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid justify="space-between" container>
            <Typography className={classes.distance} gutterBottom>
              {distance} km entfernt
            </Typography>
            <Typography className={classes.distance} gutterBottom>
              {salary} € / Std.
            </Typography>
          </Grid>
        </CardActions>
      </Card>
    )
  );
};

export default LocationCard;
