import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-toastify";

export const registerUser: any = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }: any, { rejectWithValue }) => {
    try {
      let user = await axiosInstance.post(`/auth/register`, {
        name,
        email,
        password,
      });
      toast.success("Registration successful!");
      return user.data;
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

export const loginUser: any = createAsyncThunk(
  "auth/login",
  async ({ email, password }: any, { rejectWithValue }) => {
    try {
      let user = await axiosInstance.post(`/auth/login`, {
        email,
        password,
      });
      toast.success("Login successful!");
      return user.data;
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

export const logOutUser: any = createAsyncThunk(
  "auth/logout",
  async ({}, { rejectWithValue }) => {
    try {
      await axiosInstance.post(`/auth/logout`, {});
      toast.success("Logout successful!");
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const verifyUser: any = createAsyncThunk(
  "auth/check",
  async ({}, { rejectWithValue }) => {
    try {
      const user = await axiosInstance.get(`/auth/check`);
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

export const updateUser: any = createAsyncThunk(
  "auth/update-profile",
  async ({ name, profilePicture }: any, { rejectWithValue }) => {
    try {
      const user = await axiosInstance.put(`/auth/update-profile`, {
        name,
        profilePicture,
      });
      toast.success("Profile updated successfully!");
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
