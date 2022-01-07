import React from 'react';
import styled from '@emotion/styled';
import OptimizeidImage from '../assets/optimizeid.png';

const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  max-width: 500px;
`

function Home() {
  return (
    <Wrapper>
      <h2>This is Home page.</h2>
      <p>Remove / replace this page with your own.</p>

      <Image src={OptimizeidImage} alt="png image" />
    </Wrapper>
  );
}

export default Home;
