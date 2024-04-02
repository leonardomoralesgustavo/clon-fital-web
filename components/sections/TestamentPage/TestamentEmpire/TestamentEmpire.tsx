import { Box, Typography } from "@mui/material";
import React from "react";
import styleList from "./TestamentEmpire.styles";
import { TestamentEmpireList } from "./TestamentEmpireList";

const { main: styles } = styleList;

export const TestamentEmpire = () => {
  return (
    <Box component={"section"}>
      <Box sx={styles.header}>
        <Typography variant="h1" component={"h2"} sx={styles.title}>
          Crea tu imperio, diseña tu testamento
        </Typography>
      </Box>
      <Box mt={{ md: 15, xs: 10 }}>
        <TestamentEmpireList />
      </Box>
    </Box>
  );
};
