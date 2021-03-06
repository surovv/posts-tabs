import React from 'react';

import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

import NewPost from './components/NewPost';
import Post from './components/Post';
import PostData from './components/PostData';
import Comment from './components/Comment';

import usePosts from './hooks/usePosts';
import useComments from './hooks/useComments';

import 'react-tabs/style/react-tabs.css';
import styles from './App.module.css';

const App = () => {
  const { posts, addPost, updatePost } = usePosts();
  const { comments, addComment, updateComment } = useComments();

  return (
    <div className={styles.root}>
      <Tabs selectedTabClassName={styles.selectedTab}>
        <TabList>
          <Tab>All</Tab>
          <Tab>Liked</Tab>
        </TabList>

        <TabPanel>
          <div className={styles.newPostArea}>
            <NewPost addPost={addPost} />
          </div>
          <div className={styles.posts}>
            {posts.map(post => (
              <Post
                key={post.uid}
                post={post}
                updatePostData={updatePost}
                comments={comments[post.uid]}
                postUid={post.uid}
                addComment={addComment}
                updateComment={updateComment}
                allowCommenting
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.posts}>
            <h2 className={styles.title}>Posts</h2>
            {posts.filter(post => post.liked).map(post => (
              <PostData
                key={post.uid}
                post={post}
                updatePostData={updatePost}
              />
            ))}

            <h2 className={styles.title}>Comments</h2>
            {Object.entries(comments)
              .map(([postUid, cmmnts]) => (
                cmmnts
                  .filter(comment => comment.liked)
                  .map(comment => (
                    <Comment
                      key={comment.uid}
                      postUid={postUid}
                      comment={comment}
                      updateComment={updateComment}
                    />
                  ))
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default App;
