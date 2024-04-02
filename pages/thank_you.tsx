import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

const ThankYouPage = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView();
  }, [ref.current]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { md: "100px", xs: "50px" },
        py: { xs: "50px", md: "80px" },
      }}
      ref={ref}
    >
      <Box
        component={"img"}
        src="/images/fital_logo_black.png"
        alt="Logo de fital"
        sx={{ width: { xs: "200px", md: "403px" } }}
      />
      <Typography
        sx={{
          fontSize: {
            md: "30px",
            xs: "20px",
            py: { md: "0px", xs: "20px" },
            textAlign: "center",
          },
        }}
      >
        Gracias, tu información ha sido enviada con éxito
      </Typography>
      <Button variant="outlined" onClick={() => window.open("https://fitalmx.com","_self")}>
        Aceptar y Regresar
      </Button>
    </Box>
  );
};

export default ThankYouPage;
