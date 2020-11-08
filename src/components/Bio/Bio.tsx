import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading/Heading';

const BioContainer = styled.aside`
  display: flex;
  margin-bottom: 3rem;
  max-width: 776px;
`;

const Bio = () => (
  <BioContainer>
    <Heading as='h3' weight='extraLight'>
      Written by <strong>Kate</strong> who lives and works in London and likes
      to build stuff. Follow me on
      <strong>
        {' '}
        <a href='https://twitter.com/katebeavis'>Twitter</a>
      </strong>
    </Heading>
  </BioContainer>
);

export default Bio;
