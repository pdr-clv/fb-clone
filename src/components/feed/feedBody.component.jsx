import React from 'react';
import { FeedStyles } from './feed.styles';
import StoryReel from '../storyReel/storyReel.component';
import MessageSender from '../message-sender/messageSender.component';
import Posts from '../posts/posts.component';

const Feed = ({ userId, photoURL, displayName }) => {
  return (
    <FeedStyles>
      <StoryReel />
      <MessageSender
        userId={userId}
        photoURL={photoURL}
        displayName={displayName}
      />
      <Posts></Posts>
    </FeedStyles>
  );
};

export default Feed;
