import React from "react";
import styleList from "./HomeAboutUs.styles";
import { Box } from "@mui/material";
import { HomeAboutUsList } from "./HomeAboutUsList";

const { main: styles } = styleList;

export const HomeAboutUs = () => {
  return (
    <Box sx={styles.root} component={"section"}>
      <Box sx={styles.flexContainer}>
        <Box sx={styles.listContainer}>
          <HomeAboutUsList />
        </Box>
      </Box>
    </Box>
  );
};
