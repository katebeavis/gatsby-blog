import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { theme } from '../assets/styles/index.style';

import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';

const NoteContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Note = styled.div`
  border: 1px solid ${theme.greyLighter};
  border-radius: 6px;
  max-width: 100%;
  width: 230px;
  box-shadow: 0px 1px 0px 0px ${theme.greyLight};
  transition: all 400ms ease-in-out;
  &:hover {
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    box-shadow: 0 10px 30px -10px ${theme.greyLight};
  }
`;

const Topic = styled.div`
  display: inline-block;
  border: 1px solid ${theme.greyLighter};
  border-radius: 6px;
  box-shadow: 0px 1px 0px 0px ${theme.greyLight};
  transition: all 400ms ease-in-out;
  &:hover {
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    box-shadow: 0 10px 30px -10px ${theme.greyLight};
  }
`;

const Garden = ({ data }: any) => {
  const uniq = (arr: any) =>
    arr.filter((x: any, i: any, a: any) => a.indexOf(x) === i);

  const topics: string[] = data.allMarkdownRemark.edges.reduce(
    (a: any, c: any): string[] => {
      console.log(a.includes(c.node.frontmatter.topics));
      return uniq([...a, ...c.node.frontmatter.topics]);
    },
    []
  );
  console.log({ topics });

  return (
    <Layout>
      <header className='my-12'>
        <Heading as='h1'>Digital garden</Heading>
      </header>
      {topics.map((topic: any) => (
        <Topic className='p-2 mr-2 mb-2'>{topic}</Topic>
      ))}
      <NoteContainer className='my-12'>
        {data.allMarkdownRemark.edges.map(({ node }: any) => (
          <Link to={node.fields.slug} key={node.id}>
            <Note className='p-4 mr-4 mb-4'>
              <Heading as='h5' className='mb-4'>
                {node.frontmatter.title}
              </Heading>
            </Note>
          </Link>
        ))}
      </NoteContainer>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "note" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            lastUpdated(formatString: "MMMM YYYY")
            topics
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

export default Garden;
