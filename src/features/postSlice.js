import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const B_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const postsData = await axios.get(B_URL);
  return postsData.data;
});

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addReaction: (state, action) => {
      const { postId, reactionName } = action.payload;
      state.posts.map((post) => {
        if (post.id === postId) {
          post.reactions[reactionName]++;
          return;
        }
      });
    },
    deletePost: (state, action) => {
      const { postId } = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
    updatePost: (state, action) => {
      const { postId, title, body } = action.payload;
      state.posts.map((post) => {
        if (post.id === parseInt(postId)) {
          post.title = title;
          post.body = body;
          return;
        }
      });
    },
    addPost: (state, action) => {
      const { userId, name, title, body } = action.payload;
      state.posts = [
        {
          userId: userId,
          name: name,
          title: title,
          body: body,
          reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
        },
        ...state.posts,
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        const loadedPosts = action.payload.map((post) => {
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });
        state.posts = loadedPosts;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.error = true;
      });
  },
});
export const { addReaction, deletePost, updatePost, addPost } =
  postSlice.actions;
export default postSlice.reducer;
