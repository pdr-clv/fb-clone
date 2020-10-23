import React, { useEffect, useState } from 'react';
import PostItem from './postItem.component';
import { firestore } from '../../firebase/firebase.utils';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const collection = firestore
      .collection('posts')
      .orderBy('createdAt', 'desc');
    const unlisten = collection.onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    return () => {
      unlisten();
    };
  }, []);

  return (
    <div>
      {posts.map((element) => (
        <PostItem key={element.id} {...element.data} />
      ))}
    </div>
  );
};

export default Posts;
