import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./HomeMision.styles";

export const HomeMission = () => {
  return (
    <Box sx={styles.main.root}>
      <Box sx={styles.content.root}>
        <Typography sx={styles.content.titleText}>MISIÓN</Typography>
        <Typography sx={styles.content.commonText}>
          Fital CriptoInmobiliaria se dedica a revolucionar el sector
          financiero, usando el poder de las criptomonedas y la tecnología
          blockchain para hacer más accesibles y eficientes las transacciones
          financieras e inmobiliarias.
        </Typography>
        <Typography sx={styles.content.commonText}>
          Nuestro objetivo es derribar barreras convencionales, permitiendo a
          usuarios globales una participación segura y transparente en la
          economía digital, con un enfoque especial en facilitar la propiedad
          inmobiliaria.
        </Typography>
        <Typography sx={styles.content.commonText}>
          Aspiramos a ser el puente que conecta las finanzas tradicionales con
          las oportunidades innovadoras del futuro, marcando un nuevo estándar
          en la creación de patrimonio y la inclusión financiera.
        </Typography>
      </Box>
    </Box>
  );
};
