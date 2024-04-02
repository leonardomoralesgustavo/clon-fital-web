import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./HomeVide.styles";

export const HomeVideo = () => {
  const [play, setPlay] = useState();

  return (
    <Box
      sx={{
        backgroundImage: `url("/images/tablero.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "80vh", // ajusta la altura según tus necesidades
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"left"}
        alignItems={"left"}
        width={"100%"}
        gap={3}
        ml={10}
        mb={4}
      >
        <Typography fontSize={"90px"} color="white">
          MISIÓN
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
        >
          Fital CriptoInmobiliaria se dedica a revolucionar el sector
          financiero, usando el poder de las criptomonedas y la tecnología
          blockchain para hacer más accesibles y eficientes las transacciones
          financieras e inmobiliarias.
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
        >
          Nuestro objetivo es derribar barreras convencionales, permitiendo a
          usuarios globales una participación segura y transparente en la
          economía digital, con un enfoque especial en facilitar la propiedad
          inmobiliaria.
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
        >
          Aspiramos a ser el puente que conecta las finanzas tradicionales con
          las oportunidades innovadoras del futuro, marcando un nuevo estándar
          en la creación de patrimonio y la inclusión financiera.
        </Typography>
      </Box>
    </Box>
  );
};
