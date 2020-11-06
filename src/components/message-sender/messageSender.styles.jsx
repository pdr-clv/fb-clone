import styled, { css } from 'styled-components';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';

export const MessageSenderStyles = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  width: 100%;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

export const MessageSenderHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #eff2f5;
  padding: 15px;
  form {
    flex: 1;
    display: flex;
    input {
      outline: none;
      border: none;
      border-radius: 999px;
      margin: 0 10px;
      padding: 5px 20px;
      background-color: rgba(125, 125, 125, 0.2);
    }
    input:nth-child(1) {
      flex: 1;
    }
    button {
      display: none;
      background-color: Transparent;
      background-repeat:no-repeat;
      border: none;
      cursor:pointer;
      overflow: hidden;
      outline:none;
    }
  }

  @media only screen and (max-width: 768px) {
    form {
      flex-direction: column;
      position: relative;
      input {
        margin: 10px;
        
      }
      input:nth-child(1) {
        padding: 5px 35px 5px 20px;
      }
      button {
        display:block;
        position: absolute;
        right: 7px;
        top: 11px;
      }
    }
  }

  @media only screen and (max-width: 410px) {
    flex-direction: column;
    form {
      input {
        margin: 7px 0px;
        
      }
      input:nth-child(1) {
        padding: 7px 35px 7px 20px;
      }
      button {
        right: 0;
        top: 10px;
      }
    }
  }    
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    display: none;
    margin-left: 10px;
    font-weight: bold;

    @media only screen and (max-width: 410px) {
      display: block;
    }  
  }

`;

export const MessageSenderBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  .MuiSvgIcon-root {
    font-size: 2em;
  }
  div {
    padding: 20px;
    display: flex;
    align-items: center;
    color: gray;
    margin: 5px;

    :hover {
      background-color: rgba(125, 125, 125, 0.2);
      border-radius: 20px;
    }
  }
  h3 {
    font-size: medium;
    margin-left: 10px;
    cursor: pointer;
  }
  @media only screen and (max-width: 550px) {
    justify-content: space-between;
    .MuiSvgIcon-root {
    font-size: 1.2em;
    }
    div {
      padding: 5px;
      margin: 3px;
    }
    h3 {
      font-size: 0.6em;
    }
  }
`;

export const VideocamPic = styled(VideocamIcon)`
  color: red;
`;

export const PhotoLibraryPic = styled(PhotoLibraryIcon)`
  color: green;
`;

export const InsertEmoticonPic = styled(InsertEmoticonIcon)`
  color: orange;
`;

const colourSendBlue = css`
  color: #2e81f4;
`;

const colourSendGrey = css`
  color: grey;
`;

const getActiveColor = ({postdetails}) => {
  const {inputText, imgURL} = postdetails;

  if (inputText!=='' || imgURL!=='') {
    return colourSendBlue
  } else {
    return colourSendGrey;
  }
};

export const SendPic = styled(SendIcon)`

  ${getActiveColor}
`;
