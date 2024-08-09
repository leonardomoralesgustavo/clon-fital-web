import { SxProps } from "@mui/material";
type Styles = {
  main: {
    root: SxProps;
    logo: SxProps;
  };
  content: {
    commonText: SxProps;
    link: SxProps;
    root: SxProps;
    socialItem: SxProps;
    responsiveFlexContainer: (condition: boolean) => SxProps;
  };
};

const styles: Styles = {
  main: {
    root: {
      // backgroundImage: `url("/images/purple.png")`,
      // background: {
      //   md: "no-repeat right center/50% url(/images/bg_binary.png), linear-gradient(112deg, #BA00FF 0%, #002CA3 100%)",
      //   xs: "no-repeat center center/300% url(/images/bg_binary.png), linear-gradient(112deg, #BA00FF 0%, #002CA3 100%)",
      // },
      bgcolor: "black",
      px: { lg: "128px", md: "100px", xs: 8 },
      py: "98px",
    },
    logo: {
      height: "80px",
      display: "block",
      mx: { md: "0px", xs: "auto" },
    },
  },
  content: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      px: { xl: 16, lg: 5, xs: 0 },
      mt: { md: "117px", xs: "60px" },
      pb: { md: 10, xs: 0 },
      alignItems: { md: "flex-start", xs: "center" },
      gap: { md: 0, xs: 7 },
      flexDirection: { md: "row", xs: "column" },
    },
    commonText: { color: "white" },
    get link() {
      return {
        ...this.commonText,
        textDecoration: "underline",
        cursor: "pointer",
        fontWeight: "500",
        width: { md: "auto", xs: "100%" },

        ":not(:last-child)": {
          mb: 3,
        },
      };
    },
    socialItem: {
      width: "53px",
      height: "53px",
      cursor: "pointer",
      ":not(:last-child)": {
        mr: "26px",
      },
    },
    responsiveFlexContainer(isColumn) {
      return {
        display: { md: "block", xs: "flex" },
        width: { md: "auto", xs: !isColumn ? "100%" : "auto" },
        mx: { md: "0px", xs: isColumn ? "auto" : "0px" },
        flexDirection: isColumn ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
      };
    },
  },
};

export default styles;
