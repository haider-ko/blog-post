import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts.push(action.payload);
      console.log(state);
    },
    deleteposts: (state, action) => {
      console.log(action.payload);
      const userId = action.payload;

      state.posts = state.posts.filter((post) => post.id !== userId);
      console.log(state.posts);
    },
    editposts: (state, action) => {
      const { id, updatedTitle, updatedAuthor, updatedContent } =
        action.payload;
      console.log(action.payload);
      const existingPost = state.posts.find((post) => post.id + 1 === id);
      if (existingPost) {
        existingPost.title = updatedTitle;
        existingPost.author = updatedAuthor;
        existingPost.content = updatedContent;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPosts, deleteposts, editposts } = postsSlice.actions;

export default postsSlice.reducer;
