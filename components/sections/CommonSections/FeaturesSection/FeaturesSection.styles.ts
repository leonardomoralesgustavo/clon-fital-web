import { SxProps } from "@mui/material";
type Styles = {
  main: {
    root: SxProps;
    img: SxProps;
    flexContainer: SxProps;
  };
  list: {
    root: SxProps;
  };
  feature: {
    root: (condition: boolean) => SxProps;
    img: SxProps;
    commonText: (condition: boolean) => SxProps;
  };
};

const styles: Styles = {
  main: {
    root: {
      px: { xl: "57px", lg: "35px", md: "20px" },
    },
    img: {
      width: { xl: "529px", lg: "450px", md: "350px" },
      display: { md: "block", xs: "none" },
    },
    flexContainer: {
      display: "flex",
      alignItems: "center",
      flexWrap: { md: "nowrap", xs: "wrap" },
    },
  },
  list: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: { xl: 15, lg: 10, md: 5, xs: 10 },
      ":not(:last-child)": {
        mb: 10,
      },
      alignItems: { md: "auto", xs: "center" },
      width: {
        md: "auto",
        xs: "100%",
      },
    },
  },
  feature: {
    root(isRight) {
      return {
        display: "flex",
        flexDirection: {
          md: isRight ? "row-reverse" : "row",
          xs: "column-reverse",
        },
        justifyContent: "center",
        gap: { xl: 4, lg: 3, md: 2, xs: 4 },
        alignItems: "center",
      };
    },
    img: {
      height: { xl: "120px", lg: "100px", md: "70px", xs: "90px" },
    },
    commonText(isRight) {
      return {
        textAlign: { md: isRight ? "left" : "right", xs: "center" },
        maxWidth: { md: "auto", xs: "70%" },
        mx: { md: "0px", xs: "auto" },
      };
    },
  },
};

export default styles;
