import { SquareShadowContainer } from "@/components/ui/container";
import React, { FC } from "react";
import styleList from "./HomeAboutUs.styles";
import { Box, Typography } from "@mui/material";
import { AboutItem } from "./HomeAboutUsList";

const { card: styles } = styleList;

type Props = { item: AboutItem };
export const HomeAboutUsListItem: FC<Props> = ({
  item: { title, type, content },
}) => {
  const isList = type === "li";
  return (
    <SquareShadowContainer>
      <Box sx={styles.root}>
        <Box sx={styles.header}>
          <Box
            component={"img"}
            src="/images/purple_arrow.png"
            sx={styles.img}
          />
          <Typography variant="h2">{title}</Typography>
        </Box>
        <Box component={isList ? "ul" : "div"} sx={styles.textContainer(isList)} >
          {content.map(({ id, text }) => (
            <Typography key={id} component={isList ? "li" : "p"} >
              {text}
            </Typography>
          ))}
        </Box>
      </Box>
    </SquareShadowContainer>
  );
};
