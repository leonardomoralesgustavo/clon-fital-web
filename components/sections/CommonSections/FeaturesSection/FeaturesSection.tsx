import { Box } from "@mui/material";
import React from "react";
import styleList from "./FeaturesSection.styles";
import { FeatureSectionList } from "./FeatureSectionList";

export type FeatureItem = {
  id: number;
  img: string;
  title: string;
  text: string;
};

const LEFT_FEATURES: FeatureItem[] = [
  {
    id: 1,
    img: "/images/soporte.png",
    title: "Soporte de Lunes a Viernes de 9am a 6pm",
    text: "Si tienes alguna duda o comentarios nos podrás contactar vía telefónica, e-mail o chat.",
  },
  {
    id: 2,
    img: "/images/experiencia.png",
    title: "Experiencia de usuario",
    text: "La app es amistosa y ágil para que puedas navegar de forma sencilla y rápida. Todo al alcance de tu mano.",
  },
  {
    id: 3,
    img: "/images/notificaciones.png",
    title: "Notificaciones",
    text: "Recibe notificaciones de toda las operaciones que realices al momento para que siempre estés enterado.",
  },
];

const RIGHT_FEATURES: FeatureItem[] = [
  {
    id: 1,
    img: "/images/accesibilidad.png",
    title: "Fácil acceso",
    text: "Es de fácil acceso con mecanismos novedosos de autenticación.",
  },
  {
    id: 2,
    img: "/images/invitaciones.png",
    title: "Invitaciones",
    text: "Genera invitaciones desde la misma app para que tus amigos inviertan y empiecen a ganar dinero.",
  },
  {
    id: 3,
    img: "/images/seguridad.png",
    title: "Seguridad",
    text: "Es de fácil acceso con mecanismos novedosos de autenticación.",
  },
];

const { main: styles } = styleList;

export const FeaturesSection = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.flexContainer}>
        <FeatureSectionList data={LEFT_FEATURES} />
        <Box
          component={"img"}
          alt="phone app finsus"
          src="/images/phone.png"
          sx={styles.img}
        />
        <FeatureSectionList data={RIGHT_FEATURES} isRight />
      </Box>
    </Box>
  );
};
