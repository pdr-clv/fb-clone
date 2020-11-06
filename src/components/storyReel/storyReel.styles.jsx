import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

export const StoryReelStyles = styled.div`
  @media (max-width: 660px) { 
    width: 97vw;
    height: 220px;
    overflow-x: scroll;
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  width: 660px;
`;

export const StoryReelItemStyles = styled.div`
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 120px;
  height: 200px;
  box-shadow: 0px 5px 17px -7px rgba(0,0,0,0.75);
  border-radius: 10px;
  margin-right: 10px;
  transition: transform 150ms ease-in;
  cursor: pointer;

  h4 {
    font-size:0.9em;
    position: absolute;
    bottom: 20px;
    right: 10px;
    color: white;
  }

  :hover {
    transform: scale(1.07);
  }
`;

export const AvatarPic = styled(Avatar)`
  position: absolute;
  top: 10px;
  left: 10px;
  border: 3px solid #2e81f4;
`;

export const StoryReelItemContainer = styled.div`
  width: 120px;
  height: 200px;
  border-radius: 10px;
  margin-right: 10px;
  overflow: hidden;
`;