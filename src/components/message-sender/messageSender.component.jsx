import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';

import { addPost } from '../../firebase/firebase.utils';

import {
  MessageSenderStyles,
  MessageSenderHeader,
  MessageSenderBottom,
  VideocamPic,
  PhotoLibraryPic,
  InsertEmoticonPic,
  AvatarContainer,
  SendPic
} from './messageSender.styles';

const MessageSender = ({ currentUser }) => {
  const { userId, photoURL, displayName } = currentUser;

  const [postDetails,setPostDetails] = useState({
    inputText: '',
    imgURL: ''
  });

  const handleChange = (event) => {
    const {name, value} = event.target
    setPostDetails({...postDetails,[name]:value});
  };

  const name = displayName.split(' ')[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { textPost: inputText, imgPost: imgURL, userId, displayName, photoURL };

    //check if textPost and imgPostis not empty or imgPost is not empty, before posting
    if (data.textPost !== '' || imgURL !== '') addPost(data);

    setPostDetails({
      inputText: '',
      imgURL: ''
    });
  };
  const {inputText, imgURL } = postDetails;
  return (
    <MessageSenderStyles>
    <MessageSenderHeader>
      <AvatarContainer>
        <Avatar src={photoURL} />
        <span>{ displayName }</span>
      </AvatarContainer>
      <form>
        <input
          name='inputText'
          value={inputText}
          onChange={handleChange}
          placeholder={`What's on your mind ${name}?`}
        />
        <input
          name='imgURL'
          value={imgURL}
          placeholder='Paste here the url where img is '
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type='submit'>
          <SendPic postdetails={postDetails}/>
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(MessageSender);
