import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actions.js';

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
