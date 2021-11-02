import { CardMedia, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { height } from "@mui/system";

const Service = (props) => {
  const { name, discription, images } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          height="140"
          style={{ width: "auto", height: "80px", margin: "0 auto" }}
          image={images}
          alt="green iguana"
        />

        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {discription}
          </Typography>
          <Typography variant="body2"></Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
