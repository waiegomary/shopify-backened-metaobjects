export const metafieldSetMutation = async ({ graphql, variables }) => {
  const response = await graphql(query, {
    variables,
  });
  return response.json();
};
export const createVariables = ({
  ownerId,
  properties,
  items,
  additionalmedia,
  mainmedia,
  productdescription,
}) => {
  return {
    metafields: [
      {
        namespace: "custom",
        key: "productdescription",
        type: "json",
        value: productdescription,
        ownerId,
      },
      {
        namespace: "custom",
        key: "properties",
        type: "json",
        value: properties,
        ownerId,
      },
      {
        namespace: "custom",
        key: "items",
        type: "json",
        value: items,
        ownerId,
      },
      {
        namespace: "custom",
        key: "additionalmedia",
        type: "list.url",
        value: additionalmedia,
        ownerId,
      },
      {
        namespace: "custom",
        key: "mainmedia",
        type: "url",
        value: mainmedia,
        ownerId,
      },
    ],
  };
};

const query = `
mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields {
      id
      namespace
      key
      value
      __typename
    }
    userErrors {
      field
      message
      elementIndex
      __typename
    }
    __typename
  }
}

`;
