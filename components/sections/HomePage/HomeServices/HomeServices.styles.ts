import { SxProps } from "@mui/material";

type Styles = {
  main: {
    root: SxProps;
  };
  list: {
    root: SxProps;
    card: SxProps;
  };
  card: {
    root: SxProps;
    header: SxProps;
    img: (h: any) => SxProps;
    textContainer: SxProps;
    divider: SxProps;
    benefit: SxProps;
  };
};

const styles: Styles = {
  main: {
    root: {
      px: { xl: "59px", lg: "45px", md: "30px" },
    },
  },
  list: {
    root: {
      display: "flex",
      justifyContent: { md: "center", xs: "center" },
      flexDirection: { md: "row", xs: "column" },
      gap: { xl: "67px", lg: "55px", md: "35px", xs: "30px" },
      maxWidth: { md: "auto", xs: "90%" },
      mx: { md: "auto", xs: "auto" },
    },
    card: {
      flex: 1,
    },
  },
  card: {
    root: {
      p: 3,
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: { md: "55px", xs: "35px" },
    },
    img(height) {
      return {
        height,
      };
    },
    textContainer: {
      mt: "41px",
    },
    divider: {
      borderWidth: "1px",
      mb: 3,
    },
    benefit: {
      fontWeight: "600",
      ":not(:last-child)": {
        mb: 3,
      },
    },
  },
};

export default styles;
