import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Date } from '../assets/styles/index.style';

import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';
import Text from '../components/Text/Text';

const BlogPost = ({ data }: any) => {
  const post = data.mdx;
  return (
    <Layout>
      <div>
        <Heading as='h3'>{post.frontmatter.title}</Heading>
        <Text>{post.frontmatter.excerpt}</Text>
        <Date>
          {post.frontmatter.date} {post.frontmatter.readTime}
        </Date>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        excerpt
        readTime
      }
    }
  }
`;

export default BlogPost;
