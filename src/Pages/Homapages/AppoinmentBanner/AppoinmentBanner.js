import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import apt_bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appoinmentBg = {
  background: `url(${apt_bg})`,

  backgroundColor: "rgba(45,58,74,0.8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 120,
};

const AppoinmentBanner = () => {
  return (
    <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={doctor}
            style={{ width: 400, marginTop: "-110px" }}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 500, mb: 2 }}
              component="div"
            >
              Appoinment
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontWeight: 500, my: 2 }}
              component="div"
              style={{
                color: "White",
              }}
            >
              Make An Appoinment Today
            </Typography>

            <Typography
              sx={{ fontWeight: 300, my: 2, color: "White" }}
              component="div"
            >
              Mlorem is not just a normal snippet—it’s actually a generator.
              Every time you expand it, it will generate a 30-words dummy text,
              splitted into
            </Typography>

            <Button variant="contained" style={{
                backgroundColor : '#27D5B7'
            }}> Learn More </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;
