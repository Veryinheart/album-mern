import {
  FETCH_ALL,
  CREATE,
  LIKE,
  UPDATE,
  DELETE,
} from "../constants/actionTypes";

let initialPosts = [];

export default (posts = initialPosts, { type, payload }) => {
  switch (type) {
    case FETCH_ALL:
      return payload;
    case LIKE:
      return posts.map((post) => (post._id === payload._id ? payload : post));
    case CREATE:
      return [...posts, payload];
    case UPDATE:
      return posts.map((post) => (post._id === payload._id ? payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== payload);
    default:
      return posts;
  }
};
