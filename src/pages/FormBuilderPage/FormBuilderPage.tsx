import FormBuilder from "@/components/FormBuilder";
import FormPreview from "@/components/FormBuilder/FormPreview";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch.tsx";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks.ts";
import { toggleIsLabels } from "@/redux-store/slices/formBuilder.slice.ts";
import { saveForm } from "@/redux-store/slices/forms.slice.ts";
import { ROUTES } from "@/utils/constants/routes.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

export const FormBuilderSchema = z.object({
  name: z.string().min(2, {
    message: "Form Name must be at least 2 characters.",
  }),
  isShowLabels: z.boolean(),
});

const FormBuilderPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formBuilder = useAppSelector((state) => state.formBuilder);

  const form = useForm<z.infer<typeof FormBuilderSchema>>({
    resolver: zodResolver(FormBuilderSchema),
    defaultValues: {
      name: formBuilder.name,
      isShowLabels: formBuilder.isShowLabels,
    },
  });

  const handleShowLabels = () => {
    dispatch(toggleIsLabels());
  };

  function onSubmit(formData: z.infer<typeof FormBuilderSchema>) {
    dispatch(
      saveForm({
        formData,
        fields: formBuilder.fields,
      }),
    );
    navigate(ROUTES.forms);
  }

  return (
    <div>
      <h1>Form Builder</h1>
      <Card>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={"formNameInput"}>Form Name</FormLabel>
                    <FormControl>
                      <Input
                        id={"formNameInput"}
                        placeholder="My First Form"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isShowLabels"
                render={({ field: f }) => (
                  <FormItem>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <FormLabel htmlFor={"fbIsShowLabels"}>
                          Show Labels:
                        </FormLabel>
                        <FormControl>
                          <Switch
                            id={"fbIsShowLabels"}
                            checked={f.value}
                            onCheckedChange={(checked) => {
                              handleShowLabels();
                              f.onChange(checked);
                            }}
                          />
                        </FormControl>
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit">Publish</Button>
            </form>
          </Form>
          <FormBuilder />
          <FormPreview />
        </CardContent>
      </Card>
    </div>
  );
};

export default FormBuilderPage;
