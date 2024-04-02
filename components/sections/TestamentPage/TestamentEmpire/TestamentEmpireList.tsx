import { Box } from "@mui/material";
import React from "react";
import { TestamentEmpireListItem } from "./TestamentEmpireListItem";
import styleList from "./TestamentEmpire.styles";

const { list: styles } = styleList;

export type StepItem = {
  id: number;
  img: string;
  text: string;
};

const STEPS: StepItem[] = [
  {
    id: 1,
    img: "/images/registro.png",
    text: "Regístrate GRATIS en nuestra plataforma en línea.",
  },
  {
    id: 2,
    img: "/images/construye.png",
    text: "Construye el simulador con tus bienes inmuebles (patrimonio) y activos digitales, creando así tu IMPERIO.",
  },
  {
    id: 3,
    img: "/images/revisa.png",
    text: "Revisa y confirma la información proporcionada.",
  },
  {
    id: 4,
    img: "/images/recibe.png",
    text: "Recibe tu testamento digital listo para ser firmado.",
  },
];

export const TestamentEmpireList = () => {
  return (
    <Box sx={styles.root}>
      {STEPS.map((step) => (
        <TestamentEmpireListItem key={step.id} item={step} />
      ))}
    </Box>
  );
};
