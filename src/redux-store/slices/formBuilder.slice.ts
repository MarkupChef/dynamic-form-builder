import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export type InputTypes = "inputText";

export interface FormBuilderField {
  type: InputTypes;
  id: string;
  name: string;
  value: string;
  label: string;
  placeholder: string;
}

interface FormBuilderState {
  isShowLabel: boolean;
  fields: FormBuilderField[];
}

const initialState: FormBuilderState = {
  isShowLabel: true,
  fields: [],
};

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState,
  reducers: {
    toggleLabelOption: (state) => {
      state.isShowLabel = !state.isShowLabel;
    },
    addTextField: (state, action: PayloadAction<InputTypes>) => {
      const id = `Field_${nanoid()}`;

      state.fields.push({
        type: action.payload,
        id,
        name: id,
        value: "",
        label: "Label text",
        placeholder: "Example",
      });
    },
    removeField(state, action: PayloadAction<{ id: string }>) {
      state.fields = state.fields.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const { toggleLabelOption, addTextField, removeField } =
  formBuilderSlice.actions;
export default formBuilderSlice.reducer;
