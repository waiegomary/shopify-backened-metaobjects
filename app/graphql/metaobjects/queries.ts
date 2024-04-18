import * as _ from "lodash";
import { PAGINATION_LIMIT } from "~/constants";

export const getMetaobjects = async ({
  graphql,
  type,
  before = "",
  after = "",
  query = "",
  first=PAGINATION_LIMIT
}) => {
  let variables = {
    definitionCount: 64,
    referenceCount: 10,
    sortKey: "updated_at",
    reverse: false,
    first: first,
    type,
  };
  if (query) {
    variables["query"] = query;
  }
  if (before) {
    variables["before"] = before;
    variables["last"] = first;
    delete variables["first"];
  } else if (after) {
    variables["after"] = after;
    variables["first"] = first;
  }
  const response = await graphql(
    `
      query MetaobjectIndex(
        $query: String
        $first: Int
        $last: Int
        $before: String
        $after: String
        $referenceCount: Int
        $sortKey: String
        $reverse: Boolean
        $type: String!
      ) {
        metaobjects(
          first: $first
          last: $last
          before: $before
          after: $after
          type: $type
          query: $query
          reverse: $reverse
          sortKey: $sortKey
        ) {
          edges {
            cursor
            node {
              id
              displayName
              handle
              capabilities {
                publishable {
                  status
                  __typename
                }
                __typename
              }
              type
              updatedAt
              definition {
                id
                name
                access {
                  storefront
                  admin
                  __typename
                }
                capabilities {
                  publishable {
                    enabled
                    __typename
                  }
                  __typename
                }
                __typename
              }
              referencedBy(first: $referenceCount) {
                edges {
                  cursor
                  __typename
                }
                pageInfo {
                  hasNextPage
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          pageInfo {
            hasPreviousPage
            hasNextPage
            endCursor
            startCursor
            __typename
          }
          __typename
        }
      }
    `,
    {
      variables,
    }
  );

  const data = await response.json();
  return data;
};

export const getMetaDefinitions = async ({ graphql, definitionCount = 64 }) => {
  const response = await graphql(
    `
      query MetaobjectIndex($definitionCount: Int) {
        metaobjectDefinitions(first: $definitionCount, reverse: true) {
          edges {
            node {
              id
              type
              name
              metaobjectsCount
              __typename
            }
            __typename
          }
          __typename
        }
      }
    `,
    {
      variables: {
        definitionCount,
      },
    }
  );
  return await response.json();
};
