import styled from '@emotion/styled';

const HomeSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${(props) => props.background};
  color: #fff;
`;

export default HomeSection;
