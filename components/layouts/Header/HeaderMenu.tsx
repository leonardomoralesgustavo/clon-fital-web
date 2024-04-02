import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { FC } from "react";
import styleList from "./header.styles";
import NextLink from "next/link";
import { HeaderMenuMobile } from "./HeaderMenuMobile";
import { useRouter } from "next/router";
import { ModalContact } from "@/components/modales";

const { menuStyles: styles } = styleList;
const LINKS: { id: number; link: string; path: string }[] = [
  { id: 1, link: "Inicio", path: "/" },
  { id: 2, link: "Nosotros", path: "/testament" },
];
export const SOCIALS: {
  id: number;
  name: string;
  img: string;
  path: string;
}[] = [
  {
    id: 1,
    name: "Facebook",
    img: "/images/facebook.png",
    path: "https://www.facebook.com/profile.php?id=100085882848917",
  },
  { id: 2, name: "Linkedin", img: "/images/linkedin.png", path: "" },
  {
    id: 3,
    name: "Instagram",
    img: "/images/instagram.png",
    path: "https://www.instagram.com/fitalmx/",
  },
  {
    id: 4,
    name: "YouTube",
    img: "/images/youtube.png",
    path: "https://www.youtube.com/channel/UCTHNrpg-xqBZUQ-We_YFQ4A",
  },
];
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const HeaderMenu: FC<Props> = ({ open, setOpen }) => {
  const [openModalContact, setOpenModalContact] = React.useState(false);
  const handleOpenModalContact = () => setOpenModalContact(true);
  const handleCloseModalContact = () => setOpenModalContact(false);
  const { pathname } = useRouter();

  return (
    <Box sx={styles.rootContainer}>
      <Box sx={styles.navContainer}>
        <Box component={"picture"}>
          <Box
            component={"source"}
            media="(max-width: 899px)"
            srcSet="/images/fital_logo_white.png"
            sx={{ height: "42px" }}
          />
          <Box
            component={"img"}
            alt="Fitalmx fideicomiso"
            src="/images/fital_logo_black.png"
            sx={{ height: { xs: "22px", sm: "25px", md: "30px", lg: "42px" } }}
          />
        </Box>
        <Box component={"nav"} sx={styles.nav}>
          {LINKS.map(({ id, link, path }) => (
            <NextLink
              style={{ textDecoration: "none" }}
              key={id}
              href={path}
              passHref
            >
              <Typography sx={styles.link(pathname === path)}>
                {link}
              </Typography>
            </NextLink>
          ))}
        </Box>
      </Box>
      <Box flex={1} />
      <Button
        variant="outlined"
        sx={styles.contactButton}
        onClick={handleOpenModalContact}
      >
        Contáctanos
      </Button>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <HeaderMenuMobile open={open} setOpen={setOpen} />
      </Box>
      <Box sx={styles.contactContainer}>
        <Box>
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
      <Modal
        open={openModalContact}
        onClose={handleCloseModalContact}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContact onClose={() => setOpenModalContact(false)} />
      </Modal>
    </Box>
  );
};