import { keyframes, SxProps } from "@mui/material";

const zoomInOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

type Styles = {
  main: {
    root: SxProps;
  };
  content: {
    root: SxProps;
    commonText: SxProps;
    titleText: SxProps;
    img: SxProps;
  };
};

const styles: Styles = {
  main: {
    root: {
      bgcolor: "white",
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: 4
    },
  },
  content: {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
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
    titleText: {
      fontSize: { xs: "25px", sm: "30px", md: "90px" },
      color: "black",
      fontWeight: 600,
    },
    img: {
      width: { xs: "30%", md: "15%" },
      animation: `${zoomInOut} 2s infinite`,
    },
  },
};

export default styles;
