import { createSlice } from "@reduxjs/toolkit";


const auth = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    setUser: (state: any, action: any) => {
      state.push(action.payload);
    },
  },
});

export const { setUser } = auth.actions;
export default auth.reducer;
