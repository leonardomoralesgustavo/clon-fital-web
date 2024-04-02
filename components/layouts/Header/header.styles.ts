import { SxProps, Theme } from "@mui/material";

type StylesTypes = {
  main: {
    root: SxProps;
  };
  menuStyles: {
    rootContainer: SxProps;
    socialItem: SxProps;
    contactButton: SxProps;
    navContainer: SxProps;
    nav: SxProps;
    contactContainer: SxProps;
    link: (condition: boolean) => SxProps<Theme>;
  };
  contentStyles: {
    root: SxProps;
    img: SxProps;
    buttonContainer: SxProps;
    emphatized: SxProps;
    subtitle: SxProps;
    textContainer: SxProps;
    button: SxProps;
  };
  mobileMenu: {
    button: SxProps;
    bar: SxProps;
    topBar(open: boolean): SxProps;
    bottomBar(open: boolean): SxProps;
    centerBar(open: boolean): SxProps;
    closeIcon: SxProps;
    closeButton: SxProps;
    closeContainer: SxProps;
    backdrop: SxProps;
    rootModal: SxProps;
    socialItem: SxProps;
    logo: SxProps;
    contentContainer: SxProps;
    linkContainer: SxProps;
    link: SxProps;
    socialContainer: SxProps;
  };
};

const styles: StylesTypes = {
  mobileMenu: {
    socialContainer: { display: "flex", justifyContent: "center", gap: "30px" },
    link: {
      textAlign: "center",
      color: "white",
      fontWeight: "500",
    },
    linkContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
    },
    contentContainer: { flex: 1, display: "flex", flexDirection: "column" },
    logo: { width: "200px", display: "block", mx: "auto", my: 3 },
    closeContainer: { display: "flex", justifyContent: "flex-end" },
    socialItem: {
      width: "53px",
      height: "53px",
      cursor: "pointer",
      ":not(:last-child)": {
        mr: { lg: 3, md: 2 },
      },
    },
    rootModal: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    backdrop: {
      background:
        "linear-gradient(112deg, rgb(186, 0, 255) 0%, rgb(0, 44, 163) 100%)",
      height: "100vh",
    },
    closeButton: {
      ml: "auto",
    },
    closeIcon: {
      width: "50px",
      height: "50px",
      color: "white",
    },
    button: {
      position: "relative",
      height: "42px",
      // bgcolor: "red"
    },
    bar: {
      position: "absolute",
      width: "40px",
      height: "2px",
      bgcolor: "white",
      transition: "all 0.5s ease",
    },
    bottomBar(open) {
      return {
        ...this.bar,
        bottom: open ? "50%" : 6,
        transform: open
          ? "rotateZ(45deg) translateY(50%)"
          : "rotateZ(0deg) translateY(0)",
      };
    },
    topBar(open) {
      return {
        ...this.bar,
        top: open ? "50%" : 6,
        transform: open
          ? "rotateZ(-45deg) translateY(-50%)"
          : "rotateZ(0deg) translateY(0)",
      };
    },
    centerBar(open) {
      return { ...this.bar, opacity: open ? 0 : 1 };
    },
  },
  main: {
    root: {
      background: {
        md: "none",
        xs: "linear-gradient(112deg, rgba(186, 0, 255, 0.7) 0%, rgba(0, 44, 163, 0.7) 100%), no-repeat center center/180% url(/images/header_img.png)",
      },
      minHeight: { md: "auto", xs: "70vh" },
      pb: { md: 0, xs: 8 },
    },
  },
  menuStyles: {
    link(condition) {
      return (theme) => ({
        color: condition ? theme.palette.primary.main : "#707070",
        fontWeight: "500",
      });
    },
    rootContainer: {
      display: "flex",
      px: 4,
      py: 2,
      alignItems: "center",
    },
    socialItem: {
      width: "53px",
      height: "53px",
      cursor: "pointer",
      ":not(:last-child)": {
        mr: { lg: 3, md: 0.5 },
      },
    },
    contactButton: {
      minWidth: { lg: "200px", md: "180px" },
      height: "53px",
      mb: 0.5,
      mr: 2,
      borderColor: { xs: "white", sm: "white", md: "#D87FFF" },
      color: {
        xs: "white",
        sm: "white",
        md: "#748099",
        lg: "#748099",
        xl: "#748099",
      },
      bgcolor: { xs: "transparent", sm: "transparent", md: "transparent" },
    },
    navContainer: {
      display: "flex",
      gap: { lg: "100px", md: "50px" },
      alignItems: "center",
    },
    nav: {
      display: { md: "flex", xs: "none" },
      gap: "60px",
      alignItems: "center",
    },
    contactContainer: {
      display: { md: "flex", xs: "none" },
      gap: { lg: "50px", md: "30px" },
    },
  },
  contentStyles: {
    root: {
      px: { xl: "159px", lg: "120px", md: "100px" },
      mt: 8,
      display: "flex",
      alignItems: "center",
      gap: { xl: 6, lg: 4, md: 4 },
    },
    img: {
      width: { xl: "800px", lg: "650px", md: "500px" },
      display: { md: "block", xs: "none" },
    },
    buttonContainer: {
      mt: 10,
      display: "flex",
      justifyContent: "center",
    },
    emphatized: { fontWeight: "600", mt: 3, mb: 4 },
    subtitle: { fontWeight: "300", mt: 1, mb: 6 },
    textContainer: {
      display: { md: "block", xs: "flex" },
      flexDirection: "column",
      alignItems: "center",
      maxWidth: { md: "auto", xs: "80%" },
      mx: { md: "0px", xs: "auto" },
      color: { md: "black", xs: "white" },
      textAlign: { md: "initial", xs: "center" },
    },
    button: {
      mt: 5,
      width: "350px",
      display: { md: "inline", xs: "block" },
      mx: { md: "0px", xs: "auto" },
    },
  },
};

export default styles;
