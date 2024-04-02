import { Box, SxProps } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

export const SquareShadowContainer: FC<PropsWithChildren> = ({ children }) => {
  return <Box sx={styles} >{children}</Box>;
};

const styles: SxProps = {
  boxShadow: "0px 0px 6px #00000029",
  bgcolor: "white",
  height: "100%"
};
