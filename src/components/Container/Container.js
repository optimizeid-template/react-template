import styled from '@emotion/styled';

const Container = styled.div`
  max-width: ${(props) => (props.xl ? '1318px' : '1180px')};
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export default Container;
