import { SxProps } from "@mui/material";

type Styles = {
  iFrame: SxProps;
  buttonContainer: SxProps;
  play: SxProps;
  videoContainer: SxProps;
  playScreenContainer: SxProps;
};

const styles: Styles = {
  iFrame: {
    width: "100%",
    height: { xl: "850px", lg: "750px", md: "650px", xs: "200px", sm: "400px" },
    display: "block",
    mx: "auto",
  },
  videoContainer: {
    position: "relative",
  },
  playScreenContainer: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "85%",
    mx: "auto",
    height: "100%",
    bgcolor: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(7px)",
  },
  buttonContainer: {
    mt: 10,
    display: "flex",
    justifyContent: "center",
  },
  play: {
    width: { md: "300px", xs: "100px", sm: "200px" },
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    cursor: "pointer",
  },
};

export default styles;
