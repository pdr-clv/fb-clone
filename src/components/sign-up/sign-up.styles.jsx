import styled from 'styled-components';

export const SignInStyles = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(200, 200, 200);
  display: grid;
  place-items: center;
  color: black;

  div {
    * {
      width: 100%;
    }
    justify-content: center;

    input[type='submit'] {
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
