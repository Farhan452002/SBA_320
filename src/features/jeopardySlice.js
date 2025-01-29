import { createSlice } from "@reduxjs/toolkit";

export const jeopardySlice = createSlice({
  name: "jeopardy",
  initialState: { score: 0 },
  reducers: {
    answerCorrect: (state, action) => { state.score += action.payload; },
    answerIncorrect: (state, action) => { state.score -= action.payload; },
  },
});

export const { answerCorrect, answerIncorrect } = jeopardySlice.actions;
export default jeopardySlice.reducer;
