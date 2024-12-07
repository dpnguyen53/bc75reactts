import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/services/apiService";

export const fetchListMovie = createAsyncThunk(
  "listMoviePage/fetchListMovie",
  async (_, { rejectWithValue }: any) => {
    try {
      const result = await api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export type Movie = {
  maPhim: number | string;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
};

type AppState = {
  loading: boolean;
  data: null | Movie[];
  error: null | any;
};

const initialState: AppState = {
  loading: false,
  data: null,
  error: null,
};

const listMovieReducer = createSlice({
  name: "listMovieReducer",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchListMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchListMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchListMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default listMovieReducer.reducer;
