import { Container, Grid } from "@mui/material";
import React from "react";

import chair from "../../../images/chair.png";
import Calender from "../../../Sheard/Calender/Calender";

const AppoinmnetHeader = ({date , setDate}) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Calender data={date} setDate = {setDate}></Calender>
        </Grid>

        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppoinmnetHeader;
