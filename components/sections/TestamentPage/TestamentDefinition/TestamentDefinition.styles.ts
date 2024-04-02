import { SxProps } from "@mui/material";

type Styles = {
  main: {
    title: SxProps;
    titleContainer: SxProps;
    paragraph: SxProps;
    bgContainer: SxProps;
    pContainer: SxProps;
    button: SxProps;
    responsiveImg: SxProps;
  };
};

const styles: Styles = {
  main: {
    title: { color: "white", textAlign: "center" },
    titleContainer: {
      backgroundImage: "linear-gradient(126deg, #B124FF 0%, #00FFFF 100%)",
      width: { md: "748px", xs: "100%" },
      ml: "auto",
      p: 2,
    },
    paragraph: {
      ":not(:last-child)": {
        mb: 2.5,
      },
    },
    bgContainer: {
      px: { xl: "130px", md: "50px" },
      mt: "49px",
      height: { xl: "950px", md: "700px", xs: "auto" },
      background: {
        md: "no-repeat 13% bottom/55% url(/images/testamento_digital.png)",
        xl: "no-repeat 13% bottom/60% url(/images/testamento_digital.png)",
        xs: "none",
      },
    },
    // no-repeat right center/50% url(/images/bg_binary.png)
    pContainer: {
      width: { xl: "839px", md: "550px", lg: "650px", xs: "90%" },
      maxWidth: "100%",
      ml: "auto",
      mr: { md: "0px", xs: "auto" },
    },
    button: {
      mt: 5,
      width: "350px",
      display: { md: "inline", xs: "block" },
      mx: { md: "0px", xs: "auto" },
    },
    responsiveImg: {
      display: { md: "none", xs: "block" },
      width: "85%",
      mx: "auto",
      mb: 3,
    },
  },
};

export default styles;
