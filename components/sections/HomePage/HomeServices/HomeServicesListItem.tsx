import React, { FC } from "react";
import { ServiceItem } from "./HomeServicesList";
import styleList from "./HomeServices.styles";
import { SquareShadowContainer } from "@/components/ui/container";
import { Box, Divider, Typography } from "@mui/material";

const { card: styles } = styleList;

type Props = { item: ServiceItem };
export const HomeServicesListItem: FC<Props> = ({
  item: { img, title, paragraphs, benefits },
}) => {
  //VARIABLES Y CUERPO
  const height =
    title === "Patrimonial"
      ? { md: "113px", xs: "85px" }
      : title === "Ahorro e inversión"
      ? { md: "109px", xs: "85px" }
      : { md: "112px", xs: "85px" };

  //RENDERIZADO
  return (
    <SquareShadowContainer>
      <Box sx={styles.root}>
        <Box sx={styles.header}>
          <Box
            component={"img"}
            src={img}
            alt={title}
            sx={styles.img(height)}
          />
          <Typography variant="h2" component={"h2"}>
            {title}
          </Typography>
        </Box>
        <Box sx={styles.textContainer}>
          {paragraphs.map(({ id, text }) => (
            <Typography key={id} component={"p"} variant="body1" mb={3}>
              {text}
            </Typography>
          ))}
        </Box>
        <Divider sx={styles.divider} />
        <Box>
          {benefits.map(({ id, text }) => (
            <Typography variant="body1" key={id} sx={styles.benefit}>
              {text}
            </Typography>
          ))}
        </Box>
      </Box>
    </SquareShadowContainer>
  );
};
