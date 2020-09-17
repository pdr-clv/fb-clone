import styled from 'styled-components';

export const SideBarStyles = styled.div`
  display:flex;
  flex-direction:column;
`;

export const SideBarRowStyles = styled.div`
  display:flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  .MuiSvgIcon-root{
    font-size: xx-large;
    color: #2e81f4;
  }
  h4{
    margin-left: 20px;
    font-weight: 600;
  }

  :hover {
    background-color: lightgray;
    border-radius: 10px;
  }
`;
