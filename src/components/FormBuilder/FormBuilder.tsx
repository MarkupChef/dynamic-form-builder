import FieldItem from "@/components/FieldItem";
import useFormBuilder from "@/components/FormBuilder/useFormBuilder.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty.tsx";
import { Form } from "@/components/ui/form.tsx";
import { CircleEllipsis, Plus } from "lucide-react";
import { useForm } from "react-hook-form";

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

const FormBuilder = () => {
  const { handleSelectField, fields } = useFormBuilder();
  const form = useForm();

  const renderList = () =>
    fields.map((field) => <FieldItem key={field.id} field={field} />);

  return (
    <Form {...form}>
      <form>
        {fields.length > 0 ? renderList() : <FormBuilderEmpty />}
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
            <DropdownMenuItem onSelect={() => handleSelectField("inputText")}>
              Text Input
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </form>
    </Form>
  );
};

export default FormBuilder;
