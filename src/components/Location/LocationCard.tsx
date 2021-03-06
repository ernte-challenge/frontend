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
import {LOCATIONS_PATH} from "../../routes";
import {Link} from "react-router-dom";

interface LocationCardProperties {
  locationName: string;
  whatToDoSubline: string;
  usersRegistered: number;
  usersNeeded: number;
  distance: number;
  salary: number;
  imageUrl: string;
  id: string;
  onBookmark: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const LocationCard = ({
  locationName,
  whatToDoSubline,
  usersRegistered,
  usersNeeded,
  distance,
  salary,
  imageUrl,
  id,
  onBookmark
}: LocationCardProperties) => {
  const classes = styles();
  return (
    (
      <Card className={classes.locationCard}>
        <Link to={LOCATIONS_PATH + "/" + id}>
          <CardActionArea>
          <CardMedia
            className={classes.bannerImage}
            image={imageUrl}
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
                onClick={onBookmark}
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
        </Link>
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
