import { Box } from "@mui/material";
import React from "react";
import styleList from "./Footer.styles";
import { FooterContent } from "./FooterContent";

const { main: styles } = styleList;

export const MainFooter = () => {
  return (
    <Box sx={styles.root} component={"footer"}>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          component={"img"}
          src="/images/fitalcoin.png"
          sx={styles.logo}
        />
      </Box>
      <FooterContent />
    </Box>
  );
};
