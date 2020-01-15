import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

const BlogPost = ({ data }: any) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Header headerText={post.frontmatter.title} />
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
      }
    }
  }
`;

export default BlogPost;
