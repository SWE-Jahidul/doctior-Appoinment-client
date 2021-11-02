import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import img from "../../../images/chair.png";
import bg_img from "../../../images/bg.png";

const bannarbg = {
  background: `url(${bg_img})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3" sx={{ my: 5 }}>
              Your New Smile <br />
              Starts Here
            </Typography>

            <Typography
              variant="h4"
              sx={{ color: "gray", fontSize: 13, my: 5 }}
            >
              “Lorem ipsum” dummy text is used by many web-developers to test
              how their HTML templates will look with real data. Often,
              developers use third-party services to generate “Lorem ipsum”
              text, but now you can do that right in your editor. Just expand
              lorem or lipsum abbreviations to get the following snippet.
            </Typography>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#27D5B7",
              }}
            >
              Get Appoinment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "250px" }} src={img} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
