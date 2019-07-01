import React, { memo } from 'react';
import PropTypes from 'prop-types';

import NewComment from './NewComment';
import Comment from './Comment';

import { comment as commentType } from './Post.types';

import styles from './Post.module.css';

const PostComments = ({
  comments, postUid, addComment, updateComment, allowCommenting,
}) => (comments || allowCommenting) && (
  <div className={styles.postComments}>
    <h4>Comments:</h4>
    {allowCommenting && (
      <NewComment postUid={postUid} addComment={addComment} />
    )}
    {comments && comments.map(comment => (
      <Comment
        key={comment.uid}
        postUid={postUid}
        comment={comment}
        updateComment={updateComment}
      />
    ))}
  </div>
);

PostComments.propTypes = {
  comments: PropTypes.arrayOf(commentType),
  postUid: PropTypes.string.isRequired,
  addComment: PropTypes.func,
  updateComment: PropTypes.func.isRequired,
  allowCommenting: PropTypes.bool,
};

PostComments.defaultProps = {
  allowCommenting: false,
};

const arePropsEqual = (prevProps, nextProps) => (
  prevProps.comments === nextProps.comments
);

export default memo(
  PostComments,
  arePropsEqual,
);
