import { Box } from "@mui/material";
import React, { FC } from "react";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderContent } from "./HeaderContent";
import styleList from "./header.styles";

const { main: styles } = styleList;

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MainHeader: FC<Props> = ({ open, setOpen }) => {
  return (
    <Box component={"header"} sx={styles.root}>
      <Box>
        <HeaderMenu open={open} setOpen={setOpen} />
      </Box>
      <Box>
        <HeaderContent />
      </Box>
    </Box>
  );
};
