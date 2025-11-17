import FieldItem from "@/components/FieldItem";
import useFormBuilderFields from "@/components/FormBuilder/FormBuilderFields/useFormBuilderFields.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty.tsx";
import { Form } from "@/components/ui/form.tsx";
import { formBuilderFieldTypes } from "@/config/formBuilderFieldTypes.ts";
import { CircleEllipsis, Plus } from "lucide-react";

const FormBuilderEmpty = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CircleEllipsis />
        </EmptyMedia>
        <EmptyTitle>No Fields Yet</EmptyTitle>
      </EmptyHeader>
    </Empty>
  );
};

const FormBuilderFields = () => {
  const { formFields, fields, reset, handleSelectField } =
    useFormBuilderFields();

  const renderFieldList = () =>
    fields.map((field) => <FieldItem key={field.id} field={field} />);

  return (
    <Card className={"max-w-2xl"}>
      <CardHeader>
        <CardTitle>Fields</CardTitle>
        {fields.length > 0 && (
          <CardAction>
            <Button variant={"secondary"} onClick={reset}>
              Reset
            </Button>
          </CardAction>
        )}
      </CardHeader>
      <CardContent>
        <Form {...formFields}>
          <form>
            {fields.length > 0 ? renderFieldList() : <FormBuilderEmpty />}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className={"text-center"}>
                  <Button variant={"secondary"}>
                    <Plus />
                    Add Field
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Fields</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {formBuilderFieldTypes.map((item) => (
                  <DropdownMenuItem
                    key={item.value}
                    onSelect={() => handleSelectField(item.value)}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormBuilderFields;
