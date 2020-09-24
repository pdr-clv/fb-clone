import React from 'react';
import PostItem from './postItem.component';
import postData from '../../datajson-components/posts.data';

const Posts = () => {
  //const { profilePic, image, username, timestamp, message } = postData;
  return (
    <div>
      <PostItem
        {...postData}
      ></PostItem>
    </div>
  )
};

export default Posts;
