import { SxProps } from "@mui/material";
type Styles = {
  main: {
    root: SxProps;
    flexContainer: SxProps;
    listContainer: SxProps;
  };
  card: {
    root: SxProps;
    img: SxProps;
    header: SxProps;
    textContainer: (condition: boolean) => SxProps;
  };
  list: {
    root: SxProps;
  };
};

const styles: Styles = {
  main: {
    root: {
      background: {
        xl: "no-repeat left center/60% url(/images/about_us_img.png)",
        lg: "no-repeat left center/60% url(/images/about_us_img.png)",
        md: "no-repeat left center/80% url(/images/about_us_img.png)",
        xs: "none",
      },
    },
    flexContainer: {
      display: "flex",
      px: { md: "68px", xs: "0px" },
      justifyContent: { md: "flex-end", xs: "center" },
    },
    listContainer: { width: { xl: "1200px", md: "1000px" }, maxWidth: "90%" },
  },
  list: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: { md: "41px", xs: "30px" },
    },
  },
  card: {
    root: {
      p: { md: "65px", xs: "40px" },
    },
    img: {
      height: { md: "58px", xs: "35px" },
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "40px",
      mb: 5,
    },
    textContainer(condition) {
      return {
        display: "flex",
        flexDirection: "column",
        gap: condition ? 1 : 3,
      };
    },
  },
};

export default styles;
