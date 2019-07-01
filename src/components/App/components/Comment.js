import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { comment as commentType } from './Post.types';

import styles from './Comment.module.css';

const Comment = ({ postUid, comment, updateComment }) => {
  const toggleLike = () => updateComment(
    postUid,
    { ...comment, liked: !comment.liked },
  );

  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <button className={styles.likeBtn} type="button" onClick={toggleLike}>
          {`${comment.liked ? 'Remove' : 'Add'} like`}
        </button>
      </div>
      <div className={styles.text}>{comment.text}</div>
    </div>
  );
};

Comment.propTypes = {
  postUid: PropTypes.string.isRequired,
  updateComment: PropTypes.func.isRequired,
  comment: commentType.isRequired,
};

const arePropsEqual = (prevProps, nextProps) => (
  prevProps.comment.liked === nextProps.comment.liked
);

export default memo(
  Comment,
  arePropsEqual,
);
