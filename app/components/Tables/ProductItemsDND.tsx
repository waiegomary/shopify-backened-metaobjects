import {
  IndexTable,
  LegacyCard,
  VerticalStack,
  ButtonGroup,
  Button,
} from "@shopify/polaris";
import { IItemMetafield } from "~/types";
import { truncate } from "~/utils";
import Loader from "../Loaders";
import { useState } from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import ItemMetafieldForm from "../Form/Product/ItemMetafieldForm";
import { FetcherWithComponents, useFetcher } from "@remix-run/react";
import {
  sortableContainer,
  sortableElement,
  arrayMove,
} from "react-sortable-hoc";
import * as _ from "lodash";
import DragHandle from "../Sorting/DragHandle";
import ItemMetafieldEditForm from "../Form/Product/ItemMetafieldEditForm";
import { useHandleToggleModal } from "~/utils/hooks";
import ItemMetafieldEditorForm from "../Form/Product/ItemMetafieldEditorForm";

const ProductItemsDND = ({
  items,
  loading: isLoading,
  onRemove,
  onEdit,
  handleItemChange,
  itemDefinitions,
  formik,
}: {
  items: IItemMetafield[];
  loading?: boolean;
  onRemove: (id: number) => void;
  onEdit: (item: IItemMetafield) => void;
  handleItemChange: (items: any) => void;
  itemDefinitions: any;
  formik: any;
}) => {
  const resourceName = {
    singular: "Item",
    plural: "Items",
  };

  const [loading, setLoading] = useState(false);
  const fetcher = useFetcher();
  const SortableItem = ({ id, name, ranking, qty, item }, index) => (
    <IndexTable.Row
      id={item?.id}
      key={`${index}-${item?.id}-${name}`}
      position={index}
    >
      <IndexTable.Cell>
        <ButtonGroup segmented>
          <Button size="micro">
            <DragHandle />
          </Button>

          <Button
            size="micro"
            onClick={() => {
              onRemove(id);
            }}
          >
            <DeleteIcon />
          </Button>
          <Button
            size="micro"
            onClick={() => {
              handleOpen(); 
            }}
          >
            <EditIcon />
          </Button>
          {/* <ItemMetafieldForm
            activatorTitle={<EditIcon />}
            fetcher={fetcher}
            onAdd={onEdit}
            itemDefinitions={itemDefinitions}
            values={{
              id,
              name,
              qty,
              ranking,
              item,
            }}
          /> */}
        </ButtonGroup>
      </IndexTable.Cell>
      <IndexTable.Cell>{truncate(name)}</IndexTable.Cell>
      <IndexTable.Cell>{item?.name}</IndexTable.Cell>

      <IndexTable.Cell>{ranking}</IndexTable.Cell>
      <IndexTable.Cell>{qty}</IndexTable.Cell>
    </IndexTable.Row>
  );

  const SortableContainer = ({ children }) => {
    return (
      <IndexTable
        resourceName={resourceName}
        itemCount={items?.length || 0}
        selectable={false}
        headings={[
          { title: "" },
          { title: "Name" },
          { title: "Item definition" },
          { title: "Ranking" },
          { title: "Quantity" },
        ]}
      >
        {children}
      </IndexTable>
    );
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const _items = arrayMove(items, oldIndex, newIndex);
    handleItemChange(_items);
    formik.setFieldValue("items", _items);
  };
  
  const {active, handleClose, handleOpen} = useHandleToggleModal()
  return (
    <LegacyCard>
      {loading || isLoading ? <Loader /> : null}
      <ItemMetafieldEditorForm
            activatorTitle={<EditIcon />}
            active={active}
            handleToggle={active ? handleClose: handleOpen}
            fetcher={fetcher}
            onAdd={onEdit}
            itemDefinitions={itemDefinitions}
            values={{
             
            }}
          /> 
      <VerticalStack>
        <SortableContainer>
          {items?.map((value, index) => (
            <SortableItem
              key={`item-${value?.id}-${value?.qty}-${new Date().toString()}`}
              index={index}
              item={_.get(value, "item")}
              name={value?.name}
              id={_.get(value, "id")}
              ranking={_.get(value, "ranking")}
              qty={_.get(value, "qty")}
            />
          ))}
        </SortableContainer>
      </VerticalStack>
    </LegacyCard>
  );
};

export default ProductItemsDND;
