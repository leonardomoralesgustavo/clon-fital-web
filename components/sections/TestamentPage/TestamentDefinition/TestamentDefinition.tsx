import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styleList from "./TestamentDefinition.styles";

const { main: styles } = styleList;

export const TestamentDefinition = () => {
  return (
    <Box component={"section"}>
      <Box sx={styles.titleContainer}>
        <Typography variant="h2" component={"h2"} sx={styles.title}>
          ¿Qué es un Testamento Digital?
        </Typography>
      </Box>
      <Box sx={styles.bgContainer}>
        <Box
          component={"img"}
          alt="cellphone"
          src="/images/testamento_digital.png"
          sx={styles.responsiveImg}
        />
        <Box sx={styles.pContainer}>
          <Typography variant="body1" sx={styles.paragraph}>
            Un testamento digital es un documento legal que establece cómo se
            distribuirán tus bienes y activos después de tu fallecimiento.
          </Typography>
          <Typography variant="body1" sx={styles.paragraph}>
            A diferencia de un testamento tradicional, un testamento digital se
            crea y se almacena en línea.
          </Typography>
          <Typography variant="body1" sx={styles.paragraph}>
            Además puedes modificarlo en el momento que tú desees.
          </Typography>
          <Typography variant="body1" sx={styles.paragraph}>
            Incluye instrucciones detalladas sobre cómo se deben administrar tus
            activos y cómo deseas que se distribuyan tus bienes a tus herederos
            o beneficiarios designados. Además de manejar un perfil de secrecía
            al designar a tus beneficiarios y bienes.
          </Typography>
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
