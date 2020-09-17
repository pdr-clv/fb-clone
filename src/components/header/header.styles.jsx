import styled from 'styled-components';

export const HeaderStyles = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  z-index: 100;
  /* box shadow */
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0,0,0,0.75);
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    height: 40px;
  }
`;

export const HeaderInput = styled.div`
  display:flex;
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
  :hover{
    background-color: #eff2f5;
    border-radius: 10px;
    border-bottom: none;
    .MuiSvgIcon-root{
      color: #2e81f4;
    }
  }

`;

export const HeaderMiddle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  .active {
    border-bottom: 4px solid #2e81f4;
    :nth-child(1){
      color: #2e81f4;
    }
    :hover {
      border-bottom: none;
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
  }
`;