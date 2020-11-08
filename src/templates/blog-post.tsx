import React from 'react';
import { graphql } from 'gatsby';

import { Date, theme } from '../assets/styles/index.style';

import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';

const BlogPost = ({ data }: any) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Heading as='h3' color={theme.grey}>
          {post.frontmatter.title}
        </Heading>
        <p>{post.frontmatter.excerpt}</p>
        <Date>
          {post.frontmatter.date} {post.frontmatter.readTime}
        </Date>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
