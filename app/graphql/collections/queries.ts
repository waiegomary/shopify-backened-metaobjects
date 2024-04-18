export const collectionsQuery = async ({ graphql, query: searchQuery = "" }) => {
  const variables = {
    collectionsFirst: 50,
    collectionsLast: null,
    before: null,
    after: null,
    sortKey: "UPDATED_AT",
    reverse: true,
    query: searchQuery,
    savedSearchId: null,
  };
  const response = await graphql(query, {
    variables,
  });
  return response.json();
};

const query = `query CollectionList_collections_1($collectionsFirst: Int, $collectionsLast: Int, $before: String, $after: String, $sortKey: CollectionSortKeys, $reverse: Boolean, $query: String, $savedSearchId: ID) {
    collections(
      first: $collectionsFirst
      after: $after
      last: $collectionsLast
      before: $before
      sortKey: $sortKey
      reverse: $reverse
      query: $query
      savedSearchId: $savedSearchId
    ) {
      edges {
        cursor
        node {
          id
          title
          productsCount
          sortOrder
        }
        __typename
      }
    }
  }`;
