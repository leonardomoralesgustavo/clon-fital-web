import { Box } from "@mui/material";
import React from "react";
import { HomeAboutUsListItem } from "./HomeAboutUsListItem";
import styleList from "./HomeAboutUs.styles";

const { list: styles } = styleList;

export type AboutItem = {
  id: number;
  title: string;
  type: "p" | "li";
  content: { id: number; text: string }[];
};

const ABOUT_ITEMS: AboutItem[] = [
  {
    id: 1,
    title: "Misión",
    type: "p",
    content: [
      {
        id: 1,
        text: "Nuestra misión es proporcionar soluciones legales innovadoras y accesibles para nuestros clientes, ofreciendo servicios de testamentos digitales y fideicomisos en línea.",
      },
      {
        id: 2,
        text: "Nos comprometemos a brindar una experiencia sencilla y eficiente, asegurando que nuestros clientes puedan proteger sus bienes y su patrimonio de manera efectiva.",
      },
    ],
  },
  {
    id: 2,
    title: "Visión",
    type: "p",
    content: [
      {
        id: 1,
        text: "Proteger el patrimonio de las personas con la finalidad de que trasciendan a través del tiempo, sin que erosione el patrimonio.",
      },
    ],
  },
  {
    id: 3,
    title: "Valores",
    type: "li",
    content: [
      {
        id: 1,
        text: "INNOVACIÓN: Buscamos siempre nuevas formas de brindar soluciones legales accesibles y confiables para nuestros clientes. La innovación es parte de nosotros, es lo que nos llevó a ser disruptivos en el mercado al digitalizar el proceso.",
      },
      {
        id: 2,
        text: "ACCESIBILIDAD: Queremos asegurarnos de que todas las personas puedan acceder a servicios legales efectivos y confiables, independientemente de su ubicación geográfica o su nivel de ingresos.",
      },
      {
        id: 3,
        text: "TRANSPARENCIA: Nos comprometemos a proporcionar información clara y concisa sobre nuestros servicios, precios y políticas de privacidad.",
      },
      {
        id: 4,
        text: "CONFIANZA: Queremos transmitir la certeza de que cuidaremos y administraremos sus bienes de la mejor manera.",
      },
      {
        id: 5,
        text: "SEGURIDAD: Tenemos estrictos protocolos de seguridad y certificados, que avalan las actividades internas de FITAL. ",
      },
      {
        id: 6,
        text: "COMPROMISO: proteger el patrimonio de las personas para que trascienda a través del tiempo.",
      },
      {
        id: 7,
        text: "HONESTIDAD: Los usuarios pueden estar seguros que todas las acciones que realicemos serán con transparencia y pensando en su protección y la de sus bienes.",
      },
    ],
  },
];

export const HomeAboutUsList = () => {
  return (
    <Box sx={styles.root}>
      {ABOUT_ITEMS.map((item) => (
        <HomeAboutUsListItem key={item.id} item={item} />
      ))}
    </Box>
  );
};
