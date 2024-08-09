import { SxProps } from "@mui/material";

type Styles = {
  main: {
    root: SxProps;
  };
  content: {
    root: SxProps;
    commonText: SxProps;
    titleText: SxProps;
    boxButtons: SxProps;
    generalBox: SxProps;
    letter: SxProps;
    inBoxButton: SxProps;
    contentBox: SxProps;
    headerBox: SxProps;
  };
};

const styles: Styles = {
  main: {
    root: {
      bgcolor: "#48397E",
      width: "100%",
      height: { xs: "auto", sm: "auto", md: "90vh" },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
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
      gap: 5,
    },
    commonText: {
      fontSize: "16px",
      fontWeight: "200",
      color: "white",
      maxWidth: "50%",
    },
    titleText: {
      fontSize: { xs: "25px", sm: "30px", md: "50px" },
      color: "white",
      fontWeight: 500,
      // mt: 4,
    },
    boxButtons: {
      display: "flex",
      justifyItems: "center",
      flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
      width: "80%",
      justifyContent: {
        xs: "center",
        sm: "center",
        md: "center",
        lg: "space-between",
      },
      alignItems: "center",
      gap: 5,
      py: 8,
    },
    generalBox: {
      display: "flex",
      cursor: "pointer",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      bgcolor: "white",
      width: { xs: "90%", sm: "80%", md: "80%", lg: "50%" },
      borderRadius: "20px",
      p: 2,
      gap: 2,
    },
    letter: {
      fontSize: "30px",
      fontWeight: 700,
    },
    inBoxButton: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: { xs: "center", sm: "flex-start", md: "flex-start" },
      gap: 1,
    },
    contentBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
      width: "100%",
    },
    headerBox: {
      display: "flex",
      justifyContent: "space-evenly",
      width: "100%",
    },
  },
};

export default styles;
