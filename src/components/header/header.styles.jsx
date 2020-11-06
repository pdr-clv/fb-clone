import styled from 'styled-components';

import { IconButton } from '@material-ui/core';

export const HeaderStyles = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 450px) {
    padding: 5px;
  }

  @media only screen and (max-width: 350px) {
    padding: 5px;
  }

`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    height: 40px;
  }
  @media only screen and (max-width: 860px) {
    display:none;
  }
`;

export const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 999px;

  input {
    border: none;
    background-color: transparent;
    outline-width: 0;
  }
  @media only screen and (max-width: 1040px) {
      display:none;
  }
`;

export const IconMiddle = styled.div`
  
  display: flex;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;
  /* to select icons from Materia UI, we use this selector */
  .MuiSvgIcon-root {
    color: gray;
  }
  :hover {
    background-color: #eff2f5;
    border-radius: 10px;
    border-bottom: none;
    .MuiSvgIcon-root {
      color: #2e81f4;
    }
  }

  @media only screen and (max-width: 665px) {
    padding: 0 10px;
  }

`;

export const HeaderMiddle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  .active {
    border-bottom: 4px solid #2e81f4;
    :nth-child(1) {
      color: #2e81f4;
    }
    :hover {
      border-bottom: none;
    }
  }
  @media only screen and (max-width: 665px) {
    justify-content: space-between;
  }

  @media only screen and (max-width: 350px) {
    .MuiSvgIcon-root {
    font-size: 1.4em;
    }
  }


`;

export const HeaderRight = styled.div`
  display: flex;

`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin-left: 10px;

    @media only screen and (max-width: 720px) {
      display:none;
    }
  }

  @media only screen and (max-width: 410px) {
    display:none;
  }
`;

export const IconButtonSignOut = styled(IconButton)`
  
  .MuiSvgIcon-root {
    color: red;
    font-size: 1.4em;
  }
  span.sign-out-text {
    color: red;
    font-size: 0.8em;
    @media only screen and (max-width: 720px) {
      display: none;
    }
  }
`;
//we will not display these buttons after 1240px.
export const IconButtons = styled.div`
  display:flex;
  @media only screen and (max-width: 1240px) {
    display:none;
  } 
`;
