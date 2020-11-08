import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
`;

const FooterText = styled.span`
  font-size: 0.75em;
  vertical-align: super;
`;

const FooterSpan = styled.span`
  font-size: 1.5em;
`;

const Footer = () => (
  <FooterContainer className='mt-8 mb-4'>
    <FooterText>Created by Kate Beavis. Built with Gatsby</FooterText>
    <FooterSpan> 👾</FooterSpan>
  </FooterContainer>
);

export default Footer;
