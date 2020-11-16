import React from 'react';
import { graphql } from 'gatsby';

import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';

const About = () => (
  <Layout>
    <header className='mt-12 mb-8'>
      <Heading as='h1'>About</Heading>
    </header>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default About;
