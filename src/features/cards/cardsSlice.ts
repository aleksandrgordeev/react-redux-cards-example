import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"

const initialState = {
  1: {
    name: "Card one",
  },
  2: {
    name: "Card two",
  },
  3: {
    name: "Card three",
  },
}

interface Action {
  id: number
  name: string
}

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<Action>) => {
      console.log(action)
      state[action.payload.id].name = action.payload.name
    },
  },
})

export const { setName } = cardsSlice.actions

export default cardsSlice.reducer
