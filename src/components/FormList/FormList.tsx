import useFormList from "@/components/FormList/useFormList.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item.tsx";
import { TrashIcon } from "lucide-react";
import styles from "./FormList.module.css";

const FormList = () => {
  const { builtFormList, handleRemove } = useFormList();

  return builtFormList.map((item) => (
    <Item className={styles.formItem}>
      <ItemContent>
        <ItemTitle>{item.name}</ItemTitle>
      </ItemContent>
      <ItemActions>
        <Button
          type={"button"}
          variant="outline"
          size="sm"
          onClick={() => handleRemove(item.id)}
        >
          <TrashIcon color="red" size={48} />
        </Button>
      </ItemActions>
    </Item>
  ));
};

export default FormList;
