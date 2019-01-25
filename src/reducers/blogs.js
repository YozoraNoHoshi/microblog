import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_ALLPOSTS,
  VOTE
} from '../actions';
//titles: an array of the simple {id, title, description} you get from the backend when you get basic data on all posts

const INITIAL_STATE = {};

// just handling the blog
function blogs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALLPOSTS: {
      return {
        ...action.blogs
      };
    }
    case ADD_POST: {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    case EDIT_POST: {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    case DELETE_POST: {
      let newState = { ...state };
      delete newState[action.payload];
      return newState;
    }

    case VOTE: {
      let { blogId, votes } = action.payload;
      return { ...state, [blogId]: { ...state[blogId], votes } };
    }
    default:
      return state;
  }
}

export default blogs;
