import styled from 'styled-components';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

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
      background-color: rgba(125, 125, 125, 0.3);
    }

    input:nth-child(1) {
      flex: 1;
    }
    button {
      display: none;
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
