import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      name: "Cat Breeds",
      questions: [
        { question: "What breed is hairless?", answer: "Sphynx", points: 100 },
        { question: "What breed is the largest?", answer: "Maine Coon", points: 200 },
        // Add more questions here
      ],
    },
    {
      name: "Cat Behaviors",
      questions: [
        { question: "What does purring often mean?", answer: "Contentment", points: 100 },
        { question: "Why do cats knead?", answer: "Comfort or affection", points: 200 },
        // Add more questions here
      ],
    },
  ],
  score: 0,
};

const jeopardySlice = createSlice({
  name: 'jeopardy',
  initialState,
  reducers: {
    answerCorrect: (state, action) => {
      state.score += action.payload;
    },
    answerIncorrect: (state, action) => {
      state.score -= action.payload;
    },
  },
});

export const { answerCorrect, answerIncorrect } = jeopardySlice.actions;
export default jeopardySlice.reducer;
