import { Box } from "@mui/material";
import React from "react";
import { HomeVideo } from "./HomeVideo";
import { MainFooter } from "@/components/layouts/Footer";
import { HomeWeb3 } from "./HomeWeb3";
import { HomeAcreditaciones } from "./HomeAcreditaciones";

export const HomePageContent = () => {
  return (
    <Box>
      <HomeVideo />
      <HomeWeb3 />
      <HomeAcreditaciones />
      <MainFooter />
    </Box>
  );
};
