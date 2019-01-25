import { ADD_COMMENT, DELETE_COMMENT, GET_COMMENTS } from '../actions.js';

//comment: an object mapping postId: {id, title, description, body, comments}

const INITIAL_STATE = {
  //   blogId: [{ id: '', text: '' }]
  // }
};

function comments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_COMMENTS: {
      return {
        ...state,
        [action.payload.blogId]: [...action.payload.comments]
      };
    }
    case ADD_COMMENT: {
      return {
        ...state,
        [action.payload.blogId]: [
          ...state[action.payload.blogId],
          action.payload.comment
        ]
      };
    }

    case DELETE_COMMENT: {
      return {
        ...state,
        [action.payload.blogId]: state[action.payload.blogId].filter(
          c => action.payload.commentId !== c.id
        )
      };
    }
    default:
      return state;
  }
}

export default comments;
