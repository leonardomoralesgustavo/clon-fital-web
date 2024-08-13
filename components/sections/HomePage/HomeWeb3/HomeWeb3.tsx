import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "../HomeWeb3/HomeWeb3.styles";

interface IData {
  index: number;
  img: string;
  title: string;
  subText: string;
  longText: string;
  sub1?: string;
  sub2?: string;
  sub3?: string;
  sub4?: string;
}

const data: IData[] = [
  {
    index: 1,
    img: "./images/uno.png",
    title: "Fital Coin",
    subText: "Da click para más información",
    longText:
      "Fital Coin te proporciona un lugar confiable para tu billetera de tokens, Nft`s y dinero. Todo lo que necesitas para gestionar tus activos digitales de manera fácil y segura.",
    sub1: "Es la evolución de la web autónoma, todo esto basado en blockchain.",
    sub2: "Comprar, almacenar, enviar y canjear tokens.",
    sub3: "Funciones Principales:",
    sub4: "Visualización de Activos Enviar y Recibir Dinero Compra y venta",
  },
  {
    index: 2,
    img: "./images/dos.png",
    title: "Imperio",
    subText: "Da click para más información",
    longText:
      "Fital utiliza la tecnología blockchain para facilitar la inversión y gestión de propiedades a través de la tokenización, esto en nuestra plataforma, Imperio.",
    sub1: "La propiedad del inmueble se coloca en un fideicomiso antes de la tokenización, garantizando que la gestión y los derechos estén claramente definidos y protegidos legalmente.",
    sub2: "Esto facilita el acceso a la inversión inmobiliaria, mejora la liquidez y reduce los costos asociados con la inversión tradicional en bienes raíces.",
  },
  {
    index: 3,
    img: "./images/tres.png",
    title: "Tokenización",
    subText: "Da click para más información",
    longText:
      "En Imperio visualizaras tus tokens de inmuebles de manera eficiente y segura. Aquí, además, puedes realizar la aportación de tu inmueble al fideicomiso, asegurando una gestión legal y protegida de tus activos.",
    sub1: "Realiza la transferencia de tu inmueble al fideicomiso a través de la plataforma Imperio, asegurando que la propiedad se gestione de manera profesional y segura.",
    sub2: "PROCESO: Crea una cuenta en Imperio y completa el proceso de verificación. Sube toda la documentación necesaria de tu inmueble. La plataforma guía el proceso de transferencia de la propiedad al fideicomiso.",
    sub3: "Beneficios: Protección Legal Transparencia y Confianza Seguridad Avanzada Eficiencia y Rapidez",
  },
];

export const HomeWeb3 = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box sx={styles.main.root}>
      <Box sx={styles.content.root}>
        <Typography sx={styles.content.titleText}>
          Tu entrada a la Web3
        </Typography>
        <Box sx={styles.content.boxButtons}>
          {data.map(
            ({
              index,
              img,
              title,
              subText,
              longText,
              sub1,
              sub2,
              sub3,
              sub4,
            }) => (
              <Box
                key={index}
                sx={{
                  ...styles.content.generalBox,
                  overflow: expandedIndex === index ? "visible" : "hidden",
                  transition: "padding 0.6s ease-in-out",
                  padding: expandedIndex === index ? "20px" : "2px",
                  height: expandedIndex === index ? "auto" : "100px",
                }}
                onClick={() => handleExpandClick(index)}
              >
                <Box sx={styles.content.contentBox}>
                  <Box sx={styles.content.headerBox}>
                    <Box component={"img"} src={`${img}`} width={"80px"} />
                    <Box sx={styles.content.inBoxButton}>
                      <Typography sx={styles.content.letter}>
                        {title}
                      </Typography>
                      {expandedIndex === index ? null : (
                        <Typography fontSize={"10px"}>{subText}</Typography>
                      )}
                    </Box>
                  </Box>
                  {expandedIndex === index && (
                    <>
                      <Typography sx={{ textAlign: "justify", width: "100%" }}>
                        {longText}
                      </Typography>
                      <Typography sx={{ textAlign: "justify", width: "100%" }}>
                        {sub1}
                      </Typography>
                      <Typography sx={{ textAlign: "justify", width: "100%" }}>
                        {sub2}
                      </Typography>
                      <Typography sx={{ textAlign: "justify", width: "100%" }}>
                        {sub3}
                      </Typography>
                      <Typography sx={{ textAlign: "justify", width: "100%" }}>
                        {sub4}
                      </Typography>
                    </>
                  )}
                </Box>
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};
