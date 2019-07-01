import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';

import { getNewEntity } from '../lib';

import styles from './NewComment.module.css';

const NewComment = ({ postUid, addComment }) => {
  const refInput = useRef();

  const createComment = (e) => {
    e.preventDefault();
    addComment(postUid, getNewEntity({ text: refInput.current.value }));

    return Object.assign(refInput.current, { value: '' });
  };

  return (
    <form className={styles.root} onSubmit={createComment}>
      <input
        className={styles.input}
        type="text"
        ref={refInput}
        placeholder="Write a comment..."
        required
      />
      <button className={styles.btn} type="submit">Publish</button>
    </form>
  );
};

NewComment.propTypes = {
  postUid: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
};

const arePropsEqual = (prevProps, nextProps) => (
  prevProps.postUid === nextProps.postUid
);

export default memo(
  NewComment,
  arePropsEqual,
);
