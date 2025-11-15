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
import type { FormBuilderState } from "@/redux-store/slices/formBuilder.slice.ts";
import { createDefaultValues } from "@/utils/helpers/createDefaultValues.helper.ts";
import { createDynamicSchema } from "@/utils/helpers/createDynamicSchema.helper.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const BuiltForm = ({ builtForm }: { builtForm: FormBuilderState }) => {
  const createdSchema = createDynamicSchema(builtForm.fields);
  const createdDefaultValues = createDefaultValues(builtForm.fields);

  const form = useForm<z.infer<typeof createdSchema>>({
    resolver: zodResolver(createdSchema),
    defaultValues: createdDefaultValues,
  });

  const onSubmit = () => {
    alert("The form has been completed successfully.");
  };

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
              name={builtField.id}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={builtField.id}>
                    {builtField.label}
                  </FormLabel>
                  <FormControl>
                    <InputText field={field} fieldProps={builtField.props} />
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
