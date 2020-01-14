import React from 'react';

import { InfoContainer, Image, InfoText } from './Info.style';

const Info = () => (
  <InfoContainer>
    <Image src='https://avatars3.githubusercontent.com/u/10133018?s=460&v=4' />
    <InfoText>
      Written by <strong>Kate Beavis</strong> who lives and works in London and
      likes to build stuff. Follow me on
      <strong>
        {' '}
        <a href='https://twitter.com/katebeavis'>Twitter</a>
      </strong>
    </InfoText>
  </InfoContainer>
);

export default Info;
