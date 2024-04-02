import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styleList from "./header.styles";

const { contentStyles: styles } = styleList;

export const HeaderContent = () => {
  return (
    // <Box sx={styles.root} mb={8}>
    //   <Box sx={styles.textContainer}>

    //   </Box>
    //   <Box component={"img"} src="/images/header_img.png" sx={styles.img} bgcolor={"red"}/>
    // </Box>
    <Box
      sx={{
        backgroundImage: `url("/images/btc_box.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh", // ajusta la altura según tus necesidades
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h4"
          component="div"
          textAlign="center"
          color="white"
        >
          De Inversión a patrimonio,
        </Typography>
        <Typography
          variant="h4"
          component="div"
          textAlign="center"
          color="white"
        >
          Convierte Criptomonedas en Tu Propiedad
        </Typography>
        <Typography
          variant="h4"
          component="div"
          textAlign="center"
          color="white"
        >
          en Tu Propiedad
        </Typography>
        <Box sx={styles.buttonContainer}>
          <Button
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
