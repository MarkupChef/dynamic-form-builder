import useFormList from "@/components/FormList/useFormList.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty.tsx";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item.tsx";
import { ROUTES } from "@/config/routes.ts";
import { LayoutPanelTop, TrashIcon } from "lucide-react";
import { NavLink } from "react-router";
import styles from "./FormList.module.css";

const FormListEmpty = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <LayoutPanelTop />
        </EmptyMedia>
        <EmptyTitle>No Forms Yet</EmptyTitle>
      </EmptyHeader>
      <EmptyContent>
        <NavLink to={ROUTES.formCreate}>
          <Button>Create Form</Button>
        </NavLink>
      </EmptyContent>
    </Empty>
  );
};

const FormList = () => {
  const { builtFormList, handleRemove } = useFormList();

  const renderList = () =>
    builtFormList.map((item) => (
      <Item key={item.id} className={styles.formItem}>
        <ItemContent>
          <ItemTitle className={"w-full"}>
            <NavLink
              className={styles.formItemLink}
              to={`${ROUTES.forms}/${item.id}`}
            >
              {item.name}
            </NavLink>
          </ItemTitle>
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

  return builtFormList.length > 0 ? (
    <>
      {renderList()}
      <div className={"text-right mt-8"}>
        <NavLink to={ROUTES.formCreate}>
          <Button>Create Form</Button>
        </NavLink>
      </div>
    </>
  ) : (
    <FormListEmpty />
  );
};

export default FormList;
