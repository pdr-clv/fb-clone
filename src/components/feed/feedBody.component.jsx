import React from 'react';
import { FeedStyles } from './feed.styles';
import StoryReel from '../storyReel/storyReel.component';
import MessageSender from '../message-sender/messageSender.component';
import Posts from '../posts/posts.component';

const Feed = () => {
  return (
    <FeedStyles>
      <StoryReel />
      <MessageSender />
      <Posts></Posts>
    </FeedStyles>
    
  )
}

export default Feed;
