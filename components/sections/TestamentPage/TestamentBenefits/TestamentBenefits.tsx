import { Box, Typography } from "@mui/material";
import React from "react";
import styleList from "./TestamentBenefits.styles";
import { TestamentBenefitsList } from "./TestamentBenefitsList";

const { main: styles } = styleList;

export const TestamentBenefits = () => {
  return (
    <Box component={"section"}>
      <Box sx={styles.header}>
        <Typography variant="h2" component={"h2"} sx={styles.title}>
          Beneficios de crear un testamento digital
        </Typography>
      </Box>
      <Box sx={styles.bgContainer}>
        <Box
          component={"img"}
          alt="search"
          src="/images/beneficios_bg.png"
          sx={styles.responsiveImg}
        />
        <Box sx={styles.listContainer}>
          <TestamentBenefitsList />
        </Box>
      </Box>
    </Box>
  );
};
