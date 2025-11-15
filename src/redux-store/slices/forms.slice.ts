import { FormBuilderSchema } from "@/pages/FormBuilderPage/FormBuilderPage.tsx";
import type {
  FormBuilderInputTextField,
  FormBuilderState,
} from "@/redux-store/slices/formBuilder.slice.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { z } from "zod";

export interface FormsState {
  forms: FormBuilderState[];
}

const initialState: FormsState = {
  forms: [],
};

const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    saveForm: (
      state,
      action: PayloadAction<{
        formData: z.infer<typeof FormBuilderSchema>;
        fields: FormBuilderInputTextField[];
      }>,
    ) => {
      const id = `Form_${nanoid()}`;
      const { formData, fields } = action.payload;

      state.forms.push({
        id,
        isShowLabels: formData.isShowLabels,
        name: formData.name,
        fields,
      });
    },
    removeForm(state, action: PayloadAction<{ id: string }>) {
      state.forms = state.forms.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const { saveForm, removeForm } = formsSlice.actions;
export default formsSlice.reducer;
