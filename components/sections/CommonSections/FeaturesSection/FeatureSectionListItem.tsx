import React, { FC } from "react";
import { FeatureItem } from "./FeaturesSection";
import { Box, Typography } from "@mui/material";
import styleList from "./FeaturesSection.styles";

const { feature: styles } = styleList;

type Props = { item: FeatureItem; isRight?: boolean };
export const FeatureSectionListItem: FC<Props> = ({
  item: { img, text, title },
  isRight = false,
}) => {
  return (
    <Box sx={styles.root(isRight)}>
      <Box>
        <Typography variant="h2" mb={2} sx={styles.commonText(isRight)}>
          {title}
        </Typography>
        <Typography variant="body1" sx={styles.commonText(isRight)}>
          {text}
        </Typography>
      </Box>
      <Box component={"img"} alt={title} src={img} sx={styles.img} />
    </Box>
  );
};
