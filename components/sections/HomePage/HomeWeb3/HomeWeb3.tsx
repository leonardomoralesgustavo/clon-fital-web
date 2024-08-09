import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "../HomeWeb3/HomeWeb3.styles";

interface IData {
  index: number;
  img: string;
  title: string;
  subText: string;
  longText: string;
}

const data: IData[] = [
  {
    index: 1,
    img: "./images/uno.png",
    title: "Fital Coin",
    subText: "Da click para más información",
    longText:
      "Fital Coin te ofrece un lugar confiable para gestionar tu billetera de tokens, NFTs y dinero. Todo lo que necesitas para administrar tus activos digitales de manera fácil y segura. Es la evolución de la web autónoma, basada en tecnología blockchain. Con Fital Coin, puedes comprar, almacenar, enviar y canjear tokens.",
  },
  {
    index: 2,
    img: "./images/dos.png",
    title: "Imperio",
    subText: "Da click para más información",
    longText:
      "Fital utiliza la tecnología blockchain para facilitar la inversión y gestión de propiedades a través de la tokenización en nuestra plataforma, Imperio. Antes de la tokenización, la propiedad del inmueble se coloca en un fideicomiso, garantizando que la gestión y los derechos estén claramente definidos y protegidos legalmente. Esto facilita el acceso a la inversión inmobiliaria, mejora la liquidez y reduce los costos asociados con la inversión tradicional en bienes raíces.",
  },
  {
    index: 3,
    img: "./images/tres.png",
    title: "Tokenización",
    subText: "Da click para más información",
    longText:
      "En Imperio visualizaras tus tokens de inmuebles de manera eficiente y segura. Aquí, además, puedes realizar la aportación de tu inmueble al fideicomiso, asegurando una gestión legal y protegida de tus activos. Realiza la transferencia de tu inmueble al fideicomiso a través de la plataforma Imperio, asegurando que la propiedad se gestione de manera profesional y segura. PROCESO: Crea una cuenta en Imperio y completa el proceso de verificación. Sube toda la documentación necesaria de tu inmueble. La plataforma guía el proceso de transferencia de la propiedad al fideicomiso. Beneficios Protección Legal Transparencia y Confianza Seguridad Avanzada Eficiencia y Rapidez",
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
          {data.map(({ index, img, title, subText, longText }) => (
            <Box
              key={index}
              sx={{
                ...styles.content.generalBox,
                overflow: expandedIndex === index ? "visible" : "hidden",
                transition: "padding 0.5s ease-in-out",
                padding: expandedIndex === index ? "15px" : "8px",
                height: expandedIndex === index ? "auto" : "100px",
              }}
              onClick={() => handleExpandClick(index)}
            >
              <Box sx={styles.content.contentBox}>
                <Box sx={styles.content.headerBox}>
                  <Box component={"img"} src={`${img}`} width={"80px"} />
                  <Box sx={styles.content.inBoxButton}>
                    <Typography sx={styles.content.letter}>{title}</Typography>
                    {expandedIndex === index ? null : (
                      <Typography fontSize={"10px"}>{subText}</Typography>
                    )}
                  </Box>
                </Box>
                {expandedIndex === index && (
                  <Typography sx={{ textAlign: "justify", width: "100%" }}>
                    {longText}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
