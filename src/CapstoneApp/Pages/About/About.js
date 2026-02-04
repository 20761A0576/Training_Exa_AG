import React from "react";
import { PageContainer, Heading, Text } from "./About.Styled";

const About = () => {
  return (
    <PageContainer>
      <Heading>About Us</Heading>
      <Text>
        Product Explorer is built to demonstrate modern React concepts including routing,
        authentication, theming, and styled-components.
      </Text>
    </PageContainer>
  );
};

export default About;
