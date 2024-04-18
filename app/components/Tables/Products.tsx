import {
  IndexTable,
  LegacyCard,
  Pagination,
  VerticalStack,
  HorizontalGrid,
  IndexFilters,
  useSetIndexFiltersMode,
  Thumbnail,
  Text,
} from "@shopify/polaris";
import { IProductResponse } from "~/types";
import { truncate } from "~/utils";
import Loader from "../Loaders";
import { useCallback, useEffect, useState } from "react";
import { IMAGE_PLACEHOLDER, getProductIDNumber } from "~/constants";
import { Link } from "@remix-run/react";

const Products = ({
  edges,
  pageInfo,
  onSearch,
  loading: isLoading,
}: IProductResponse) => {
  const resourceName = {
    singular: "product",
    plural: "products",
  };
  const [loading, setLoading] = useState(false);

  const handleNavigation = (next: boolean) => {
    let rest = {};
    setLoading(true);
    if (next) {
      rest["after"] = pageInfo.endCursor;
    } else {
      rest["before"] = pageInfo.startCursor;
    }

    if (queryValue !== undefined && queryValue !== null) {
      rest["query"] = queryValue;
    }
    onSearch(rest);
  };
  const [queryValue, setQueryValue] = useState(null);
  const handleFiltersQueryChange = useCallback(
    (value: string) => setQueryValue(value),
    []
  );

  useEffect(() => {
    if (queryValue !== undefined && queryValue !== null) {
      onSearch({ query: queryValue });
    }
  }, [queryValue]);
  const [selected] = useState(0);
  const onHandleCancel = () => {};

  const { mode, setMode } = useSetIndexFiltersMode();

  useEffect(() => {
    setLoading(false);
  }, [edges]);
  const rowMarkup = edges.map(
    (
      {
        node: {
          id,
          title,
          status,
          totalInventory,
          featuredImage,
          featuredMedia,
        },
      },
      index
    ) => (
      <IndexTable.Row onNavigation={() => {}} id={id} key={id} position={index}>
        <IndexTable.Cell>
          <Thumbnail
            source={
              featuredImage?.transformedSrc ||
              featuredMedia?.preview?.transformedSrc ||
              IMAGE_PLACEHOLDER
            }
            size="small"
            alt={title}
          />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            <Link to={`/app/product/${getProductIDNumber(id)}`}>
              {truncate(title)}
            </Link>
          </Text>
        </IndexTable.Cell>

        <IndexTable.Cell>{status}</IndexTable.Cell>
        <IndexTable.Cell>{totalInventory} in stock</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <LegacyCard>
      {loading || isLoading ? <Loader /> : null}
      <VerticalStack>
        <IndexFilters
          selected={selected}
          filters={[]}
          onClearAll={() => {}}
          cancelAction={{
            onAction: onHandleCancel,
            disabled: false,
            loading: false,
          }}
          tabs={[]}
          queryValue={queryValue || ""}
          queryPlaceholder="Search ..."
          onQueryChange={handleFiltersQueryChange}
          onQueryClear={() => {
            setQueryValue("");
          }}
          mode={mode}
          setMode={setMode}
          hideFilters
        />
        <IndexTable
          resourceName={resourceName}
          itemCount={edges.length}
          selectable={false}
          headings={[
            { title: "Product" },
            { title: "Title" },
            { title: "Status" },
            { title: "Inventory" },
          ]}
        >
          {rowMarkup}
        </IndexTable>
        <HorizontalGrid>
          <div className="grid-container">
            <div
              className="pagination-wrapper"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <Pagination
                hasPrevious={pageInfo.hasPreviousPage}
                onPrevious={() => {
                  handleNavigation(false);
                }}
                hasNext={pageInfo.hasNextPage}
                onNext={() => {
                  handleNavigation(true);
                }}
              />
            </div>
          </div>
        </HorizontalGrid>
      </VerticalStack>
    </LegacyCard>
  );
};

export default Products;
function getProductNumber(id: string) {
  throw new Error("Function not implemented.");
}
