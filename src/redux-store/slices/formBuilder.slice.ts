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
    addInputTextField: (state, action: PayloadAction<string>) => {
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

    saveInputSettings: (
      state,
      action: PayloadAction<
        z.infer<
          typeof InputTextSettingsSchema | typeof InputNumberSettingsSchema
        >
      >,
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
  addInputField,
  addInputTextField,
  saveInputSettings,
  saveInputTextSettings,
  removeField,
} = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
