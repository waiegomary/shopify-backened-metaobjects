import {
  IndexTable,
  LegacyCard,
  VerticalStack,
  ButtonGroup,
  Button,
  HorizontalStack,
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
  SortableHandle,
} from "react-sortable-hoc";
import * as _ from "lodash";
import DragHandle from "../Sorting/DragHandle";
import FaqForm from "../Form/SiteMap/FaqForm";

const FaqMetaObjects = ({ formik, faqFetcher: fetcher }) => {
  const resourceName = {
    singular: "faq",
    plural: "faqs",
  };

  const { faq: faqs = [] } = useMemo(
    () => get(formik, "values"),
    [formik.values]
  );

  const onRemove = (id) => {
    formik.setFieldValue(
      "faq",
      faqs?.filter((it) => get(it, "id") !== id)
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
          {/* <PropertyMetafieldForm
              activatorTitle={<EditIcon />}
              fetcher={fetcher}
              onAdd={onEdit}
              values={faq}
            /> */}
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
        itemCount={faqs?.length || 0}
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
    const _items = arrayMove(faqs, oldIndex, newIndex);
    formik.setFieldValue("faq", _items);
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

        <FaqForm fetcher={fetcher} activatorTitle={"Add FAQ"} formik={formik} />
      </div>
      <Box padding={2}></Box>
      <LegacyCard>
        <VerticalStack>
          <SortableContainer onSortEnd={onSortEnd} useDragHandle>
            {_.map(faqs, (value, index) => (
              <SortableItem
                key={`item-${get(value, 'id')}`}
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

export default FaqMetaObjects;
