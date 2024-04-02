import React, { FC } from "react";
import { FeatureItem } from "./FeaturesSection";
import { Box } from "@mui/material";
import { FeatureSectionListItem } from "./FeatureSectionListItem";
import styleList from "./FeaturesSection.styles";

const { list: styles } = styleList;

type Props = { data: FeatureItem[]; isRight?: boolean };
export const FeatureSectionList: FC<Props> = ({ data, isRight = false }) => {
  return (
    <Box sx={styles.root}>
      {data.map((feature) => (
        <FeatureSectionListItem
          key={feature.id}
          item={feature}
          isRight={isRight}
        />
      ))}
    </Box>
  );
};
