import { InputTextSettingsSchema } from "@/components/FormBuilder/InputText/InputTextSettings/useInputTextSettings.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { z } from "zod";

export type InputTypes = "inputText";

export interface FormBuilderInputTextField {
  type: InputTypes;
  id: string;
  name: string;
  value: string;
  label: string;
  placeholder: string;
}

interface FormBuilderState {
  isShowLabel: boolean;
  fields: FormBuilderInputTextField[];
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
    addInputTextField: (state, action: PayloadAction<InputTypes>) => {
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

    saveInputTextSettings: (
      state,
      action: PayloadAction<z.infer<typeof InputTextSettingsSchema>>,
    ) => {
      const field = state.fields.find((f) => f.id === action.payload.id);

      if (field) {
        Object.assign(field, action.payload);
      }
    },

    removeField(state, action: PayloadAction<{ id: string }>) {
      state.fields = state.fields.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const {
  toggleLabelOption,
  addInputTextField,
  saveInputTextSettings,
  removeField,
} = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
