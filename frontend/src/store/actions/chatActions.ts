import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosInstance } from "../../lib/axios";

export const getUsers: any = createAsyncThunk(
  "message/users",
  async ({}: any, { rejectWithValue }) => {
    try {
      let users = await axiosInstance.get(`/message/users`);
      return users.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// export const setSelectedUser: any = createAsyncThunk(
//   "message/users",
//   async (userId, { rejectWithValue }) => {
//     try {
//       let users = await axiosInstance.get(`/message/users`);
//       return users.data;
//     } catch (error: any) {
//       if (error.response && error.response.data.message) {
//         toast.error(error.response.data.message);
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
