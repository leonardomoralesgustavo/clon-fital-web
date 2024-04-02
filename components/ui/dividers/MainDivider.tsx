import { Divider, SxProps, Theme } from "@mui/material";
import React from "react";

export const MainDivider = () => {
  return <Divider sx={styles} />;
};

const styles: SxProps<Theme> = (theme) => ({
  borderWidth: "1px",
  borderColor: theme.palette.primary.main,
  width: "50%",
  mx: "auto",
  my: {md: 20, xs: 10}
});
