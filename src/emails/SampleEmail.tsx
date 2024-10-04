import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface SampleEmailProps {
    email: string;
    pack: string;
    name: string;
    message: string;
  }
  
  export const SampleEmail = ({email,pack,name,message}: SampleEmailProps) => (
    <Html>
      <Head />
      <Preview>
        Nuevo mensaje de {name} - {email}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Nuevo mensaje de {name} interesado en {pack}€ </Text>
          <Text style={paragraph}>
            {message}
          </Text>
          
        </Container>
      </Body>
    </Html>
  );
  
  export default SampleEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };