import React from "react";
import { Container, Card, Title, Subtitle } from "./Contact.Styled";

const Contact = () => {
    return (
        <Container>
            <Card>
                <Title>Contact me</Title>
                <Subtitle>
                    Email: abc@exa-ag.com<br />
                    Phone: 9392873662
                </Subtitle>
            </Card>
        </Container>
    );
}

export default Contact;
