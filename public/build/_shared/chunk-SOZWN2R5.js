import {
  Toast,
  init_esm
} from "/build/_shared/chunk-NMF5CLGW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-COYC34KL.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/graphql/metaobjects/metaobjectQuery.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/graphql/metaobjects/metaobjectQuery.ts"
  );
  import.meta.hot.lastModified = "1709719980719.3677";
}
var getMetaobjectQuery = `
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

// app/utils/useStorefrontFetch.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/useStorefrontFetch.ts"
  );
  import.meta.hot.lastModified = "1709719980728.1921";
}
async function useStorefrontFetch(queryOrMutation) {
  const url = `https://${process.env.STOREFRONT}/api/2023-04/graphql.json`;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-Shopify-Api-Version", "2023-04");
  myHeaders.append("Cache-Control", "no-store, no-cache, must-revalidate");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append(
    "X-Shopify-Storefront-Access-Token",
    process.env.STOREFRONT_ACCESS_TOKEN
  );
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: queryOrMutation,
    redirect: "follow"
  };
  return fetch(url, requestOptions);
}
var useStorefrontFetch_default = useStorefrontFetch;

// app/graphql/metaobjects/itemDefinationMutation.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/graphql/metaobjects/itemDefinationMutation.ts"
  );
  import.meta.hot.lastModified = "1709719980718.7974";
}

// app/utils/useToast.tsx
init_remix_hmr();
init_esm();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/useToast.tsx"
  );
  import.meta.hot.lastModified = "1709719980728.4243";
}
function useToast() {
  const [active, setActive] = (0, import_react.useState)(false);
  const [message, setMessage] = (0, import_react.useState)("Success");
  const [error, setError] = (0, import_react.useState)(false);
  const handleSetMessage = (0, import_react.useCallback)((value) => setMessage(value), []);
  const toggleActive = (0, import_react.useCallback)(() => setActive((active2) => !active2), []);
  const showToast = (0, import_react.useCallback)((message2, _error = false) => {
    handleSetMessage(message2);
    if (_error) {
      setError(true);
    }
    toggleActive();
  }, []);
  const toastMarkup = active ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Toast,
    {
      content: message,
      error,
      onDismiss: toggleActive,
      duration: 4500
    },
    void 0,
    false,
    {
      fileName: "app/utils/useToast.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  ) : null;
  return {
    toastMarkup,
    active,
    setActive,
    showToast
  };
}

// app/components/Views/styles.css
var styles_default = "/build/_assets/styles-YEBJMFSO.css";

export {
  getMetaobjectQuery,
  useStorefrontFetch_default,
  useToast,
  styles_default
};
//# sourceMappingURL=/build/_shared/chunk-SOZWN2R5.js.map
