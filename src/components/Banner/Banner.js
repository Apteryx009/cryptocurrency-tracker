import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  banner: {
    background: "url(./banner2.jpg",
  },
  bannerContent: {
    height: 400,
  },
}));

const Banner = () => {
  const classes = useStyles;
  return (
    <div className={classes.Banner}>
      <Container className={classes.bannerContent}></Container>
    </div>
  );
};

export default Banner;
