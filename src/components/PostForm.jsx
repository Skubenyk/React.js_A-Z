import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const PostForm = ({ create }) => {
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   body,
    // };
    // setPosts([...posts, newPost]);
    // setTitle('');
    // setBody('');

    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <MyInput
        type='text'
        // value={title}
        value={post.title}
        // onChange={(e) => setTitle(e.target.value)}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder='Post name'
      />
      <MyInput
        type='text'
        // value={body}
        value={post.body}
        // onChange={(e) => setBody(e.target.value)}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder='Post description'
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
