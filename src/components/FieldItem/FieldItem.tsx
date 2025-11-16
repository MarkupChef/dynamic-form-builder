import useFieldItem from "@/components/FieldItem/useFieldItem.ts";
import InputTextConfigure from "@/components/FormBuilder/InputTextConfigure";
import { Button } from "@/components/ui/button.tsx";
import { Item, ItemActions, ItemContent } from "@/components/ui/item";
import type { FormBuilderInputTextField } from "@/redux-store/slices/formBuilder.slice";
import { TrashIcon } from "lucide-react";
import styles from "./FieldItem.module.css";

const FieldItem = ({ field }: { field: FormBuilderInputTextField }) => {
  const { remove } = useFieldItem();

  return (
    <Item className={styles.root}>
      <ItemContent>
        <div className={styles.content}>
          {field.formBuilderFieldType === "inputText" && (
            <InputTextConfigure field={field} />
          )}
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
