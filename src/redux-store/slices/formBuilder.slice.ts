import { createSlice } from "@reduxjs/toolkit";

interface FormBuilderState {
  isShowLabel: boolean;
}

const initialState: FormBuilderState = {
  isShowLabel: true,
};

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState,
  reducers: {
    toggleLabelOption: (state) => {
      state.isShowLabel = !state.isShowLabel;
    },
  },
});

export const { toggleLabelOption } = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
