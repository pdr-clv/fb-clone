import React from 'react';
import {
  PostItemStyles,
  AvatarPic,
  PostTop,
  PostTopInfo,
  PostBottom,
  PostImage,
  PostOptions,
  ThumbUp,
  ChatIcon,
  NearIcon,
  AccountIcon,
  ExpandIcon
} from './posts.styles';

const PostItem = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <PostItemStyles>
      <PostTop>
        <AvatarPic src={profilePic} />
        <PostTopInfo>
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </PostTopInfo>
      </PostTop>
      <PostBottom>
        <p>{message}</p>
      </PostBottom>
      <PostImage>
        <img src={image} alt=""/>
      </PostImage>
      <PostOptions>
        <div>
          <ThumbUp/>
          <p>Like</p>
        </div>
        <div>
          <ChatIcon/>
          <p>Comment</p>
        </div>
        <div>
          <NearIcon/>
          <p>Share</p>
        </div>
        <div>
          <AccountIcon/>
          <ExpandIcon/>
        </div>
      </PostOptions>
    </PostItemStyles>
  )
};

export default PostItem;