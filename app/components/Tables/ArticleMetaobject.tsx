import {
  IndexTable,
  LegacyCard,
  VerticalStack,
  ButtonGroup,
  Button,
  Box,
  Text,
} from "@shopify/polaris";
import { get } from "~/utils";
import { useMemo,  } from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import {
  sortableContainer,
  sortableElement,
  arrayMove,
} from "react-sortable-hoc";
import * as _ from "lodash";
import DragHandle from "../Sorting/DragHandle";
import ArticleForm from "../Form/SiteMap/ArticleForm";

const ArticleMetaobject = ({ formik, faqFetcher: fetcher }) => {
  const resourceName = {
    singular: "article",
    plural: "articles",
  };

  const { articles = [] } = useMemo(
    () => get(formik, "values"),
    [formik.values]
  );

  const onRemove = (id) => {
    formik.setFieldValue(
      "articles",
      articles?.filter((it) => get(it, "id") !== id)
    );
  };

  const SortableItem = sortableElement((faq, type, index) => (
    <IndexTable.Row
      id={get(faq, "id")}
      key={`${index}-${get(faq, "id")}-${get(faq, "name")}-${type}`}
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
        itemCount={articles?.length || 0}
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
    const _items = arrayMove(articles, oldIndex, newIndex);
    formik.setFieldValue("articles", _items);
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

        <ArticleForm
          fetcher={fetcher}
          activatorTitle={"Add Article"}
          formik={formik}
        />
      </div>
      <Box padding={2}></Box>
      <LegacyCard>
        <VerticalStack>
          <SortableContainer onSortEnd={onSortEnd} useDragHandle>
            {_.map(articles, (value, index) => (
              <SortableItem
                key={`item-${get(value, 'name')}-${index}`}
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

export default ArticleMetaobject;
