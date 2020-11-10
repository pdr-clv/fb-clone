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

    button {
      ${buttonStyles}
    }
    @media (max-width: 500px) { 
      h3 {
        font-size: 14px;
      }
      
    }
  }
`;

export const HeadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 75px;
    text-align: center;
    margin-right: 15px;
  }
  h1 {
    font-size: 1.2em;
  }
  @media (max-width: 500px) { 
    img {
      width: 50px;
    }
    h1 {
      font-size:1em;
    }
  }
`;

export const SubmitInput = styled.input`
  ${buttonStyles};
`;
