import React from 'react';
import { graphql } from 'gatsby';

import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';

const About = ({ data }: any) => (
  <Layout>
    <div>
      <Heading as='h3' weight='extraLight'>
        About {data.site.siteMetadata.title}
      </Heading>
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
