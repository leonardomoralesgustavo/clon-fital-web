import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./HomeVideo.styles";

export const HomeVideo = () => {
  const [play, setPlay] = useState();

  return (
    <Box component={"section"} bgcolor={"black"} p={4}>
      <Box
        component={"iframe"}
        src="https://www.youtube.com/embed/1IrmM7QCKgQ?si=yKOKLqYj1F3P4AiD"
        sx={styles.iFrame}
        title=""
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></Box>
    </Box>
  );
};
