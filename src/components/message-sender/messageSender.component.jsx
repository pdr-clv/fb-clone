import React, { useState } from 'react';


import { MessageSenderStyles,
  MessageSenderHeader,
  MessageSenderBottom,
  AvatarPic,
  VideocamPic,
  PhotoLibraryPic,
  InsertEmoticonPic
} from './messageSender.styles';

const MessageSender = () => {

  const [input, setInput] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    //we will set backEnd features.

    setInput('');
    setImgUrl('');
  };
  return (
    <MessageSenderStyles>
      <MessageSenderHeader>
        <AvatarPic />
        <form>
          <input 
            value = { input }
            onChange = {(e) => setInput(e.target.value)}
            placeholder= "What's on your mind?"
          />
          <input 
            value = { imgUrl }
            onChange = {(e) => setImgUrl(e.target.value)}
            placeholder= 'Image URL'
          />
          <button onClick= {handleSubmit} type='submit'>Hidden submit</button>
        </form>  
      </MessageSenderHeader>
      <MessageSenderBottom>
        <div>
          <VideocamPic />
          <h3>
            Live Video
          </h3>
        </div>
        <div>
          <PhotoLibraryPic />
          <h3>
            Photo/Video
          </h3>
        </div>
        <div>
          <InsertEmoticonPic />
          <h3>
            Feeling/Activity
          </h3>
        </div>
      </MessageSenderBottom>
    </MessageSenderStyles>
  )
};

export default MessageSender;
