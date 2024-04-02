import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { StepItem } from "./TestamentEmpireList";
import styleList from "./TestamentEmpire.styles";

const { card: styles } = styleList;

type Props = { item: StepItem };
export const TestamentEmpireListItem: FC<Props> = ({
  item: { id, img, text },
}) => {
  const isRow = id % 2 !== 0;

  return (
    <Box sx={styles.root(isRow)}>
      <Box sx={styles.textContainer}>
        <Typography variant="h1" sx={styles.commonText}>
          {id}.
        </Typography>
        <Typography variant="h2" sx={styles.commonText}>
          {text}
        </Typography>
      </Box>
      <Box component={"img"} alt={text} src={img} sx={styles.img} />
    </Box>
  );
};
