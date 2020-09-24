import styled from 'styled-components';

export const SideBarStyles = styled.div`
  padding: 25px 10px;
  flex: 0.33;
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
