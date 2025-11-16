import FormBuilder from "@/components/FormBuilder";
import FormPreview from "@/components/FormBuilder/FormPreview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch.tsx";
import { H1 } from "@/components/ui/typography.tsx";
import { ROUTES } from "@/config/routes.ts";
import PageLayout from "@/layouts/PageLayout";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks.ts";
import {
  resetFormBuilderSlice,
  toggleIsLabels,
} from "@/redux-store/slices/formBuilder.slice.ts";
import { saveForm } from "@/redux-store/slices/forms.slice.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
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

  useEffect(() => {
    return () => {
      dispatch(resetFormBuilderSlice());
    };
  }, [dispatch]);

  const content = (
    <>
      <Card className={"max-w-2xl mb-4"}>
        <CardHeader>
          <CardTitle>Form settings</CardTitle>
          <CardAction>
            <div className={"flex gap-2"}>
              <FormPreview />
              <Button type="button" onClick={form.handleSubmit(onSubmit)}>
                Publish
              </Button>
            </div>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-8">
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
                    <div className="flex gap-4">
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
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className={"max-w-2xl"}>
        <CardHeader>
          <CardTitle>Fields</CardTitle>
        </CardHeader>
        <CardContent>
          <FormBuilder />
        </CardContent>
      </Card>
    </>
  );

  return <PageLayout header={<H1>Form Builder</H1>} content={content} />;
};

export default FormBuilderPage;
