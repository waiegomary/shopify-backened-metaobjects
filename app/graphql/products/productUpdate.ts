export const productSaveUpdateMutation = async ({ graphql, variables }) => {
  const response = await graphql(query, { variables });
  return response.json();
};

export const createUpdateProductVariables = ({
  productId,
  title,
  descriptionHtml,
}) => {
  return {
    shouldQueryMarkets: true,
    shouldQueryMarketsPro: false,
    shouldQueryB2bCatalogs: true,
    shouldMutateInventory: true,
    includeProductPublicationStatus: false,

    product: {
      title,
      descriptionHtml,
      id: productId,
    },
    productId,
    skipProductUpdate: false,
    shouldBulkUpdateVariants: true,
    publicationsToPublish: [],
    publicationsToUnpublish: [],
    shouldPublish: false,
    shouldUnpublish: false,
    inventoryItemAdjustments: [],
  };
};

const query = `


mutation ProductSaveUpdate($product: ProductInput!, $productId: ID!, $publicationsToPublish: [PublicationInput!]!, $publicationsToUnpublish: [PublicationInput!]!, $shouldPublish: Boolean!, $shouldUnpublish: Boolean!,  $shouldQueryMarkets: Boolean = false, $shouldQueryMarketsPro: Boolean = false, $shouldQueryB2bCatalogs: Boolean = false, $variantsToBulkUpdate: [ProductVariantsBulkInput!] = [], $shouldBulkUpdateVariants: Boolean!, $skipProductUpdate: Boolean!) {
  productUpdate(input: $product) @skip(if: $skipProductUpdate) {
    product {
      id
      ...OrganizationCardProductDetails
      __typename
    }
    userErrors {
      field
      message
      __typename
    }
    __typename
  }
  productVariantsBulkUpdate(
    productId: $productId
    variants: $variantsToBulkUpdate
  ) @include(if: $shouldBulkUpdateVariants) {
    productVariants {
      ...VariantsCardVariant
      __typename
    }
    userErrors {
      field
      message
      __typename
    }
    __typename
  }
  publishablePublish(id: $productId, input: $publicationsToPublish) @include(if: $shouldPublish) {
    publishable @skip(if: $shouldUnpublish) {
      ... on Product {
        id
        onlineStoreUrl
        resourceMarketPublications: resourcePublicationsV2(
          first: 250
          catalogType: MARKET
          onlyPublished: false
        ) @include(if: $shouldQueryMarkets) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        resourceCountryPublications: resourcePublicationsV2(
          first: 250
          onlyPublished: false
        ) @include(if: $shouldQueryMarketsPro) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        resourceMerchantOfRecordPublications: resourcePublicationsV2(
          first: 1
          onlyPublished: false
        ) @include(if: $shouldQueryMarketsPro) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        resourceB2bCatalogPublications: resourcePublicationsV2(
          first: 250
          catalogType: COMPANY_LOCATION
          onlyPublished: false
        ) @include(if: $shouldQueryB2bCatalogs) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    userErrors {
      field
      message
      __typename
    }
    __typename
  }
  publishableUnpublish(id: $productId, input: $publicationsToUnpublish) @include(if: $shouldUnpublish) {
    publishable {
      ... on Product {
        id
        onlineStoreUrl
        resourceMarketPublications: resourcePublicationsV2(
          first: 250
          catalogType: MARKET
          onlyPublished: false
        ) @include(if: $shouldQueryMarkets) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        resourceCountryPublications: resourcePublicationsV2(
          first: 250
          onlyPublished: false
        ) @include(if: $shouldQueryMarketsPro) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        resourceB2bCatalogPublications: resourcePublicationsV2(
          first: 250
          catalogType: COMPANY_LOCATION
          onlyPublished: false
        ) @include(if: $shouldQueryB2bCatalogs) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    userErrors {
      field
      message
      __typename
    }
    __typename
  }
}

fragment OrganizationCardProductDetails on Product {
  tags
  vendor
  smartCollections: collections(first: 250, query: "collection_type:smart") {
    ...OrganizationCardCollectionConnection
    __typename
  }
  customCollections: collections(first: 250, query: "collection_type:custom") {
    ...OrganizationCardCollectionConnection
    __typename
  }
  __typename
}

fragment OrganizationCardCollectionConnection on CollectionConnection {
  edges {
    node {
      id
      title
      __typename
    }
    __typename
  }
  __typename
}

fragment VariantsCardVariant on ProductVariant {
  id
  barcode
  price
  compareAtPrice
  requiresShipping
  inventoryQuantity
  position
  sku
  taxable
  weight
  weightUnit
  fulfillmentService {
    serviceName
    handle
    id
    __typename
  }
  inventoryItem {
    id
    locationsCount
    __typename
  }
  ...InventoryItemVariantWithFirstInventoryLevel
  inventoryPolicy
  image {
    id
    src: url
    altText
    __typename
  }
  selectedOptions {
    name
    value
    __typename
  }
  taxCode
  __typename
}

fragment InventoryItemVariantWithFirstInventoryLevel on ProductVariant {
  inventoryItem {
    id
    tracked
    trackedEditable {
      locked
      reason
      __typename
    }
    unitCost {
      amount
      currencyCode
      __typename
    }
    countryCodeOfOrigin
    provinceCodeOfOrigin
    harmonizedSystemCode
    __typename
  }
  __typename
}`