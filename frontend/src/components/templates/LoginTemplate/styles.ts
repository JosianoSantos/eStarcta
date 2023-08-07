import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.backgroundColor};

  min-width: 100vw;
  min-height: 100vh;
`;

export const MainContainer = styled.main`
  background-color: ${(props) => props.theme.containerBackgroundColor};
  padding: 50px;
`;
