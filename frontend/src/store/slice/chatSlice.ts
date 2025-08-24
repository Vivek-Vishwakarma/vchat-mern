import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/chatActions";

const initialState = {
  chats: [],
  users: [],
  userLoading: false,
  chatLoading: false,
  selectedUser: {},
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.userLoading = false;
        state.users = action.payload ?? [];
      })
      .addCase(getUsers.rejected, (state) => {
        state.userLoading = false;
      });
  },
});

export const { setSelectedUser } = chatSlice.actions;

export default chatSlice.reducer;
