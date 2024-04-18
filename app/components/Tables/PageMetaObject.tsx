import {
  IndexTable,
  LegacyCard,
  VerticalStack,
  ButtonGroup,
  Button,
  Box,
  Text,
} from "@shopify/polaris";
import { get, logger, numberGenerator, truncate } from "~/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import {
  sortableContainer,
  sortableElement,
  arrayMove,
} from "react-sortable-hoc";
import * as _ from "lodash";
import DragHandle from "../Sorting/DragHandle";
import PageForm from "../Form/SiteMap/PageEditor/PageForm";

const PageMetaObject = ({ fetcher, formik }) => {
  const resourceName = {
    singular: "page",
    plural: "pages",
  };
  const [loading, setLoading] = useState(false);
  const [collections, setCollections] = useState([]);
  const activatorRef = useRef<HTMLDivElement>(null);
  const { values } = formik;
  const { pages } = useMemo(() => values, [values]);

  const onSearchCollections = async (data) => {
    await fetcher.load(
      `/app/search-collections?query=${_.get(data, "query", "")}&after=${_.get(
        data,
        "after"
      )}&before=${_.get(data, "before")}`
    );
  };
  useEffect(() => {
    if (_.isEmpty(collections) && fetcher.state !== "loading") {
      onSearchCollections({});
    }
  });
  useEffect(() => {
    if (fetcher.data) {
      const res = _.map(
        _.get(fetcher.data, "data.collections.edges"),
        (item) => {
          return {
            value: _.get(item, "node.id"),
            label: _.get(item, "node.title"),
          };
        }
      );
      setCollections(res || []);
    }
  }, [fetcher.data, loading]);

  useEffect(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);

  const onRemove = (page) => {
    const pagesCopy = [...pages];
    formik.setFieldValue(
      "pages",
      pagesCopy?.filter((it) => _.get(page, "id") !== get(it, "id"))
    );
  };

  const SortableItem = sortableElement((page, index) => (
    <IndexTable.Row
      id={get(page, "id")}
      key={`${index}-${get(page, "id")}-${get(page, "name")}`}
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
              onRemove(page);
            }}
          >
            <DeleteIcon />
          </Button>

          <PageForm
            pageIndex={_.findIndex(pages, { id: get(page, "id") })}
            formik={formik}
            activatorRef={activatorRef}
            activatorElement={<EditIcon />}
            page={page}
            onSearchCollections={onSearchCollections}
            collections={collections}
            loading={loading}
            _collections={collections}
            onSubmit={onEdit}
          />
        </ButtonGroup>
      </IndexTable.Cell>
      <IndexTable.Cell>{get(page, "name")}</IndexTable.Cell>
      <IndexTable.Cell>{get(page, "title")}</IndexTable.Cell>

      <IndexTable.Cell>{get(page, "style")}</IndexTable.Cell>
      <IndexTable.Cell>{get(page, "handle")}</IndexTable.Cell>
      <IndexTable.Cell>{get(page, "sections.length")}</IndexTable.Cell>
    </IndexTable.Row>
  ));
  const SortableContainer = sortableContainer(({ children }) => {
    return (
      <IndexTable
        resourceName={resourceName}
        itemCount={pages?.length || 0}
        selectable={false}
        headings={[
          { title: "" },
          { title: "name" },
          { title: "Title" },
          { title: "style" },
          { title: "Handle" },
          { title: "Sections" },
        ]}
      >
        {children}
      </IndexTable>
    );
  });

  const onAdd = (page, pageIndex) => {
    formik.setFieldValue("pages", [page, ...pages]);
  };

  const onEdit = (page, pageIndex) => {
    formik.setFieldValue(`pages[${pageIndex}]`, page);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const _items = arrayMove(pages, oldIndex, newIndex);
    formik.setFieldValue("pages", _items);
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
          
        </Text>

        <PageForm
          pageIndex={-1}
          formik={formik}
          activatorRef={activatorRef}
          activatorElement={"Add Page"}
          page={{
            id: "",
            name: "",
            style: "light_header",
            title: "",
            description: "",
            keywords: "",
            handle: "",
            sections: [],
          }}
          onSearchCollections={onSearchCollections}
          collections={collections}
          loading={loading}
          _collections={collections}
          onSubmit={onAdd}
        />
      </div>
      <Box padding={2}></Box>
      <LegacyCard>
        <VerticalStack>
          <SortableContainer onSortEnd={onSortEnd} useDragHandle>
            {_.map(pages, (value, index) => (
              <SortableItem
                key={`item-${get(value, "id")}-${numberGenerator()}`}
                index={index}
                {...value}
              />
            ))}
          </SortableContainer>
        </VerticalStack>
      </LegacyCard>
    </>
  );
};

export default PageMetaObject;
