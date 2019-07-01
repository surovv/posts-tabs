import { useReducer } from 'react';

import { comments as staticComments } from './data.json';


const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const { postUid, comment } = action.payload;

      return {
        ...state,
        [postUid]: state[postUid] ? [comment, ...state[postUid]] : [comment],
      };
    }
    case UPDATE_COMMENT: {
      const { postUid, comment } = action.payload;
      const commentIndex = state[postUid].findIndex(pst => pst.uid === comment.uid);

      return {
        ...state,
        [postUid]: [
          ...state[postUid].slice(0, commentIndex),
          comment,
          ...state[postUid].slice(commentIndex + 1),
        ],
      };
    }
    default:
      return state;
  }
};


const useComments = (initComments = staticComments) => {
  const [comments, dispatch] = useReducer(reducer, initComments);

  const addComment = (postUid, comment) => dispatch({
    type: ADD_COMMENT,
    payload: { postUid, comment },
  });

  const updateComment = (postUid, comment) => dispatch({
    type: UPDATE_COMMENT,
    payload: { postUid, comment },
  });


  return { comments, addComment, updateComment };
};

export default useComments;
