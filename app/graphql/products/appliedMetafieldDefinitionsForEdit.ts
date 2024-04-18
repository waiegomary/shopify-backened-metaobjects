export const appliedMetafieldDefinition = `
query AppliedMetafieldDefinitionsForEdit($resourceId: ID!, $limit: Int!) {
    node(id: $resourceId) {
      id
      ... on HasMetafieldDefinitions {
        appliedMetafieldDefinitions(
          first: $limit
          pinnedStatus: PINNED
          sortKey: PINNED_POSITION
        ) {
          edges {
            node {
              ...AppliedMetafieldDefinitionFragment
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
  }
  
  fragment AppliedMetafieldDefinitionFragment on AppliedMetafieldDefinition {
    metafield {
      id
      value
      __typename
    }
    definition {
      id
      ...MetafieldDefinitionFragment
      __typename
    }
    __typename
  }
  
  fragment MetafieldDefinitionFragment on MetafieldDefinition {
    id
    namespace
    key
    name
    description
    type {
      name
      __typename
    }
    pinnedPosition
    validations {
      name
      type
      value
      __typename
    }
    merchantAccess
    owningApp {
      id
      title
      icon {
        id
        altText
        url
        __typename
      }
      appStoreAppUrl
      __typename
    }
    __typename
  }
  
`