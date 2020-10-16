import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

export const PostItemStyles = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 5px 7px -7px rgba(0,0,0,0.75);
`;

export const AvatarPic = styled(Avatar)`
  margin-right: 10px;
`;
export const PostTop = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 15px;

`;
export const PostTopInfo = styled.div`
  h3 {
    font-size: medium;
  }

  p {
    font-size: small;
    color: gray;
  }
`;
export const PostBottom = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 25px;
`;
export const PostImage = styled.div`
  img {
    width: 100%;
  }
`;

export const PostOptions = styled.div`
  padding: 15px;
  border-top: 1px solid lightgray;
  display: flex;
  color: gray;
  justify-content: space-evenly;
  font-size: medium;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 5px;
    flex:1;
    p{
      margin-left: 10px;
    }
    :hover {
      background-color: rgba(125,125,125,0.2);
      border-radius: 10px;
    }
  }
`;
export const ThumbUp = styled(ThumbUpIcon)``;
export const ChatIcon = styled(ChatBubbleOutlineIcon)``;
export const NearIcon = styled(NearMeIcon)``;
export const AccountIcon = styled(AccountCircleIcon)``;
export const ExpandIcon = styled(ExpandMoreOutlinedIcon)``;