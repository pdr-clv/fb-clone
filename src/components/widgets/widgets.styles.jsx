import styled from "styled-components";

export const WidgetsStyles = styled.div`
  display:block;
  position:relative;
  padding: 20px;
  overflow: hidden;
  background: transparent;
  width: 310px;
  height: auto;

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media only screen and (max-width: 1040px) {
    display:none;
  }
`;
