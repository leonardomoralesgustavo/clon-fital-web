import { Box, SxProps } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { HeaderMenu } from "../Header";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const StickyTopBar: FC<Props> = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const detectScrollPosition = () => {
      const { scrollY } = window;
      setShow(scrollY > 400);
    };
    document.addEventListener("scroll", detectScrollPosition);

    return () => document.removeEventListener("scroll", detectScrollPosition);
  }, []);

  return (
    <Box sx={styles.root(show)}>
      <HeaderMenu open={open} setOpen={setOpen} />
    </Box>
  );
};

const styles = {
  root: (show: boolean) =>
    ({
      position: "fixed",
      top: 0,
      width: "100vw",
      background: {
        md: "white",
        xs: "linear-gradient(112deg, rgba(186, 0, 255, 0.7) 0%, rgba(0, 44, 163, 0.7) 100%)",
      },
      boxShadow: "0px 5px 10px #00000029",
      zIndex: 999,
      maxHeight: show ? "200px" : "0px",
      overflowY: "hidden",
      transition: "all 0.5s ease",
    } as SxProps),
};
