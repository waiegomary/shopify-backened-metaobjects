export const productQuery = async ({ graphql, id }) => {
  const response = await graphql(query, { variables: { id } });
  return response.json();
};

const query = `

query Product($id: ID!) {
    product(id: $id) {
      title
      id
      descriptionHtml
      description
      properties: metafield(namespace: "custom", key: "properties") {
        key
        value
      }
      items: metafield(namespace: "custom", key: "items") {
        key
        value
      }
      productProperty: metafield(namespace: "custom", key: "productproperty") {
        key
        value
      }
      bom: metafield(namespace: "custom", key: "bom") {
        key
        value
      }
      mainMedia: metafield(namespace: "custom", key: "mainmedia") {
        key
        value
      }
      additionalmedia: metafield(namespace: "custom", key: "additionalmedia") {
        key
        value
      }
      productdescription: metafield(namespace: "custom", key: "productdescription") {
        key
        value
      }
    }
  }
  `;
