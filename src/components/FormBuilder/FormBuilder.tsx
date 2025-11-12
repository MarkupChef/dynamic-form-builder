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

const FormBuilder = () => {
  const { handleSelectField, fields } = useFormBuilder();

  return (
    <div>
      {fields.map((field) => (
        <FieldItem field={field} />
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
    </div>
  );
};

export default FormBuilder;
