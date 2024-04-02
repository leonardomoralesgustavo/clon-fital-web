import { Box } from "@mui/material";
import React from "react";
import { TestamentBenefitListItem } from "./TestamentBenefitListItem";
import styleList from "./TestamentBenefits.styles";

const { list: styles } = styleList;

export type BenefitItem = {
  id: number;
  img: string;
  title: string;
  text: string;
};

const BENEFITS: BenefitItem[] = [
  {
    id: 1,
    img: "/images/beneficio_1.png",
    title: "Accesibilidad:",
    text: "Puedes crear o actualizar un testamento digital y acceder a él en cualquier momento y lugar a través de nuestra plataforma en línea, lo que ahorra tiempo y dinero.",
  },
  {
    id: 2,
    img: "/images/beneficio_2.png",
    title: "Seguridad:",
    text: "Los testamentos digitales están protegidos por medidas de tecnología avanzadas para garantizar la privacidad y protección de tus datos.",
  },
  {
    id: 3,
    img: "/images/beneficio_3.png",
    title: "Flexibilidad:",
    text: "Un testamento digital te permite actualizar y modificar tus instrucciones en cualquier momento, sin la necesidad de crear un nuevo testamento cada vez.",
  },
  {
    id: 4,
    img: "/images/beneficio_4.png",
    title: "Tranquilidad:",
    text: "Al crear un testamento digital, puedes tener la tranquilidad de que tus bienes y activos se distribuirán según tus deseos después de tu fallecimiento, evitando conflictos familiares y asegurando la protección de tu legado. Además de mantener la secrecía de tus decisiones.",
  },
];

const margins = [
  { xl: "241px", lg: "100px", md: "150px" },
  { xl: "143px", lg: "50px", md: "90px" },
  { xl: "75px", lg: "30px", md: "45px" },
  { xl: "230px", lg: "100px", md: "160px" },
];

export const TestamentBenefitsList = () => {
  return (
    <Box>
      {BENEFITS.map((benefit, index) => (
        <Box key={benefit.id} sx={styles.item(margins[index])}>
          <TestamentBenefitListItem item={benefit} />
        </Box>
      ))}
    </Box>
  );
};
