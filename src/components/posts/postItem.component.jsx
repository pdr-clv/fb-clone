import React from 'react';
import {
  PostItemStyles,
  AvatarPic,
  PostTop,
  PostTopInfo,
  PostBottom,
  PostImage
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
    </PostItemStyles>
  )
};

export default PostItem;