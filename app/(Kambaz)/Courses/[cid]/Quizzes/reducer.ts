/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export type Quiz = { //还没有更新内容
  _id: string;
  course: string;           // keep as string for routing
  title: string;            // normalized (fallback from legacy name)
  name?: string;
  type?: string;
  points: number;
  dueDate?: string;         // "YYYY-MM-DD"
  availableFrom?: string;   // "YYYY-MM-DD"
  until?: string;           // "YYYY-MM-DD"
  editing?: boolean;
  timeLimit?: number;
  multipleAttempts?: string;
  assignmentGroup?: string;
  shuffleAnswer? : string;
  showCorrectAnswers? : string;
  accessCode?:  string;
  oneQuestionAtATime?: string;
  webcamRequired? : string;
  lockQuestionAfterAsnwering?:string;
  published?: boolean;
};
const initialState = { quizzes: [],};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuiz: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: uuidv4(),
        name: quiz.name,
        course: quiz.course,
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((q: any) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
    editQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quizId ? { ...q, editing: true } : q
      ) as any;
    },
  },
});

export const { setQuiz, addQuiz, updateQuiz, deleteQuiz, editQuiz } =
  quizzesSlice.actions;

export default quizzesSlice.reducer;