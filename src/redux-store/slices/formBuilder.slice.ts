import InputNumberSettingsSchema from "@/schemas/InputNumberSettings.schema.ts";
import InputTextSettingsSchema from "@/schemas/InputTextSettings.schema";
import type { FormBuilderFieldTypes } from "@/types/FormBuilderInputTypes.type.ts";
import type FormBuilderState from "@/types/FormBuilderState.type.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { z } from "zod";

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
    resetFields: (state) => {
      state.fields = [];
    },
    toggleIsLabels: (state) => {
      state.isShowLabels = !state.isShowLabels;
    },
    addInputField: (state, action: PayloadAction<FormBuilderFieldTypes>) => {
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
          type: action.payload,
        },
      });
    },

    saveInputSettings: (
      state,
      action: PayloadAction<
        z.infer<
          typeof InputTextSettingsSchema | typeof InputNumberSettingsSchema
        >
      >,
    ) => {
      const field = state.fields.find((f) => f.id === action.payload.id);
      if (!field) {
        return;
      }

      const { label, ...rest } = action.payload;

      field.label = label;
      Object.assign(field.props, rest);
    },

    removeField(state, action: PayloadAction<{ id: string }>) {
      state.fields = state.fields.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const {
  resetFormBuilderSlice,
  resetFields,
  toggleIsLabels,
  addInputField,
  saveInputSettings,
  removeField,
} = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
