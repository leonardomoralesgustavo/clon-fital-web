import React from "react";
import { Box } from "@mui/material";

export const HomeImages = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={10}
    >
      <Box
        height={"auto"}
        component={"img"}
        src="/images/CONDUSEF.png"
        onClick={() => window.open("https://eduweb.condusef.gob.mx/reune/consulta.aspx?69", "_blank")}
      />
      <Box
        component={"img"}
        src="/images/CNBV.png"
        onClick={() => window.open("https://www.gob.mx/cms/uploads/attachment/file/710084/TABLERO-DE-CONTROL-SOFOMES-ENR_16032022.pdf", "_blank")}
      />
    </Box>
  );
};
