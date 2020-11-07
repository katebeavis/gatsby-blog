import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  margin-right: 0.875rem;
  margin-bottom: 0px;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

const BioContainer = styled.aside`
  display: flex;
  margin-bottom: 3rem;
`;

const BioText = styled.p`
  max-width: 400px;
`;

const Bio = () => (
  <BioContainer>
    <Image src='https://avatars3.githubusercontent.com/u/10133018?s=460&v=4' />
    <BioText>
      Written by <strong>Kate Beavis</strong> who lives and works in London and
      likes to build stuff. Follow me on
      <strong>
        {' '}
        <a href='https://twitter.com/katebeavis'>Twitter</a>
      </strong>
    </BioText>
  </BioContainer>
);

export default Bio;
