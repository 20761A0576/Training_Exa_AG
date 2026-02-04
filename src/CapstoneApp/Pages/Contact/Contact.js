import React from "react";
import {
  PageContainer,
  Heading,
  Text,
  Form,
  Input,
  TextArea,
  Button
} from "./Contact.Styled";

const Contact = () => {
  return (
    <PageContainer>
      <Heading>Contact Us</Heading>
      <Text>Have questions? Send us a message.</Text>

      <Form>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea placeholder="Your Message" />
        <Button>Send Message</Button>
      </Form>
    </PageContainer>
  );
};

export default Contact;
