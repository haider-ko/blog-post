import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        title: "What's up ?",
        author: "Komail Haider",
        content: "Nothing much.",
      },
      {
        title: "What's up my friend ?",
        author: "Jimmy",
        content: "Mr.Beast",
      },
    ],
  },
  reducers: {
    addPosts(state, action) {
      state.posts.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPosts } = postsSlice.actions;

export default postsSlice.reducer;
