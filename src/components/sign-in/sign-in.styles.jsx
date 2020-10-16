import styled from 'styled-components';

export const SignInStyles = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(59, 89, 152);
  display: grid;
  place-items: center;
  color: white;

  div {
    * {
      width: 100%;
    }
    justify-content: center;

    button {
      margin-top: 15px;
      padding: 10px;
      background-color: white;
      color: rgb(59, 89, 152);
      font-size: 1.4em;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
