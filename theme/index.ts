import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B100FF",
    },
    grey: {
      "900": "#707070",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  breakpoints: {
    values: {
      xl: 1600,
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "0px",
        },
        outlined: ({ theme }) => ({
          color: theme.palette.grey[900],
        }),
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: { padding: "10px 20px" },
        },
        {
          props: { variant: "contained" },
          style({ theme }) {
            const primaryColor = theme.palette.primary.main;
            return {
              backgroundColor: primaryColor,
              color: "white",
              border: `1px solid ${primaryColor}`,
              fontWeight: "500",
              fontSize: "24px",
              ":hover": {
                backgroundColor: "white",
                color: primaryColor,
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "20px",
              },
            };
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: ({ theme }) => ({
            fontSize: "58px",
            fontWeight: "700",
            [theme.breakpoints.between("lg", "xl")]: {
              fontSize: "55px",
            },
            [theme.breakpoints.between("md", "lg")]: {
              fontSize: "50px",
            },
            [theme.breakpoints.between("xs", "md")]: {
              fontSize: "40px",
            },
          }),
        },
        {
          props: { variant: "h2" },
          style: ({ theme }) => ({
            fontSize: "30px",
            fontWeight: "500",
            [theme.breakpoints.between("md", "lg")]: {
              fontSize: "26px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "22px",
            },
          }),
        },
        {
          props: { variant: "h4" },
          style: ({ theme }) => ({
            fontSize: "30px",
            // fontWeight: "500",
            [theme.breakpoints.between("md", "lg")]: {
              fontSize: "26px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "22px",
            },
          }),
        },
        {
          props: { variant: "body1" },
          style({ theme }) {
            return {
              fontSize: "16px",
              fontWeight: "300",
              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
            };
          },
        },
        {
          props: { variant: "body2" },
          style({ theme }) {
            return {
              fontSize: "35px",
              fontWeight: "500",
              [theme.breakpoints.between("lg", "xl")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.between("md", "lg")]: {
                fontSize: "23px",
              },
              [theme.breakpoints.between("xs", "md")]: {
                fontSize: "18px",
              },
            };
          },
        },
      ],
    },
  },
});

export { theme };
