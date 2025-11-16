import { InputTextSettingsSchema } from "@/components/FormBuilder/InputText/InputTextSettings/useInputTextSettings.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { z } from "zod";

export type InputTypes = "inputText";

export interface FormBuilderInputTextField {
  formBuilderFieldType: InputTypes;
  id: string;
  label: string;
  props: {
    id: string;
    name: string;
    value: string;
    placeholder: string;
    required: boolean;
    maxLength?: number;
    minLength?: number;
    type: string;
  };
}

export interface FormBuilderState {
  id: string;
  name: string;
  isShowLabels: boolean;
  fields: FormBuilderInputTextField[];
}

const initialState: FormBuilderState = {
  id: "",
  name: "",
  isShowLabels: true,
  fields: [],
};

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState,
  reducers: {
    resetFormBuilderSlice: () => initialState,
    toggleIsLabels: (state) => {
      state.isShowLabels = !state.isShowLabels;
    },
    addInputTextField: (state, action: PayloadAction<InputTypes>) => {
      const id = `Field_${nanoid()}`;

      state.fields.push({
        formBuilderFieldType: action.payload,
        id,
        label: "Label text",
        props: {
          id: id,
          name: id,
          value: "",
          placeholder: "Example",
          required: false,
          type: "text",
        },
      });
    },

    saveInputTextSettings: (
      state,
      action: PayloadAction<z.infer<typeof InputTextSettingsSchema>>,
    ) => {
      const field = state.fields.find((f) => f.id === action.payload.id);

      state.fields = state.fields.map((f) => {
        if (f.id === action.payload.id) {
          const { label, ...rest } = action.payload;

          return {
            ...f,
            label,
            props: {
              ...f.props,
              ...rest,
            },
          };
        }

        return f;
      });

      if (field) {
        Object.assign(field.props, action.payload);
      }
    },

    removeField(state, action: PayloadAction<{ id: string }>) {
      state.fields = state.fields.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const {
  resetFormBuilderSlice,
  toggleIsLabels,
  addInputTextField,
  saveInputTextSettings,
  removeField,
} = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
