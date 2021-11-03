import { Button, Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  const { name, time, space } = booking;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography variant="h5" gutterBottom component="div">
            {name}
          </Typography>

          <Typography variant="h6" gutterBottom component="div">
            {time}{" "}
          </Typography>

          <Typography variant="caption" gutterBottom component="div">
            {space}{" "}
          </Typography>

          <Button variant="contained" onClick={handleBookingOpen}>
            {" "}
            Book Appoinment{" "}
          </Button>
        </Paper>
      </Grid>

      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
      ></BookingModal>
    </>
  );
};

export default Booking;
