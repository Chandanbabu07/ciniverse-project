import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_URL } from "../../Config";

export const getMovies = createAsyncThunk("appScene/getMovies", async () => {
  try {
    const response = await axios.get(
      `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response.data", response.data.results);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching movies:", error);
    throw error;
  }
});

const initialState = {
  categoryHover: false,
  movieList: null,
  showNavSlider: false,
};

const appSlice = createSlice({
  name: "appScene",
  initialState,
  reducers: {
    setCategoryHover: (state, action) => {
      state.categoryHover = action.payload;
    },
    setShowNavSlider: (state, action) => {
      state.showNavSlider = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movieList = action.payload;
    });
  },
});

export const { setCategoryHover, setShowNavSlider } = appSlice.actions;
export default appSlice.reducer;
