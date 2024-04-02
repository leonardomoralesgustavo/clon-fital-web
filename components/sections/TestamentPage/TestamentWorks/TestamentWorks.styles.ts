import { SxProps } from "@mui/material";

type Styles = {
  main: {
    header: SxProps;
    title: SxProps;
    bgContainer: SxProps;
    button: SxProps;
    buttonContainer: SxProps;
    listContainer: SxProps;
    responsiveImg: SxProps;
  };
  card: {
    root: (mr: any) => SxProps;
    img: SxProps;
  };
};

const styles: Styles = {
  main: {
    header: {
      backgroundImage:
        "linear-gradient(138deg, #B124FF 0%, #786BFF 32%, #00FFFF 100%)",
      p: 2,
      ml: "auto",
      width: { md: "469px", xs: "100%" },
    },
    title: {
      textAlign: "center",
      color: "white",
    },
    bgContainer: {
      mt: { md: 15, xs: 8 },
      background: {
        xl: "no-repeat 10% center/35% url(/images/como_funciona.png)",
        lg: "no-repeat 5% center/30% url(/images/como_funciona.png)",
        md: "no-repeat 10% center/28% url(/images/como_funciona.png)",
        xs: "none",
      },
      height: { xl: "1250px", xs: "auto" },
    },
    button: {
      ml: { xl: 50, md: 40, xs: 0 },
    },
    buttonContainer: {
      mt: { md: 15, xs: 10 },
      display: "flex",
      justifyContent: "center",
    },
    listContainer: {
      width: { md: "auto", xs: "90%" },
      mx: { md: "0px", xs: "auto" },
      // bgcolor:"red",
    },
    responsiveImg: {
      display: { md: "none", xs: "block" },
      width: "50%",
      mx: "auto",
      mb: 7,
    },
  },
  card: {
    root: (mr) => ({
      display: "flex",
      gap: { md: 3, xs: 1.5 },
      alignItems: "center",
      width: { xl: "1100px", lg: 700, md: "600px" },
      ml: "auto",
      mr,
      // bgcolor: "blue",
      ":not(:last-child)": {
        mb: { md: "100px", xs: "50px" },
      },
      maxWidth: "100%",
    }),
    img: {
      height: { md: "40px", xs: "auto", lg: "auto" },
      width: { md: "51px", xs: "25px" },
    },
  },
};

export default styles;
