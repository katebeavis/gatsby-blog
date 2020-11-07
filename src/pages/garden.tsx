import React from 'react';

import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';

const About = ({ data }: any) => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Heading as='h1'>Garden</Heading>
    </div>
  </Layout>
);

export default About;
