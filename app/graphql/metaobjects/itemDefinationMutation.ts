import { logger } from "~/utils";

export const createItemDefinitionVariables = ({ id, handle, fields }: any) => {
  return {
    id,
    input: {
      handle,
      capabilities: {
        publishable: {
          status: "ACTIVE",
        },
      },
      fields,
    },
  };
};

export const updateItemDefinitionMutation = async ({ graphql, variables }) => {
  const response = await graphql(query, {
    variables,
  });
  return response.json();
};

const query = `
mutation MetaobjectUpdate($id: ID!, $input: MetaobjectUpdateInput!) {
    metaobjectUpdate(id: $id, metaobject: $input) {
      metaobject {
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
          displayNameKey
          __typename
        }
        fields {
          ...MetaobjectFieldFragment
          __typename
        }
        __typename
      }
      userErrors {
        field
        message
        elementIndex
        elementKey
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
