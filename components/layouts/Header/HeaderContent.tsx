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
  const imageSrcSlider1 = {
    xs: "./images/unomobile.png",
    md: "./images/btc_box.png",
    lg: "./images/btc_box.png",
  };
  const imageSrcSlider2 = {
    xs: "./images/dosmobile.png",
    md: "./images/wallet_purple.png",
    lg: "./images/wallet_purple.png",
  };
  const imageSrcSlider3 = {
    xs: "./images/tresmobile.png",
    md: "./images/houses.png",
    lg: "./images/houses.png",
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
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
            fontWeight={400}
          >
            ¿Qué tan <span style={{ fontWeight: 700 }}>importante</span> es para
            ti <span style={{ fontWeight: 700 }}>modernizar</span> la forma en
            que gestionas y comercializas tus{" "}
            <span style={{ fontWeight: 700 }}>inmuebles</span>, convirtiéndolos
            en{" "}
            <span style={{ fontWeight: 700 }}>
              tokens digitales seguros y rastreables
            </span>
            ?
          </Typography>
          <Box sx={styles.buttonContainer}>
            <Button
              variant="contained"
              onClick={() => {
                window.open(`https://wallet.fitalmx.com/`);
              }}
            >
              Quiero tokenizar
            </Button>
          </Box>
        </Box>
        <Box
          component={"img"}
          height={"100vh"}
          width={"100%"}
          sx={{
            content: {
              xs: `url(${imageSrcSlider1.xs})`,
              md: `url(${imageSrcSlider1.md})`,
              lg: `url(${imageSrcSlider1.lg})`,
            },
          }}
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
            variant="h4"
            component="div"
            textAlign="center"
            color="white"
            fontWeight={400}
          >
            Comenzó la{" "}
            <span style={{ fontWeight: 700 }}>
              evolución de la web autónoma
            </span>
            , todo esto basado en{" "}
            <span style={{ fontWeight: 700 }}>blockchain</span>.
          </Typography>
          <Typography
            variant="h6"
            component="div"
            textAlign="center"
            color="white"
          >
            1ra wallet 100% mexicana
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
          sx={{
            content: {
              xs: `url(${imageSrcSlider2.xs})`,
              md: `url(${imageSrcSlider2.md})`,
              lg: `url(${imageSrcSlider2.lg})`,
            },
          }}
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
            variant="h4"
            component="div"
            textAlign="center"
            color="white"
            fontWeight={400}
          >
            <span style={{ fontWeight: 700 }}>FITAL</span> te ofrece una{" "}
            <span style={{ fontWeight: 700 }}>
              plataforma de inversiones regulada y segura
            </span>
            . Accede a nuestra plataforma de inversiones y empieza a
            <span style={{ fontWeight: 700 }}>
              {" "}
              generar ganancias desde hoy
            </span>
            .
          </Typography>
          <Box sx={styles.buttonContainer}>
            <Button
              variant="contained"
              onClick={() => {
                window.open(`https://imperio.fitalmx.com/`);
              }}
            >
              Quiero invertir
            </Button>
          </Box>
        </Box>
        <Box
          component={"img"}
          height={"100vh"}
          width={"100%"}
          sx={{
            content: {
              xs: `url(${imageSrcSlider3.xs})`,
              md: `url(${imageSrcSlider3.md})`,
              lg: `url(${imageSrcSlider3.lg})`,
            },
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
