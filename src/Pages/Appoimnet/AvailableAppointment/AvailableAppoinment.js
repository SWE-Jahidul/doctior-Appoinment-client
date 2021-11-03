import { Container, Grid } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const AvailableAppoinment = ({ date }) => {
  const bookings = [
    {
      id: 1,
      name: "Teeth Orthodonics",
      time: "08.00 AM - 09.00 AM",
      space: 10,
    },

    {
      id: 2,
      name: "Teeth Orthodonics",
      time: "08.00 AM - 09.00 AM",
      space: 10,
    },

    {
      id: 2,
      name: "Teeth Orthodonics",
      time: "08.00 AM - 09.00 AM",
      space: 10,
    },
  ];

  return (
    <Container>
      <h2>
        {" "}
        AvailableAppoinment
        {date.toDateString()}
      </h2>

      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date}>
            {" "}
          </Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppoinment;
