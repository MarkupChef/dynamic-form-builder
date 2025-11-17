import useFieldItem from "@/components/FieldItem/useFieldItem.ts";
import InputNumberConfigure from "@/components/FormBuilder/InputNumberConfigure";
import InputTextConfigure from "@/components/FormBuilder/InputTextConfigure";
import { Button } from "@/components/ui/button.tsx";
import { FormLabel } from "@/components/ui/form.tsx";
import { Item, ItemActions, ItemContent } from "@/components/ui/item";
import { useAppSelector } from "@/redux-store/hooks.ts";
import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";
import { TrashIcon } from "lucide-react";
import styles from "./FieldItem.module.css";

const FieldItem = ({ field }: { field: FormBuilderInput }) => {
  const formBuilder = useAppSelector((state) => state.formBuilder);
  const { remove } = useFieldItem();

  return (
    <Item className={styles.root}>
      <ItemContent>
        <div className={styles.content}>
          {formBuilder.isShowLabels ? (
            <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
          ) : null}

          {field.formBuilderFieldType === "text" && (
            <InputTextConfigure field={field} />
          )}
          {field.formBuilderFieldType === "number" && (
            <InputNumberConfigure field={field} />
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
