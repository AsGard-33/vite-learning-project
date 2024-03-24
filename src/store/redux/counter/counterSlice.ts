import { createAppSlice } from "store/createAppSlice"
import { CounterSliceState } from "./types"

const counterInitialState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  name: "COUNTER",
  initialState: counterInitialState,
  reducers: create => ({
    add: create.reducer(state => {
      state.count = state.count + 1
    }),
  }),
  selectors: {
    count: (state: CounterSliceState)=> state.count,
  }
})

export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors