import React, { memo } from 'react';
import PropTypes from 'prop-types';

import PostData from './PostData';

import { post as postType, comment as commentType } from './Post.types';

import styles from './Post.module.css';


const Post = ({
  post, updatePostData, comments, addComment, updateComment,
}) => (
  <div className={styles.root}>
    <PostData
      post={post}
      updatePostData={updatePostData}
    />
  </div>
);

Post.propTypes = {
  post: postType.isRequired,
  updatePostData: PropTypes.func.isRequired,

  comments: PropTypes.arrayOf(commentType),
  addComment: PropTypes.func,
  updateComment: PropTypes.func.isRequired,
};

Post.defaultProps = {
  comments: null,
  addComment: () => false,
};

const arePropsEqual = (prevProps, nextProps) => (
  prevProps.post === nextProps.post
    && prevProps.comments === nextProps.comments
);

export default memo(
  Post,
  arePropsEqual,
);
