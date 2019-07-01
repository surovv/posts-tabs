import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { post as postType } from './Post.types';

import styles from './Post.module.css';

const PostData = ({ post, updatePostData }) => {
  const toggleLike = () => updatePostData({
    ...post,
    liked: !post.liked,
    likes: post.likes + (post.liked ? -1 : 1),
  });

  return (
    <div className={styles.postData}>
      <h2>Post:</h2>
      <div className={styles.text}>{post.text}</div>
      <div className={styles.info}>
        <div className={styles.likes}>
          <button className={styles.likeBtn} type="button" onClick={toggleLike}>
            {`${post.liked ? 'Remove' : 'Add'} like`}
          </button>
          {`Likes: ${post.likes}`}
        </div>
      </div>
    </div>
  );
};

PostData.propTypes = {
  updatePostData: PropTypes.func.isRequired,
  post: postType.isRequired,
};


const arePropsEqual = (prevProps, nextProps) => (
  prevProps.post.liked === nextProps.post.liked
);

export default memo(
  PostData,
  arePropsEqual,
);
