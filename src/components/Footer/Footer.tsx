import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.75em;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>Created by Kate Beavis. Built with Gatsby ❤️</FooterText>
  </FooterContainer>
);

export default Footer;
