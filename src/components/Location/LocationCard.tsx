import React from "react";
import styled from "styled-components";
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

interface LocationCardProperties {
  locationName: string;
  whatToDoSubline: string;
  usersRegistered: number;
  usersNeeded: number;
  distance: number;
  salary: number;
  imageUrl: string;
}

const Root = styled.div`
  .bannerImage {
    height: 240px;
  }
  .usersNeeded {
    background-color: #39a852;
    color: white;
    display: inline-flex;
    padding: 4px;
    border-radius: 4px;
    margin-top: 12px;
    margin-left: 12px;
    font-size: 0.85rem;
  }
  .bookmarkIcon {
    margin-right: 12px;
    margin-top: 12px;
    color: white;
  }

  .distance {
    font-weight: 500;
    margin-left: 10px;
    color: #2d8641;
  }
`;

const LocationCard = ({
  locationName,
  whatToDoSubline,
  usersRegistered,
  usersNeeded,
  distance,
  salary,
  imageUrl
}: LocationCardProperties) => {
  return (
    <Root>
      <Card>
        <CardActionArea>
          <CardMedia
            className="bannerImage"
            image="https://image.shutterstock.com/image-photo/tractor-spraying-pesticides-on-soybean-600w-653708227.jpg"
            title={locationName}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography className="usersNeeded">
                {usersRegistered} / {usersNeeded} benötigt
              </Typography>
              <Grid
                aria-label="bookmark"
                className="bookmarkIcon"
                onClick={() => {
                  console.log(`${locationName} add to favorites`);
                }}
              >
                <BookmarkBorderIcon />
              </Grid>
            </Grid>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {locationName}
            </Typography>
            <Typography variant="body2">{whatToDoSubline}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography className="distance" gutterBottom>
            {distance} km {salary} €
          </Typography>
        </CardActions>
      </Card>
    </Root>
  );
};

export default LocationCard;
