import {
  IndexTable,
  LegacyCard,
  VerticalStack,
  ButtonGroup,
  Button,
  Box,
  Text,
} from "@shopify/polaris";
import { get, logger, truncate } from "~/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import {
  sortableContainer,
  sortableElement,
  arrayMove,
} from "react-sortable-hoc";
import * as _ from "lodash";
import DragHandle from "../Sorting/DragHandle";
import MenuEditorForm from "../Form/SiteMap/MenuEditor";

const MenuMetaobject = ({ formik }) => {
  const resourceName = {
    singular: "menu",
    plural: "menus",
  };
  const { values } = formik;
  const menuItems = useMemo(() => get(values, 'menu.menuItems', []), [values]);

  const activatorRef = useRef<HTMLDivElement>(null);
  const onRemove = (menuItem) => {
    const copyItems = [...menuItems];
    formik.setFieldValue(
      "menu.menuItems",
      copyItems?.filter((it) => it?.id !== menuItem?.id)
    );
  };

  const handleChangeMenuItems = useCallback((items) => {
    formik.setFieldValue("menu.menuItems", items);
  }, []);

  const onAdd = (menuItem) => {
    handleChangeMenuItems([menuItem, ...menuItems]);
  };

  const onEdit = (menuItem) => {
    const index = _.findIndex(menuItems, (_item) => _item?.id === menuItem.id);
    formik.setFieldValue(`menu.menuItems[${index}]`, menuItem);
  };

  const SortableItem = sortableElement(({ menuItem }, index) => (
    <IndexTable.Row
      id={get(menuItem, "id")}
      key={`${index}-${get(menuItem, "id")}-${get(menuItem, "name")}`}
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
              onRemove(menuItem);
            }}
          >
            <DeleteIcon />
          </Button>
          <MenuEditorForm
            formik={formik}
            menuItem={menuItem}
            activatorElement={<EditIcon />}
            activatorRef={activatorRef}
            onSubmit={onEdit}
          />
        </ButtonGroup>
      </IndexTable.Cell>
      <IndexTable.Cell>{truncate(get(menuItem, "name"))}</IndexTable.Cell>
      <IndexTable.Cell>{get(menuItem, "page.name")}</IndexTable.Cell>

      <IndexTable.Cell>{get(menuItem, "page.handle")} </IndexTable.Cell>
    </IndexTable.Row>
  ));
  const SortableContainer = sortableContainer(({ children }) => {
    return (
      <IndexTable
        resourceName={resourceName}
        itemCount={menuItems?.length || 0}
        selectable={false}
        headings={[
          { title: "" },
          { title: "Name" },
          { title: "Page Name" },
          { title: "Handle" },
        ]}
      >
        {children}
      </IndexTable>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const _menuItems = arrayMove(menuItems, oldIndex, newIndex);
    handleChangeMenuItems(_menuItems);
  };
  return (
    <>
      <Box padding={1}></Box>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text variant="headingMd" as="h6">
          Menu Items
        </Text>
        <MenuEditorForm
          formik={formik}
          menuItem={{}}
          activatorElement={"Add MenuItem"}
          activatorRef={activatorRef}
          onSubmit={onAdd}
        />
      </div>
      <LegacyCard>
        <VerticalStack>
          <SortableContainer onSortEnd={onSortEnd} useDragHandle>
            {_.map(menuItems, (value, index) => (
              <SortableItem
                key={`menu-item-${get(value, "id")}-${index}`}
                index={index}
                menuItem={value}
                name={value?.name}
                id={_.get(value, "id")}
              />
            ))}
          </SortableContainer>
        </VerticalStack>
      </LegacyCard>
    </>
  );
};

export default MenuMetaobject;
