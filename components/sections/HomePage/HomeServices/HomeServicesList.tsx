import { Box } from "@mui/material";
import React from "react";
import { HomeServicesListItem } from "./HomeServicesListItem";
import styleList from "./HomeServices.styles";

const { list: styles } = styleList;

export type ServiceItem = {
  id: number;
  img: string;
  title: string;
  paragraphs: {
    id: number;
    text: string;
  }[];
  benefits: {
    id: number;
    text: string;
  }[];
};

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Patrimonial",
    img: "/images/servicio_patrimonial.png",
    paragraphs: [
      {
        id: 1,
        text: "Servicio empleado con el fin de disponer, administrar, gestionar e instruir previamente las acciones sobre los bienes muebles e inmuebles.",
      },
    ],
    benefits: [
      {
        id: 1,
        text: "Protección y administración de tus bienes.",
      },
      {
        id: 2,
        text: "Compra / venta / renta de bienes materiales e inmateriales.",
      },
      {
        id: 3,
        text: "Acceso a todas tus cuentas bancarias desde la App.",
      },
      {
        id: 4,
        text: "Integración de beneficiarios.",
      },
    ],
  },
  {
    id: 2,
    title: "Ahorro e Inversión",
    img: "/images/servicio_inversion.png",
    paragraphs: [
      {
        id: 1,
        text: "Con la función de ahorro e inversiones te olvidarás del análisis de posibles inversiones; ahora nuestros expertos se encargarán de eso, tú sólo deberás elegir el riesgo que quieres tomar.",
      },
      {
        id: 2,
        text: "Esta función también pondrá a tu alcance planes de ahorro para tu retiro, para la educación de tus hijos, para irte de vacaciones, etc. ",
      },
    ],
    benefits: [
      {
        id: 1,
        text: "Ahorro para el retiro.",
      },
      {
        id: 2,
        text: "Ahorro para la educación de tus hijos.",
      },
      {
        id: 3,
        text: "Inversiones de riesgo bajo y alto.",
      },
    ],
  },
  {
    id: 3,
    title: "Pymes",
    img: "/images/servicio_pymes.png",
    paragraphs: [
      {
        id: 1,
        text: "La función de negocios te permitirá tener control sobre las cuentas bancarias de tu patrimonio, para facilitarte un análisis financiero que te lleve a la toma de desiciones.",
      },
    ],
    benefits: [
      {
        id: 2,
        text: "Control y Administración de tus negocios.",
      },
    ],
  },
];

export const HomeServicesList = () => {
  return (
    <Box sx={styles.root}>
      {SERVICES.map((service) => (
        <Box key={service.id} sx={styles.card}>
          <HomeServicesListItem item={service} />
        </Box>
      ))}
    </Box>
  );
};
