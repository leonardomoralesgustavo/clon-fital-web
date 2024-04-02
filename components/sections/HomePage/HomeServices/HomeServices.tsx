import { Box } from "@mui/material";
import React from "react";
import { HomeServicesList } from "./HomeServicesList";
import styleList from "./HomeServices.styles";

const { main: styles } = styleList;

export const HomeServices = () => {
  return (
    <Box component={"section"} sx={styles.root}>
      <HomeServicesList />
    </Box>
  );
};
