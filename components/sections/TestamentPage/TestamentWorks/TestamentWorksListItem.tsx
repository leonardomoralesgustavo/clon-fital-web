import React, { FC } from "react";
import { WorkItem } from "./TestamentWorksList";
import { Box, Typography } from "@mui/material";
import styleList from "./TestamentWorks.styles";

const { card: styles } = styleList;



type Props = { item: WorkItem };
export const TestamentWorksListItem: FC<Props> = ({ item: { text, id } }) => {
  const margins = [
  { xl: "175px", md: "145px", lg: "105px" },
  { xl: "32px", md: "25px", lg: "10px" },
  { xl: "32px", md: "25px", lg: "10px" },
];
  return (
    <Box sx={styles.root(margins[id - 1])}>
      <Box
        component={"img"}
        alt="purple arrow"
        src="/images/purple_arrow.png"
        sx={styles.img}
      />
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};
