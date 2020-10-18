import React from 'react';
import { FeedStyles } from './feed.styles';
import StoryReel from '../storyReel/storyReel.component';
import MessageSender from '../message-sender/messageSender.component';
import Posts from '../posts/posts.component';

const Feed = ({ photoURL }) => {
  return (
    <FeedStyles>
      <StoryReel />
      <MessageSender photoURL={photoURL} />
      <Posts></Posts>
    </FeedStyles>
  );
};

export default Feed;
