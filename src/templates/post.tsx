import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Date, theme } from '../assets/styles/index.style';
import typography from '../constants/typography';

import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';
import Text from '../components/Text/Text';

const borderBottom = `1px solid ${theme.greyLight}`;

/* eslint-disable */
const shortcodes = {
  p: (props: any) => (
    <p
      {...props}
      className='my-4'
      style={{
        fontSize: '18px',
        fontWeight: '300',
        lineHeight: '2em',
      }}
    />
  ),
  h1: (props: any) => (
    <h1 {...props} style={{ fontSize: typography.sizes.heading.h2 }} />
  ),
  h2: (props: any) => (
    <h2
      {...props}
      className='my-1 pb-2'
      style={{
        fontSize: typography.sizes.heading.h3,
        borderBottom,
      }}
    />
  ),
  h3: (props: any) => (
    <h3
      {...props}
      className='my-2 pb-2'
      style={{ fontSize: typography.sizes.heading.h4, borderBottom }}
    />
  ),
  h4: (props: any) => (
    <h4
      {...props}
      style={{ fontSize: typography.sizes.heading.h5, fontWeight: '400' }}
    />
  ),
  ul: (props: any) => <ul {...props} className='ml-5' />,
  li: (props: any) => <li {...props} style={{ listStyleType: 'disc' }} />,
  pre: (props: any) => (
    <pre
      {...props}
      className='p-4 my-4'
      style={{
        backgroundColor: theme.greyDark,
        color: 'white',
      }}
    />
  ),
};
/* eslint-enable */

function Post({ data }: any) {
  const post = data.mdx;
  return (
    <Layout>
      <div style={{ margin: '0 auto', maxWidth: '840px' }}>
        <Heading as='h1' style={{ lineHeight: '1.2em' }}>
          {post.frontmatter.title}
        </Heading>
        <div className='mt-2 ml-4'>
          <Date>Last updated - {post.frontmatter.lastUpdated}</Date>
        </div>
        <Text size='body' className='my-4'>
          {post.frontmatter.excerpt}
        </Text>
        <hr style={{ borderBottom: `1px solid ${theme.greyLight}` }} />
        <div style={{ margin: '0 auto', marginTop: '20px', maxWidth: '760px' }}>
          <div className='my-8'>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        lastUpdated(formatString: "MMMM YYYY")
        excerpt
        readTime
      }
    }
  }
`;

export default Post;
