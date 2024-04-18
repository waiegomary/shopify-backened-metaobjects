import {
  IndexTable,
  LegacyCard,
  VerticalStack,
  ButtonGroup,
  Button,
} from "@shopify/polaris";
import { IPropertyMetafield } from "~/types";
import { get, truncate } from "~/utils";
import Loader from "../Loaders";
import { useCallback, useEffect, useState } from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import { FetcherWithComponents } from "@remix-run/react";
import {
  sortableContainer,
  sortableElement,
  arrayMove,
} from "react-sortable-hoc";
import * as _ from "lodash";
import DragHandle from "../Sorting/DragHandle";
import PropertyMetafieldForm from "../Form/Product/PropertyMetafieldForm";
import { useHandleToggleModal } from "~/utils/hooks";
import PropertyMetafieldEditForm from "../Form/Product/PropertyMetafieldEditForm";

const ProductProperties = ({
  properties,
  loading: isLoading,
  onEdit,
  fetcher,
  onAdd,
  onRemove,
  handleItemChange,
  standardProperties,
  formik,
}: {
  properties: IPropertyMetafield[];
  loading?: boolean;
  onRemove: (id: number) => void;
  onEdit: (item: IPropertyMetafield, idx: number) => void;
  fetcher: FetcherWithComponents<any>;
  handleItemChange: (items: any) => void;
  standardProperties;
  formik: any;
  onAdd: (item: IPropertyMetafield) => void;
}) => {
  const resourceName = {
    singular: "property",
    plural: "properties",
  };
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});
  const handleSetItem = useCallback(
    (value) => {
      setItem(value);
    },
    [item]
  );
  const { active, handleClose, handleOpen } = useHandleToggleModal();
  useEffect(() => {
    if (get(item, "name")) {
      handleOpen();
    }
  }, [item]);
  
  const SortableItem = sortableElement(
    ({ id, name, ranking, propertyValue, propertyBase }, index) => (
      <IndexTable.Row
        id={propertyBase.id}
        key={`${index}-${propertyBase.id}-${name}`}
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
                handleSetItem({
                  id,
                  name,
                  propertyValue,
                  ranking,
                  propertyBase,
                });
              }}
            >
              <EditIcon />
            </Button>
          </ButtonGroup>
        </IndexTable.Cell>
        <IndexTable.Cell>{truncate(name)}</IndexTable.Cell>
        <IndexTable.Cell>{propertyBase.name}</IndexTable.Cell>

        <IndexTable.Cell>{ranking}</IndexTable.Cell>
        <IndexTable.Cell>{propertyValue}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  const SortableContainer = sortableContainer(({ children }) => {
    return (
      <IndexTable
        resourceName={resourceName}
        itemCount={properties?.length || 0}
        selectable={false}
        headings={[
          { title: "" },
          { title: "Name" },
          { title: "Property base" },
          { title: "Ranking" },
          { title: "Property value" },
        ]}
      >
        {children}
      </IndexTable>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const _items = arrayMove(properties, oldIndex, newIndex);
    handleItemChange(_items);
  };

  return (
    <LegacyCard>
      {loading || isLoading ? <Loader /> : null}
      <PropertyMetafieldEditForm
        activatorTitle={""}
        onAdd={onEdit}
        index={0}
        active={active}
        handleToggle={active ? handleClose : handleOpen}
        standardProperties={standardProperties}
        values={item}
      />
      <VerticalStack>
        <SortableContainer onSortEnd={onSortEnd} useDragHandle>
          {_.map(properties, (value, index) => (
            <SortableItem
              key={`item-${_.get(value, "id")}-${new Date()}-${index}`}
              index={index}
              item={_.get(value, "item")}
              name={value?.name}
              id={_.get(value, "id")}
              ranking={_.get(value, "ranking")}
              propertyBase={_.get(value, "propertyBase")}
              propertyValue={_.get(value, "propertyValue")}
            />
          ))}
        </SortableContainer>
      </VerticalStack>
    </LegacyCard>
  );
};

export default ProductProperties;
