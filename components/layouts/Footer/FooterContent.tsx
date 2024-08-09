import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import styleList from "./Footer.styles";
import { useRouter } from "next/router";
import { addContactService } from "@/interfaces";
import { useTemporalMsg } from "@/hooks";

const { content: styles } = styleList;

export const SOCIALS: {
  id: number;
  img: string;
  name: string;
  path: string;
}[] = [
  {
    id: 1,
    img: "/images/facebook_white.png",
    name: "facebook",
    path: "https://www.facebook.com/fitalmx/",
  },
  {
    id: 2,
    img: "/images/linkedin_white.png",
    name: "linkedin",
    path: "https://www.linkedin.com/company/fital-mx/posts/?feedView=all",
  },
  {
    id: 3,
    img: "/images/instagram_white.png",
    name: "instagram",
    path: "https://www.instagram.com/fitalmx/",
  },
  {
    id: 4,
    img: "/images/tiktok.png",
    name: "TikTok",
    path: "https://www.tiktok.com/@fitalmx",
  },
];

export const FooterContent = () => {
  const router = useRouter();
  const { pathname } = router;
  const [msg, setMsg, initMsg] = useTemporalMsg(4000);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = await addContactService({
      name: event.target.name.value,
      last_name: event.target.lastName.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
    });
    if (!data.success) {
      setMsg({ text: data.errors![0], type: "error" });
    } else {
      // onClose();
      window.open("https://fitalmx.com/thank_you", "_self");
    }
  };

  return (
    <Box sx={styles.root}>
      <Box>
        <Typography variant="body1" sx={styles.commonText}>
          NORTE 35 747 , COL. INDUSTRIAL VALLEJO,
        </Typography>
        <Typography variant="body1" sx={styles.commonText}>
          C.P. 2300, DELEG./MPIO. AZCAPOTZALCO,
        </Typography>
        <Typography variant="body1" sx={styles.commonText} mb={5}>
          CIUDAD DE MÉXICO.
        </Typography>
        <Typography variant="body1" sx={styles.commonText}>
          puflea@fitalmx.com
        </Typography>
        <Typography variant="body1" sx={styles.commonText}>
          Lunes a Viernes de 9:00 a 18:00 horas
        </Typography>
        <Typography variant="body1" sx={styles.commonText}>
          Atención al cliente: 5578874806
        </Typography>
        <Typography variant="body1" sx={styles.commonText}>
          WhatsApp: 5578874806
        </Typography>
      </Box>
      <Box>
        <>
          <Box onSubmit={handleSubmit} component="form" alignItems={"center"}>
            <Typography
              textAlign={"center"}
              component={"h1"}
              fontSize={"20px"}
              fontWeight={700}
              mb={2}
              color={"white"}
            >
              Contáctanos
            </Typography>
            <TextField
              name="name"
              label=""
              placeholder="Nombre"
              type="text"
              required
              InputProps={{
                style: { color: "black", backgroundColor: "white" },
              }}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "left",
                color: "white",
                mb: 1,
                flexDirection: "column",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yourFocusedBorderColor",
                  },
                },
              }}
            />
            <TextField
              name="lastName"
              label=""
              placeholder="Apellido"
              type="text"
              required
              InputProps={{
                style: { color: "black", backgroundColor: "white" },
              }}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "left",
                color: "white",
                mb: 1,
                flexDirection: "column",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yourFocusedBorderColor",
                  },
                },
              }}
            />
            <TextField
              name="phone"
              label=""
              placeholder="Teléfono"
              type="text"
              required
              InputProps={{
                style: { color: "black", backgroundColor: "white" },
              }}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "left",
                color: "white",
                mb: 1,
                flexDirection: "column",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yourFocusedBorderColor",
                  },
                },
              }}
            />
            <TextField
              name="email"
              label=""
              placeholder="Correo"
              type="text"
              required
              InputProps={{
                style: { color: "black", backgroundColor: "white" },
              }}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "left",
                color: "white",
                flexDirection: "column",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yourFocusedBorderColor",
                  },
                },
              }}
            />
            <Typography
              sx={{
                textAlign: "center",
                color: msg.type === "error" ? "crimson" : "green",
                mt: 2,
              }}
            >
              {msg.text}
            </Typography>
            <Button
              type="submit"
              sx={{
                width: "100%",
                height: "50px",
                bgcolor: "#B100FF",
                color: "white",
                mt: 2,
              }}
            >
              Enviar
            </Button>
          </Box>
        </>
      </Box>
      <Box sx={styles.responsiveFlexContainer(false)}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
        >
          <Typography
            textAlign={"center"}
            color={"white"}
            width={"250px"}
            mb={3}
          >
            Síguenos y mantente informado de nuestras últimas noticias y
            comunicados en nuestras redes sociales.
          </Typography>
        </Box>
        {SOCIALS.map(({ id, img, name, path }) => (
          <Box
            key={id}
            component={"img"}
            src={img}
            alt={name}
            sx={styles.socialItem}
            onClick={() => window.open(path, "_blank")}
          />
        ))}
      </Box>
    </Box>
  );
};
