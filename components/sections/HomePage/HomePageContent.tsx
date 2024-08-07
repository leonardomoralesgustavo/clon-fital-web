import { Box } from "@mui/material";
import React from "react";
import { HomeAboutUs } from "./HomeAboutUs";
import { MainDivider } from "@/components/ui/dividers";
import { HomeServices } from "./HomeServices";
import { FeaturesSection } from "../CommonSections";
import { HomeVideo } from "./HomeVideo";
import { SecondDivider } from "@/components/ui/dividers";
import { HomeMission } from "./HomeMission";
import { HomeEye } from "./HomeEye";
import { HomeValues } from "./HomeValues";
import { MainFooter } from "@/components/layouts/Footer";

export const HomePageContent = () => {
  return (
    <Box>
      <HomeVideo />
      <HomeMission />
      <HomeEye />
      <HomeValues />
      <MainFooter />
    </Box>
  );
};
