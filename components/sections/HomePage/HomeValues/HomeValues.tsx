import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./HomeValues.styles";

export const HomeValues = () => {
  return (
    <Box sx={styles.main.root}>
      <Box sx={styles.content.root}>
        <Typography sx={styles.content.titleText}>VALORES</Typography>
        <Typography sx={styles.content.commonText}>
          Innovación: Impulsando el futuro financiero e inmobiliario con
          tecnología de vanguardia.
        </Typography>
        <Typography sx={styles.content.commonText}>
          Transparencia: Claridad y honestidad en cada transacción, construyendo
          confianza en el mundo digital.
        </Typography>
        <Typography sx={styles.content.commonText}>
          Seguridad: Protegiendo con rigor cada aspecto de tus activos digitales
          y transacciones
        </Typography>
        <Typography sx={styles.content.commonText}>
          Seguridad: Protegiendo con rigor cada aspecto de tus activos digitales
          y transacciones
        </Typography>
        <Typography sx={styles.content.commonText}>
          Seguridad: Protegiendo con rigor cada aspecto de tus activos digitales
          y transacciones
        </Typography>
      </Box>
    </Box>
  );
};
