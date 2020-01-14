import React from "react"

import Header from "../components/header"
import Layout from "../components/Layout/Layout"

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  </Layout>
)
