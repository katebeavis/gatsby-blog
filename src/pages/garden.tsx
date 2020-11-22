import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { theme } from '../assets/styles/index.style';

import { getTopics } from '../utils/getTopics';
import { Node } from '../utils/types';

import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';
import Text from '../components/Text/Text';

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

const Garden = ({ data }: any) => {
  const [activeTopics, setActiveTopics] = useState<string[]>([]);

  const allTopics = getTopics(data.allMdx.edges);

  const handleClick = (topic: string) =>
    activeTopics.includes(topic)
      ? setActiveTopics(
          activeTopics.filter((activeTopic: string) => activeTopic !== topic)
        )
      : setActiveTopics([topic, ...activeTopics]);

  const allPosts = data.allMdx.edges;

  const postsToDisplay = !activeTopics.length
    ? allPosts
    : allPosts.filter(({ node }: Node) =>
        node.frontmatter.topics.find((topic: string) =>
          activeTopics.includes(topic)
        )
      );

  return (
    <Layout>
      <header className='my-12'>
        <Heading as='h1'>Digital garden</Heading>
      </header>
      {allTopics.map((topic: any, index: number) => (
        <button
          css={`
            display: inline-block;
            border: 1px solid ${theme.greyLighter};
            border-radius: 6px;
            box-shadow: ${activeTopics.includes(topic)
              ? 'none'
              : `0px 1px 0px 0px ${theme.greyLight}`};
            transition: all 400ms ease-in-out;
            background-color: ${activeTopics.includes(topic)
              ? `${theme.greyDark}`
              : 'inherit'};
            text-transform: capitalize;
            &:hover {
              transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
              box-shadow: 0 10px 30px -10px ${theme.greyLight};
              border: 1px solid ${theme.greyDark};
              cursor: pointer;
            }
          `}
          key={index}
          className='p-2 mr-2 mb-2'
          onClick={() => handleClick(topic)}
          onKeyDown={() => handleClick(topic)}
          type='button'
        >
          <Text
            css={`
              color: ${activeTopics.includes(topic)
                ? 'white'
                : `${theme.greyDark}`};
            `}
          >
            {topic}
          </Text>
        </button>
      ))}
      <NoteContainer className='my-12'>
        {postsToDisplay.map(({ node }: Node) => (
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
    allMdx(
      sort: { fields: [frontmatter___lastUpdated], order: DESC }
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
  }
`;

export default Garden;
