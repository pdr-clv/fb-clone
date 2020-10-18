import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';

import {
  MessageSenderStyles,
  MessageSenderHeader,
  MessageSenderBottom,
  VideocamPic,
  PhotoLibraryPic,
  InsertEmoticonPic,
} from './messageSender.styles';

const MessageSender = ({ photoURL }) => {
  const [input, setInput] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //we will set backEnd features.
    console.log('Submitting....');

    setInput('');
    setImgUrl('');
  };

  return (
    <MessageSenderStyles>
      <MessageSenderHeader>
        <Avatar src={photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's on your mind?"
          />
          <input
            value={imgUrl}
            placeholder='Paste here the url where img is '
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type='submit'>
            Hidden submit
          </button>
        </form>
      </MessageSenderHeader>
      <MessageSenderBottom>
        <div>
          <VideocamPic />
          <h3>Live Video</h3>
        </div>
        <div>
          <PhotoLibraryPic />
          <h3>Photo/Video</h3>
        </div>
        <div>
          <InsertEmoticonPic />
          <h3>Feeling/Activity</h3>
        </div>
      </MessageSenderBottom>
    </MessageSenderStyles>
  );
};

export default MessageSender;
