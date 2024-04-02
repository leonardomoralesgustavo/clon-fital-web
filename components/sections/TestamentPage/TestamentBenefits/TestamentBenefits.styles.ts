import { SxProps } from "@mui/material";

type Styles = {
  main: {
    root: SxProps;
    header: SxProps;
    title: SxProps;
    bgContainer: SxProps;
    responsiveImg: SxProps;
    listContainer: SxProps;
  };
  list: {
    item: (ml: string | any) => SxProps;
  };
  card: {
    root: SxProps;
    title: SxProps;
    img: SxProps;
  };
};

const styles: Styles = {
  main: {
    root: {
      mt: 10,
    },
    header: {
      backgroundImage: "linear-gradient(117deg, #B124FF 0%, #00FFFF 100%)",
      p: 2,
      width: { lg: "1050px", md: "748px", xs: "100%" },
      mr: "auto",
    },
    title: { textAlign: "center", color: "white" },
    bgContainer: {
      mt: { md: 15, xs: 8 },
      background: {
        md: "no-repeat right center/30% url(/images/beneficios_bg.png)",
        xl: "no-repeat right center/45% url(/images/beneficios_bg.png)",
        xs: "none",
      },

      backgroundSize: { xl: "45%", md: "40%", lg: "45%" },
      height: { xl: "1458px", lg: "1000px", xs: "auto" },
    },
    responsiveImg: {
      display: { md: "none", xs: "block" },
      mx: "auto",
      width: "65%",
      // bgcolor: "red"
    },
    listContainer: {
      width: { md: "auto", xs: "90%" },
      mx: { md: "0px", xs: "auto" },
      mt: { md: "0px", xs: 8 },
    },
  },
  list: {
    item: (ml) => ({
      ml,
      width: {xl: "750px", md: "500px", lg: "600px"},
      ":not(:last-child)": { mb: { xl: "160px", md: "80px", xs: "30px" } },
    }),
  },
  card: {
    root: {
      display: "flex",
      gap: { xl: "48px", md: "15px", lg: "25px", xs: "20px" },
      alignItems: "center",

      flexDirection: { md: "row", xs: "column" },
    },
    title: {
      fontWeight: "300",
      mb: 2,
      fontSize: { md: "60px", xs: "40px" },
    },
    img: {
      width: { xl: "180px", md: "110px", lg: "130px", xs: "100px" },
      height: { xl: "180px", md: "110px", lg: "130px", xs: "100px" },
    },
  },
};

export default styles;
