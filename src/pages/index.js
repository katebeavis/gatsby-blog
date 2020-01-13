import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
    </div>
  </Layout>
)
