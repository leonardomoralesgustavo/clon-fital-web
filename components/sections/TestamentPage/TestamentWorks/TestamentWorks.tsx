import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styleList from "./TestamentWorks.styles";
import { TestamentWorksList } from "./TestamentWorksList";

const { main: styles } = styleList;

export const TestamentWorks = () => {
  return (
    <Box component={"section"}>
      <Box sx={styles.header}>
        <Typography variant="h2" sx={styles.title}>
          ¿Cómo funciona?
        </Typography>
      </Box>
      <Box sx={styles.bgContainer}>
        <Box
          component={"img"}
          alt="security"
          src="/images/como_funciona.png"
          sx={styles.responsiveImg}
        />
        <TestamentWorksList />
        <Box sx={styles.buttonContainer}>
          <Button
            sx={styles.button}
            variant="contained"
            onClick={() => {
              window.open(`https://imperio.fitalmx.com/`);
            }}
          >
            Crea tu testamento
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
