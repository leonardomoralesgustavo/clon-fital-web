import { Box, Button, Typography } from "@mui/material";
import styles from "./HomeEye.styles";

export const HomeEye = () => {
  return (
    <Box sx={styles.main.root}>
      <Box sx={styles.content.root}>
        <Typography sx={styles.content.titleText}>VISIÓN</Typography>
        <Typography sx={styles.content.commonText}>
          Nuestra visión en Fital CriptoInmobiliaria es ser la vanguardia en la
          transformación del sector inmobiliario global, creando un ecosistema
          donde las criptomonedas y la tecnología blockchain sean los pilares de
          una nueva economía de la propiedad.
        </Typography>
        <Typography sx={styles.content.commonText}>
          Aspiramos a construir un mundo donde cualquier persona, en cualquier
          lugar, pueda acceder fácilmente al mercado inmobiliario con seguridad,
          transparencia y eficiencia, aprovechando las criptomonedas para
          democratizar la propiedad y fomentar la inclusión financiera.
        </Typography>
        <Typography sx={styles.content.commonText}>
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
