import React, { FC } from "react";
import { BenefitItem } from "./TestamentBenefitsList";
import { Box, Typography } from "@mui/material";
import styleLilst from "./TestamentBenefits.styles";

const { card: styles } = styleLilst;

type Props = { item: BenefitItem };
export const TestamentBenefitListItem: FC<Props> = ({
  item: { img, text, title },
}) => {
  return (
    <Box sx={styles.root}>
      <Box component={"img"} alt={title} src={img} sx={styles.img} />
      <Box>
        <Typography variant="h1" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};
