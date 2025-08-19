import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";

export const registerUser: any = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }: any, { rejectWithValue }) => {
    try {
      let user = await axiosInstance.post(`/auth/register`, {
        name,
        email,
        password,
      });
      return user.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser: any = createAsyncThunk(
  "auth/login",
  async ({ email, password }: any, { rejectWithValue }) => {
    try {
      let user = await axiosInstance.post(`/auth/login`, {
        email,
        password,
      });
      return user.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
