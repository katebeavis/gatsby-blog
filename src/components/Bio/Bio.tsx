import React from 'react';

import { BioContainer, Image, BioText } from './Bio.style';

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
