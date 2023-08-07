import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px;

  box-sizing: border-box;
  max-width: 1140px;
  height: fit-content;
`;


export const Content = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 800px;
  align-items: center;
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const LoginFormContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondaryGray};
  padding: 40px;
  width: 100%;
  justify-content: space-around;
  border-radius: 5px;

  h1 {
    font-size: 1.65rem;
    color: ${(props) => props.theme.white};
    margin-bottom: 20px;
  }

  label {
    margin: 13px 0px 7px 0px;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 14px;
  }

  input {
    background-color: ${(props) => props.theme.tertiaryGray};
    border: none;
    padding: 10px;
    color: ${(props) => props.theme.white};
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;

      a {
        color: ${(props) => props.theme.white};
        text-decoration: underline;

        :hover {
          color: ${(props) => props.theme.originalOrange};
        }
        transition: 0.5s;
      }
    }

    button {
      margin-top: 30px;
      font-size: 14px;
    }
  }
`;