import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_ALLPOSTS
} from './actions.js';
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/posts';

// //get all post API
export function getBlogsFromAPI() {
  return async function(dispatch) {
    const res = await axios.get(`${BASE_URL}/`);
    // const { todos } = res.data;
    const blogs = res.data.reduce((accu, curr) => {
      curr = { ...curr, comments: curr.json_agg };
      delete curr.json_agg;
      return { ...accu, [curr.id]: curr };
    }, {});
    dispatch(getAllPosts(blogs));
  };
}

// get a blog

//edit a blog

// delete a blog

//post a blog API

// addd a comment

// delete a comment

//get comments

// regular funtion to add the data base to state
export function getAllPosts(blogs) {
  return { type: GET_ALLPOSTS, blogs };
}

export function addPost(payload) {
  // Payload = {}
  return { type: ADD_POST, payload };
}
export function editPost(payload) {
  // Payload = {}
  return { type: EDIT_POST, payload };
}
export function deletePost(payload) {
  // Payload = id
  return { type: DELETE_POST, payload };
}
export function addComment(commentObj, blogId) {
  return { type: ADD_COMMENT, payload: { commentObj, blogId } };
}
export function deleteComment(blogId, commentId) {
  return { type: DELETE_COMMENT, payload: { blogId, commentId } };
}
