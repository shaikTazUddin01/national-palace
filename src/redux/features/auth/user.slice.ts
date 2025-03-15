import { TUserInitialState } from "@/type/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: TUserInitialState = {
  user: null,
  token: null,
};
export const userSlice = createSlice({
  name: "userInFo",
  initialState,
  reducers: {
    userInFo: (state, action: PayloadAction<TUserInitialState>) => {
      console.log("action-->", action.payload);
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    userLogout: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { userInFo, userLogout } = userSlice.actions;

export default userSlice.reducer;
