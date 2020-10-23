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
  ExpandIcon,
} from './posts.styles';

const PostItem = ({ photoURL, imgPost, displayName, createdAt, textPost }) => {
  const timeStamp = new Date(createdAt.seconds * 1000).toLocaleString();

  return (
    <PostItemStyles>
      <PostTop>
        <AvatarPic src={photoURL} />
        <PostTopInfo>
          <h3>{displayName}</h3>
          <p>{timeStamp}</p>
        </PostTopInfo>
      </PostTop>
      <PostBottom>
        <p>{textPost}</p>
      </PostBottom>
      <PostImage>
        <img src={imgPost} alt='' />
      </PostImage>
      <PostOptions>
        <div>
          <ThumbUp />
          <p>Like</p>
        </div>
        <div>
          <ChatIcon />
          <p>Comment</p>
        </div>
        <div>
          <NearIcon />
          <p>Share</p>
        </div>
        <div>
          <AccountIcon />
          <ExpandIcon />
        </div>
      </PostOptions>
    </PostItemStyles>
  );
};

export default PostItem;
