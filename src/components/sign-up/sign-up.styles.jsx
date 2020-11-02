import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: rgb(59, 89, 152);
  color:white;
  font-size: 18px;
  padding: 10px 0px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
`;

export const SignInStyles = styled.div`
  height: 100vh;
  background-color: rgb(210,210,210);
  display: grid;
  place-items: center;
  color: rgb(59, 89, 152);

  div {
    h1 {
      text-align: center;
    }
    justify-content: center;
    width: 90%;
    max-width:450px;
    
    form {
      border-bottom: 1px solid grey;
      margin-bottom: 10px;
      *{
        width: 100%;
      }
    }
    input[type='submit'] {
      ${buttonStyles}
    }
    @media (max-width: 500px) { 
      h1 {

        font-size:24px;
      }
    }
  }
`;
