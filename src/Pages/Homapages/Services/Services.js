import React from "react";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";

import fluride from "../../../images/fluoride.png";

import whitening from "../../../images/whitening.png";
import cavity from "../../../images/cavity.png";

const services = [
  {
    name: "Fluoride Treatment",
    discription:
      "lorem is not just a normal snippet—it’s actually a generator. Every time you expand it, it will generate a 30-words dummy text, splitted into a few sentences.",
    images: fluride,
  },
  {
    name: "cavity",
    discription:
      "lorem is not just a normal snippet—it’s actually a generator. Every time you expand it, it will generate a 30-words dummy text, splitted into a few sentences.",
    images: cavity,
  },
  {
    name: "whitening",
    discription:
      "lorem is not just a normal snippet—it’s actually a generator. Every time you expand it, it will generate a 30-words dummy text, splitted into a few sentences.",
    images: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography variant="h6" sx={{ fontWeight: 500 , m: 2}}   component="div">
          OUR SERVICES
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 500 , m: 2}} component="div">
           Services We Provide 
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}>
              {" "}
            </Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
