import { describe, expect, it } from "vitest";
import formBuilderReducer, {
  addInputField,
  removeField,
  resetFields,
  resetFormBuilderSlice,
  saveInputSettings,
  toggleIsLabels,
} from "./formBuilder.slice.ts";
import formsReducer, { removeForm, saveForm } from "./forms.slice.ts";

const emptyBuilder = formBuilderReducer(undefined, { type: "init" });

describe("formBuilder slice", () => {
  it("adds fields with matching id and name", () => {
    const state = formBuilderReducer(emptyBuilder, addInputField("text"));
    const [field] = state.fields;

    expect(state.fields).toHaveLength(1);
    expect(field.formBuilderFieldType).toBe("text");
    expect(field.props.name).toBe(field.id);
    expect(field.props.type).toBe("text");
  });

  it("updates field settings and label", () => {
    let state = formBuilderReducer(emptyBuilder, addInputField("text"));
    const { id } = state.fields[0];

    state = formBuilderReducer(
      state,
      saveInputSettings({
        id,
        label: "Name",
        required: true,
        type: "text",
        minLength: 2,
      }),
    );

    expect(state.fields[0].label).toBe("Name");
    expect(state.fields[0].props).toMatchObject({
      required: true,
      minLength: 2,
    });
  });

  it("ignores settings for unknown fields", () => {
    const state = formBuilderReducer(
      formBuilderReducer(emptyBuilder, addInputField("text")),
      saveInputSettings({ id: "missing", required: true, type: "text" }),
    );

    expect(state.fields[0].props.required).toBe(false);
  });

  it("removes a field by id", () => {
    let state = formBuilderReducer(emptyBuilder, addInputField("text"));
    state = formBuilderReducer(state, addInputField("number"));
    const [first, second] = state.fields;

    state = formBuilderReducer(state, removeField({ id: first.id }));

    expect(state.fields).toEqual([second]);
  });

  it("resets fields and the whole slice", () => {
    let state = formBuilderReducer(emptyBuilder, addInputField("email"));
    state = formBuilderReducer(state, toggleIsLabels());

    const withoutFields = formBuilderReducer(state, resetFields());
    expect(withoutFields.fields).toEqual([]);
    expect(withoutFields.isShowLabels).toBe(false);

    expect(formBuilderReducer(state, resetFormBuilderSlice())).toEqual(
      emptyBuilder,
    );
  });
});

describe("forms slice", () => {
  it("saves and removes ready forms", () => {
    const { fields } = formBuilderReducer(emptyBuilder, addInputField("text"));
    let state = formsReducer(undefined, { type: "init" });

    state = formsReducer(
      state,
      saveForm({ formData: { name: "Survey", isShowLabels: true }, fields }),
    );

    expect(state.forms).toHaveLength(1);
    expect(state.forms[0]).toMatchObject({
      name: "Survey",
      isShowLabels: true,
      fields,
    });
    expect(state.forms[0].id).toMatch(/^Form_/);

    state = formsReducer(state, removeForm({ id: state.forms[0].id }));

    expect(state.forms).toEqual([]);
  });
});
