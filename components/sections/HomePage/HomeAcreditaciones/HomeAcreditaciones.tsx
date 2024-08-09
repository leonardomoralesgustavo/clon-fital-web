import { Box, Typography } from "@mui/material";
import styles from "./HomeAcreditaciones.styles";

interface IImages {
  img: string;
}

const images: IImages[] = [
  {
    img: "/images/condusef.png",
  },
  {
    img: "/images/redeco.png",
  },
  {
    img: "/images/shcp.png",
  },
  {
    img: "/images/reune.png",
  },
  {
    img: "/images/cnbv.png",
  },
];

export const HomeAcreditaciones = () => {
  return (
    <Box sx={styles.main.root}>
      <Box sx={styles.content.root}>
        <Typography sx={styles.content.titleText}>Acreditados por</Typography>
        <Box
          display={"flex"}
          flexDirection={{xs: "column", sm: "column", md: "row"}}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          {images.map((data) => (
            <Box
              key={data.img}
              sx={styles.content.img}
              component={"img"}
              src={`${data.img}`}
              width={"10%"}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
