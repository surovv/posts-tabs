import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';

import { getNewEntity } from '../lib';

import styles from './NewPost.module.css';

const NewPost = ({ addPost }) => {
  const refInput = useRef();

  const createPost = (e) => {
    e.preventDefault();
    addPost(getNewEntity({
      likes: 0,
      text: refInput.current.value,
    }));
    return Object.assign(refInput.current, { value: '' });
  };

  return (
    <form className={styles.root} onSubmit={createPost}>
      <h2>New post</h2>
      <input
        className={styles.input}
        type="text"
        placeholder="Write a post..."
        ref={refInput}
        required
      />
      <button className={styles.btn} type="submit">Publish</button>
    </form>
  );
};

NewPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default memo(
  NewPost,
  () => true,
);
