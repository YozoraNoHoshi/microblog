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
    const blogs = res.data.reduce((accu, curr) => {
      if (curr.comments[0] === null) curr.comments = [];
      return { ...accu, [curr.id]: curr };
    }, {});
    dispatch(getAllPosts(blogs));
  };
}

//edit a blog
export function putBlogsToAPI(postObj, id) {
  return async function(dispatch) {
    const res = await axios.put(`${BASE_URL}/${id}`, postObj);
    res.data.comments = [...postObj.comments];
    let payload = res.data;
    dispatch(editPost(payload));
  };
}

// delete a blog
export function deleteBlogsToAPI(id) {
  return async function(dispatch) {
    await axios.delete(`${BASE_URL}/${id}`);
    dispatch(deletePost(id));
  };
}

//post a blog API
export function postBlogsToAPI(postObj) {
  return async function(dispatch) {
    const res = await axios.post(`${BASE_URL}/`, postObj);
    res.data.comments = [];
    let payload = res.data;
    dispatch(addPost(payload));
  };
}

// addd a comment
export function postCommentToAPI(commentObj, blogId) {
  return async function(dispatch) {
    const res = await axios.post(`${BASE_URL}/${blogId}/comments`, commentObj);
    commentObj = res.data;
    dispatch(addComment(commentObj, blogId));
  };
}

// delete a comment
export function deleteCommentToAPI(blogId, commentId) {
  return async function(dispatch) {
    await axios.delete(`${BASE_URL}/${blogId}/comments/${commentId}`);
    dispatch(deleteComment(blogId, commentId));
  };
}

// regular funtion to add the data base to state
function getAllPosts(blogs) {
  return { type: GET_ALLPOSTS, blogs };
}

function addPost(payload) {
  // Payload = {}
  return { type: ADD_POST, payload };
}
function editPost(payload) {
  // Payload = {}
  return { type: EDIT_POST, payload };
}
function deletePost(payload) {
  // Payload = id
  return { type: DELETE_POST, payload };
}
function addComment(commentObj, blogId) {
  return { type: ADD_COMMENT, payload: { commentObj, blogId } };
}
function deleteComment(blogId, commentId) {
  return { type: DELETE_COMMENT, payload: { blogId, commentId } };
}
