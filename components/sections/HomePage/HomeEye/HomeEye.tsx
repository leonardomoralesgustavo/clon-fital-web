import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./HomeEye.styles";

export const HomeEye = () => {
  const [play, setPlay] = useState();

  return (
    <Box
      sx={{
        backgroundImage: `url("/images/eye.png")`,
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
        justifyContent={"right"}
        alignItems={"end"}
        width={"100%"}
        gap={3}
        mr={10}
        mb={4}
      >
        <Typography fontSize={"90px"} color="white">
          VISIÓN
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
          textAlign={"end"}
        >
          Nuestra visión en Fital CriptoInmobiliaria es ser la vanguardia en la
          transformación del sector inmobiliario global, creando un ecosistema
          donde las criptomonedas y la tecnología blockchain sean los pilares de
          una nueva economía de la propiedad.
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
          textAlign={"end"}
        >
          Aspiramos a construir un mundo donde cualquier persona, en cualquier
          lugar, pueda acceder fácilmente al mercado inmobiliario con seguridad,
          transparencia y eficiencia, aprovechando las criptomonedas para
          democratizar la propiedad y fomentar la inclusión financiera.
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={"200"}
          color="white"
          maxWidth={"50%"}
          textAlign={"end"}
        >
          En Fital, visionamos un futuro donde las barreras entre las
          criptomonedas y el mercado financiero tradicional se disuelvan,
          permitiendo una integración fluida que abra nuevas oportunidades para
          inversores y propietarios por igual, estableciendo nuevos estándares
          de accesibilidad, innovación y confianza en el sector inmobiliario.
        </Typography>
      </Box>
    </Box>
  );
};
