


export const getMetaobjectQuery = `
fragment Media on Media {
    mediaContentType
    alt
    __typename
   
    ... on MediaImage {
      id
      __typename
      image {
        url
        width
        height
      }
    }
    ... on Video {
      id
      __typename
      sources {
        mimeType
        url
      }
    }
    ... on Model3d {
      id
      __typename
      sources {
        mimeType
        url
        __typename
      }
    }
    ... on ExternalVideo {
      id
      embedUrl
      host
      __typename
    }
  }


fragment MultiMetaObjectContentFragment on Metaobject {
  id
  type
  handle
  __typename
  fields {
    __typename
    type
    value
    key
    
    reference {
      ... on Metaobject {
        __typename
        id
        handle
        fields {
          __typename
          value
          type
          key
        }
        type
      }
      ...Media
    }
    references(first: 100) {
      nodes {
        __typename
        ... on Metaobject {
          __typename
        id
        fields {
          __typename
          value
          type
          key
        }
        type
      }
        ...Media
      }
    }
  }
}



fragment MetaObjectContentFragment on Metaobject {
  id
  type
  handle
  __typename
  fields {
    __typename
    type
    value
    key
    reference {
      ... on Metaobject {
        __typename
        id
        fields {
          value
          type
          key
          __typename
          references(first: 100) {
            nodes {
              __typename
              ...MultiMetaObjectContentFragment
              ...Media
            }
          }
        }
        type
      }
      ...Media
    }
    references(first: 100) {
      nodes {
        ...MultiMetaObjectContentFragment
        ...Media
      }
    }
  }
}
query MetaObjectContent($metaobjectHandleInput: MetaobjectHandleInput, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
  metaobject(handle: $metaobjectHandleInput) {
    ...MetaObjectContentFragment
  }
}
`;
