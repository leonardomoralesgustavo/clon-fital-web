import { Box } from "@mui/material";
import React from "react";
import { TestamentWorksListItem } from "./TestamentWorksListItem";
import styleList from './TestamentWorks.styles'

const { main: styles } = styleList

export type WorkItem = {
  id: number;
  text: string;
};

const WORKS: WorkItem[] = [
  {
    id: 1,
    text: "Para crear un testamento digital, primero debes registrarte en nuestra plataforma en línea GRATIS.",
  },
  {
    id: 2,
    text: "Luego, deberás subir a la plataforma tus bienes inmuebles y activos digitales.",
  },
  {
    id: 3,
    text: "Una vez que hayas proporcionado toda la información necesaria, nuestro software revisará y confirmará los detalles para garantizar que el testamento digital cumpla con todas las leyes aplicables.",
  },
];

export const TestamentWorksList = () => {
  return (
    <Box sx={styles.listContainer} >
      {WORKS.map((work, index) => (
        // <Box sx={styles.card(margins[index])}>
        <TestamentWorksListItem key={work.id} item={work} />
        // </Box>
      ))}
    </Box>
  );
};
