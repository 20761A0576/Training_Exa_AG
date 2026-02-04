import React from "react";
import { PageContainer, Heading, Text } from "./Home.Styled";

const Home = () => {
  return (
    <PageContainer>
      <Heading>Welcome to Product Explorer</Heading>
      <Text>
        This is the home page of your Product Explorer. Explore products, learn
        about us, or get in touch.
      </Text>
    </PageContainer>
  );
};

export default Home;
