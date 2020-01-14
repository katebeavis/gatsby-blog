import React from 'react';

import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

const Contact = () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText='Contact' />
      <p>Send us a message!</p>
    </div>
  </Layout>
);

export default Contact;
