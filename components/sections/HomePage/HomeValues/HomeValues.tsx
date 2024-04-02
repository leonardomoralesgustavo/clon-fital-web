import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./HomeValues.styles";

export const HomeValues = () => {
  const [play, setPlay] = useState();

  return (
    <Box
      sx={{
        backgroundImage: `url("/images/hands.png")`,
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
          VALORES
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
        >
          Innovación: Impulsando el futuro financiero e inmobiliario con
          tecnología de vanguardia.
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
        >
          Transparencia: Claridad y honestidad en cada transacción, construyendo
          confianza en el mundo digital.
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
        >
          Seguridad: Protegiendo con rigor cada aspecto de tus activos digitales
          y transacciones
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
        >
          Seguridad: Protegiendo con rigor cada aspecto de tus activos digitales
          y transacciones
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
        >
          Seguridad: Protegiendo con rigor cada aspecto de tus activos digitales
          y transacciones
        </Typography>
      </Box>
    </Box>
  );
};
