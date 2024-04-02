import { Box, IconButton, SxProps } from "@mui/material";
import React, { FC, PropsWithChildren, useState } from "react";
import { MainHeader } from "../Header";
import { MainFooter } from "../Footer/MainFooter";
import Head from "next/head";
import { StickyTopBar } from "../StickyTopBar";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box>
      <MainHeader open={open} setOpen={setOpen} />
      <StickyTopBar open={open} setOpen={setOpen} />
      {children}
      {/* <IconButton
        onClick={() => {
          const message =
            "Quiero informes sobre el servicio de fital (especifique el servicio)";
          window.open(
            `https://wa.me//+5215578874806?text=${message.replaceAll(
              " ",
              "%20"
            )}`
          );
        }}
      >
        <Box
          component={"img"}
          alt="whatssapp"
          src="/icons/whatsapp.png"
          sx={whatsAppStyles}
        />
      </IconButton> */}
      {/* <MainFooter /> */}
    </Box>
  );
};

const whatsAppStyles: SxProps = {
  width: { md: "70px", xs: "50px" },
  position: "fixed",
  bottom: 20,
  right: 20,
  zIndex: 1,
};
