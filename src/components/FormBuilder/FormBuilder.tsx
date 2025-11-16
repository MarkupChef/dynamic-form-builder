import FormBuilderFields from "@/components/FormBuilder/FormBuilderFields";
import FormPreview from "@/components/FormBuilder/FormPreview";
import useFormBuilder from "@/components/FormBuilder/useFormBuilder.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Switch } from "@/components/ui/switch.tsx";

const FormBuilder = () => {
  const { form, handleShowLabels, onSubmit } = useFormBuilder();

  return (
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
      <FormBuilderFields />
    </>
  );
};

export default FormBuilder;
