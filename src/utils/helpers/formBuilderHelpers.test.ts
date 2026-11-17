import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";
import { describe, expect, it } from "vitest";
import { createDefaultValues } from "./createDefaultValues.helper.ts";
import { createDynamicSchema } from "./createDynamicSchema.helper.ts";

function createField(
  type: "text" | "email" | "number",
  props: Partial<FormBuilderInput["props"]> = {},
): FormBuilderInput {
  const id = `Field_${type}`;

  if (type === "number") {
    return {
      formBuilderFieldType: type,
      id,
      label: `${type} field`,
      props: {
        id,
        name: id,
        required: false,
        type,
        ...props,
      },
    };
  }

  return {
    formBuilderFieldType: type,
    id,
    label: `${type} field`,
    props: {
      id,
      name: id,
      required: false,
      type,
      ...props,
    },
  };
}

describe("createDefaultValues", () => {
  it("uses configured field names for empty values", () => {
    const fields = [
      createField("text", { name: "fullName" }),
      createField("email", { name: "email" }),
      createField("number", { name: "age" }),
    ];

    expect(createDefaultValues(fields)).toEqual({
      fullName: "",
      email: "",
      age: "",
    });
  });
});

describe("createDynamicSchema", () => {
  it("enforces required text length constraints", () => {
    const schema = createDynamicSchema([
      createField("text", {
        name: "username",
        required: true,
        minLength: 3,
        maxLength: 5,
      }),
    ]);

    expect(schema.safeParse({ username: "" }).success).toBe(false);
    expect(schema.safeParse({ username: "ab" }).success).toBe(false);
    expect(schema.safeParse({ username: "abcdef" }).success).toBe(false);
    expect(schema.safeParse({ username: "alex" }).success).toBe(true);
  });

  it("accepts an empty optional email and rejects invalid email", () => {
    const schema = createDynamicSchema([
      createField("email", { name: "email" }),
    ]);

    expect(schema.safeParse({ email: "" })).toMatchObject({
      success: true,
      data: { email: undefined },
    });
    expect(schema.safeParse({ email: "invalid" }).success).toBe(false);
    expect(schema.safeParse({ email: "user@example.com" }).success).toBe(
      true,
    );
  });

  it("rejects an empty required email", () => {
    const schema = createDynamicSchema([
      createField("email", { name: "email", required: true }),
    ]);

    expect(schema.safeParse({ email: "" }).success).toBe(false);
  });

  it("accepts an empty optional number and enforces its range", () => {
    const schema = createDynamicSchema([
      createField("number", { name: "rating", min: 5, max: 10 }),
    ]);

    expect(schema.safeParse({ rating: "" })).toMatchObject({
      success: true,
      data: { rating: undefined },
    });
    expect(schema.safeParse({ rating: "4" }).success).toBe(false);
    expect(schema.safeParse({ rating: "11" }).success).toBe(false);
    expect(schema.safeParse({ rating: "7" })).toMatchObject({
      success: true,
      data: { rating: 7 },
    });
  });

  it("rejects empty and invalid required numbers", () => {
    const schema = createDynamicSchema([
      createField("number", { name: "age", required: true }),
    ]);

    expect(schema.safeParse({ age: "" }).success).toBe(false);
    expect(schema.safeParse({ age: "not-a-number" }).success).toBe(false);
    expect(schema.safeParse({ age: "21" })).toMatchObject({
      success: true,
      data: { age: 21 },
    });
  });

  it("ignores fields without a configured name", () => {
    const schema = createDynamicSchema([createField("text", { name: "" })]);

    expect(schema.safeParse({})).toEqual({ success: true, data: {} });
  });
});
