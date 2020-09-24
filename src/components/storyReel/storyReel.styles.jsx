import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

export const StoryReelStyles = styled.div`
  display: flex;
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
  margin:10px;
  border: 3px solid #2e81f4;
`;