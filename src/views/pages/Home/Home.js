import { Box, Container } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import ReadMore from "./ReadMore";
import Process from "./Process";
import FeaturedRate from "./FeaturedRate";
import ToolsFearute from "./ToolsFearute";
import CheckCibil from "./CheckCibil";
import WhatDoes from "./WhatDoes";

const Home = () => {
  return (
    <Box mt="55px">
      <Container>
        <Hero />
      </Container>
      <ReadMore />
      <Process />
      <FeaturedRate />
      <ToolsFearute />
      <CheckCibil />
      <WhatDoes />
    </Box>
  );
};

export default Home;
