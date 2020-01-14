import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Info from '../components/Info/Info';
import {
  BlogCard,
  Date,
  Divider,
  Tag,
  Header3,
  SLink
} from '../assets/styles/index.style';

const Pages = ({ data }: any) => (
  <Layout>
    <Info />
    <div>
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
            <SLink to={node.fields.slug}>{node.frontmatter.title}</SLink>
          </Header3>
          <p>{node.excerpt}</p>
          <SLink to={node.fields.slug}>Read</SLink>
        </BlogCard>
      ))}
    </div>
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
