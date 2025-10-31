/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { quizzes } from "../../../Database";


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
};

const normalize = (q: any): Quiz => ({
  _id: String(q._id ?? nanoid()),
  course: String(q.course ?? ""),
  title: String(q.title ?? q.name ?? "(Untitled)"),
  points: Number(q.points ?? 100),
  dueDate: q.dueDate ? String(q.dueDate) : undefined,
  availableFrom: q.availableFrom ? String(q.availableFrom) : undefined,
  until: q.until ? String(q.until) : undefined,
});

const initialState: { quizzes: Quiz[] } = {
  quizzes: (quizzes ?? []).map(normalize),
};

const quizzesSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addQuiz: (
      state,
      { payload }: PayloadAction<Partial<Quiz> & { course: string }>
    ) => {
      const newQuiz: Quiz = {
        _id: payload._id ?? nanoid(),
        course: String(payload.course),
        title: String(payload.title ?? payload['name'] ?? "(Untitled)"),
        points: Number(payload.points ?? 100),
        dueDate: payload.dueDate,
        availableFrom: payload.availableFrom,
        until: payload.until,
      };
      state.quizzes.push(newQuiz);
    },

    // partial merge update to avoid wiping fields not included by the editor
    updateQuiz: (
      state,
      { payload }: PayloadAction<{ _id: string; changes: Partial<Quiz> }>
    ) => {
      state.quizzes = state.quizzes.map((q) =>
        q._id === payload._id
          ? {
              ...q,
              ...payload.changes,
              title:
                payload.changes.title !== undefined
                  ? String(payload.changes.title)
                  : q.title,
              points:
                payload.changes.points !== undefined
                  ? Number(payload.changes.points)
                  : q.points,
              course:
                payload.changes.course !== undefined
                  ? String(payload.changes.course)
                  : q.course,
            }
          : q
      );
    },

    deleteQuiz: (state, { payload: quizId }: PayloadAction<string>) => {
      state.quizzes = state.quizzes.filter((q) => q._id !== quizId);
    },

    editQuiz: (state, { payload: quizId }: PayloadAction<string>) => {
      state.quizzes = state.quizzes.map((q) =>
        q._id === quizId ? { ...q, editing: true } : q
      );
    },
  },
});

export const { addQuiz, updateQuiz, deleteQuiz, editQuiz } =
  quizzesSlice.actions;

export default quizzesSlice.reducer;