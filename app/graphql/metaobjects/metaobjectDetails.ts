export const metaobjectDetailsQuery = async ({ graphql, id }) => {
  const response = await graphql(query, {
    variables: {
      id: "gid://shopify/Metaobject/14043545916",
      first: 20,
    },
  });

  return response.json();
};

const query = `
query MetaobjectDetails($id: ID!, $first: Int!) {
    metaobject(id: $id) {
      id
      displayName
      type
      handle
      capabilities {
        publishable {
          status
          __typename
        }
        __typename
      }
      definition {
        id
        name
        type
        displayNameKey
        access {
          storefront
          __typename
        }
        capabilities {
          publishable {
            enabled
            __typename
          }
          translatable {
            enabled
            __typename
          }
          __typename
        }
        __typename
      }
      fields {
        ...MetaobjectFieldFragment
        __typename
      }
      referencedBy(first: $first) {
        edges {
          cursor
          node {
            key
            __typename
          }
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
    localizationApp: app(id: "gid://shopify/App/6585759") {
      id
      __typename
    }
    shop {
      id
      resourceLimits {
        redirectLimitReached
        __typename
      }
      __typename
    }
  }
  
  fragment MetaobjectFieldFragment on MetaobjectField {
    value
    definition {
      key
      name
      description
      required
      validations {
        name
        type
        value
        __typename
      }
      type {
        name
        __typename
      }
      __typename
    }
    __typename
  }
`;
