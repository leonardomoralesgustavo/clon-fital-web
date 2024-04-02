import { Box } from "@mui/material";
import React from "react";
import { FeaturesSection } from "../CommonSections";
import { TestamentDefinition } from "./TestamentDefinition/TestamentDefinition";
import { MainDivider } from "@/components/ui/dividers";
import { TestamentBenefits } from "./TestamentBenefits";
import { TestamentWorks } from "./TestamentWorks";
import { TestamentEmpire } from "./TestamentEmpire";

export const TestamentContent = () => {
  return (
    <Box>
      <MainDivider />
      <TestamentDefinition />
      <MainDivider />
      <TestamentBenefits />
      <MainDivider />
      <TestamentWorks />
      <MainDivider />
      <TestamentEmpire />
      <MainDivider />
      <FeaturesSection />
      <MainDivider />
    </Box>
  );
};
