import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

const About = ({ data }: any) => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText={`About ${data.site.siteMetadata.title}`} />
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
