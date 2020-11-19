import React from 'react';
import { graphql } from 'gatsby';

import renderHtmlToReact from '../utils/html';

import { Date } from '../assets/styles/index.style';

import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';
import Text from '../components/Text/Text';

const BlogPost = ({ data }: any) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Heading as='h3'>{post.frontmatter.title}</Heading>
        <Text>{post.frontmatter.excerpt}</Text>
        <Date>
          {post.frontmatter.date} {post.frontmatter.readTime}
        </Date>
        <div>{renderHtmlToReact(post.htmlAst)}</div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
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
