import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { Date, Divider, Tag, theme, SLink } from '../assets/styles/index.style';

import Layout from '../components/Layout/Layout';
import Bio from '../components/Bio/Bio';
import Heading from '../components/Heading/Heading';
import Text from '../components/Text/Text';

const ReadMoreLink = styled(Link)`
  text-decoration: underline;
  font-size: 1.1em;
  color: ${theme.grey};
  font-weight: 400;
  &:hover {
    border-bottom: 1px solid ${theme.grey};
  }
`;

const Pages = ({ data }: any) => (
  <Layout>
    <header className='mt-12 mb-8'>
      <Heading as='h1'>
        <SLink to='/'>{data.site.siteMetadata.title}</SLink>
      </Heading>
    </header>
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
        <Heading as='h4' className='my-1'>
          {node.frontmatter.title}
        </Heading>
        <Text className='mb-2'>{node.excerpt}</Text>
        <ReadMoreLink to={node.fields.slug}>Read more</ReadMoreLink>
      </div>
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM YYYY")
            tags
            type
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Pages;
