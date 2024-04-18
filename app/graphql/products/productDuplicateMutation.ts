export const duplicateProductMutation = async ({ graphql, variables }) => {
  const response = await graphql(query, { variables });
  return response.json();
};

export const createDuplicateProductVariables = ({ newTitle, productId }) => {
  return {
    productId,
    newTitle,
    includeImages: false,
    newStatus: "DRAFT",
  };
};

const query = `
mutation DuplicateProduct($productId: ID!, $newTitle: String!, $includeImages: Boolean, $newStatus: ProductStatus) {
  productDuplicate(
    productId: $productId
    newTitle: $newTitle
    includeImages: $includeImages
    newStatus: $newStatus
  ) {
    imageJob {
      id
      __typename
    }
    newProduct {
      id
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
`;
