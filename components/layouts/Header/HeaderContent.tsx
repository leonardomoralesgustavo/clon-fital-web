import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styleList from "./header.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const { contentStyles: styles } = styleList;

export const HeaderContent = () => {
  return (
    // <Box sx={styles.root} mb={8}>
    //   <Box sx={styles.textContainer}>

    //   </Box>
    //   <Box component={"img"} src="/images/header_img.png" sx={styles.img} bgcolor={"red"}/>
    // </Box>
    // <Box
    //   sx={{
    //     backgroundImage: `url("/images/btc_box.png")`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     width: "100%",
    //     height: "100vh", // ajusta la altura según tus necesidades
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Box
    //     display={"flex"}
    //     flexDirection={"column"}
    //     justifyContent={"center"}
    //     alignItems={"center"}
    //   >
    //     <Typography
    //       variant="h4"
    //       component="div"
    //       textAlign="center"
    //       color="white"
    //     >
    //       De Inversión a patrimonio,
    //     </Typography>
    //     <Typography
    //       variant="h4"
    //       component="div"
    //       textAlign="center"
    //       color="white"
    //     >
    //       Convierte Criptomonedas en Tu Propiedad
    //     </Typography>
    //     <Typography
    //       variant="h4"
    //       component="div"
    //       textAlign="center"
    //       color="white"
    //     >
    //       en Tu Propiedad
    //     </Typography>
    //     <Box sx={styles.buttonContainer}>
    //       <Button
    //         variant="contained"
    //         onClick={() => {
    //           window.open(`https://imperio.fitalmx.com/`);
    //         }}
    //       >
    //         Simulador virtual
    //       </Button>
    //     </Box>
    //   </Box>
    // </Box>
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              fontSize: "24px",
            }}
          >
            <Typography
              variant="h4"
              component="div"
              textAlign="center"
              color="white"
            >
              De Inversión a Patrimonio,
            </Typography>
            <Typography
              variant="h4"
              component="div"
              textAlign="center"
              color="white"
            >
              Convierte Criptomonedas
            </Typography>
            <Typography
              variant="h4"
              component="div"
              textAlign="center"
              color="white"
            >
              en Tu Propiedad
            </Typography>
            <Box sx={styles.buttonContainer}>
              <Button
                variant="contained"
                onClick={() => {
                  window.open(`https://wallet.fitalmx.com/`);
                }}
              >
                Ir a mi Wallet
              </Button>
            </Box>
          </Box>
          <Box
            component={"img"}
            height={"100vh"}
            width={"100%"}
            src="./images/btc_box.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              fontSize: "24px",
            }}
          >
            <Typography
              variant="h1"
              component="div"
              textAlign="center"
              color="white"
            >
              PASO #1
            </Typography>
            <Typography
              variant="h4"
              component="div"
              textAlign="center"
              color="white"
            >
              ACTIVA TU WALLET Y
            </Typography>
            <Typography
              variant="h4"
              component="div"
              textAlign="center"
              color="white"
            >
              CREA TU HISTORIAL DE CRIPTOMONEDAS
            </Typography>
            <Typography
              variant="h6"
              component="div"
              textAlign="center"
              color="white"
            >
              1ra wallet 100% mexicana
            </Typography>
            <Typography
              variant="h6"
              component="div"
              textAlign="center"
              color="white"
            >
              global de criptomonedas
            </Typography>
            <Box sx={styles.buttonContainer}>
              <Button
                variant="contained"
                onClick={() => {
                  window.open(`https://wallet.fitalmx.com/`);
                }}
              >
                Ir a mi Wallet
              </Button>
            </Box>
          </Box>
          <Box
            component={"img"}
            height={"100vh"}
            width={"100%"}
            src="./images/wallet_purple.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              fontSize: "24px",
            }}
          >
            <Typography
              variant="h1"
              component="div"
              textAlign="center"
              color="white"
            >
              PASO #2
            </Typography>
            <Typography
              variant="h1"
              component="div"
              textAlign="center"
              color="white"
            >
              ¡CREA TU IMPERIO!
            </Typography>
            <Typography
              variant="h5"
              component="div"
              textAlign="center"
              color="white"
            >
              solicita la simulación de tu crédito
            </Typography>
            <Box sx={styles.buttonContainer}>
              <Button
                variant="contained"
                onClick={() => {
                  window.open(`https://wallet.fitalmx.com/`);
                }}
              >
                Ir a mi Wallet
              </Button>
            </Box>
          </Box>
          <Box
            component={"img"}
            height={"100vh"}
            width={"100%"}
            src="./images/houses.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const mySwiper = {
  // height: "900px"
};
