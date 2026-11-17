import InputNumber from "@/components/FormBuilder/InputNumber";
import InputText from "@/components/FormBuilder/InputText";
import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { useAppSelector } from "@/redux-store/hooks.ts";
import type FormBuilderState from "@/types/FormBuilderState.type";
import type { InputNumberProps } from "@/types/InputNumberProps.type.ts";
import type { InputTextProps } from "@/types/InputTextProps.type.ts";
import { createDefaultValues } from "@/utils/helpers/createDefaultValues.helper.ts";
import { createDynamicSchema } from "@/utils/helpers/createDynamicSchema.helper.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const BuiltForm = ({ builtForm }: { builtForm: FormBuilderState }) => {
  const formBuilder = useAppSelector((state) => state.formBuilder);
  const createdSchema = createDynamicSchema(builtForm.fields);
  const createdDefaultValues = createDefaultValues(builtForm.fields);

  const form = useForm<z.infer<typeof createdSchema>>({
    resolver: zodResolver(createdSchema),
    defaultValues: createdDefaultValues,
  });

  const onSubmit = () => {
    alert("The form has been completed successfully.");
  };

  if (!builtForm.fields.length) {
    return <div>No Fields</div>;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="space-y-4"
      >
        {builtForm.fields.map((builtField) => {
          return (
            <FormField
              key={`preview_${builtField.id}`}
              control={form.control}
              name={builtField.props.name}
              render={({ field }) => (
                <FormItem>
                  {formBuilder.isShowLabels && (
                    <FormLabel htmlFor={builtField.id}>
                      {builtField.label}
                    </FormLabel>
                  )}
                  <FormControl>
                    {builtField.formBuilderFieldType === "text" ? (
                      <InputText
                        field={field}
                        fieldProps={builtField.props as InputTextProps}
                      />
                    ) : builtField.formBuilderFieldType === "number" ? (
                      <InputNumber
                        field={field}
                        fieldProps={builtField.props as InputNumberProps}
                      />
                    ) : null}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default BuiltForm;
