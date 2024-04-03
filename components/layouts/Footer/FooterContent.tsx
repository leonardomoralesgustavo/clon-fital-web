import { Box, Typography } from "@mui/material";
import React from "react";
import styleList from "./Footer.styles";
import { useRouter } from "next/router";

const { content: styles } = styleList;

export const SOCIALS: {
  id: number;
  img: string;
  name: string;
  path: string;
}[] = [
  {
    id: 1,
    img: "/images/facebook_white.png",
    name: "facebook",
    path: "https://www.facebook.com/profile.php?id=100085882848917",
  },
  { id: 2, img: "/images/linkedin_white.png", name: "linkedin", path: "" },
  {
    id: 3,
    img: "/images/instagram_white.png",
    name: "instagram",
    path: "https://www.instagram.com/fitalmx/",
  },
  {
    id: 4,
    img: "/images/youtube_white.png",
    name: "youtube",
    path: "https://www.youtube.com/channel/UCTHNrpg-xqBZUQ-We_YFQ4A",
  },
];

export const FooterContent = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Box sx={styles.root}>
      <Box>
        <Typography variant="body1" sx={styles.commonText}>
          NORTE 35 747 , COL. INDUSTRIAL VALLEJO,
        </Typography>
        <Typography variant="body1" sx={styles.commonText}>
          C.P. 2300, DELEG./MPIO. AZCAPOTZALCO,
        </Typography>
        <Typography variant="body1" sx={styles.commonText} mb={5}>
          CIUDAD DE MÉXICO.
        </Typography>
        {/* <Typography variant="body1" sx={styles.commonText}>
          Avenida Insurgentes Sur No. 1458 Piso 12,
        </Typography>
        <Typography variant="body1" sx={styles.commonText}>
          Colonia Actipan,
        </Typography>
        <Typography variant="body1" mb={5} sx={styles.commonText}>
          C.P. 03920, Alcaldia Benito Juárez, CDMX
        </Typography> */}
        <Typography variant="body1" sx={styles.commonText}>
          puflea@fitalmx.com
        </Typography>
        <Typography variant="body1" sx={styles.commonText}>
          Lunes a Viernes de 9:00 a 18:00 horas
        </Typography>
        <Typography variant="body1" sx={styles.commonText}>
          Atención al cliente: 5578874806
        </Typography>
        <Typography variant="body1" sx={styles.commonText}>
          WhatsApp: 5578874806
        </Typography>
      </Box>
      <Box sx={styles.responsiveFlexContainer(true)}>
        <Typography
          variant="body1"
          sx={styles.link}
          onClick={() => {
            if (pathname == "/") {
              window.scrollTo({ behavior: "smooth", top: 600 });
              return;
            }
            router.push("/");
            setTimeout(() => {
              window.scrollTo({ behavior: "smooth", top: 600 });
            }, 500);
          }}
        >
          Regulación
        </Typography>
        <Typography variant="body1" sx={styles.link}>
          Aviso de privacidad
        </Typography>
        <Typography variant="body1" sx={styles.link}>
          Costos y comisiones
        </Typography>
      </Box>
      <Box sx={styles.responsiveFlexContainer(false)}>
        {SOCIALS.map(({ id, img, name, path }) => (
          <Box
            key={id}
            component={"img"}
            src={img}
            alt={name}
            sx={styles.socialItem}
            onClick={() => window.open(path, "_blank")}
          />
        ))}
      </Box>
    </Box>
  );
};
