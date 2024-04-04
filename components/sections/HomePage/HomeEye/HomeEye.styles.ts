import { SxProps } from "@mui/material";

type Styles = {
  main: {
    root: SxProps;
  };
  content: {
    root: SxProps;
    commonText: SxProps;
    titleText: SxProps;
  };
};

const styles: Styles = {
  main: {
    root: {
      backgroundImage: `url("/images/eye.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "80vh", // ajusta la altura según tus necesidades
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  content: {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: { xs: "left", lg: "right" },
      textAlign: { xs: "left", lg: "end" },
      alignItems: { xs: "center", lg: "end" },
      width: "100%",
      gap: 3,
      mr: { lg: 10, xs: 0 },
      mb: 4,
    },
    commonText: {
      fontSize: "16px",
      fontWeight: "200",
      color: "white",
      maxWidth: "50%",
    },
    titleText: { fontSize: "90px", color: "white" },
  },
};

export default styles;
