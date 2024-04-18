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
import { useMemo, useState } from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import {
  sortableContainer,
  sortableElement,
  arrayMove,
} from "react-sortable-hoc";
import * as _ from "lodash";
import DragHandle from "../Sorting/DragHandle";
import CollectionForm from "../Form/SiteMap/CollectionForm";

const CollectionMetaobject = ({ formik, faqFetcher: fetcher }) => {
  const resourceName = {
    singular: "collection",
    plural: "collections",
  };

  const product_collections = useMemo(
    () => get(formik, "values.product_collections", []),
    [formik.values]
  );

  const onRemove = (id) => {
    formik.setFieldValue(
      "product_collections",
      product_collections?.filter((it) => get(it, "id") !== id)
    );
  };

  const SortableItem = sortableElement((faq, type, index) => (
    <IndexTable.Row
      id={get(faq, "id")}
      key={`${index}-${get(faq, "id")}-${get(faq, "name")}`}
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
              onRemove(get(faq, "id"));
            }}
          >
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </IndexTable.Cell>
      <IndexTable.Cell>{get(faq, "name")}</IndexTable.Cell>
      <IndexTable.Cell>{get(faq, "type")}</IndexTable.Cell>
      <IndexTable.Cell>{get(faq, "id")}</IndexTable.Cell>
    </IndexTable.Row>
  ));
  const SortableContainer = sortableContainer(({ children }) => {
    return (
      <IndexTable
        resourceName={resourceName}
        itemCount={product_collections?.length || 0}
        selectable={false}
        headings={[
          { title: "" },
          { title: "Name" },
          { title: "Type" },
          { title: "MetaObject Id" },
        ]}
      >
        {children}
      </IndexTable>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const _items = arrayMove(product_collections, oldIndex, newIndex);
    formik.setFieldValue("product_collections", _items);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text variant="headingMd" as="h6">
          &nbsp;
        </Text>

        <CollectionForm
          fetcher={fetcher}
          activatorTitle={"Add collection"}
          formik={formik}
        />
      </div>
      <Box padding={2}></Box>
      <LegacyCard>
        <VerticalStack>
          <SortableContainer onSortEnd={onSortEnd} useDragHandle>
            {_.map(product_collections, (value, index) => (
              <SortableItem
                key={`item-${get(value, 'id')}-${index}`}
                index={index}
                item={_.get(value, "item")}
                name={value?.name}
                id={_.get(value, "id")}
                value={value}
                type={get(value, "type")}
              />
            ))}
          </SortableContainer>
        </VerticalStack>
      </LegacyCard>
    </>
  );
};

export default CollectionMetaobject;
