import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/Layout/Layout"

export default ({ data }) => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText={`About ${data.site.siteMetadata.title}`} />
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
