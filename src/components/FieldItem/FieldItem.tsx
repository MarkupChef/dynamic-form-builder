import useFieldItem from "@/components/FieldItem/useFieldItem.ts";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input";
import { Item, ItemActions, ItemContent } from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import type { FormBuilderField } from "@/redux-store/slices/formBuilder.slice";
import { TrashIcon } from "lucide-react";

const FieldItem = ({ field }: { field: FormBuilderField }) => {
  const { remove } = useFieldItem();

  const renderInputText = (field: FormBuilderField) => {
    return <Input id={field.id} placeholder={field.placeholder} />;
  };

  return (
    <Item className={"border border-gray-200 border-dashed my-4"}>
      <ItemContent>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor={field.id}>{field.label}</Label>
          {field.type === "inputText" && renderInputText(field)}
        </div>
      </ItemContent>
      <ItemActions>
        <Button
          type={"button"}
          variant="outline"
          size="sm"
          onClick={() => remove(field.id)}
        >
          <TrashIcon color="red" size={48} />
        </Button>
      </ItemActions>
    </Item>
  );
};

export default FieldItem;
