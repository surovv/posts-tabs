import { useReducer } from 'react';

import { posts as staticPosts } from './data.json';


const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return [action.payload.post, ...state];
    case UPDATE_POST: {
      const { post } = action.payload;
      const postIndex = state.findIndex(pst => pst.uid === post.uid);
      return [
        ...state.slice(0, postIndex),
        post,
        ...state.slice(postIndex + 1),
      ];
    }
    default:
      return state;
  }
};


const usePosts = (initPosts = staticPosts) => {
  const [posts, dispatch] = useReducer(reducer, initPosts);

  const addPost = post => dispatch({
    type: ADD_POST,
    payload: { post },
  });

  const updatePost = post => dispatch({
    type: UPDATE_POST,
    payload: { post },
  });


  return { posts, addPost, updatePost };
};

export default usePosts;
