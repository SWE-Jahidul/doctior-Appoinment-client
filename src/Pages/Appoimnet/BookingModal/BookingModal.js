import React from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
  const { name, time } = booking;


  const handelbookingsubmit = e => {
      alert('sumiting ')


      handleBookingClose();
      e.priventDefault();
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}{" "}
          </Typography>

          <from onSubmit= {handelbookingsubmit}>
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />

            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue="Your Name "
              size="small"
            />

            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue="Your email  "
              size="small"
            />

            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue="Your Phone Number  "
              size="small"
            />

            <TextField
            disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={ date.toDateString()}
              size="small"
            />

            <Button variant="contained"> Book Now </Button>
          </from>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
