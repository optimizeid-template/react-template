import styled from '@emotion/styled';

const LogoPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  width: 100%;
  height: 100px;
  border-radius: 8px;

  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default LogoPlaceholder;
