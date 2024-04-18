import * as _ from "lodash";

import { PAGINATION_LIMIT } from "~/constants";

export const productsQuery = async ({
  graphql,
  before = null,
  after = null,
  query = null,
}) => {
  let variables = {
    shouldQueryCompanyLocationPublicationCount: true,
    productsFirst: PAGINATION_LIMIT,
    productsLast: null,
    before: null,
    after: null,
    reverse: false,
    query,
    savedSearchId: null,
  };
  if (before) {
    variables["before"] = before;
    variables["productsLast"] = PAGINATION_LIMIT;
    delete variables["productsFirst"];
  } else if (after) {
    variables["after"] = after;
    variables["productsFirst"] = PAGINATION_LIMIT;
  }
  const q = `
  query ProductIndex(
    $productsFirst: Int
    $productsLast: Int
    $before: String
    $after: String
    $reverse: Boolean
    $query: String
    $savedSearchId: ID
    $shouldQueryCompanyLocationPublicationCount: Boolean = false
  ) {
    products(
      first: $productsFirst
      after: $after
      last: $productsLast
      before: $before
      reverse: $reverse
      query: $query
      savedSearchId: $savedSearchId
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        __typename
      }
      edges {
        cursor
        node {
          ...ProductListItem
          isGiftCard
          __typename
        }
        __typename
      }
      __typename
    }
    catalogs(first: 1, type: COMPANY_LOCATION)
      @include(if: $shouldQueryCompanyLocationPublicationCount) {
      totalCount
      __typename
    }
  }

  fragment ProductListItem on Product {
    id
    title
    vendor
    productType
    standardizedProductType {
      __typename
    }
    totalVariants
    totalInventory
    status
    tracksInventory
    onlineStoreUrl
    hasOnlyDefaultVariant
    featuredImage {
      id
      transformedSrc: url(
        transform: { maxWidth: 40, maxHeight: 40, scale: 3 }
      )
      __typename
    }
    featuredMedia {
      ... on MediaImage {
        id
        __typename
      }
      ... on Video {
        id
        __typename
      }
      ... on Model3d {
        id
        __typename
      }
      ... on ExternalVideo {
        id
        __typename
      }
      preview {
        image {
          id
          transformedSrc: url(
            transform: { maxWidth: 40, maxHeight: 40, scale: 3 }
          )
          __typename
        }
        __typename
      }
      __typename
    }

    __typename
  }
`;
  const response = await graphql(q, { variables });
  return await response.json();
};
