import React from 'react';
import { graphql } from 'gatsby';

import { Date, Divider, Tag, SLink, theme } from '../assets/styles/index.style';

import Layout from '../components/Layout/Layout';
import Bio from '../components/Bio/Bio';
import Heading from '../components/Heading/Heading';
import Text from '../components/Text/Text';

const Pages = ({ data }: any) => (
  <Layout>
    <Bio />
    {data.allMarkdownRemark.edges.map(({ node }: any) => (
      <div className='mb-10' key={node.id}>
        <Date>{node.frontmatter.date}</Date>
        <Divider />
        {node.frontmatter.tags.map((tag: string, index: number) => (
          <span key={index}>
            <Tag>{tag}</Tag>
            <Divider />
          </span>
        ))}
        <Heading as='h4' className='my-1' color={theme.grey}>
          {node.frontmatter.title}
        </Heading>
        <Text>{node.excerpt}</Text>
        <SLink to={node.fields.slug}>Read</SLink>
      </div>
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
