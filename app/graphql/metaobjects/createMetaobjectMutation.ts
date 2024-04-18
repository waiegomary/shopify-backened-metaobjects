export const createMetaobjectMutation = async ({ graphql, variables }) => {
  const response = await graphql(query, {
    variables,
  });

  return response.json();
};

const query = `
mutation MetaobjectCreate($input: MetaobjectCreateInput!) {
    metaobjectCreate(metaobject: $input) {
      metaobject {
        id
        handle
        __typename
      }
      userErrors {
        field
        code
        message
        elementIndex
        elementKey
        __typename
      }
      __typename
    }
  }
  `;

export const createMetaobjectCreateVariables = ({ fields }) => {
  return {
    input: {
      capabilities: {
        publishable: {
          status: "ACTIVE",
        },
      },
      fields,
      type: "item_definition",
    },
  };
};
