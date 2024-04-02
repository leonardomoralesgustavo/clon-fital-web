import { Typography, Button, Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import styleList from "./header.styles";
import { SOCIALS } from "../Footer/FooterContent";

interface IOption {
  path: string;
  title: string;
}
const OPTIONS: IOption[] = [
  {
    path: "/",
    title: "Inicio",
  },
  {
    path: "/testament",
    title: "Testamento",
  },
];

const { mobileMenu: styles } = styleList;
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const HeaderMenuMobile: FC<Props> = ({ open, setOpen }) => {
  const { route } = useRouter();

  return (
    <>
      <Button
        onClick={() => {
          setOpen((prevstate) => !prevstate);
        }}
        sx={styles.button}
      >
        <Typography component={"span"} sx={styles.topBar(open)}></Typography>
        <Typography component={"span"} sx={styles.centerBar(open)}></Typography>
        <Typography component={"span"} sx={styles.bottomBar(open)}></Typography>
      </Button>

      <Modal
        open={open}
        slotProps={{
          backdrop: {
            sx: styles.backdrop,
          },
        }}
      >
        <Box sx={styles.rootModal}>
          <Box sx={styles.closeContainer}>
            <IconButton onClick={() => setOpen(false)} sx={styles.closeButton}>
              <CloseIcon sx={styles.closeIcon} />
            </IconButton>
          </Box>

          <Box
            component={"img"}
            alt="fitalmx"
            src="/images/fital_logo_white.png"
            sx={styles.logo}
          />

          <Box sx={styles.contentContainer}>
            <Box sx={styles.linkContainer}>
              {OPTIONS.map((link) => (
                <Box key={link.path}>
                  <NextLink
                    href={link.path}
                    style={{ color: "white" }}
                    onClick={() => setOpen(false)}
                  >
                    <Typography variant="body2" sx={styles.link}>
                      {link.title}
                    </Typography>
                  </NextLink>
                </Box>
              ))}
            </Box>
            <Box sx={{ py: 5 }}>
              <Box sx={styles.socialContainer}>
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
          </Box>
        </Box>
      </Modal>
    </>
  );
};
