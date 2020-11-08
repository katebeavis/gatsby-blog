import React from 'react';
import { graphql } from 'gatsby';

import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';

const About = ({ data }: any) => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Heading as='h1'>About {data.site.siteMetadata.title}</Heading>
      <p>Such wow. Very React.</p>
    </div>
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
