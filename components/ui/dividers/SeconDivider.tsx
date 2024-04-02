import { Divider, SxProps, Theme } from "@mui/material";
import React from "react";



export const SecondDivider = () => {
  return <Divider sx={styles} />;
};

const styles: SxProps<Theme> = (theme) => ({
  borderWidth: "1px",
  borderColor: "#00000029 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 6px #00000029",
  // width: "50%",
  mx: "auto",
  my: {md: 4, xs: 10}
});