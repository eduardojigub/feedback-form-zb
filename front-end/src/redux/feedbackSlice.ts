import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//typing
interface FeedbackState {
  name: string;
  email: string;
  message: string;
}

//setting initialState
const initialState: FeedbackState = {
  name: '',
  email: '',
  message: '',
};

//creatingSlice
export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    cleanForm: () => initialState
  },
});

export const { setName, setEmail, setMessage, cleanForm } = feedbackSlice.actions;

export default feedbackSlice.reducer;
