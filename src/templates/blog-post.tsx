import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import { Date } from '../assets/styles/index.style';

const BlogPost = ({ data }: any) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Header headerText={post.frontmatter.title} />
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
