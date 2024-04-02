import { SxProps } from "@mui/material";
type Style = {
  main: {
    header: SxProps;
    title: SxProps;
  };
  card: {
    root: (isRow: boolean) => SxProps;
    img: SxProps;
    textContainer: SxProps;
    commonText: SxProps;
  };
  list: {
    root: SxProps;
  };
};

const style: Style = {
  main: {
    header: {
      background:
        "linear-gradient(90deg, transparent 0%, #b124ff 30%, #786bff 50%, #00ffff 70%, transparent 100%)",
      py: 2,
    },
    title: {
      color: "white",
      textAlign: "center",
      fontWeight: "300",
      fontSize: { md: "inherit", xs: "40px" },
    },
  },
  list: {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      px: { md: 5, xs: 0 },
      width: { md: "auto", xs: "90%" },
      mx: { md: "0px", xs: "auto" },
      gap: {md: "none", xs: 8}
    },
  },
  card: {
    root: (isRow) => ({
      display: "flex",
      gap: {lg: "80px", xs: "30px"},
      flexDirection: { md: isRow ? "row" : "row-reverse", xs: "column-reverse" },
      alignItems: "center",
    }),
    img: { maxWidth: { lg: "55%", xs: "65%", md: "50%" } },
    textContainer: { display: "flex", alignItems: "baseline" },
    commonText: {
      fontWeight: "300",
    },
  },
};

export default style;
