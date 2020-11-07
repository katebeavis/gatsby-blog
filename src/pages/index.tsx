import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Bio from '../components/Bio/Bio';
import {
  BlogCard,
  Date,
  Divider,
  Tag,
  Header3,
  SLink,
} from '../assets/styles/index.style';

const Pages = ({ data }: any) => (
  <Layout>
    <Bio />
    {data.allMarkdownRemark.edges.map(({ node }: any) => (
      <BlogCard key={node.id}>
        <Date>{node.frontmatter.date}</Date>
        <Divider />
        {node.frontmatter.tags.map((tag: string, index: number) => (
          <span key={index}>
            <Tag>{tag}</Tag>
            <Divider />
          </span>
        ))}
        <Header3>
          <SLink to={node.fields.slug}>{node.frontmatter.title} la</SLink>
        </Header3>
        <p>{node.excerpt}</p>
        <SLink to={node.fields.slug}>Read</SLink>
      </BlogCard>
    ))}
  </Layout>
);

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
`;

export default Pages;
