import FieldItem from "@/components/FieldItem";
import useFormBuilder from "@/components/FormBuilder/useFormBuilder.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Form } from "@/components/ui/form.tsx";
import { useForm } from "react-hook-form";

const FormBuilder = () => {
  const { handleSelectField, fields } = useFormBuilder();
  const form = useForm();
  return (
    <Form {...form}>
      <form>
        {fields.map((field) => (
          <FieldItem key={field.id} field={field} />
        ))}
        <hr className={"my-4"} />
        <DropdownMenu>
          <DropdownMenuTrigger>Add field</DropdownMenuTrigger>
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
