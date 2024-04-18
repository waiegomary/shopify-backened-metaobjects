import { Link, useNavigate } from "@remix-run/react";
import {
  IndexTable,
  LegacyCard,
  useIndexResourceState,
  Text,
  Badge,
  Pagination,
  VerticalStack,
  HorizontalGrid,
  IndexFilters,
  useSetIndexFiltersMode,
} from "@shopify/polaris";
import { IMetaobjectResponse } from "~/types";
import { dateFormatter, truncate } from "~/utils";
import Loader from "../Loaders";
import { useCallback, useEffect, useState } from "react";

const Articles = ({
  edges,
  pageInfo,
  type,
  onSearch,
  loading: isLoading,
}: IMetaobjectResponse) => {
  const navigate = useNavigate();

  const resourceName = {
    singular: "article",
    plural: "articles",
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
          definition,
          capabilities,
          displayName,
          handle,
          type,
          updatedAt,
        },
      },
      index
    ) => (
      <IndexTable.Row
        onNavigation={() => {}}
        id={id}
        key={id}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" as="span">
            <Link to={`/app/article/${handle}`}>{truncate(displayName)}</Link>
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{definition.name}</IndexTable.Cell>
        <IndexTable.Cell>{definition.access.storefront}</IndexTable.Cell>

        <IndexTable.Cell>
          <Badge size="small">{capabilities.publishable.status}</Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>{dateFormatter(updatedAt)}</IndexTable.Cell>
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
            { title: "Display Name" },
            { title: "Definition" },
            { title: "Storefront access" },
            { title: "Status" },
            { title: "Last updated" },
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

export default Articles;
