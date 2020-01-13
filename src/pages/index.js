import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Header3 = styled.h3`
  font-size: 1.6875rem;
  line-height: 2.4375rem;
  font-weight: 600;
`

const SLink = styled(Link)`
  text-decoration: none;
  color: #222;
  &:hover {
    border-bottom: 1px solid #222;
  }
`

const Date = styled.time`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
`
const Tag = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #f7a046;
`

const Divider = styled.span`
  margin: 0 0.3125rem;
`

const BlogCard = styled.div`
  margin-bottom: 1.25em;
`

export default ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard key={node.id}>
            <Date>{node.frontmatter.date}</Date>
            <Divider />
            {node.frontmatter.tags.map((tag, index) => {
              return (
                <span key={index}>
                  <Tag>{tag}</Tag>
                  <Divider />
                </span>
              )
            })}
            <Header3>
              <SLink to={node.fields.slug}>{node.frontmatter.title}</SLink>
            </Header3>
            <p>{node.excerpt}</p>
            <SLink to={node.fields.slug}>Read</SLink>
          </BlogCard>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`
