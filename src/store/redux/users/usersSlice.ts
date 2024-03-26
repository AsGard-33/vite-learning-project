import { createAppSlice } from "store/createAppSlice"

import { UsersSliceState, UserData } from "./types"

import { PayloadAction } from "@reduxjs/toolkit"

const usersSliceInitialState: UsersSliceState = {
  users: [],
}

export const usersSlice = createAppSlice({
  name: "USERS",
  initialState: usersSliceInitialState,
  reducers: create => ({
    addUser: create.reducer(
      (state: UsersSliceState, action: PayloadAction<UserData>) => {
        state.users = [...state.users, action.payload]
      },
    ),

    removeUser: create.reducer(
      (state: UsersSliceState, action: PayloadAction<string>) => {
        state.users = state.users.filter(user => user.id !== action.payload)
      },
    ),

    removeAllUsers: create.reducer((state: UsersSliceState) => {
      return {...usersSliceInitialState};
    }),
  }),
  selectors: {
    users: (state: UsersSliceState) => state.users,
  },
})

export const usersSliceActions = usersSlice.actions
export const usersSliceSelectors = usersSlice.selectors
