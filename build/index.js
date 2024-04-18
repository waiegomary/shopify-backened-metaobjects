var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_node2 = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot"));

// app/shopify.server.js
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2023-07");

// app/db.server.js
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.js
var _a, shopify = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: (_a = process.env.SCOPES) == null ? void 0 : _a.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_server.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_server.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify.registerWebhooks({ session });
    }
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
});
var addDocumentResponseHeaders = shopify.addDocumentResponseHeaders, authenticate = shopify.authenticate, unauthenticated = shopify.unauthenticated, login = shopify.login, registerWebhooks = shopify.registerWebhooks, sessionStorage = shopify.sessionStorage;

// app/entry.server.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, _loadContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 26,
          columnNumber: 7
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node2.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app.search-metaobjects.$type.tsx
var app_search_metaobjects_type_exports = {};
__export(app_search_metaobjects_type_exports, {
  loader: () => loader
});
var import_node3 = require("@remix-run/node");

// app/constants/index.ts
var IMAGE_PLACEHOLDER = "https://asset.cloudinary.com/oves/784b06f417dc5e981eaa039cab243564", PRODUCT_ID_PREFIX = "gid://shopify/Product/", getProductIDNumber = (id) => id == null ? void 0 : id.replace(PRODUCT_ID_PREFIX, ""), getProductIDString = (id) => `${PRODUCT_ID_PREFIX}${id}`, FIELD_REQUIRED = "Field required.";

// app/graphql/metaobjects/queries.ts
var getMetaobjects = async ({
  graphql,
  type,
  before = "",
  after = "",
  query: query8 = "",
  first = 20
}) => {
  let variables = {
    definitionCount: 64,
    referenceCount: 10,
    sortKey: "updated_at",
    reverse: !1,
    first,
    type
  };
  return query8 && (variables.query = query8), before ? (variables.before = before, variables.last = first, delete variables.first) : after && (variables.after = after, variables.first = first), await (await graphql(
    `
      query MetaobjectIndex(
        $query: String
        $first: Int
        $last: Int
        $before: String
        $after: String
        $referenceCount: Int
        $sortKey: String
        $reverse: Boolean
        $type: String!
      ) {
        metaobjects(
          first: $first
          last: $last
          before: $before
          after: $after
          type: $type
          query: $query
          reverse: $reverse
          sortKey: $sortKey
        ) {
          edges {
            cursor
            node {
              id
              displayName
              handle
              capabilities {
                publishable {
                  status
                  __typename
                }
                __typename
              }
              type
              updatedAt
              definition {
                id
                name
                access {
                  storefront
                  admin
                  __typename
                }
                capabilities {
                  publishable {
                    enabled
                    __typename
                  }
                  __typename
                }
                __typename
              }
              referencedBy(first: $referenceCount) {
                edges {
                  cursor
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
            __typename
          }
          pageInfo {
            hasPreviousPage
            hasNextPage
            endCursor
            startCursor
            __typename
          }
          __typename
        }
      }
    `,
    {
      variables
    }
  )).json();
}, getMetaDefinitions = async ({ graphql, definitionCount = 64 }) => await (await graphql(
  `
      query MetaobjectIndex($definitionCount: Int) {
        metaobjectDefinitions(first: $definitionCount, reverse: true) {
          edges {
            node {
              id
              type
              name
              metaobjectsCount
              __typename
            }
            __typename
          }
          __typename
        }
      }
    `,
  {
    variables: {
      definitionCount
    }
  }
)).json();

// app/utils/index.ts
var _ = __toESM(require("lodash"));
var numberFormat = (n) => String(n).replace(/(.)(?=(\d{3})+$)/g, "$1,"), get2 = _.get, map2 = _.map, find2 = _.find;
function isValidDate(d) {
  return d instanceof Date && !d && d !== void 0 && d !== null && d !== "null" && d !== void 0 && d !== "undefined";
}
function slugify(string) {
  return string == null ? void 0 : string.toString().trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
var dateFormatter = (isoDateString) => {
  let date = new Date(isoDateString);
  return `${[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ][date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
function titleCase(str) {
  for (var splitStr = str.toLowerCase().split(" "), i = 0; i < splitStr.length; i++)
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  return splitStr.join(" ");
}
var parseDefinitionType = (definition) => {
  var _a2;
  return titleCase((_a2 = definition == null ? void 0 : definition.replace("_", " ")) == null ? void 0 : _a2.replace("-", " "));
};
function logger(obj, text = "Logger :>> ") {
  console.log(text, JSON.stringify(obj, null, 2));
}
function truncate(str, { length = 25 } = {}) {
  return str || (str ? str.length <= length ? str : str.slice(0, length) + "\u2026" : "");
}
var exists = (str) => str && str != "undefined" && str !== "null";
function parseSearchParams({
  params,
  request,
  queryBuild = (e) => e
}) {
  var _a2, _b, _c, _d;
  let url = new URL(request.url), data = {}, query8 = ((_a2 = url.searchParams) == null ? void 0 : _a2.get("query")) || "", before = ((_b = url.searchParams) == null ? void 0 : _b.get("before")) || "", after = ((_c = url.searchParams) == null ? void 0 : _c.get("after")) || "", first = ((_d = url.searchParams) == null ? void 0 : _d.get("first")) || "";
  return exists(query8) && (data.query = queryBuild(query8)), exists(before) ? data.before = before : exists(after) && (data.after = after), exists(first) && (data.first = parseInt(first) || 20), data;
}
var numberGenerator = () => (/* @__PURE__ */ new Date()).getTime() + Math.floor(Math.random() * 5) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
function toHTML(content) {
  let html = "";
  try {
    JSON.parse(content).children.forEach((node) => {
      switch (node.type) {
        case "heading":
          html += `<h${node.level}>${node.children[0].value}</h${node.level}>`;
          break;
        case "list":
          html += `<${node.listType === "unordered" ? "ul" : "ol"} class="list">`, node.children.forEach((item) => {
            let temp = "";
            _.get(item, "children") && (temp += "<li>", item.children.map((it) => {
              it.type === "link" ? temp += `<a href="${it.url}" target="${it.target}">${it.children[0].value}</a> ` : it.type === "link" && it.italic ? temp += `<a href="${it.url}" target="${it.target}"><em>${it.children[0].value}</em></a> ` : item.type === "link" && (temp += `<a href="${it.url}" target="${it.target}">${it.children[0].value}</a> `);
            }), temp += "</li>"), (temp == null ? void 0 : temp.replaceAll(" ", "")) != "<li></li>" ? html += temp : html += `<li>${item.children[0].value} ${_.get(
              item.children,
              "[1].value",
              ""
            )}</li>`;
          }), html += `<${node.listType === "unordered" ? "/ul" : "/ol"}>`;
          break;
        case "paragraph":
          html += "<p>", node.children.forEach((item) => {
            item.type === "text" && item.bold ? html += `<strong>${item.value}</strong> ` : item.type === "text" && item.italic ? html += `<em>${item.value}</em> ` : item.type === "text" && (html += `${item.value} `), item.type === "link" && item.bold ? html += `<a href="${item.url}" target="${item.target}"><strong>${item.children[0].value}</strong></a> ` : item.type === "link" && item.italic ? html += `<a href="${item.url}" target="${item.target}"><em>${item.children[0].value}</em></a> ` : item.type === "link" && (html += `<a href="${item.url}" target="${item.target}">${item.children[0].value}</a> `);
          }), html += "</p>";
          break;
      }
    });
  } catch {
  }
  return html;
}

// app/routes/app.search-metaobjects.$type.tsx
async function loader({ request, params }) {
  let { admin } = await authenticate.admin(request), rest = parseSearchParams({
    request,
    params,
    queryBuild: (e) => `type:${params.type} AND display_name:${e}*`
  }), metaobjects = await getMetaobjects({
    graphql: admin.graphql,
    type: params.type,
    ...rest
  });
  return (0, import_node3.json)(metaobjects);
}

// app/routes/app.search-collections.tsx
var app_search_collections_exports = {};
__export(app_search_collections_exports, {
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");

// app/graphql/collections/queries.ts
var collectionsQuery = async ({ graphql, query: searchQuery = "" }) => (await graphql(query, {
  variables: {
    collectionsFirst: 50,
    collectionsLast: null,
    before: null,
    after: null,
    sortKey: "UPDATED_AT",
    reverse: !0,
    query: searchQuery,
    savedSearchId: null
  }
})).json(), query = `query CollectionList_collections_1($collectionsFirst: Int, $collectionsLast: Int, $before: String, $after: String, $sortKey: CollectionSortKeys, $reverse: Boolean, $query: String, $savedSearchId: ID) {
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

// app/routes/app.search-collections.tsx
async function loader2({ request, params }) {
  let { admin } = await authenticate.admin(request), rest = parseSearchParams({
    request,
    params,
    queryBuild: (e) => `${e}`
  }), res = await collectionsQuery({
    graphql: admin.graphql,
    ...rest
  });
  return (0, import_node4.json)(res);
}

// app/routes/app.product.duplicate.tsx
var app_product_duplicate_exports = {};
__export(app_product_duplicate_exports, {
  action: () => action
});

// app/graphql/products/productDuplicateMutation.ts
var duplicateProductMutation = async ({ graphql, variables }) => (await graphql(query2, { variables })).json(), createDuplicateProductVariables = ({ newTitle, productId }) => ({
  productId,
  newTitle,
  includeImages: !1,
  newStatus: "DRAFT"
}), query2 = `
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

// app/routes/app.product.duplicate.tsx
var _2 = __toESM(require("lodash")), import_node5 = require("@remix-run/node");
async function action({ request, params }) {
  let { admin } = await authenticate.admin(request), data = {
    ...Object.fromEntries(await request.formData())
  }, variables = createDuplicateProductVariables({
    newTitle: _2.get(data, "title"),
    productId: _2.get(data, "productId")
  }), response = await duplicateProductMutation({
    graphql: admin.graphql,
    variables
  }), newProductId = getProductIDNumber(
    _2.get(response, "data.productDuplicate.newProduct.id")
  ), errors = _2.get(response, "data.productDuplicate.userErrors.length");
  return errors ? (0, import_node5.json)({ errors }, { status: 422 }) : (0, import_node5.redirect)(
    `/app/product/${newProductId || getProductIDNumber(_2.get(data, "productId"))}`
  );
}

// app/routes/app.metaobject.$type.tsx
var app_metaobject_type_exports = {};
__export(app_metaobject_type_exports, {
  default: () => MetaobjectsPage,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_polaris3 = require("@shopify/polaris"), _3 = __toESM(require("lodash")), import_react6 = require("react"), import_polaris4 = require("@shopify/polaris");

// app/components/Tables/MetaObjects.tsx
var import_react3 = require("@remix-run/react"), import_polaris2 = require("@shopify/polaris");

// app/components/Loaders/index.tsx
var import_polaris = require("@shopify/polaris"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Loader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { height: "1px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Loading, {}, void 0, !1, {
    fileName: "app/components/Loaders/index.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Loaders/index.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Loaders/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Loaders_default = Loader;

// app/components/Tables/MetaObjects.tsx
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), MetaObjects = ({
  edges,
  pageInfo,
  type,
  onSearch,
  loading: isLoading
}) => {
  let navigate = (0, import_react3.useNavigate)(), resourceName = {
    singular: "metaobject",
    plural: "metaobjects"
  }, [loading, setLoading] = (0, import_react4.useState)(!1), handleNavigation = (next) => {
    let rest = {};
    setLoading(!0), next ? rest.after = pageInfo.endCursor : rest.before = pageInfo.startCursor, queryValue != null && (rest.query = queryValue), onSearch(rest);
  }, [queryValue, setQueryValue] = (0, import_react4.useState)(null), handleFiltersQueryChange = (0, import_react4.useCallback)(
    (value) => setQueryValue(value),
    []
  );
  (0, import_react4.useEffect)(() => {
    queryValue != null && onSearch({ query: queryValue });
  }, [queryValue]);
  let [selected] = (0, import_react4.useState)(0), onHandleCancel = () => {
  }, { mode, setMode } = (0, import_polaris2.useSetIndexFiltersMode)();
  (0, import_react4.useEffect)(() => {
    setLoading(!1);
  }, [edges]);
  let rowMarkup = edges.map(
    ({
      node: {
        id,
        definition,
        capabilities,
        displayName,
        handle,
        type: type2,
        updatedAt
      }
    }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.IndexTable.Row, { onNavigation: () => {
    }, id, position: index, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.IndexTable.Cell, { children: truncate(displayName) }, void 0, !1, {
        fileName: "app/components/Tables/MetaObjects.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.IndexTable.Cell, { children: definition.name }, void 0, !1, {
        fileName: "app/components/Tables/MetaObjects.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.IndexTable.Cell, { children: definition.access.storefront }, void 0, !1, {
        fileName: "app/components/Tables/MetaObjects.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Badge, { size: "small", children: capabilities.publishable.status }, void 0, !1, {
        fileName: "app/components/Tables/MetaObjects.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Tables/MetaObjects.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.IndexTable.Cell, { children: dateFormatter(updatedAt) }, void 0, !1, {
        fileName: "app/components/Tables/MetaObjects.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, id, !0, {
      fileName: "app/components/Tables/MetaObjects.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Loaders_default, {}, void 0, !1, {
      fileName: "app/components/Tables/MetaObjects.tsx",
      lineNumber: 102,
      columnNumber: 31
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.VerticalStack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_polaris2.IndexFilters,
        {
          selected,
          filters: [],
          onClearAll: () => {
          },
          cancelAction: {
            onAction: onHandleCancel,
            disabled: !1,
            loading: !1
          },
          tabs: [],
          queryValue: queryValue || "",
          queryPlaceholder: "Search ...",
          onQueryChange: handleFiltersQueryChange,
          onQueryClear: () => {
            setQueryValue("");
          },
          mode,
          setMode,
          hideFilters: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/MetaObjects.tsx",
          lineNumber: 104,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_polaris2.IndexTable,
        {
          resourceName,
          itemCount: edges.length,
          selectable: !1,
          headings: [
            { title: "Display Name" },
            { title: "Definition" },
            { title: "Storefront access" },
            { title: "Status" },
            { title: "Last updated" }
          ],
          children: rowMarkup
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/MetaObjects.tsx",
          lineNumber: 124,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.HorizontalGrid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: "pagination-wrapper",
          style: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 20
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_polaris2.Pagination,
            {
              hasPrevious: pageInfo.hasPreviousPage,
              onPrevious: () => {
                handleNavigation(!1);
              },
              hasNext: pageInfo.hasNextPage,
              onNext: () => {
                handleNavigation(!0);
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/MetaObjects.tsx",
              lineNumber: 149,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/MetaObjects.tsx",
          lineNumber: 140,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Tables/MetaObjects.tsx",
        lineNumber: 139,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Tables/MetaObjects.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Tables/MetaObjects.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/MetaObjects.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}, MetaObjects_default = MetaObjects;

// app/routes/app.metaobject.$type.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
async function loader3({ request, params }) {
  var _a2, _b;
  let { admin, session } = await authenticate.admin(request), query8 = new URL(request.url), after = ((_a2 = query8.searchParams) == null ? void 0 : _a2.get("after")) || "", before = ((_b = query8.searchParams) == null ? void 0 : _b.get("before")) || "", rest = {};
  before ? rest.before = before : after && (rest.after = after);
  let metaobjects = await getMetaobjects({
    graphql: admin.graphql,
    type: params.type,
    ...rest
  });
  return (0, import_node6.json)({
    metaobjects,
    definitionType: parseDefinitionType(params.type),
    type: params.type,
    graphql: admin.graphql
  });
}
function MetaobjectsPage() {
  let { metaobjects, definitionType, type, graphql } = (0, import_react5.useLoaderData)(), [active, setActive] = (0, import_react6.useState)(!0), [edges, setEdges] = (0, import_react6.useState)(
    _3.get(metaobjects, "data.metaobjects.edges", [])
  ), [pageInfo, setPageInfo] = (0, import_react6.useState)(
    _3.get(metaobjects, "data.metaobjects.pageInfo", {})
  ), fetcher = (0, import_react5.useFetcher)(), [loading, setLoading] = (0, import_react6.useState)(fetcher.state === "loading"), onSearch = async (data) => {
    fetcher.load(
      `/app/search-metaobjects/${type}?query=${_3.get(
        data,
        "query"
      )}&after=${_3.get(data, "after")}&before=${_3.get(data, "before")}`
    );
  };
  (0, import_react6.useEffect)(() => {
    fetcher.state === "loading" ? setLoading(!0) : setLoading(!1), fetcher.data && (setEdges(_3.get(fetcher.data, "data.metaobjects.edges", [])), setPageInfo(_3.get(fetcher.data, "data.metaobjects.pageInfo", {})));
  }, [fetcher]);
  let toggleActive = (0, import_react6.useCallback)(() => setActive((active2) => !active2), []), handleExportedAction = (0, import_react6.useCallback)(
    () => console.log("Exported action"),
    []
  ), activator = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris4.Button, { onClick: toggleActive, disclosure: !0, children: "More actions" }, void 0, !1, {
    fileName: "app/routes/app.metaobject.$type.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_polaris3.Page,
    {
      backAction: { content: "Products", url: "/app/metaobjects" },
      title: definitionType,
      subtitle: "Definition",
      compactTitle: !0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { gap: "3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        MetaObjects_default,
        {
          edges,
          pageInfo,
          type,
          onSearch,
          loading
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.metaobject.$type.tsx",
          lineNumber: 102,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/app.metaobject.$type.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.metaobject.$type.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.metaobject.$type.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.metaobject.$type.tsx",
        lineNumber: 98,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.metaobject.$type.tsx",
      lineNumber: 92,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.site-map.$handle.tsx
var app_site_map_handle_exports = {};
__export(app_site_map_handle_exports, {
  action: () => action2,
  default: () => SiteMetaPage,
  links: () => links,
  loader: () => loader4
});
var import_node7 = require("@remix-run/node"), import_react31 = require("@remix-run/react"), import_polaris30 = require("@shopify/polaris"), _16 = __toESM(require("lodash")), import_react32 = require("react");

// app/components/Form/SaveAppBar.tsx
var import_polaris5 = require("@shopify/polaris"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), SaveAppBar = ({ saveAction, discardAction, loading = !1 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { height: "0px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  import_polaris5.Frame,
  {
    logo: {
      width: 124,
      contextualSaveBarSource: "https://res.cloudinary.com/oves/image/upload/v1657359850/logos/oves_logo_words_h50_w3axpd.png"
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris5.ContextualSaveBar,
      {
        message: "Unsaved changes",
        saveAction: {
          onAction: saveAction,
          loading,
          disabled: !1
        },
        discardAction: {
          onAction: discardAction
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SaveAppBar.tsx",
        lineNumber: 13,
        columnNumber: 9
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Form/SaveAppBar.tsx",
    lineNumber: 6,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Form/SaveAppBar.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), SaveAppBar_default = SaveAppBar;

// app/graphql/metaobjects/metaobjectQuery.ts
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
async function useStorefrontFetch(queryOrMutation) {
  let url = `https://${process.env.STOREFRONT}/api/2023-04/graphql.json`;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json"), myHeaders.append("X-Shopify-Api-Version", "2023-04"), myHeaders.append("Cache-Control", "no-store, no-cache, must-revalidate"), myHeaders.append("Access-Control-Allow-Origin", "*"), myHeaders.append(
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

// app/utils/metaobjects.ts
var _4 = __toESM(require("lodash"));
function parseJSON(str) {
  if (str)
    try {
      return JSON.parse(str);
    } catch {
      return {};
    }
  return {};
}
function parseJSONWithData(str, key = "data") {
  return _4.get(parseJSON(str), key);
}
var getFieldData = (obj) => JSON.stringify({
  data: obj
}), createFieldValue = (key, obj) => ({
  key,
  value: _4.get(obj, key)
}), findNode = (data, key) => _4.find(data, (item) => {
  if (_4.get(item, "key") === key || _4.get(item, "type") === key)
    return !0;
});
var findFieldsNode = (data, key) => findNode(_4.get(data, "fields"), key), findValueFromFields = (data, key) => _4.get(findFieldsNode(data, key), "value"), getSiteMetadataFieldData = (metaobject, field) => parseJSONWithData(findValueFromFields(metaobject, field));

// app/graphql/metaobjects/itemDefinationMutation.ts
var createItemDefinitionVariables = ({ id, handle, fields }) => ({
  id,
  input: {
    handle,
    capabilities: {
      publishable: {
        status: "ACTIVE"
      }
    },
    fields
  }
}), updateItemDefinitionMutation = async ({ graphql, variables }) => (await graphql(query3, {
  variables
})).json(), query3 = `
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

// app/components/Form/SiteMap/MetaForm.tsx
var import_polaris6 = require("@shopify/polaris"), import_react7 = require("react");
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), MDEditor = (0, import_react7.lazy)(() => import("@uiw/react-md-editor")), MetaForm = ({ formik }) => {
  var _a2, _b, _c, _d, _e, _f, _g;
  let { values, errors } = formik;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_polaris6.TextField,
      {
        label: "Title",
        name: "meta.title",
        value: (_a2 = values.meta) == null ? void 0 : _a2.title,
        onChange: (value) => {
          formik.setFieldValue("meta.title", value);
        },
        autoComplete: "off",
        error: get2(errors, "meta.title")
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_polaris6.TextField,
      {
        label: "URL",
        name: "meta.url",
        value: (_b = values.meta) == null ? void 0 : _b.url,
        onChange: (value) => {
          formik.setFieldValue("meta.url", value);
        },
        autoComplete: "off",
        error: get2(errors, "meta.url")
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_polaris6.TextField,
      {
        label: "Logo",
        name: "meta.logo",
        value: (_c = values.meta) == null ? void 0 : _c.logo,
        onChange: (value) => {
          formik.setFieldValue("meta.logo", value);
        },
        autoComplete: "off",
        error: get2(errors, "meta.logo")
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 39,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_polaris6.TextField,
      {
        label: "Tagline",
        name: "meta.tagline",
        value: (_d = values.meta) == null ? void 0 : _d.tagline,
        onChange: (value) => {
          formik.setFieldValue("meta.tagline", value);
        },
        autoComplete: "off",
        error: get2(errors, "meta.tagline")
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_polaris6.TextField,
      {
        label: "Favicon",
        name: "meta.favicon",
        value: (_e = values.meta) == null ? void 0 : _e.favicon,
        onChange: (value) => {
          formik.setFieldValue("meta.favicon", value);
        },
        autoComplete: "off",
        error: get2(errors, "meta.favicon")
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_polaris6.TextField,
      {
        label: "Copyright",
        name: "meta.copyright",
        value: (_f = values.meta) == null ? void 0 : _f.copyright,
        onChange: (value) => {
          formik.setFieldValue("meta.copyright", value);
        },
        autoComplete: "off",
        error: get2(errors, "meta.copyright")
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 72,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_polaris6.TextField,
      {
        label: "Keywords",
        name: "meta.keywords",
        value: (_g = values.meta) == null ? void 0 : _g.keywords,
        onChange: (value) => {
          formik.setFieldValue("meta.keywords", value);
        },
        autoComplete: "off",
        error: get2(errors, "meta.keywords")
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Await, { resolve: get2(values, "meta.about"), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: "About" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 98,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { padding: "1" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { "data-color-mode": "light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          MDEditor,
          {
            value: value != null && value.includes("children") ? toHTML(value) : value,
            name: "meta.about",
            onChange: (e) => {
              formik.setFieldValue("meta.about", e);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/SiteMap/MetaForm.tsx",
            lineNumber: 101,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/MetaForm.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 100,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris6.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Form/SiteMap/MetaForm.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, MetaForm_default = MetaForm;

// node_modules/@uiw/react-md-editor/markdown-editor.css
var markdown_editor_default = "/build/_assets/markdown-editor-Y42RWBS4.css";

// node_modules/@uiw/react-markdown-preview/markdown.css
var markdown_default = "/build/_assets/markdown-VPXFE4SC.css";

// app/routes/app.site-map.$handle.tsx
var import_formik = require("formik");

// app/components/Form/SiteMap/HeaderFrom.tsx
var import_polaris7 = require("@shopify/polaris"), import_react9 = require("react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), HeaderFrom = ({ formik }) => {
  var _a2, _b, _c;
  let { values, errors } = formik, inputs = (0, import_react9.useMemo)(
    () => [
      {
        label: "Logo",
        value: get2(values, "header.logo"),
        error: get2(errors, "header.logo"),
        type: "text",
        name: "header.logo"
      },
      {
        label: "Search",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" }
        ],
        error: get2(errors, "header.search"),
        name: "header.search",
        type: "choice",
        value: get2(values, "header.search")
      },
      {
        label: "Login",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" }
        ],
        error: get2(errors, "header.login"),
        name: "header.login",
        type: "choice",
        value: get2(values, "header.login")
      }
    ],
    []
  ), choices = [
    { label: "True", value: "true" },
    { label: "False", value: "false" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris7.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_polaris7.TextField,
      {
        label: "Logo",
        name: "header.logo",
        value: (_a2 = get2(values, "header.logo")) == null ? void 0 : _a2.toString(),
        onChange: (value) => {
          formik.setFieldValue("header.logo", value);
        },
        autoComplete: "off",
        error: get2(errors, "header.logo")
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris7.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_polaris7.ChoiceList,
      {
        title: "Search",
        choices,
        selected: [(_b = get2(values, "header.search")) == null ? void 0 : _b.toString()],
        onChange: (e) => {
          formik.setFieldValue("header.search", e);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
        lineNumber: 59,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris7.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_polaris7.ChoiceList,
      {
        title: "Login",
        choices,
        selected: [(_c = get2(values, "header.login")) == null ? void 0 : _c.toString()],
        onChange: (e) => {
          formik.setFieldValue("header.login", e);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
        lineNumber: 68,
        columnNumber: 8
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris7.Box, { padding: "2" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}, HeaderFrom_default = HeaderFrom;

// app/components/Form/SiteMap/FooterForm.tsx
var import_polaris8 = require("@shopify/polaris"), import_react10 = require("react");
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), MDEditor2 = (0, import_react10.lazy)(() => import("@uiw/react-md-editor")), FooterForm = ({ formik }) => {
  let { values, errors } = formik;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris8.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Await, { resolve: get2(values, "footer.widget_1", ""), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: "Widget 1" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 16,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris8.Box, { padding: "1" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 17,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { "data-color-mode": "light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          MDEditor2,
          {
            value: value != null && value.includes("children") ? toHTML(value) : value,
            name: "footer.widget_1",
            onChange: (e) => {
              formik.setFieldValue("footer.widget_1", e);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/SiteMap/FooterForm.tsx",
            lineNumber: 19,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris8.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 26,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 18,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Await, { resolve: get2(values, "footer.widget_2", ""), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: "Widget 2" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris8.Box, { padding: "1" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { "data-color-mode": "light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          MDEditor2,
          {
            value: value != null && value.includes("children") ? toHTML(value) : value,
            name: "footer.widget_2",
            onChange: (e) => {
              formik.setFieldValue("footer.widget_2", e);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/SiteMap/FooterForm.tsx",
            lineNumber: 39,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris8.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Await, { resolve: get2(values, "footer.widget_3", ""), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: "Widget 3" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris8.Box, { padding: "1" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 57,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { "data-color-mode": "light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          MDEditor2,
          {
            value: value != null && value.includes("children") ? toHTML(value) : value,
            name: "footer.widget_3",
            onChange: (e) => {
              formik.setFieldValue("footer.widget_3", e);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/SiteMap/FooterForm.tsx",
            lineNumber: 59,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris8.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Await, { resolve: get2(values, "footer.widget_4", ""), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: "Widget 4" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris8.Box, { padding: "1" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { "data-color-mode": "light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          MDEditor2,
          {
            value: value != null && value.includes("children") ? toHTML(value) : value,
            name: "footer.widget_4",
            onChange: (e) => {
              formik.setFieldValue("footer.widget_4", e);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/SiteMap/FooterForm.tsx",
            lineNumber: 79,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris8.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Form/SiteMap/FooterForm.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}, FooterForm_default = FooterForm;

// app/components/Tables/PageMetaObject.tsx
var import_polaris19 = require("@shopify/polaris");
var import_react20 = require("react");

// app/components/Icons/DeleteIcon.tsx
var import_polaris9 = require("@shopify/polaris"), import_polaris_icons = require("@shopify/polaris-icons"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function DeleteIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris9.Icon, { source: import_polaris_icons.DeleteMajor }, void 0, !1, {
    fileName: "app/components/Icons/DeleteIcon.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
var DeleteIcon_default = DeleteIcon;

// app/components/Icons/EditIcon.tsx
var import_polaris_icons2 = require("@shopify/polaris-icons"), import_polaris10 = require("@shopify/polaris"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function EditIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris10.Icon, { source: import_polaris_icons2.EditMajor }, void 0, !1, {
    fileName: "app/components/Icons/EditIcon.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
var EditIcon_default = EditIcon;

// app/components/Tables/PageMetaObject.tsx
var import_react_sortable_hoc3 = require("react-sortable-hoc"), _8 = __toESM(require("lodash"));

// app/components/Sorting/DragHandle.tsx
var import_react_sortable_hoc = require("react-sortable-hoc");

// app/components/Icons/DragIcon.tsx
var import_polaris11 = require("@shopify/polaris"), import_polaris_icons3 = require("@shopify/polaris-icons"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function DragIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris11.Icon, { source: import_polaris_icons3.DragDropMajor }, void 0, !1, {
    fileName: "app/components/Icons/DragIcon.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
var DragIcon_default = DragIcon;

// app/components/Sorting/DragHandle.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), DragHandle = (0, import_react_sortable_hoc.SortableHandle)(() => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DragIcon_default, {}, void 0, !1, {
  fileName: "app/components/Sorting/DragHandle.tsx",
  lineNumber: 4,
  columnNumber: 41
}, this)), DragHandle_default = DragHandle;

// app/components/Form/SiteMap/PageEditor/PageForm.tsx
var import_polaris18 = require("@shopify/polaris"), import_react19 = require("react"), _7 = __toESM(require("lodash"));

// app/components/Form/SiteMap/PageEditor/SectionForm.tsx
var import_polaris16 = require("@shopify/polaris"), import_react17 = require("react"), import_polaris_icons5 = require("@shopify/polaris-icons");

// app/components/Tables/BlocksMetaobject.tsx
var import_polaris15 = require("@shopify/polaris");
var import_react15 = require("react");

// app/components/Icons/SearchIcon.tsx
var import_polaris_icons4 = require("@shopify/polaris-icons"), import_polaris12 = require("@shopify/polaris"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function SearchIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_polaris12.Icon, { source: import_polaris_icons4.SearchMajor }, void 0, !1, {
    fileName: "app/components/Icons/SearchIcon.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
var SearchIcon_default = SearchIcon;

// app/components/Tables/BlocksMetaobject.tsx
var import_react_sortable_hoc2 = require("react-sortable-hoc"), _6 = __toESM(require("lodash"));

// app/components/Form/SiteMap/PageEditor/BlockForm.tsx
var import_polaris14 = require("@shopify/polaris"), import_react13 = require("react");
var _5 = __toESM(require("lodash"));

// app/components/Form/Fields/TagSearchField.tsx
var import_polaris13 = require("@shopify/polaris"), import_react12 = require("react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), validateOption = (options) => map2(options, (option) => ({
  label: (option == null ? void 0 : option.label) || (option == null ? void 0 : option.name),
  value: (option == null ? void 0 : option.value) || (option == null ? void 0 : option.id)
})) || [];
function TagSearchField({
  options: _options,
  selectedOptions: _selected,
  placeholder = "Search collections...",
  handleChangeCollection,
  label
}) {
  let deselectedOptions = (0, import_react12.useMemo)(
    () => validateOption(_options) || [],
    [_options]
  ), [selectedOptions, setSelectedOptions] = (0, import_react12.useState)(
    map2(validateOption(_selected), (it) => it.value)
  ), handleSetSelection = (0, import_react12.useCallback)((e) => {
    setSelectedOptions(e);
    let _collections = [];
    map2(e, (id) => {
      let col = find2(validateOption(_options), {
        value: id
      });
      col && _collections.push(col);
    }), handleChangeCollection(_collections);
  }, []), [inputValue, setInputValue] = (0, import_react12.useState)(""), [options, setOptions] = (0, import_react12.useState)(deselectedOptions), updateText = (0, import_react12.useCallback)(
    (value) => {
      if (setInputValue(value), value === "") {
        setOptions(deselectedOptions);
        return;
      }
      let filterRegex = new RegExp(value, "i"), resultOptions = deselectedOptions == null ? void 0 : deselectedOptions.filter(
        (option) => {
          var _a2;
          return (_a2 = option == null ? void 0 : option.label) == null ? void 0 : _a2.match(filterRegex);
        }
      );
      setOptions(resultOptions);
    },
    [deselectedOptions]
  ), removeTag = (0, import_react12.useCallback)(
    (tag) => () => {
      let options2 = [...selectedOptions];
      options2.splice(options2 == null ? void 0 : options2.indexOf(tag), 1), setSelectedOptions(options2), handleChangeCollection(options2);
    },
    [selectedOptions]
  ), verticalContentMarkup = selectedOptions.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris13.LegacyStack, { spacing: "extraTight", alignment: "center", children: selectedOptions == null ? void 0 : selectedOptions.map((option) => {
    let tagLabel = "";
    tagLabel = option == null ? void 0 : option.replace("_", " "), tagLabel = titleCase2(tagLabel);
    let item = find2(deselectedOptions, { value: option });
    return item && (tagLabel = item == null ? void 0 : item.label), selectedOptions != null && selectedOptions.includes(tagLabel) ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris13.Tag, { onRemove: removeTag(option), children: tagLabel }, `option${option}`, !1, {
      fileName: "app/components/Form/Fields/TagSearchField.tsx",
      lineNumber: 90,
      columnNumber: 13
    }, this);
  }) }, void 0, !1, {
    fileName: "app/components/Form/Fields/TagSearchField.tsx",
    lineNumber: 77,
    columnNumber: 7
  }, this) : null, textField = /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_polaris13.Autocomplete.TextField,
    {
      onChange: updateText,
      label,
      value: inputValue,
      placeholder,
      verticalContent: verticalContentMarkup,
      autoComplete: "off"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Fields/TagSearchField.tsx",
      lineNumber: 99,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { height: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_polaris13.Autocomplete,
    {
      allowMultiple: !0,
      options,
      selected: selectedOptions,
      textField,
      onSelect: handleSetSelection,
      listTitle: "Suggested collections"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Fields/TagSearchField.tsx",
      lineNumber: 111,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Form/Fields/TagSearchField.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
  function titleCase2(string) {
    var _a2, _b;
    return (_b = (_a2 = string == null ? void 0 : string.toLowerCase()) == null ? void 0 : _a2.split(" ")) == null ? void 0 : _b.map((word) => {
      var _a3;
      return word == null ? void 0 : word.replace(word[0], (_a3 = word[0]) == null ? void 0 : _a3.toUpperCase());
    }).join("");
  }
}
var TagSearchField_default = TagSearchField;

// app/components/Form/SiteMap/PageEditor/BlockForm.tsx
var import_react14 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), MDEditor3 = (0, import_react13.lazy)(() => import("@uiw/react-md-editor")), BlockForm = ({
  pageIndex,
  sectionIndex,
  block,
  collections,
  activatorRef,
  modalTitle,
  activatorTitle,
  onsubmit,
  blocks,
  formik
}) => {
  let errors = {}, [active, setActive] = (0, import_react13.useState)(!1), handleChange = (0, import_react13.useCallback)(() => setActive(!active), [active]), handleClose = (0, import_react13.useCallback)(() => {
    setActive(!1);
  }, []), handleOpen = (0, import_react13.useCallback)(() => setActive(!0), []), section = `pages[${pageIndex}].sections[${sectionIndex}]`, blockIndex = _5.findIndex(blocks, {
    id: block == null ? void 0 : block.id
  }), fieldName = `${section}.blocks[${blockIndex}]`, [style, setStyle] = (0, import_react13.useState)(get2(block, "style", "hero")), handleChangeStyle = (0, import_react13.useCallback)((value) => setStyle(value), []), [title, setTitle] = (0, import_react13.useState)(get2(block, "title")), handleChangeTitle = (0, import_react13.useCallback)((value) => setTitle(value), []), [media, setMedia] = (0, import_react13.useState)(get2(block, "media")), handleChangeMedia = (0, import_react13.useCallback)((value) => setMedia(value), []), [ctaLabel, setctaLabel] = (0, import_react13.useState)(get2(block, "ctaLabel")), handleChangectaLabel = (0, import_react13.useCallback)((value) => setctaLabel(value), []), [ctaLink, setctaLink] = (0, import_react13.useState)(get2(block, "ctaLink")), handleChangectaLink = (0, import_react13.useCallback)((value) => setctaLink(value), []), [text, setText] = (0, import_react13.useState)(get2(block, "text")), handleChangeText = (0, import_react13.useCallback)((value) => setText(value), []), [collection, setCollection] = (0, import_react13.useState)(get2(block, "collections", [])), handleChangeCollection = (0, import_react13.useCallback)((value) => {
    setCollection(value);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { style: { height: 0, display: "none" }, ref: activatorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Button, { onClick: handleOpen, children: "~" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      import_polaris14.Modal,
      {
        activator: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Button, { size: "micro", onClick: handleChange, children: activatorTitle }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
          lineNumber: 73,
          columnNumber: 5
        }, this),
        large: !0,
        open: active,
        onClose: handleClose,
        title: modalTitle,
        primaryAction: {
          content: "Ok",
          onAction: () => {
            let data = {
              style,
              title,
              media,
              ctaLabel,
              ctaLink,
              text,
              collections: collection,
              id: get2(block, "id")
            };
            onsubmit(data), handleClose();
          }
        },
        secondaryActions: [
          {
            content: "Cancel",
            onAction: handleClose
          }
        ],
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_polaris14.Select,
            {
              label: "Style",
              options: [
                { label: "Hero", value: "hero" },
                { label: "Text Image", value: "text_image" },
                { label: "Image Text", value: "image_text" },
                { label: "Page Banner", value: "page_banner" },
                { label: "Articles", value: "articles" },
                { label: "Products", value: "products" },
                { label: "FAQs", value: "q&a" },
                { label: "Features", value: "features" },
                { label: "Teams", value: "teams" }
              ],
              onChange: (e) => {
                handleChangeStyle(e);
              },
              value: style,
              error: get2(errors, `${fieldName}.style`)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
              lineNumber: 102,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_polaris14.TextField,
            {
              label: "Title",
              value: title,
              name: `${fieldName}.title`,
              onChange: (e) => {
                handleChangeTitle(e);
              },
              autoComplete: "off",
              error: get2(errors, `${fieldName}.title`)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
              lineNumber: 121,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Box, { padding: "2" }, void 0, !1, {
            fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
            lineNumber: 131,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_polaris14.TextField,
            {
              label: "Media",
              value: media,
              name: `${fieldName}.media`,
              onChange: (e) => {
                handleChangeMedia(e);
              },
              autoComplete: "off",
              error: get2(errors, `${fieldName}.media`)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
              lineNumber: 132,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Box, { padding: "2" }, void 0, !1, {
            fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_polaris14.TextField,
            {
              label: "ctaLabel",
              value: ctaLabel,
              name: `${fieldName}.ctaLabel`,
              onChange: (e) => {
                handleChangectaLabel(e);
              },
              autoComplete: "off",
              error: get2(errors, `${fieldName}.ctaLabel`)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
              lineNumber: 143,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Box, { padding: "2" }, void 0, !1, {
            fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
            lineNumber: 153,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_polaris14.TextField,
            {
              label: "ctaLink",
              value: ctaLink,
              name: `${fieldName}.ctaLink`,
              onChange: (e) => {
                handleChangectaLink(e);
              },
              autoComplete: "off",
              error: get2(errors, `${fieldName}.ctaLink`)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
              lineNumber: 154,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Box, { padding: "2" }, void 0, !1, {
            fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
            lineNumber: 164,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react13.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.Await, { resolve: text, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { children: "Text" }, void 0, !1, {
              fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
              lineNumber: 169,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Box, { padding: "1" }, void 0, !1, {
              fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { "data-color-mode": "light", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                MDEditor3,
                {
                  value: value != null && value.includes("children") ? toHTML(value) : value,
                  name: `${fieldName}.text`,
                  onChange: (e) => {
                    handleChangeText(e);
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
                  lineNumber: 172,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Box, { padding: "2" }, void 0, !1, {
                fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
                lineNumber: 181,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
            lineNumber: 168,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
            lineNumber: 165,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris14.Box, { padding: "2" }, void 0, !1, {
            fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
            lineNumber: 187,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            TagSearchField_default,
            {
              label: "Collections",
              options: _5.map(
                _5.get(formik, "values.product_collections", []),
                (it) => ({
                  value: _5.get(it, "id"),
                  label: _5.get(it, "name"),
                  id: _5.get(it, "id"),
                  name: _5.get(it, "name")
                })
              ),
              selectedOptions: collection,
              handleChangeCollection
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
              lineNumber: 188,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}, BlockForm_default = BlockForm;

// app/components/Tables/BlocksMetaobject.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), import_react16 = require("react"), BlocksMetaobject = ({
  blocks,
  loading: isLoading,
  onEdit,
  fetcher,
  onRemove,
  handleItemChange,
  formik,
  handleSwap,
  sectionIndex,
  pageIndex,
  handleSetBlocks,
  ...rest
}) => {
  let resourceName = {
    singular: "block",
    plural: "blocks"
  }, activatorRef = (0, import_react15.useRef)(null), activatorRefAdd = (0, import_react15.useRef)(null), remove = (id) => {
    handleSetBlocks(blocks == null ? void 0 : blocks.filter((b) => (b == null ? void 0 : b.id) != id));
  }, add2 = (block) => {
    let id = numberGenerator();
    handleSetBlocks([{ ...block, id }, ...blocks]);
  }, edit = (block) => {
    let index = _6.findIndex(blocks, (_item) => (_item == null ? void 0 : _item.id) == block.id), otherItems = [...blocks];
    otherItems[index] = block, logger(index), logger(block), handleSetBlocks(otherItems);
  }, SortableItem = (0, import_react_sortable_hoc2.sortableElement)((block, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_polaris15.IndexTable.Row,
    {
      id: get2(block, "id"),
      position: index,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris15.IndexTable.Cell, { className: "draggable-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris15.ButtonGroup, { segmented: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris15.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DragHandle_default, {}, void 0, !1, {
            fileName: "app/components/Tables/BlocksMetaobject.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/BlocksMetaobject.tsx",
            lineNumber: 73,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            import_polaris15.Button,
            {
              size: "micro",
              onClick: () => {
                remove(get2(block, "id"));
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DeleteIcon_default, {}, void 0, !1, {
                fileName: "app/components/Tables/BlocksMetaobject.tsx",
                lineNumber: 82,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/BlocksMetaobject.tsx",
              lineNumber: 76,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris15.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SearchIcon_default, {}, void 0, !1, {
            fileName: "app/components/Tables/BlocksMetaobject.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/BlocksMetaobject.tsx",
            lineNumber: 84,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            BlockForm_default,
            {
              activatorRef,
              activatorTitle: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(EditIcon_default, {}, void 0, !1, {
                fileName: "app/components/Tables/BlocksMetaobject.tsx",
                lineNumber: 90,
                columnNumber: 29
              }, this),
              modalTitle: "Block",
              pageIndex,
              sectionIndex,
              block,
              blocks,
              onsubmit: edit,
              formik,
              ...rest
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/BlocksMetaobject.tsx",
              lineNumber: 88,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Tables/BlocksMetaobject.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Tables/BlocksMetaobject.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris15.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_polaris15.Thumbnail,
          {
            source: get2(
              block,
              "media",
              "https://placehold.co/600x400/000000/FFFFFF/png"
            ),
            size: "small",
            alt: "Black choker necklace"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Tables/BlocksMetaobject.tsx",
            lineNumber: 103,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Tables/BlocksMetaobject.tsx",
          lineNumber: 102,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris15.IndexTable.Cell, { children: get2(block, "style") }, void 0, !1, {
          fileName: "app/components/Tables/BlocksMetaobject.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris15.IndexTable.Cell, { children: get2(block, "ctaLabel") }, void 0, !1, {
          fileName: "app/components/Tables/BlocksMetaobject.tsx",
          lineNumber: 114,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris15.IndexTable.Cell, { children: get2(block, "ctaLink") }, void 0, !1, {
          fileName: "app/components/Tables/BlocksMetaobject.tsx",
          lineNumber: 115,
          columnNumber: 7
        }, this)
      ]
    },
    `${index}-${get2(block, "id")}-${get2(block, "name")}`,
    !0,
    {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 66,
      columnNumber: 5
    },
    this
  )), SortableContainer = (0, import_react_sortable_hoc2.sortableContainer)(
    ({ children, helperClass = "draggable-item" }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      import_polaris15.IndexTable,
      {
        resourceName,
        itemCount: (blocks == null ? void 0 : blocks.length) || 0,
        selectable: !1,
        headings: [
          { title: "" },
          { title: "media" },
          { title: "style" },
          { title: "ctaLabel" },
          { title: "ctaLink" }
        ],
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/Tables/BlocksMetaobject.tsx",
        lineNumber: 121,
        columnNumber: 9
      },
      this
    )
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris15.LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris15.VerticalStack, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SortableContainer, { onSortEnd: ({ oldIndex, newIndex }) => {
      let __blocks = (0, import_react_sortable_hoc2.arrayMove)(blocks, oldIndex, newIndex);
      handleSetBlocks(__blocks);
    }, useDragHandle: !0, children: _6.map(blocks, (value, index) => /* @__PURE__ */ (0, import_react16.createElement)(
      SortableItem,
      {
        key: `item-${get2(value, "id")}-${numberGenerator()}`,
        index,
        ...value,
        key: index
      }
    )) }, void 0, !1, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 147,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { padding: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      BlockForm_default,
      {
        activatorRef: activatorRefAdd,
        activatorTitle: "Add block",
        modalTitle: "Block",
        pageIndex,
        sectionIndex,
        onsubmit: add2,
        formik,
        ...rest
      },
      void 0,
      !1,
      {
        fileName: "app/components/Tables/BlocksMetaobject.tsx",
        lineNumber: 157,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/BlocksMetaobject.tsx",
    lineNumber: 146,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Tables/BlocksMetaobject.tsx",
    lineNumber: 145,
    columnNumber: 5
  }, this);
}, BlocksMetaobject_default = BlocksMetaobject;

// app/components/Form/SiteMap/PageEditor/SectionForm.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function SectionForm({
  sectionIndex,
  section,
  formik,
  handleSetPage,
  page,
  pageIndex,
  ...rest
}) {
  let [open, setOpen] = (0, import_react17.useState)(sectionIndex == 0), handleToggle = (0, import_react17.useCallback)(() => setOpen((open2) => !open2), []), [blocks, setBlocks] = (0, import_react17.useState)(
    get2(page, `sections[${sectionIndex}].blocks`, [])
  ), handleSetBlocks = (0, import_react17.useCallback)((value) => {
    setBlocks(value);
    let _page = { ...page };
    _page.sections[sectionIndex].blocks = value;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_polaris16.LegacyCard, { sectioned: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_polaris16.LegacyStack, { vertical: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            import_polaris16.Button,
            {
              size: "micro",
              onClick: handleToggle,
              ariaExpanded: open,
              ariaControls: "basic-collapsible",
              children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_polaris16.Icon, { source: import_polaris_icons5.ChevronDownMinor, color: "base" }, void 0, !1, {
                fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
                lineNumber: 57,
                columnNumber: 17
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_polaris16.Icon, { source: import_polaris_icons5.ChevronRightMinor, color: "base" }, void 0, !1, {
                fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
                lineNumber: 55,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
              lineNumber: 48,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_polaris16.Text, { variant: "headingMd", as: "h6", children: [
            "Section ",
            sectionIndex + 1
          ] }, void 0, !0, {
            fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            import_polaris16.Button,
            {
              size: "micro",
              onClick: () => {
                var _a2;
                handleSetPage({
                  ...page,
                  sections: (_a2 = get2(page, "sections")) == null ? void 0 : _a2.filter(
                    (it) => (it == null ? void 0 : it.id) !== (section == null ? void 0 : section.id)
                  )
                });
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(DeleteIcon_default, {}, void 0, !1, {
                fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
                lineNumber: 76,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
              lineNumber: 65,
              columnNumber: 13
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
        lineNumber: 41,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      import_polaris16.Collapsible,
      {
        open,
        id: "basic-collapsible",
        transition: { duration: "500ms", timingFunction: "ease-in-out" },
        expandOnPrint: !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          BlocksMetaobject_default,
          {
            blocks: blocks || [],
            sectionIndex,
            pageIndex,
            formik,
            handleSetBlocks,
            ...rest
          },
          `page-section-${sectionIndex}-${get2(section, "id")}`,
          !1,
          {
            fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
            lineNumber: 87,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
        lineNumber: 80,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
var SectionForm_default = SectionForm;

// app/utils/useToast.tsx
var import_polaris17 = require("@shopify/polaris"), import_react18 = require("react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function useToast() {
  let [active, setActive] = (0, import_react18.useState)(!1), [message, setMessage] = (0, import_react18.useState)("Success"), [error, setError] = (0, import_react18.useState)(!1), handleSetMessage = (0, import_react18.useCallback)((value) => setMessage(value), []), toggleActive = (0, import_react18.useCallback)(() => setActive((active2) => !active2), []), showToast = (0, import_react18.useCallback)((message2, _error = !1) => {
    handleSetMessage(message2), _error && setError(!0), toggleActive();
  }, []);
  return {
    toastMarkup: active ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_polaris17.Toast,
      {
        content: message,
        error,
        onDismiss: toggleActive,
        duration: 4500
      },
      void 0,
      !1,
      {
        fileName: "app/utils/useToast.tsx",
        lineNumber: 19,
        columnNumber: 5
      },
      this
    ) : null,
    active,
    setActive,
    showToast
  };
}

// app/components/Form/SiteMap/PageEditor/PageForm.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), PageForm = ({
  page: _page,
  activatorRef,
  formik,
  pageIndex,
  _collections,
  onSubmit,
  activatorElement,
  ...rest
}) => {
  let [active, setActive] = (0, import_react19.useState)(!1), [errors, setErrors] = (0, import_react19.useState)({}), handleSetErrors = (0, import_react19.useCallback)((value) => setErrors(value), []), handleOpen = (0, import_react19.useCallback)(() => setActive(!0), []), [page, setPage] = (0, import_react19.useState)(_page), handleSetPage = (value) => setPage(value), { toastMarkup, showToast } = useToast(), handleChangeStyle = (0, import_react19.useCallback)(
    (value) => {
      setPage({ ...page, style: value });
    },
    [page]
  ), handleClose = (0, import_react19.useCallback)(() => {
    setActive(!1);
  }, []), handleSubmit = () => {
    if (handleSetErrors({}), get2(page, "handle") || handleSetErrors({ ...errors, handle: FIELD_REQUIRED }), get2(page, "name") || handleSetErrors({ ...errors, name: FIELD_REQUIRED }), get2(page, "title") || handleSetErrors({ ...errors, title: FIELD_REQUIRED }), get2(page, "style") || handleSetErrors({ ...errors, style: FIELD_REQUIRED }), !_7.isEmpty(Object.keys(errors))) {
      logger(errors, "errors");
      return;
    }
    page != null && page.handle && (onSubmit({ ...page, id: numberGenerator() }, pageIndex), handleClose());
  }, collections = (0, import_react19.useMemo)(() => _collections, [rest]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { style: {}, id: `${page == null ? void 0 : page.id}-page-button`, ref: activatorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_polaris18.Button, { size: "micro", onClick: handleOpen, children: activatorElement }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_polaris18.Modal,
      {
        large: !0,
        open: active,
        onClose: handleClose,
        title: get2(page, "name", "New Page") || "New Page",
        primaryAction: {
          content: "Ok",
          onAction: handleSubmit,
          loading: !1
        },
        secondaryActions: [
          {
            content: "Cancel",
            onAction: handleClose
          }
        ],
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_polaris18.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_polaris18.Box, { children: [
          toastMarkup,
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_polaris18.TextField,
            {
              label: "Name",
              value: get2(page, "name"),
              error: get2(errors, "name"),
              onChange: (e) => {
                handleSetPage({ ...page, name: e });
              },
              autoComplete: "off"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
              lineNumber: 103,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_polaris18.TextField,
            {
              label: "Title",
              value: get2(page, "title"),
              error: get2(errors, "title"),
              onChange: (e) => {
                handleSetPage({ ...page, title: e });
              },
              onBlur: (e) => {
                var _a2;
                handleSetPage({
                  ...page,
                  handle: slugify(((_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.value) || "")
                });
              },
              autoComplete: "off"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
              lineNumber: 112,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_polaris18.Select,
            {
              label: "Style",
              options: [
                { label: "Dark Header", value: "dark_header" },
                { label: "Light Header", value: "light_header" }
              ],
              onChange: (e) => {
                handleChangeStyle(e);
              },
              value: get2(page, "style", "light_header"),
              error: get2(errors, "style")
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
              lineNumber: 127,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_polaris18.TextField,
            {
              label: "Keywords",
              value: get2(page, "keywords"),
              onChange: (e) => {
                handleSetPage({ ...page, keywords: e });
              },
              autoComplete: "off"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
              lineNumber: 139,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_polaris18.TextField,
            {
              label: "Handle",
              value: get2(page, "handle"),
              error: get2(errors, "handle"),
              onChange: (e) => {
                handleSetPage({ ...page, handle: e });
              },
              autoComplete: "off"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
              lineNumber: 147,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_polaris18.TextField,
            {
              label: "Description",
              value: get2(page, "description"),
              onChange: (e) => {
                handleSetPage({ ...page, description: e });
              },
              multiline: 4,
              autoComplete: "off"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
              lineNumber: 156,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_polaris18.Box, { padding: 2 }, void 0, !1, {
            fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
            lineNumber: 165,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_polaris18.Text, { variant: "headingMd", as: "h6", children: "Sections" }, void 0, !1, {
                  fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
                  lineNumber: 173,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  import_polaris18.Button,
                  {
                    onClick: () => {
                      handleSetPage({
                        ...page,
                        sections: [
                          ...page == null ? void 0 : page.sections,
                          {
                            id: numberGenerator(),
                            blocks: [
                              {
                                id: numberGenerator(),
                                style: "hero",
                                title: "",
                                ctaLabel: "",
                                ctaLink: "",
                                collections: [],
                                text: ""
                              }
                            ]
                          }
                        ]
                      }), showToast("Section added");
                    },
                    size: "micro",
                    children: "Add section"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
                    lineNumber: 177,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
              lineNumber: 166,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: map2(get2(page, "sections"), (section, sectionIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            SectionForm_default,
            {
              section,
              index: sectionIndex,
              formik,
              pageIndex,
              sectionIndex,
              handleSetPage,
              page,
              collections,
              ...rest
            },
            `page-section-${sectionIndex}-${get2(section, "id")}`,
            !1,
            {
              fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
              lineNumber: 209,
              columnNumber: 17
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
            lineNumber: 207,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}, PageForm_default = PageForm;

// app/components/Tables/PageMetaObject.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), PageMetaObject = ({ fetcher, formik }) => {
  let resourceName = {
    singular: "page",
    plural: "pages"
  }, [loading, setLoading] = (0, import_react20.useState)(!1), [collections, setCollections] = (0, import_react20.useState)([]), activatorRef = (0, import_react20.useRef)(null), { values } = formik, { pages } = (0, import_react20.useMemo)(() => values, [values]), onSearchCollections = async (data) => {
    await fetcher.load(
      `/app/search-collections?query=${_8.get(data, "query", "")}&after=${_8.get(
        data,
        "after"
      )}&before=${_8.get(data, "before")}`
    );
  };
  (0, import_react20.useEffect)(() => {
    _8.isEmpty(collections) && fetcher.state !== "loading" && onSearchCollections({});
  }), (0, import_react20.useEffect)(() => {
    if (fetcher.data) {
      let res = _8.map(
        _8.get(fetcher.data, "data.collections.edges"),
        (item) => ({
          value: _8.get(item, "node.id"),
          label: _8.get(item, "node.title")
        })
      );
      setCollections(res || []);
    }
  }, [fetcher.data, loading]), (0, import_react20.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);
  let onRemove = (page) => {
    let pagesCopy = [...pages];
    formik.setFieldValue(
      "pages",
      pagesCopy == null ? void 0 : pagesCopy.filter((it) => _8.get(page, "id") !== get2(it, "id"))
    );
  }, SortableItem = (0, import_react_sortable_hoc3.sortableElement)((page, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    import_polaris19.IndexTable.Row,
    {
      id: get2(page, "id"),
      position: index,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.ButtonGroup, { segmented: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(DragHandle_default, {}, void 0, !1, {
            fileName: "app/components/Tables/PageMetaObject.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/PageMetaObject.tsx",
            lineNumber: 82,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            import_polaris19.Button,
            {
              size: "micro",
              onClick: () => {
                onRemove(page);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(DeleteIcon_default, {}, void 0, !1, {
                fileName: "app/components/Tables/PageMetaObject.tsx",
                lineNumber: 91,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/PageMetaObject.tsx",
              lineNumber: 85,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            PageForm_default,
            {
              pageIndex: _8.findIndex(pages, { id: get2(page, "id") }),
              formik,
              activatorRef,
              activatorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(EditIcon_default, {}, void 0, !1, {
                fileName: "app/components/Tables/PageMetaObject.tsx",
                lineNumber: 98,
                columnNumber: 31
              }, this),
              page,
              onSearchCollections,
              collections,
              loading,
              _collections: collections,
              onSubmit: onEdit
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/PageMetaObject.tsx",
              lineNumber: 94,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Tables/PageMetaObject.tsx",
          lineNumber: 81,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Tables/PageMetaObject.tsx",
          lineNumber: 80,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.IndexTable.Cell, { children: get2(page, "name") }, void 0, !1, {
          fileName: "app/components/Tables/PageMetaObject.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.IndexTable.Cell, { children: get2(page, "title") }, void 0, !1, {
          fileName: "app/components/Tables/PageMetaObject.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.IndexTable.Cell, { children: get2(page, "style") }, void 0, !1, {
          fileName: "app/components/Tables/PageMetaObject.tsx",
          lineNumber: 111,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.IndexTable.Cell, { children: get2(page, "handle") }, void 0, !1, {
          fileName: "app/components/Tables/PageMetaObject.tsx",
          lineNumber: 112,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.IndexTable.Cell, { children: get2(page, "sections.length") }, void 0, !1, {
          fileName: "app/components/Tables/PageMetaObject.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this)
      ]
    },
    `${index}-${get2(page, "id")}-${get2(page, "name")}`,
    !0,
    {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 75,
      columnNumber: 5
    },
    this
  )), SortableContainer = (0, import_react_sortable_hoc3.sortableContainer)(({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    import_polaris19.IndexTable,
    {
      resourceName,
      itemCount: (pages == null ? void 0 : pages.length) || 0,
      selectable: !1,
      headings: [
        { title: "" },
        { title: "name" },
        { title: "Title" },
        { title: "style" },
        { title: "Handle" },
        { title: "Sections" }
      ],
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 118,
      columnNumber: 7
    },
    this
  )), onAdd = (page, pageIndex) => {
    formik.setFieldValue("pages", [page, ...pages]);
  }, onEdit = (page, pageIndex) => {
    formik.setFieldValue(`pages[${pageIndex}]`, page);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.Text, { variant: "headingMd", as: "h6" }, void 0, !1, {
            fileName: "app/components/Tables/PageMetaObject.tsx",
            lineNumber: 157,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            PageForm_default,
            {
              pageIndex: -1,
              formik,
              activatorRef,
              activatorElement: "Add Page",
              page: {
                id: "",
                name: "",
                style: "light_header",
                title: "",
                description: "",
                keywords: "",
                handle: "",
                sections: []
              },
              onSearchCollections,
              collections,
              loading,
              _collections: collections,
              onSubmit: onAdd
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/PageMetaObject.tsx",
              lineNumber: 161,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Tables/PageMetaObject.tsx",
        lineNumber: 150,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.Box, { padding: 2 }, void 0, !1, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris19.VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(SortableContainer, { onSortEnd: ({ oldIndex, newIndex }) => {
      let _items = (0, import_react_sortable_hoc3.arrayMove)(pages, oldIndex, newIndex);
      formik.setFieldValue("pages", _items);
    }, useDragHandle: !0, children: _8.map(pages, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      SortableItem,
      {
        index,
        ...value
      },
      `item-${get2(value, "id")}-${numberGenerator()}`,
      !1,
      {
        fileName: "app/components/Tables/PageMetaObject.tsx",
        lineNumber: 188,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 186,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/PageMetaObject.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}, PageMetaObject_default = PageMetaObject;

// app/components/Views/styles.css
var styles_default = "/build/_assets/styles-YEBJMFSO.css";

// app/components/Tables/MenuMetaobject.tsx
var import_polaris21 = require("@shopify/polaris");
var import_react23 = require("react");
var import_react_sortable_hoc4 = require("react-sortable-hoc"), _9 = __toESM(require("lodash"));

// app/components/Form/SiteMap/MenuEditor/index.tsx
var import_polaris20 = require("@shopify/polaris"), import_react22 = __toESM(require("react"));

// app/utils/hooks.ts
var import_react21 = require("react"), useHandleToggleModal = () => {
  let [active, setActive] = (0, import_react21.useState)(!1), handleClose = (0, import_react21.useCallback)(() => {
    setActive(!1);
  }, []), handleOpen = (0, import_react21.useCallback)(() => setActive(!0), []);
  return (0, import_react21.useMemo)(
    () => ({ active, handleClose, handleOpen }),
    [active, handleClose, handleOpen]
  );
};

// app/components/Form/SiteMap/MenuEditor/index.tsx
var import_polaris_icons6 = require("@shopify/polaris-icons"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), MenuEditorForm = ({
  menuItem = {},
  formik,
  activatorElement,
  activatorRef,
  onSubmit
}) => {
  let { active, handleClose, handleOpen } = useHandleToggleModal(), [name, setName] = (0, import_react22.useState)(get2(menuItem, "name", "")), [page, setPage] = (0, import_react22.useState)(get2(menuItem, "page", {})), handleChangeName = (0, import_react22.useCallback)((value) => setName(value), []), handleChangePage = (0, import_react22.useCallback)((value) => {
    setPage(value);
  }, []), [errors, setErrors] = (0, import_react22.useState)({}), handleChangeErrors = (0, import_react22.useCallback)((value) => setErrors(value), []), pages = (0, import_react22.useMemo)(() => get2(formik, "values.pages"), [formik.values]), deselectedOptions = (0, import_react22.useMemo)(
    () => map2(get2(formik, "values.pages"), (item) => ({
      value: get2(item, "id"),
      label: get2(item, "name")
    })),
    [formik.values]
  ), [selectedOptions, setSelectedOptions] = (0, import_react22.useState)([]), [inputValue, setInputValue] = (0, import_react22.useState)(""), [options, setOptions] = (0, import_react22.useState)(deselectedOptions), [loading, setLoading] = (0, import_react22.useState)(!1), updateText = (0, import_react22.useCallback)(
    (value) => {
      setInputValue(value), loading || setLoading(!0), setTimeout(() => {
        if (value === "") {
          setOptions(deselectedOptions), setLoading(!1);
          return;
        }
        let filterRegex = new RegExp(value, "i"), resultOptions = deselectedOptions.filter(
          (option) => option.label.match(filterRegex)
        );
        setOptions(resultOptions), setLoading(!1);
      }, 300);
    },
    [deselectedOptions, loading]
  ), updateSelection = (0, import_react22.useCallback)(
    (selected) => {
      let selectedPage = pages == null ? void 0 : pages.filter(
        (it) => (it == null ? void 0 : it.id) === get2(selected, "[0]")
      );
      handleChangePage({
        id: get2(selectedPage, "[0].id"),
        handle: get2(selectedPage, "[0].handle"),
        name: get2(selectedPage, "[0].name")
      });
      let selectedText = selected.map((selectedItem) => {
        let matchedOption = options.find((option) => option.value.match(selectedItem));
        return matchedOption && matchedOption.label;
      });
      setSelectedOptions(selected), setInputValue(selectedText[0] || "");
    },
    [options]
  ), textField = /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    import_polaris20.Autocomplete.TextField,
    {
      onChange: updateText,
      label: "Page",
      value: inputValue,
      prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_polaris20.Icon, { source: import_polaris_icons6.SearchMinor, tone: "base" }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
        lineNumber: 108,
        columnNumber: 15
      }, this),
      placeholder: get2(page, "name", "Search"),
      autoComplete: "off",
      error: get2(errors, "page")
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 104,
      columnNumber: 5
    },
    this
  ), handleSubmit = () => {
    if (setErrors({}), !(page != null && page.handle))
      return handleChangeErrors({ ...errors, page: FIELD_REQUIRED });
    if (!name)
      return handleChangeErrors({ ...errors, name: FIELD_REQUIRED });
    onSubmit({ page, name, id: get2(menuItem, "id", numberGenerator()) }), handleClose();
  }, emptyState = /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react22.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_polaris20.Icon, { source: import_polaris_icons6.SearchMinor }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_polaris20.TextContainer, { children: "Could not find any results" }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { style: {}, id: `${page == null ? void 0 : page.id}-page-button`, ref: activatorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_polaris20.Button, { size: "micro", onClick: handleOpen, children: activatorElement }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      import_polaris20.Modal,
      {
        large: !0,
        open: active,
        onClose: handleClose,
        title: get2(page, "name", "New Page") || "New Page",
        primaryAction: {
          content: "Ok",
          onAction: handleSubmit,
          loading: !1
        },
        secondaryActions: [
          {
            content: "Cancel",
            onAction: handleClose
          }
        ],
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_polaris20.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_polaris20.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_polaris20.TextField,
            {
              label: "Name",
              value: name,
              error: get2(errors, "name"),
              onChange: (e) => {
                handleChangeName(e);
              },
              autoComplete: "off"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
              lineNumber: 163,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_polaris20.Box, { padding: "1" }, void 0, !1, {
            fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_polaris20.Autocomplete,
            {
              options,
              selected: selectedOptions,
              onSelect: updateSelection,
              emptyState,
              loading,
              textField
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
              lineNumber: 173,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
          lineNumber: 161,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
        lineNumber: 144,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
    lineNumber: 138,
    columnNumber: 5
  }, this);
}, MenuEditor_default = MenuEditorForm;

// app/components/Tables/MenuMetaobject.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), MenuMetaobject = ({ formik }) => {
  let resourceName = {
    singular: "menu",
    plural: "menus"
  }, { values } = formik, menuItems = (0, import_react23.useMemo)(() => get2(values, "menu.menuItems", []), [values]), activatorRef = (0, import_react23.useRef)(null), onRemove = (menuItem) => {
    let copyItems = [...menuItems];
    formik.setFieldValue(
      "menu.menuItems",
      copyItems == null ? void 0 : copyItems.filter((it) => (it == null ? void 0 : it.id) !== (menuItem == null ? void 0 : menuItem.id))
    );
  }, handleChangeMenuItems = (0, import_react23.useCallback)((items) => {
    formik.setFieldValue("menu.menuItems", items);
  }, []), onAdd = (menuItem) => {
    handleChangeMenuItems([menuItem, ...menuItems]);
  }, onEdit = (menuItem) => {
    let index = _9.findIndex(menuItems, (_item) => (_item == null ? void 0 : _item.id) === menuItem.id);
    formik.setFieldValue(`menu.menuItems[${index}]`, menuItem);
  }, SortableItem = (0, import_react_sortable_hoc4.sortableElement)(({ menuItem }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    import_polaris21.IndexTable.Row,
    {
      id: get2(menuItem, "id"),
      position: index,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris21.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris21.ButtonGroup, { segmented: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris21.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(DragHandle_default, {}, void 0, !1, {
            fileName: "app/components/Tables/MenuMetaobject.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/MenuMetaobject.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            import_polaris21.Button,
            {
              size: "micro",
              onClick: () => {
                onRemove(menuItem);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(DeleteIcon_default, {}, void 0, !1, {
                fileName: "app/components/Tables/MenuMetaobject.tsx",
                lineNumber: 70,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/MenuMetaobject.tsx",
              lineNumber: 64,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            MenuEditor_default,
            {
              formik,
              menuItem,
              activatorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(EditIcon_default, {}, void 0, !1, {
                fileName: "app/components/Tables/MenuMetaobject.tsx",
                lineNumber: 75,
                columnNumber: 31
              }, this),
              activatorRef,
              onSubmit: onEdit
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/MenuMetaobject.tsx",
              lineNumber: 72,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Tables/MenuMetaobject.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Tables/MenuMetaobject.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris21.IndexTable.Cell, { children: truncate(get2(menuItem, "name")) }, void 0, !1, {
          fileName: "app/components/Tables/MenuMetaobject.tsx",
          lineNumber: 81,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris21.IndexTable.Cell, { children: get2(menuItem, "page.name") }, void 0, !1, {
          fileName: "app/components/Tables/MenuMetaobject.tsx",
          lineNumber: 82,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris21.IndexTable.Cell, { children: [
          get2(menuItem, "page.handle"),
          " "
        ] }, void 0, !0, {
          fileName: "app/components/Tables/MenuMetaobject.tsx",
          lineNumber: 84,
          columnNumber: 7
        }, this)
      ]
    },
    `${index}-${get2(menuItem, "id")}-${get2(menuItem, "name")}`,
    !0,
    {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 54,
      columnNumber: 5
    },
    this
  )), SortableContainer = (0, import_react_sortable_hoc4.sortableContainer)(({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    import_polaris21.IndexTable,
    {
      resourceName,
      itemCount: (menuItems == null ? void 0 : menuItems.length) || 0,
      selectable: !1,
      headings: [
        { title: "" },
        { title: "Name" },
        { title: "Page Name" },
        { title: "Handle" }
      ],
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 89,
      columnNumber: 7
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris21.Box, { padding: 1 }, void 0, !1, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris21.Text, { variant: "headingMd", as: "h6", children: "Menu Items" }, void 0, !1, {
            fileName: "app/components/Tables/MenuMetaobject.tsx",
            lineNumber: 119,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            MenuEditor_default,
            {
              formik,
              menuItem: {},
              activatorElement: "Add MenuItem",
              activatorRef,
              onSubmit: onAdd
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/MenuMetaobject.tsx",
              lineNumber: 122,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Tables/MenuMetaobject.tsx",
        lineNumber: 112,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris21.LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris21.VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(SortableContainer, { onSortEnd: ({ oldIndex, newIndex }) => {
      let _menuItems = (0, import_react_sortable_hoc4.arrayMove)(menuItems, oldIndex, newIndex);
      handleChangeMenuItems(_menuItems);
    }, useDragHandle: !0, children: _9.map(menuItems, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      SortableItem,
      {
        index,
        menuItem: value,
        name: value == null ? void 0 : value.name,
        id: _9.get(value, "id")
      },
      `menu-item-${get2(value, "id")}-${index}`,
      !1,
      {
        fileName: "app/components/Tables/MenuMetaobject.tsx",
        lineNumber: 134,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/MenuMetaobject.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}, MenuMetaobject_default = MenuMetaobject;

// app/components/Accordion.tsx
var import_polaris22 = require("@shopify/polaris");
var import_polaris_icons7 = require("@shopify/polaris-icons"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), Accordion = ({ children, title }) => {
  let { active: open, handleClose, handleOpen } = useHandleToggleModal();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
            import_polaris22.Button,
            {
              size: "micro",
              onClick: open ? handleClose : handleOpen,
              ariaExpanded: open,
              ariaControls: "basic-collapsible",
              children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_polaris22.Icon, { source: import_polaris_icons7.ChevronDownMinor, color: "base" }, void 0, !1, {
                fileName: "app/components/Accordion.tsx",
                lineNumber: 25,
                columnNumber: 13
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_polaris22.Icon, { source: import_polaris_icons7.ChevronRightMinor, color: "base" }, void 0, !1, {
                fileName: "app/components/Accordion.tsx",
                lineNumber: 23,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Accordion.tsx",
              lineNumber: 16,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_polaris22.Text, { variant: "headingMd", as: "h6", children: [
            "\xA0\xA0\xA0 ",
            title
          ] }, void 0, !0, {
            fileName: "app/components/Accordion.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Accordion.tsx",
        lineNumber: 10,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      import_polaris22.Collapsible,
      {
        open,
        id: "basic-collapsible",
        transition: { duration: "500ms", timingFunction: "ease-in-out" },
        expandOnPrint: !0,
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/Accordion.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Accordion.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}, Accordion_default = Accordion;

// app/components/Tables/FaqMetaObjects.tsx
var import_polaris25 = require("@shopify/polaris");
var import_react26 = require("react");
var import_react_sortable_hoc5 = require("react-sortable-hoc"), _11 = __toESM(require("lodash"));

// app/components/Form/SiteMap/FaqForm.tsx
var import_react25 = require("react");
var _10 = __toESM(require("lodash")), import_polaris24 = require("@shopify/polaris");

// app/components/Form/Fields/SelectField.tsx
var import_polaris23 = require("@shopify/polaris"), import_polaris_icons8 = require("@shopify/polaris-icons"), import_react24 = require("react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function SelectField({
  options,
  loading,
  selectedOptions,
  setSelectedOptions,
  onSearch,
  error,
  placeholder,
  label
}) {
  let [inputValue, setInputValue] = (0, import_react24.useState)(""), updateText = (0, import_react24.useCallback)(
    (value) => {
      setInputValue(value), setTimeout(() => {
        onSearch({ query: value });
      }, 300);
    },
    [loading]
  ), updateSelection = (0, import_react24.useCallback)(
    (selected) => {
      let selectedText = selected == null ? void 0 : selected.map((selectedItem) => {
        let matchedOption = options == null ? void 0 : options.find((option) => {
          var _a2;
          return (_a2 = option == null ? void 0 : option.value) == null ? void 0 : _a2.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });
      setSelectedOptions(selected), setInputValue(selectedText[0] || "");
    },
    [options]
  ), textField = /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    import_polaris23.Autocomplete.TextField,
    {
      onChange: updateText,
      label,
      value: inputValue,
      prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_polaris23.Icon, { source: import_polaris_icons8.SearchMinor, color: "base" }, void 0, !1, {
        fileName: "app/components/Form/Fields/SelectField.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this),
      placeholder,
      autoComplete: "off",
      error
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Fields/SelectField.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    import_polaris23.Autocomplete,
    {
      options,
      selected: selectedOptions,
      onSelect: updateSelection,
      loading,
      textField
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Fields/SelectField.tsx",
      lineNumber: 58,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Form/Fields/SelectField.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
var SelectField_default = SelectField;

// app/components/Form/SiteMap/FaqForm.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), FaqForm = ({ fetcher, activatorTitle, formik }) => {
  let [faq, setFaq] = (0, import_react25.useState)(), handleSetFaq = (0, import_react25.useCallback)((value) => setFaq(value), []), { active, handleClose, handleOpen } = useHandleToggleModal(), [loading, setLoading] = (0, import_react25.useState)(!1), handleLoading = (0, import_react25.useCallback)((value) => setLoading(value), []), [options, setOptions] = (0, import_react25.useState)([]), [selectedOptions, setSelectedOptions] = (0, import_react25.useState)([]), [error, setError] = (0, import_react25.useState)(), handleSelectedOption = (0, import_react25.useCallback)(
    (value) => {
      let _faq = options == null ? void 0 : options.filter((it) => get2(it, "value") == get2(value, "[0]"));
      _faq && handleSetFaq({
        name: get2(_faq, "[0].label"),
        id: get2(value, "[0]"),
        type: "q_a"
      }), setSelectedOptions(value);
    },
    [options]
  );
  (0, import_react25.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]), (0, import_react25.useEffect)(() => {
    if (fetcher.data) {
      let o = _10.map(_10.get(fetcher.data, "data.metaobjects.edges"), (item) => ({
        value: _10.get(item, "node.id"),
        label: _10.get(item, "node.displayName")
      }));
      setOptions(o);
    }
  }, [fetcher.data, loading]);
  let onSearch = async (data) => {
    await fetcher.load(
      `/app/search-metaobjects/q_a?query=${_10.get(data, "query")}&after=${_10.get(
        data,
        "after"
      )}&before=${_10.get(data, "before")}`
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    import_polaris24.Modal,
    {
      activator: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_polaris24.Button, { size: "micro", onClick: handleOpen, children: activatorTitle }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/FaqForm.tsx",
        lineNumber: 69,
        columnNumber: 5
      }, this),
      open: active,
      onClose: handleClose,
      title: "FAQ",
      primaryAction: {
        content: "Ok",
        onAction: () => {
          faq && formik.setFieldValue("faq", [faq, ...get2(formik, "values.faq")]), handleClose();
        }
      },
      secondaryActions: [
        {
          content: "Cancel",
          onAction: handleClose
        }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_polaris24.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_polaris24.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_polaris24.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/FaqForm.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          SelectField_default,
          {
            onSearch,
            options,
            loading,
            label: "Select Item (Type First Letters to Search)",
            selectedOptions,
            setSelectedOptions: handleSelectedOption,
            error,
            placeholder: "search.."
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/SiteMap/FaqForm.tsx",
            lineNumber: 94,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_polaris24.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/FaqForm.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form/SiteMap/FaqForm.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/FaqForm.tsx",
        lineNumber: 91,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/SiteMap/FaqForm.tsx",
      lineNumber: 75,
      columnNumber: 5
    },
    this
  );
}, FaqForm_default = FaqForm;

// app/components/Tables/FaqMetaObjects.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), FaqMetaObjects = ({ formik, faqFetcher: fetcher }) => {
  let resourceName = {
    singular: "faq",
    plural: "faqs"
  }, { faq: faqs = [] } = (0, import_react26.useMemo)(
    () => get2(formik, "values"),
    [formik.values]
  ), onRemove = (id) => {
    formik.setFieldValue(
      "faq",
      faqs == null ? void 0 : faqs.filter((it) => get2(it, "id") !== id)
    );
  }, SortableItem = (0, import_react_sortable_hoc5.sortableElement)((faq, type, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
    import_polaris25.IndexTable.Row,
    {
      id: get2(faq, "id"),
      position: index,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_polaris25.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_polaris25.ButtonGroup, { segmented: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_polaris25.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(DragHandle_default, {}, void 0, !1, {
            fileName: "app/components/Tables/FaqMetaObjects.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/FaqMetaObjects.tsx",
            lineNumber: 50,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
            import_polaris25.Button,
            {
              size: "micro",
              onClick: () => {
                onRemove(get2(faq, "id"));
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(DeleteIcon_default, {}, void 0, !1, {
                fileName: "app/components/Tables/FaqMetaObjects.tsx",
                lineNumber: 59,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/FaqMetaObjects.tsx",
              lineNumber: 53,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Tables/FaqMetaObjects.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Tables/FaqMetaObjects.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_polaris25.IndexTable.Cell, { children: get2(faq, "name") }, void 0, !1, {
          fileName: "app/components/Tables/FaqMetaObjects.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_polaris25.IndexTable.Cell, { children: get2(faq, "type") }, void 0, !1, {
          fileName: "app/components/Tables/FaqMetaObjects.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_polaris25.IndexTable.Cell, { children: get2(faq, "id") }, void 0, !1, {
          fileName: "app/components/Tables/FaqMetaObjects.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this)
      ]
    },
    `${index}-${get2(faq, "id")}-${get2(faq, "name")}`,
    !0,
    {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 43,
      columnNumber: 5
    },
    this
  )), SortableContainer = (0, import_react_sortable_hoc5.sortableContainer)(({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
    import_polaris25.IndexTable,
    {
      resourceName,
      itemCount: (faqs == null ? void 0 : faqs.length) || 0,
      selectable: !1,
      headings: [
        { title: "" },
        { title: "Name" },
        { title: "Type" },
        { title: "MetaObject Id" }
      ],
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 79,
      columnNumber: 7
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_polaris25.Text, { variant: "headingMd", as: "h6", children: "\xA0" }, void 0, !1, {
            fileName: "app/components/Tables/FaqMetaObjects.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(FaqForm_default, { fetcher, activatorTitle: "Add FAQ", formik }, void 0, !1, {
            fileName: "app/components/Tables/FaqMetaObjects.tsx",
            lineNumber: 112,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Tables/FaqMetaObjects.tsx",
        lineNumber: 101,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_polaris25.Box, { padding: 2 }, void 0, !1, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_polaris25.LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_polaris25.VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(SortableContainer, { onSortEnd: ({ oldIndex, newIndex }) => {
      let _items = (0, import_react_sortable_hoc5.arrayMove)(faqs, oldIndex, newIndex);
      formik.setFieldValue("faq", _items);
    }, useDragHandle: !0, children: _11.map(faqs, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      SortableItem,
      {
        index,
        item: _11.get(value, "item"),
        name: value == null ? void 0 : value.name,
        id: _11.get(value, "id"),
        value,
        type: get2(value, "type")
      },
      `item-${get2(value, "id")}`,
      !1,
      {
        fileName: "app/components/Tables/FaqMetaObjects.tsx",
        lineNumber: 119,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 117,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/FaqMetaObjects.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}, FaqMetaObjects_default = FaqMetaObjects;

// app/components/Tables/ArticleMetaobject.tsx
var import_polaris27 = require("@shopify/polaris");
var import_react28 = require("react");
var import_react_sortable_hoc6 = require("react-sortable-hoc"), _13 = __toESM(require("lodash"));

// app/components/Form/SiteMap/ArticleForm.tsx
var import_react27 = require("react");
var _12 = __toESM(require("lodash")), import_polaris26 = require("@shopify/polaris");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), ArticleForm = ({ fetcher, activatorTitle, formik }) => {
  let [faq, setFaq] = (0, import_react27.useState)(), handleSetFaq = (0, import_react27.useCallback)((value) => setFaq(value), []), { active, handleClose, handleOpen } = useHandleToggleModal(), [loading, setLoading] = (0, import_react27.useState)(!1), handleLoading = (0, import_react27.useCallback)((value) => setLoading(value), []), [options, setOptions] = (0, import_react27.useState)([]), [selectedOptions, setSelectedOptions] = (0, import_react27.useState)([]), [error, setError] = (0, import_react27.useState)(), handleSelectedOption = (0, import_react27.useCallback)(
    (value) => {
      let _faq = options == null ? void 0 : options.filter((it) => get2(it, "value") == get2(value, "[0]"));
      _faq && handleSetFaq({
        name: get2(_faq, "[0].label"),
        id: get2(value, "[0]"),
        type: "article"
      }), setSelectedOptions(value);
    },
    [options]
  );
  (0, import_react27.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]), (0, import_react27.useEffect)(() => {
    if (fetcher.data) {
      let o = _12.map(_12.get(fetcher.data, "data.metaobjects.edges"), (item) => ({
        value: _12.get(item, "node.id"),
        label: _12.get(item, "node.displayName")
      }));
      setOptions(o);
    }
  }, [fetcher.data, loading]);
  let onSearch = async (data) => {
    await fetcher.load(
      `/app/search-metaobjects/article?query=${_12.get(data, "query")}&after=${_12.get(
        data,
        "after"
      )}&before=${_12.get(data, "before")}`
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    import_polaris26.Modal,
    {
      activator: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_polaris26.Button, { size: "micro", onClick: handleOpen, children: activatorTitle }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
        lineNumber: 69,
        columnNumber: 5
      }, this),
      open: active,
      onClose: handleClose,
      title: "Article",
      primaryAction: {
        content: "Ok",
        onAction: () => {
          faq && formik.setFieldValue("articles", [faq, ...get2(formik, "values.articles")]), handleClose();
        }
      },
      secondaryActions: [
        {
          content: "Cancel",
          onAction: handleClose
        }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_polaris26.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_polaris26.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_polaris26.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          SelectField_default,
          {
            onSearch,
            options,
            loading,
            label: "Select Item (Type First Letters to Search)",
            selectedOptions,
            setSelectedOptions: handleSelectedOption,
            error,
            placeholder: "search.."
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
            lineNumber: 94,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_polaris26.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
        lineNumber: 91,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
      lineNumber: 75,
      columnNumber: 5
    },
    this
  );
}, ArticleForm_default = ArticleForm;

// app/components/Tables/ArticleMetaobject.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), ArticleMetaobject = ({ formik, faqFetcher: fetcher }) => {
  let resourceName = {
    singular: "article",
    plural: "articles"
  }, { articles = [] } = (0, import_react28.useMemo)(
    () => get2(formik, "values"),
    [formik.values]
  ), onRemove = (id) => {
    formik.setFieldValue(
      "articles",
      articles == null ? void 0 : articles.filter((it) => get2(it, "id") !== id)
    );
  }, SortableItem = (0, import_react_sortable_hoc6.sortableElement)((faq, type, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    import_polaris27.IndexTable.Row,
    {
      id: get2(faq, "id"),
      position: index,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.ButtonGroup, { segmented: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(DragHandle_default, {}, void 0, !1, {
            fileName: "app/components/Tables/ArticleMetaobject.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/ArticleMetaobject.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            import_polaris27.Button,
            {
              size: "micro",
              onClick: () => {
                onRemove(get2(faq, "id"));
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(DeleteIcon_default, {}, void 0, !1, {
                fileName: "app/components/Tables/ArticleMetaobject.tsx",
                lineNumber: 58,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/ArticleMetaobject.tsx",
              lineNumber: 52,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(SearchIcon_default, {}, void 0, !1, {
            fileName: "app/components/Tables/ArticleMetaobject.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/ArticleMetaobject.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Tables/ArticleMetaobject.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Tables/ArticleMetaobject.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.IndexTable.Cell, { children: get2(faq, "name") }, void 0, !1, {
          fileName: "app/components/Tables/ArticleMetaobject.tsx",
          lineNumber: 67,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.IndexTable.Cell, { children: get2(faq, "type") }, void 0, !1, {
          fileName: "app/components/Tables/ArticleMetaobject.tsx",
          lineNumber: 68,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.IndexTable.Cell, { children: get2(faq, "id") }, void 0, !1, {
          fileName: "app/components/Tables/ArticleMetaobject.tsx",
          lineNumber: 69,
          columnNumber: 7
        }, this)
      ]
    },
    `${index}-${get2(faq, "id")}-${get2(faq, "name")}-${type}`,
    !0,
    {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  )), SortableContainer = (0, import_react_sortable_hoc6.sortableContainer)(({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    import_polaris27.IndexTable,
    {
      resourceName,
      itemCount: (articles == null ? void 0 : articles.length) || 0,
      selectable: !1,
      headings: [
        { title: "" },
        { title: "Name" },
        { title: "Type" },
        { title: "MetaObject Id" }
      ],
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 74,
      columnNumber: 7
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.Text, { variant: "headingMd", as: "h6", children: "\xA0" }, void 0, !1, {
            fileName: "app/components/Tables/ArticleMetaobject.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            ArticleForm_default,
            {
              fetcher,
              activatorTitle: "Add Article",
              formik
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/ArticleMetaobject.tsx",
              lineNumber: 107,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Tables/ArticleMetaobject.tsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.Box, { padding: 2 }, void 0, !1, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_polaris27.VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(SortableContainer, { onSortEnd: ({ oldIndex, newIndex }) => {
      let _items = (0, import_react_sortable_hoc6.arrayMove)(articles, oldIndex, newIndex);
      formik.setFieldValue("articles", _items);
    }, useDragHandle: !0, children: _13.map(articles, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      SortableItem,
      {
        index,
        item: _13.get(value, "item"),
        name: value == null ? void 0 : value.name,
        id: _13.get(value, "id"),
        value,
        type: get2(value, "type")
      },
      `item-${get2(value, "name")}-${index}`,
      !1,
      {
        fileName: "app/components/Tables/ArticleMetaobject.tsx",
        lineNumber: 118,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/ArticleMetaobject.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}, ArticleMetaobject_default = ArticleMetaobject;

// app/components/Tables/CollectionMetaobject.tsx
var import_polaris29 = require("@shopify/polaris");
var import_react30 = require("react");
var import_react_sortable_hoc7 = require("react-sortable-hoc"), _15 = __toESM(require("lodash"));

// app/components/Form/SiteMap/CollectionForm.tsx
var import_react29 = require("react");
var _14 = __toESM(require("lodash")), import_polaris28 = require("@shopify/polaris");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), CollectionForm = ({ fetcher, activatorTitle, formik }) => {
  let [faq, setFaq] = (0, import_react29.useState)(), handleSetFaq = (0, import_react29.useCallback)((value) => setFaq(value), []), { active, handleClose, handleOpen } = useHandleToggleModal(), [loading, setLoading] = (0, import_react29.useState)(!1), [options, setOptions] = (0, import_react29.useState)([]), [selectedOptions, setSelectedOptions] = (0, import_react29.useState)([]), [error, setError] = (0, import_react29.useState)(), handleSelectedOption = (0, import_react29.useCallback)(
    (value) => {
      let _faq = options == null ? void 0 : options.filter((it) => get2(it, "value") == get2(value, "[0]"));
      _faq && handleSetFaq({
        name: get2(_faq, "[0].label"),
        id: get2(value, "[0]"),
        type: "collection"
      }), setSelectedOptions(value);
    },
    [options]
  );
  (0, import_react29.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]), (0, import_react29.useEffect)(() => {
    if (fetcher.data) {
      let res = _14.map(
        _14.get(fetcher.data, "data.collections.edges"),
        (item) => ({
          value: _14.get(item, "node.id"),
          label: _14.get(item, "node.title")
        })
      );
      setOptions(res || []);
    }
  }, [fetcher.data, loading]);
  let onSearch = async (data) => {
    await fetcher.load(
      `/app/search-collections?query=${_14.get(data, "query")}&after=${_14.get(
        data,
        "after"
      )}&before=${_14.get(data, "before")}`
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    import_polaris28.Modal,
    {
      activator: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_polaris28.Button, { size: "micro", onClick: handleOpen, children: activatorTitle }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
        lineNumber: 74,
        columnNumber: 5
      }, this),
      open: active,
      onClose: handleClose,
      title: "Collection",
      primaryAction: {
        content: "Ok",
        onAction: () => {
          faq && formik.setFieldValue("product_collections", [
            faq,
            ...get2(formik, "values.product_collections", [])
          ]), handleClose();
        }
      },
      secondaryActions: [
        {
          content: "Cancel",
          onAction: handleClose
        }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_polaris28.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_polaris28.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_polaris28.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          SelectField_default,
          {
            onSearch,
            options,
            loading,
            label: "Select Item (Type First Letters to Search)",
            selectedOptions,
            setSelectedOptions: handleSelectedOption,
            error,
            placeholder: "search.."
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
            lineNumber: 99,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_polaris28.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
        lineNumber: 96,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
      lineNumber: 80,
      columnNumber: 5
    },
    this
  );
}, CollectionForm_default = CollectionForm;

// app/components/Tables/CollectionMetaobject.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), CollectionMetaobject = ({ formik, faqFetcher: fetcher }) => {
  let resourceName = {
    singular: "collection",
    plural: "collections"
  }, product_collections = (0, import_react30.useMemo)(
    () => get2(formik, "values.product_collections", []),
    [formik.values]
  ), onRemove = (id) => {
    formik.setFieldValue(
      "product_collections",
      product_collections == null ? void 0 : product_collections.filter((it) => get2(it, "id") !== id)
    );
  }, SortableItem = (0, import_react_sortable_hoc7.sortableElement)((faq, type, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    import_polaris29.IndexTable.Row,
    {
      id: get2(faq, "id"),
      position: index,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_polaris29.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_polaris29.ButtonGroup, { segmented: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_polaris29.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(DragHandle_default, {}, void 0, !1, {
            fileName: "app/components/Tables/CollectionMetaobject.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/CollectionMetaobject.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_polaris29.Button,
            {
              size: "micro",
              onClick: () => {
                onRemove(get2(faq, "id"));
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(DeleteIcon_default, {}, void 0, !1, {
                fileName: "app/components/Tables/CollectionMetaobject.tsx",
                lineNumber: 57,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/CollectionMetaobject.tsx",
              lineNumber: 51,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Tables/CollectionMetaobject.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Tables/CollectionMetaobject.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_polaris29.IndexTable.Cell, { children: get2(faq, "name") }, void 0, !1, {
          fileName: "app/components/Tables/CollectionMetaobject.tsx",
          lineNumber: 62,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_polaris29.IndexTable.Cell, { children: get2(faq, "type") }, void 0, !1, {
          fileName: "app/components/Tables/CollectionMetaobject.tsx",
          lineNumber: 63,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_polaris29.IndexTable.Cell, { children: get2(faq, "id") }, void 0, !1, {
          fileName: "app/components/Tables/CollectionMetaobject.tsx",
          lineNumber: 64,
          columnNumber: 7
        }, this)
      ]
    },
    `${index}-${get2(faq, "id")}-${get2(faq, "name")}`,
    !0,
    {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  )), SortableContainer = (0, import_react_sortable_hoc7.sortableContainer)(({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    import_polaris29.IndexTable,
    {
      resourceName,
      itemCount: (product_collections == null ? void 0 : product_collections.length) || 0,
      selectable: !1,
      headings: [
        { title: "" },
        { title: "Name" },
        { title: "Type" },
        { title: "MetaObject Id" }
      ],
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 69,
      columnNumber: 7
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_polaris29.Text, { variant: "headingMd", as: "h6", children: "\xA0" }, void 0, !1, {
            fileName: "app/components/Tables/CollectionMetaobject.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            CollectionForm_default,
            {
              fetcher,
              activatorTitle: "Add collection",
              formik
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/CollectionMetaobject.tsx",
              lineNumber: 102,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Tables/CollectionMetaobject.tsx",
        lineNumber: 91,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_polaris29.Box, { padding: 2 }, void 0, !1, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_polaris29.LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_polaris29.VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(SortableContainer, { onSortEnd: ({ oldIndex, newIndex }) => {
      let _items = (0, import_react_sortable_hoc7.arrayMove)(product_collections, oldIndex, newIndex);
      formik.setFieldValue("product_collections", _items);
    }, useDragHandle: !0, children: _15.map(product_collections, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      SortableItem,
      {
        index,
        item: _15.get(value, "item"),
        name: value == null ? void 0 : value.name,
        id: _15.get(value, "id"),
        value,
        type: get2(value, "type")
      },
      `item-${get2(value, "id")}-${index}`,
      !1,
      {
        fileName: "app/components/Tables/CollectionMetaobject.tsx",
        lineNumber: 113,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/CollectionMetaobject.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}, CollectionMetaobject_default = CollectionMetaobject;

// app/routes/app.site-map.$handle.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: markdown_editor_default },
  { rel: "stylesheet", href: markdown_default },
  { rel: "stylesheet", href: styles_default }
];
async function loader4({ request, params }) {
  let data = await (await useStorefrontFetch_default(
    JSON.stringify({
      query: getMetaobjectQuery,
      variables: {
        metaobjectHandleInput: {
          handle: params.handle,
          type: "site_map"
        }
      }
    })
  )).json(), metaobject = _16.get(data, "data.metaobject"), articles = getSiteMetadataFieldData(metaobject, "articles") || [], meta = getSiteMetadataFieldData(metaobject, "meta"), pages = getSiteMetadataFieldData(metaobject, "pages"), menu = getSiteMetadataFieldData(metaobject, "menu"), header = getSiteMetadataFieldData(metaobject, "header"), footer = getSiteMetadataFieldData(metaobject, "footer"), faq = getSiteMetadataFieldData(metaobject, "faq") || [], product_collections = getSiteMetadataFieldData(metaobject, "product_collections") || [], name = findValueFromFields(metaobject, "name"), domain = findValueFromFields(metaobject, "domain"), _metaobject = {
    id: _16.get(metaobject, "id"),
    name,
    domain,
    articles,
    meta,
    pages,
    menu,
    header,
    footer,
    faq,
    product_collections,
    handle: params.handle
  };
  return (0, import_node7.json)(
    {
      name,
      domain,
      articles,
      meta,
      pages,
      menu,
      header,
      footer,
      faq,
      product_collections,
      metaobject: _metaobject,
      type: "site_meta"
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate"
      }
    }
  );
}
async function action2({ request, params }) {
  let { admin } = await authenticate.admin(request), data = {
    ...Object.fromEntries(await request.formData())
  }, id = _16.get(data, "id"), handle = _16.get(data, "handle"), fields = [
    {
      key: "name",
      value: _16.get(data, "name")
    },
    {
      key: "domain",
      value: _16.get(data, "domain")
    },
    {
      key: "documents",
      value: ""
    },
    {
      key: "contacts",
      value: ""
    },
    {
      key: "keywords",
      value: ""
    },
    {
      key: "teams",
      value: ""
    }
  ];
  [
    "articles",
    "meta",
    "menu",
    "pages",
    "header",
    "footer",
    "faq",
    "product_collections"
  ].map((it) => {
    fields.push(createFieldValue(it, data));
  });
  let variables = createItemDefinitionVariables({
    id,
    handle,
    fields
  }), response = await updateItemDefinitionMutation({
    graphql: admin.graphql,
    variables
  });
  return (0, import_node7.json)({ data: _16.get(response, "data") });
}
function SiteMetaPage() {
  let {
    metaobject,
    articles,
    meta,
    pages,
    menu,
    header,
    footer = {},
    faq,
    product_collections
  } = (0, import_react31.useLoaderData)(), [formDirty, setFormDirty] = (0, import_react32.useState)(!1), [loading, setLoading] = (0, import_react32.useState)(!1), actionData = (0, import_react31.useActionData)(), faqFetcher = (0, import_react31.useFetcher)(), collectionFetcher = (0, import_react31.useFetcher)(), articleFetcher = (0, import_react31.useFetcher)(), navigate = (0, import_react31.useNavigate)(), handleLoadingChange = (0, import_react32.useCallback)((value) => setLoading(value), []), submit = (0, import_react31.useSubmit)(), initialValues = (0, import_react32.useMemo)(
    () => ({
      id: _16.get(metaobject, "id"),
      handle: _16.get(metaobject, "handle"),
      name: _16.get(metaobject, "name"),
      domain: _16.get(metaobject, "domain"),
      articles,
      meta,
      pages,
      menu,
      header,
      footer,
      faq,
      product_collections,
      collections: []
    }),
    [
      metaobject,
      articles,
      meta,
      pages,
      header,
      footer,
      faq,
      product_collections
    ]
  ), formik = (0, import_formik.useFormik)({
    initialValues,
    validateOnChange: !1,
    onSubmit: (values2) => {
      handleLoadingChange(!0);
      let data = {
        id: _16.get(metaobject, "id"),
        handle: _16.get(metaobject, "handle"),
        name: values2.name,
        domain: values2.domain,
        menu: getFieldData(get2(values2, "menu")),
        meta: getFieldData(get2(values2, "meta")),
        pages: getFieldData(get2(values2, "pages")),
        header: getFieldData(get2(values2, "header")),
        footer: getFieldData(get2(values2, "footer", {})),
        faq: getFieldData(get2(values2, "faq", {})),
        product_collections: getFieldData(get2(values2, "product_collections")),
        articles: getFieldData(get2(values2, "articles"))
      };
      submit(data, { method: "post" });
    }
  }), { values } = (0, import_react32.useMemo)(() => formik, [formik]);
  return (0, import_react32.useEffect)(() => {
    handleLoadingChange(!1), setFormDirty(!1), formik.resetForm({ values });
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    import_polaris30.Page,
    {
      backAction: { content: "Sites", url: "/app/site-maps" },
      title: _16.get(metaobject, "name", ""),
      subtitle: "Site Map",
      compactTitle: !0,
      secondaryActions: [
        values.domain ? {
          content: "Preview",
          accessibilityLabel: "Secondary action label",
          onAction: () => {
            let newTab = window.open(values.domain, "_blank");
            newTab && newTab.focus();
          }
        } : {}
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_polaris30.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_polaris30.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_polaris30.Card, { children: [
        formDirty || loading || formik.dirty ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          SaveAppBar_default,
          {
            saveAction: formik.handleSubmit,
            loading,
            discardAction: () => {
              navigate("/app/site-maps");
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 279,
            columnNumber: 13
          },
          this
        ) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_polaris30.VerticalStack, { gap: "3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_polaris30.TextField,
            {
              label: "Name",
              name: "name",
              value: values.name,
              onChange: (value) => {
                formik.setFieldValue("name", value);
              },
              autoComplete: "off"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.site-map.$handle.tsx",
              lineNumber: 288,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_polaris30.TextField,
            {
              label: "Domain",
              name: "domain",
              value: values.domain,
              onChange: (value) => {
                formik.setFieldValue("domain", value);
              },
              autoComplete: "off"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.site-map.$handle.tsx",
              lineNumber: 297,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Accordion_default, { title: "Metadata", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(MetaForm_default, { formik }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 308,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 307,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 306,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Accordion_default, { title: "Header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react32.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react31.Await, { resolve: formik, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(HeaderFrom_default, { formik: value }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 316,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 315,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 314,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 313,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 312,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Accordion_default, { title: "Footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react32.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react31.Await, { resolve: formik, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(FooterForm_default, { formik: value }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 326,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 325,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 324,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 323,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 322,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Accordion_default, { title: "FAQs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react32.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react31.Await, { resolve: formik, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            FaqMetaObjects_default,
            {
              faqFetcher,
              formik: value
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.site-map.$handle.tsx",
              lineNumber: 337,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 335,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 334,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 333,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 332,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Accordion_default, { title: "Articles", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react32.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react31.Await, { resolve: formik, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            ArticleMetaobject_default,
            {
              faqFetcher: articleFetcher,
              formik: value
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.site-map.$handle.tsx",
              lineNumber: 352,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 350,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 349,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 348,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 347,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Accordion_default, { title: "Products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react32.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react31.Await, { resolve: formik, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            CollectionMetaobject_default,
            {
              faqFetcher: collectionFetcher,
              formik: value
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.site-map.$handle.tsx",
              lineNumber: 367,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 365,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 364,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 363,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 362,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Accordion_default, { title: "Pages", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(PageMetaObject_default, { fetcher: collectionFetcher, formik }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 378,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 377,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 376,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Accordion_default, { title: "Menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(MenuMetaobject_default, { formik }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 383,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 382,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.site-map.$handle.tsx",
            lineNumber: 381,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.site-map.$handle.tsx",
          lineNumber: 287,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 277,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 276,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 275,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.site-map.$handle.tsx",
      lineNumber: 255,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.article.$handle.tsx
var app_article_handle_exports = {};
__export(app_article_handle_exports, {
  action: () => action3,
  default: () => ArticlePage,
  links: () => links2,
  loader: () => loader5
});
var import_node8 = require("@remix-run/node"), import_react34 = require("@remix-run/react"), import_polaris34 = require("@shopify/polaris"), _18 = __toESM(require("lodash")), import_react35 = require("react");
var import_formik2 = require("formik");

// app/components/Form/Product/ImageForm.tsx
var import_polaris31 = require("@shopify/polaris"), import_react33 = require("react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), ImageForm = ({ onAdd, activatorTitle }) => {
  let [active, setActive] = (0, import_react33.useState)(!1), [value, setValue] = (0, import_react33.useState)(""), [errors, setErrors] = (0, import_react33.useState)({}), handleValueChange = (0, import_react33.useCallback)((value2) => setValue(value2), []), handleSetErrors = (0, import_react33.useCallback)((value2) => setErrors(value2), []), handleChange = (0, import_react33.useCallback)(() => setActive(!active), [active]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
    import_polaris31.Modal,
    {
      activator: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_polaris31.Button, { size: "micro", onClick: handleChange, children: activatorTitle }, void 0, !1, {
        fileName: "app/components/Form/Product/ImageForm.tsx",
        lineNumber: 25,
        columnNumber: 5
      }, this),
      open: active,
      onClose: handleChange,
      title: "Item",
      primaryAction: {
        content: "Ok",
        onAction: () => {
          if (handleSetErrors({}), !value)
            return handleSetErrors({ value: FIELD_REQUIRED });
          onAdd(value), handleValueChange(""), setActive(!1);
        }
      },
      secondaryActions: [
        {
          content: "Cancel",
          onAction: handleChange
        }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_polaris31.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_polaris31.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          import_polaris31.TextField,
          {
            label: "Media URL",
            value,
            onChange: handleValueChange,
            autoComplete: "off",
            error: errors.value
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/ImageForm.tsx",
            lineNumber: 50,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_polaris31.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/ImageForm.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form/Product/ImageForm.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Form/Product/ImageForm.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Product/ImageForm.tsx",
      lineNumber: 32,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Form/Product/ImageForm.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}, ImageForm_default = ImageForm;

// app/components/ImageGrid.tsx
var import_polaris32 = require("@shopify/polaris"), _17 = __toESM(require("lodash"));
var import_react_sortablejs = require("react-sortablejs"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), ImageGrid = ({ images, onRemove, setImages }) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_polaris32.Box, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_polaris32.HorizontalGrid, { gap: "4", columns: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    import_react_sortablejs.ReactSortable,
    {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "10px"
      },
      list: images,
      setList: setImages,
      children: _17.map(images, (image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_polaris32.Card, { padding: "0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        "div",
        {
          style: {
            position: "relative",
            height: "100%",
            cursor: "grab"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
              "div",
              {
                style: {
                  position: "absolute",
                  right: 10,
                  top: 10
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
                  import_polaris32.Button,
                  {
                    size: "micro",
                    onClick: () => {
                      onRemove(image);
                    },
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(DeleteIcon_default, {}, void 0, !1, {
                      fileName: "app/components/ImageGrid.tsx",
                      lineNumber: 50,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ImageGrid.tsx",
                    lineNumber: 44,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/ImageGrid.tsx",
                lineNumber: 37,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
              "img",
              {
                alt: "",
                width: "100%",
                height: "100%",
                style: {
                  objectFit: "cover",
                  objectPosition: "center"
                },
                src: image
              },
              void 0,
              !1,
              {
                fileName: "app/components/ImageGrid.tsx",
                lineNumber: 53,
                columnNumber: 19
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/ImageGrid.tsx",
          lineNumber: 30,
          columnNumber: 17
        },
        this
      ) }, image + index, !1, {
        fileName: "app/components/ImageGrid.tsx",
        lineNumber: 29,
        columnNumber: 15
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "app/components/ImageGrid.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ImageGrid.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_polaris32.HorizontalGrid, { columns: 1, children: (images == null ? void 0 : images.length) === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    import_polaris32.EmptyState,
    {
      heading: "No image found",
      image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    },
    void 0,
    !1,
    {
      fileName: "app/components/ImageGrid.tsx",
      lineNumber: 71,
      columnNumber: 11
    },
    this
  ) : null }, void 0, !1, {
    fileName: "app/components/ImageGrid.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/ImageGrid.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this), ImageGrid_default = ImageGrid;

// app/components/Loaders/FormLoader.tsx
var import_polaris33 = require("@shopify/polaris"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), FormLoader = () => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_polaris33.Box, { padding: "10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_polaris33.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_polaris33.Layout.Section, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_polaris33.LegacyCard, { sectioned: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_polaris33.SkeletonBodyText, {}, void 0, !1, {
    fileName: "app/components/Loaders/FormLoader.tsx",
    lineNumber: 16,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Loaders/FormLoader.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_polaris33.LegacyCard, { sectioned: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_polaris33.TextContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_polaris33.SkeletonDisplayText, { size: "small" }, void 0, !1, {
      fileName: "app/components/Loaders/FormLoader.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_polaris33.SkeletonBodyText, {}, void 0, !1, {
      fileName: "app/components/Loaders/FormLoader.tsx",
      lineNumber: 21,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loaders/FormLoader.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Loaders/FormLoader.tsx",
    lineNumber: 18,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Loaders/FormLoader.tsx",
  lineNumber: 14,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Loaders/FormLoader.tsx",
  lineNumber: 13,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Loaders/FormLoader.tsx",
  lineNumber: 12,
  columnNumber: 5
}, this), FormLoader_default = FormLoader;

// app/routes/app.article.$handle.tsx
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), MDEditor4 = (0, import_react35.lazy)(() => import("@uiw/react-md-editor")), links2 = () => [
  { rel: "stylesheet", href: markdown_editor_default },
  { rel: "stylesheet", href: markdown_default },
  { rel: "stylesheet", href: styles_default }
];
async function loader5({ request, params }) {
  let data = await (await useStorefrontFetch_default(
    JSON.stringify({
      query: getMetaobjectQuery,
      variables: {
        metaobjectHandleInput: {
          handle: params.handle,
          type: "article"
        }
      }
    })
  )).json(), metaobject = _18.get(data, "data.metaobject"), title = findValueFromFields(metaobject, "title"), authors = parseJSON(findValueFromFields(metaobject, "authors")), categories = parseJSON(findValueFromFields(metaobject, "categories")), content = findValueFromFields(metaobject, "content"), media = findValueFromFields(metaobject, "media"), content_MD = findValueFromFields(metaobject, "content_md"), additional_media = findValueFromFields(metaobject, "additional_media") || "", created_at = findValueFromFields(metaobject, "created_at");
  return (0, import_node8.json)(
    {
      title,
      authors,
      categories,
      content,
      content_MD,
      media,
      additional_media,
      created_at,
      handle: params.handle,
      metaobject,
      type: "article"
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate"
      }
    }
  );
}
async function action3({ request, params }) {
  var _a2, _b;
  let { admin } = await authenticate.admin(request), data = {
    ...Object.fromEntries(await request.formData())
  }, id = _18.get(data, "id"), handle = _18.get(data, "handle"), created_at = _18.get(data, "created_at"), fields = [
    {
      key: "title",
      value: _18.get(data, "title")
    },
    {
      key: "content",
      value: _18.get(data, "content", "")
    },
    {
      key: "authors",
      value: _18.get(data, "authors")
    },
    {
      key: "categories",
      value: _18.get(data, "categories")
    },
    {
      key: "content_md",
      value: _18.get(data, "content_MD", "")
    },
    {
      key: "media",
      value: _18.get(data, "media")
    },
    {
      key: "additional_media",
      value: _18.get(data, "additional_media")
    },
    {
      key: "created_at",
      value: isValidDate(created_at) ? created_at : /* @__PURE__ */ new Date()
    }
  ], variables = createItemDefinitionVariables({
    id,
    handle,
    fields
  }), response = await updateItemDefinitionMutation({
    graphql: admin.graphql,
    variables
  }), errors = (_b = (_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2.metaobjectUpdate) == null ? void 0 : _b.userErrors;
  return errors != null && errors.length ? (0, import_node8.json)({ errors }, { status: 422 }) : (0, import_node8.json)({ data: _18.get(response, "data") });
}
function ArticlePage() {
  var _a2;
  let {
    title,
    authors,
    categories,
    content,
    content_MD,
    media,
    handle,
    metaobject,
    created_at,
    additional_media
  } = (0, import_react34.useLoaderData)(), [formDirty, setFormDirty] = (0, import_react35.useState)(!1), [loading, setLoading] = (0, import_react35.useState)(!1), [allAuthors, _setAllAuthors] = (0, import_react35.useState)([]), setAllAuthors = (0, import_react35.useCallback)((value) => _setAllAuthors(value), []), [allCategories, _setCategories] = (0, import_react35.useState)([]), setAllCategories = (0, import_react35.useCallback)((value) => _setCategories(value), []), actionData = (0, import_react34.useActionData)(), authorFetcher = (0, import_react34.useFetcher)(), categoriesFetcher = (0, import_react34.useFetcher)(), navigate = (0, import_react34.useNavigate)(), handleLoadingChange = (0, import_react35.useCallback)((value) => setLoading(value), []), handleFormDirty = (0, import_react35.useCallback)(() => setFormDirty(!0), []), onSearchCategories = async (data) => {
    await categoriesFetcher.load(
      `/app/search-metaobjects/article_category?query=${_18.get(
        data,
        "query"
      )}&d=${(/* @__PURE__ */ new Date()).toString()}&after=${_18.get(
        data,
        "after"
      )}&before=${_18.get(data, "before")}`
    );
  }, { toastMarkup, showToast } = useToast();
  (0, import_react35.useEffect)(() => {
    if (handleLoadingChange(!1), _18.get(actionData, "errors"))
      return showToast(
        `Something went wrong. ${JSON.stringify(
          _18.get(actionData, "errors[0].message")
        )}`,
        !0
      );
    formik.dirty && showToast("Updated successfully"), setFormDirty(!1);
  }, [actionData]);
  let onSearchAuthors = async (data) => {
    await authorFetcher.load(
      `/app/search-metaobjects/author?query=${_18.get(
        data,
        "query"
      )}&d=${(/* @__PURE__ */ new Date()).toString()}&after=${_18.get(
        data,
        "after"
      )}&before=${_18.get(data, "before")}`
    );
  };
  (0, import_react35.useEffect)(() => {
    onSearchAuthors({}), onSearchCategories({});
  }, []), (0, import_react35.useEffect)(() => {
    if (categoriesFetcher.data) {
      let o = _18.map(
        _18.get(categoriesFetcher.data, "data.metaobjects.edges"),
        (item) => ({
          value: _18.get(item, "node.id"),
          label: _18.get(item, "node.displayName")
        })
      );
      setAllCategories(o);
    }
  }, [categoriesFetcher.data]), (0, import_react35.useEffect)(() => {
    if (authorFetcher.data) {
      let o = _18.map(
        _18.get(authorFetcher.data, "data.metaobjects.edges"),
        (item) => ({
          value: _18.get(item, "node.id"),
          label: _18.get(item, "node.displayName")
        })
      );
      setAllAuthors(o);
    }
  }, [authorFetcher.data]);
  let submit = (0, import_react34.useSubmit)(), initialValues = (0, import_react35.useMemo)(
    () => ({
      id: _18.get(metaobject, "id"),
      title,
      authors: _18.isEmpty(authors) ? [] : authors,
      categories: _18.isEmpty(categories) ? [] : categories,
      content,
      content_MD,
      media: media ? [media] : [],
      handle
    }),
    [metaobject, title, authors, categories, content, media, handle]
  ), formik = (0, import_formik2.useFormik)({
    initialValues,
    validateOnChange: !1,
    onSubmit: (values2) => {
      var _a3;
      handleLoadingChange(!0);
      let data = {
        id: _18.get(metaobject, "id"),
        handle: _18.get(metaobject, "handle"),
        created_at,
        additional_media,
        title: values2.title,
        authors: JSON.stringify(_18.map(values2.authors, (it) => it.value || it)),
        categories: JSON.stringify(
          _18.map(values2.categories, (it) => it.value || it)
        ),
        content: values2.content,
        content_MD: values2.content_MD,
        media: (_a3 = values2.media) != null && _a3.length ? _18.get(values2, "media[0]") : ""
      };
      submit(data, { method: "post" });
    }
  }), { values } = (0, import_react35.useMemo)(() => formik, [formik]);
  return (0, import_react35.useEffect)(() => {
    handleLoadingChange(!1), setFormDirty(!1), formik.resetForm({ values });
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
    import_polaris34.Page,
    {
      backAction: { content: "Sites", url: "/app/articles" },
      title: _18.get(metaobject, "name", ""),
      subtitle: "Article",
      compactTitle: !0,
      secondaryActions: [{}],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_polaris34.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_polaris34.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_polaris34.Card, { children: [
        formDirty || loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          SaveAppBar_default,
          {
            saveAction: formik.handleSubmit,
            loading,
            discardAction: () => {
              navigate("/app/articles");
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 330,
            columnNumber: 13
          },
          this
        ) : null,
        toastMarkup,
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_polaris34.VerticalStack, { gap: "3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
            import_polaris34.TextField,
            {
              label: "Title",
              name: "title",
              value: values.title,
              onChange: (value) => {
                formik.setFieldValue("title", value), handleFormDirty();
              },
              autoComplete: "off"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.article.$handle.tsx",
              lineNumber: 340,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react35.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(FormLoader_default, {}, void 0, !1, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 350,
            columnNumber: 35
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react34.Await, { resolve: values.content_MD, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("label", { children: "Content" }, void 0, !1, {
              fileName: "app/routes/app.article.$handle.tsx",
              lineNumber: 354,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { "data-color-mode": "light", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
                MDEditor4,
                {
                  value: value != null && value.includes("children") ? toHTML(value) : value,
                  name: "content_MD",
                  onChange: (e) => {
                    formik.setFieldValue("content_MD", e), handleFormDirty();
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.article.$handle.tsx",
                  lineNumber: 356,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_polaris34.Box, { padding: "2" }, void 0, !1, {
                fileName: "app/routes/app.article.$handle.tsx",
                lineNumber: 366,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.article.$handle.tsx",
              lineNumber: 355,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 353,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 351,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 350,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react35.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(FormLoader_default, {}, void 0, !1, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 372,
            columnNumber: 35
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react34.Await, { resolve: values.content, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("label", { children: "Content in rich text format (not editable)" }, void 0, !1, {
              fileName: "app/routes/app.article.$handle.tsx",
              lineNumber: 376,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { "data-color-mode": "light", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
                MDEditor4,
                {
                  value: value != null && value.includes("children") ? toHTML(value) : value,
                  name: "content",
                  onChange: (e) => {
                    alert("This content is not editable");
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.article.$handle.tsx",
                  lineNumber: 378,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_polaris34.Box, { padding: "2" }, void 0, !1, {
                fileName: "app/routes/app.article.$handle.tsx",
                lineNumber: 387,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.article.$handle.tsx",
              lineNumber: 377,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 375,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 373,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 372,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.article.$handle.tsx",
          lineNumber: 339,
          columnNumber: 13
        }, this),
        !(allCategories != null && allCategories.length) || !allAuthors.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(FormLoader_default, {}, void 0, !1, {
          fileName: "app/routes/app.article.$handle.tsx",
          lineNumber: 395,
          columnNumber: 13
        }, this) : null,
        allCategories != null && allCategories.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          TagSearchField_default,
          {
            label: "Categories",
            options: _18.map(allCategories, (it) => ({
              value: _18.get(it, "value"),
              label: _18.get(it, "label"),
              id: _18.get(it, "value"),
              name: _18.get(it, "label")
            })),
            placeholder: "Selected categories",
            selectedOptions: _18.filter(
              allCategories,
              (obj) => {
                var _a3;
                return (_a3 = _18.get(formik, "values.categories", [])) == null ? void 0 : _a3.includes(obj.value);
              }
            ),
            handleChangeCollection: (e) => {
              formik.setFieldValue("categories", e), handleFormDirty();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 398,
            columnNumber: 13
          },
          this
        ) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_polaris34.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/routes/app.article.$handle.tsx",
          lineNumber: 416,
          columnNumber: 13
        }, this),
        allAuthors != null && allAuthors.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          TagSearchField_default,
          {
            label: "Authors",
            options: _18.map(allAuthors, (it) => ({
              value: _18.get(it, "value"),
              label: _18.get(it, "label"),
              id: _18.get(it, "value"),
              name: _18.get(it, "label")
            })),
            placeholder: "Select authors",
            selectedOptions: _18.filter(
              allAuthors,
              (obj) => {
                var _a3;
                return (_a3 = _18.get(formik, "values.authors", [])) == null ? void 0 : _a3.includes(obj.value);
              }
            ),
            handleChangeCollection: (e) => {
              formik.setFieldValue("authors", e), handleFormDirty();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 418,
            columnNumber: 13
          },
          this
        ) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_polaris34.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/routes/app.article.$handle.tsx",
          lineNumber: 436,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_polaris34.Text, { variant: "headingMd", as: "h6", children: "Main Media" }, void 0, !1, {
                fileName: "app/routes/app.article.$handle.tsx",
                lineNumber: 444,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
                ImageForm_default,
                {
                  activatorTitle: `${(_a2 = get2(formik, "values.media", [])) != null && _a2.length ? "Edit" : "Add"} Media`,
                  onAdd: (value) => {
                    formik.setFieldValue("media", [value]), handleFormDirty();
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.article.$handle.tsx",
                  lineNumber: 448,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 437,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          ImageGrid_default,
          {
            images: get2(formik, "values.media", []),
            onRemove: (image) => {
              formik.setFieldValue("media", []), handleFormDirty();
            },
            setImages: (values2) => {
              formik.setFieldValue("media", values2), handleFormDirty();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 458,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 328,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 327,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 326,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.article.$handle.tsx",
      lineNumber: 319,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.search-products.tsx
var app_search_products_exports = {};
__export(app_search_products_exports, {
  loader: () => loader6
});
var import_node9 = require("@remix-run/node");

// app/graphql/products/queries.ts
var productsQuery = async ({
  graphql,
  before = null,
  after = null,
  query: query8 = null
}) => {
  let variables = {
    shouldQueryCompanyLocationPublicationCount: !0,
    productsFirst: 20,
    productsLast: null,
    before: null,
    after: null,
    reverse: !1,
    query: query8,
    savedSearchId: null
  };
  return before ? (variables.before = before, variables.productsLast = 20, delete variables.productsFirst) : after && (variables.after = after, variables.productsFirst = 20), await (await graphql(`
  query ProductIndex(
    $productsFirst: Int
    $productsLast: Int
    $before: String
    $after: String
    $reverse: Boolean
    $query: String
    $savedSearchId: ID
    $shouldQueryCompanyLocationPublicationCount: Boolean = false
  ) {
    products(
      first: $productsFirst
      after: $after
      last: $productsLast
      before: $before
      reverse: $reverse
      query: $query
      savedSearchId: $savedSearchId
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        __typename
      }
      edges {
        cursor
        node {
          ...ProductListItem
          isGiftCard
          __typename
        }
        __typename
      }
      __typename
    }
    catalogs(first: 1, type: COMPANY_LOCATION)
      @include(if: $shouldQueryCompanyLocationPublicationCount) {
      totalCount
      __typename
    }
  }

  fragment ProductListItem on Product {
    id
    title
    vendor
    productType
    standardizedProductType {
      __typename
    }
    totalVariants
    totalInventory
    status
    tracksInventory
    onlineStoreUrl
    hasOnlyDefaultVariant
    featuredImage {
      id
      transformedSrc: url(
        transform: { maxWidth: 40, maxHeight: 40, scale: 3 }
      )
      __typename
    }
    featuredMedia {
      ... on MediaImage {
        id
        __typename
      }
      ... on Video {
        id
        __typename
      }
      ... on Model3d {
        id
        __typename
      }
      ... on ExternalVideo {
        id
        __typename
      }
      preview {
        image {
          id
          transformedSrc: url(
            transform: { maxWidth: 40, maxHeight: 40, scale: 3 }
          )
          __typename
        }
        __typename
      }
      __typename
    }

    __typename
  }
`, { variables })).json();
};

// app/routes/app.search-products.tsx
async function loader6({ request, params }) {
  let { admin } = await authenticate.admin(request), rest = parseSearchParams({
    request,
    params,
    queryBuild: (e) => `title: ${e}`
  }), products = await productsQuery({
    graphql: admin.graphql,
    ...rest
  });
  return (0, import_node9.json)(products);
}

// app/routes/app.item.duplicate.tsx
var app_item_duplicate_exports = {};
__export(app_item_duplicate_exports, {
  action: () => action4
});
var _19 = __toESM(require("lodash")), import_node10 = require("@remix-run/node");

// app/graphql/metaobjects/createMetaobjectMutation.ts
var createMetaobjectMutation = async ({ graphql, variables }) => (await graphql(query4, {
  variables
})).json(), query4 = `
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
  `, createMetaobjectCreateVariables = ({ fields }) => ({
  input: {
    capabilities: {
      publishable: {
        status: "ACTIVE"
      }
    },
    fields,
    type: "item_definition"
  }
});

// app/routes/app.item.duplicate.tsx
async function action4({ request, params }) {
  let { admin } = await authenticate.admin(request), data = {
    ...Object.fromEntries(await request.formData())
  }, fields = [];
  fields.push({
    key: "name",
    value: _19.get(data, "name")
  }), fields.push({
    key: "strapi_id",
    value: _19.get(data, "strapi_id")
  }), fields.push({
    key: "description",
    value: _19.get(data, "description")
  }), fields.push({
    key: "content",
    value: _19.get(data, "content")
  }), _19.get(data, "properties") && fields.push({
    key: "properties",
    value: _19.get(data, "properties")
  }), _19.get(data, "prop_use") && fields.push({
    key: "prop_use",
    value: _19.get(data, "prop_use")
  }), _19.get(data, "mainmedia") && fields.push({
    key: "main_media",
    value: _19.get(data, "mainmedia")
  }), _19.get(data, "additionalmedia") && fields.push({
    key: "additional_media",
    value: _19.get(data, "additionalmedia")
  });
  let variables = createMetaobjectCreateVariables({
    fields
  }), response = await createMetaobjectMutation({
    graphql: admin.graphql,
    variables
  }), newProductId = getProductIDNumber(
    _19.get(response, "data.metaobjectCreate.metaobject.handle")
  ), errors = _19.get(response, "data.metaobjectCreate.userErrors.length");
  return errors ? (0, import_node10.json)({ errors }, { status: 422 }) : (0, import_node10.redirect)(`/app/item/${newProductId}`);
}

// app/routes/app.item.$handle.tsx
var app_item_handle_exports = {};
__export(app_item_handle_exports, {
  action: () => action5,
  default: () => ProductPage,
  links: () => links3,
  loader: () => loader7
});
var import_node11 = require("@remix-run/node"), import_react43 = require("@remix-run/react"), import_polaris39 = require("@shopify/polaris"), _24 = __toESM(require("lodash")), import_react44 = require("react");

// app/components/Tables/ProductProperties.tsx
var import_polaris36 = require("@shopify/polaris");
var import_react38 = require("react");
var import_react_sortable_hoc8 = require("react-sortable-hoc"), _21 = __toESM(require("lodash"));

// app/components/Form/Product/PropertyMetafieldEditForm.tsx
var import_polaris35 = require("@shopify/polaris"), import_react36 = require("react"), _20 = __toESM(require("lodash"));
var import_react37 = require("@remix-run/react"), import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), PropertyMetafieldEditForm = ({
  activatorTitle,
  onAdd,
  values,
  index,
  standardProperties,
  active,
  handleToggle
}) => {
  let [loading, setLoading] = (0, import_react36.useState)(!1), [options, setOptions] = (0, import_react36.useState)(standardProperties), [selectedOptions, setSelectedOptions] = (0, import_react36.useState)(
    _20.get(values, "item.id") ? [_20.get(values, "propertyBase.id")] : []
  ), handleSetSelectedOptions = (0, import_react36.useCallback)((values2) => {
    setSelectedOptions(values2);
  }, []), [ranking, handleSetRanking] = (0, import_react36.useState)("Key"), setRanking = (0, import_react36.useCallback)((value) => handleSetRanking(value), []), [name, handleSetName] = (0, import_react36.useState)(_20.get(values, "name", "")), setName = (0, import_react36.useCallback)((value) => handleSetName(value), []), [propertyValue, handleSetPropertyValue] = (0, import_react36.useState)(
    _20.get(values, "propertyValue", "")
  ), setPropertyValue = (0, import_react36.useCallback)(
    (value) => handleSetPropertyValue(value),
    []
  ), [errors, _setErrors] = (0, import_react36.useState)({}), [propertyBase, handleSetPropertyBase] = (0, import_react36.useState)(
    _20.get(values, "propertyBase")
  ), setPropertyBase = (0, import_react36.useCallback)(
    (value) => handleSetPropertyBase(value),
    []
  );
  (0, import_react36.useEffect)(() => {
    _20.get(values, "name") && setName(_20.get(values, "name")), _20.get(values, "propertyValue") && setPropertyValue(_20.get(values, "propertyValue")), _20.get(values, "ranking") && setRanking(_20.get(values, "ranking")), _20.get(values, "propertyBase") && setPropertyBase(_20.get(values, "propertyBase")), (_20.get(values, "item.id") || _20.get(values, "propertyBase.id")) && handleSetSelectedOptions(
      _20.get(values, "item.id") ? [_20.get(values, "propertyBase.id")] : []
    ), _20.get(values, "id") && setId(_20.get(values, "id"));
  }, [values]);
  let fetcher = (0, import_react37.useFetcher)();
  (0, import_react36.useEffect)(() => {
    if (fetcher.data) {
      let o = _20.map(_20.get(fetcher.data, "data.metaobjects.edges"), (item) => ({
        value: _20.get(item, "node.id"),
        label: _20.get(item, "node.displayName")
      }));
      setOptions(o);
    }
  }, [fetcher.data]), (0, import_react36.useEffect)(() => {
    if (fetcher.data) {
      let o = _20.map(_20.get(fetcher.data, "data.metaobjects.edges"), (item) => ({
        value: _20.get(item, "node.id"),
        label: _20.get(item, "node.displayName")
      }));
      setOptions(o);
    }
  }, [fetcher.data]);
  let onSearch = async (data) => {
    await fetcher.load(
      `/app/search-metaobjects/standard_properties?query=${_20.get(
        data,
        "query"
      )}&d=${(/* @__PURE__ */ new Date()).toString()}&after=${_20.get(
        data,
        "after"
      )}&before=${_20.get(data, "before")}`
    );
  }, [id, handleSetId] = (0, import_react36.useState)(_20.get(values, "id") || numberGenerator()), setId = (0, import_react36.useCallback)((value) => handleSetId(value), []), onSubmit = () => {
    setErrors({}), name || setErrors({ ...errors, name: FIELD_REQUIRED }), ranking || setErrors({ ...errors, ranking: FIELD_REQUIRED }), propertyValue || setErrors({ ...errors, propertyValue: FIELD_REQUIRED }), _20.get(propertyBase, "id") || setErrors({ ...errors, propertyBase: FIELD_REQUIRED }), !Object.keys(errors).length && (!name || !ranking || !propertyValue || !_20.get(propertyBase, "id") || (onAdd(
      {
        id,
        name,
        ranking,
        propertyValue,
        meta: {},
        propertyBase
      },
      index
    ), setId(numberGenerator()), handleToggle()));
  }, setErrors = (0, import_react36.useCallback)((value) => _setErrors(value), []), handleRankingChange = (0, import_react36.useCallback)(
    (value) => setRanking(value),
    []
  ), handleNameChange = (0, import_react36.useCallback)(
    (newValue) => setName(newValue),
    []
  ), handlePropertyValueChange = (0, import_react36.useCallback)(
    (newValue) => setPropertyValue(newValue),
    []
  ), raking = [
    { label: "Key", value: "Key" },
    { label: "Main", value: "Main" },
    { label: "Details", value: "Details" }
  ];
  return (0, import_react36.useEffect)(() => {
    if (!_20.get(selectedOptions, "[0]"))
      return;
    let option = _20.find(
      _20.get(fetcher.data, "data.metaobjects.edges"),
      (item) => _20.get(item, "node.id") === _20.get(selectedOptions, "[0]")
    ), propertyBase2 = {
      name: _20.get(option, "node.displayName"),
      id: _20.get(option, "node.id"),
      metaobject_type: _20.get(option, "node.id")
    };
    setPropertyBase(propertyBase2);
  }, [selectedOptions]), (0, import_react36.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
    import_polaris35.Modal,
    {
      activator: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { style: { display: activatorTitle ? "block" : "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_polaris35.Button, { size: "micro", onClick: handleToggle, children: activatorTitle }, void 0, !1, {
        fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
        lineNumber: 202,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
        lineNumber: 201,
        columnNumber: 5
      }, this),
      open: active,
      onClose: handleToggle,
      title: "Property",
      primaryAction: {
        content: "Ok",
        onAction: onSubmit
      },
      secondaryActions: [
        {
          content: "Cancel",
          onAction: handleToggle
        }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_polaris35.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_polaris35.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          import_polaris35.TextField,
          {
            label: "Name",
            value: name,
            onChange: handleNameChange,
            autoComplete: "off",
            error: errors.name
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
            lineNumber: 228,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_polaris35.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          import_polaris35.Select,
          {
            label: "Ranking",
            options: raking,
            onChange: handleRankingChange,
            value: ranking,
            error: errors.ranking
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
            lineNumber: 236,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_polaris35.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
          lineNumber: 243,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          import_polaris35.TextField,
          {
            label: "Property Value",
            value: propertyValue,
            onChange: handlePropertyValueChange,
            autoComplete: "off",
            error: errors.propertyValue
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
            lineNumber: 244,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_polaris35.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          SelectField_default,
          {
            onSearch,
            options,
            loading,
            label: "Select Item (Type First Letters to Search)",
            selectedOptions,
            setSelectedOptions: handleSetSelectedOptions,
            error: errors.propertyBase,
            placeholder: _20.get(values, "propertyBase.name") || "search.."
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
            lineNumber: 252,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
      lineNumber: 210,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
    lineNumber: 209,
    columnNumber: 5
  }, this);
}, PropertyMetafieldEditForm_default = PropertyMetafieldEditForm;

// app/components/Tables/ProductProperties.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), ProductProperties = ({
  properties,
  loading: isLoading,
  onEdit,
  fetcher,
  onAdd,
  onRemove,
  handleItemChange,
  standardProperties,
  formik
}) => {
  let resourceName = {
    singular: "property",
    plural: "properties"
  }, [loading, setLoading] = (0, import_react38.useState)(!1), [item, setItem] = (0, import_react38.useState)({}), handleSetItem = (0, import_react38.useCallback)(
    (value) => {
      setItem(value);
    },
    [item]
  ), { active, handleClose, handleOpen } = useHandleToggleModal();
  (0, import_react38.useEffect)(() => {
    get2(item, "name") && handleOpen();
  }, [item]);
  let SortableItem = (0, import_react_sortable_hoc8.sortableElement)(
    ({ id, name, ranking, propertyValue, propertyBase }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      import_polaris36.IndexTable.Row,
      {
        id: propertyBase.id,
        position: index,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_polaris36.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_polaris36.ButtonGroup, { segmented: !0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_polaris36.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(DragHandle_default, {}, void 0, !1, {
              fileName: "app/components/Tables/ProductProperties.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/Tables/ProductProperties.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              import_polaris36.Button,
              {
                size: "micro",
                onClick: () => {
                  onRemove(id);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(DeleteIcon_default, {}, void 0, !1, {
                  fileName: "app/components/Tables/ProductProperties.tsx",
                  lineNumber: 84,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Tables/ProductProperties.tsx",
                lineNumber: 78,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              import_polaris36.Button,
              {
                size: "micro",
                onClick: () => {
                  handleSetItem({
                    id,
                    name,
                    propertyValue,
                    ranking,
                    propertyBase
                  });
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(EditIcon_default, {}, void 0, !1, {
                  fileName: "app/components/Tables/ProductProperties.tsx",
                  lineNumber: 99,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Tables/ProductProperties.tsx",
                lineNumber: 87,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Tables/ProductProperties.tsx",
            lineNumber: 74,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/ProductProperties.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_polaris36.IndexTable.Cell, { children: truncate(name) }, void 0, !1, {
            fileName: "app/components/Tables/ProductProperties.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_polaris36.IndexTable.Cell, { children: propertyBase.name }, void 0, !1, {
            fileName: "app/components/Tables/ProductProperties.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_polaris36.IndexTable.Cell, { children: ranking }, void 0, !1, {
            fileName: "app/components/Tables/ProductProperties.tsx",
            lineNumber: 106,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_polaris36.IndexTable.Cell, { children: propertyValue }, void 0, !1, {
            fileName: "app/components/Tables/ProductProperties.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this)
        ]
      },
      `${index}-${propertyBase.id}-${name}`,
      !0,
      {
        fileName: "app/components/Tables/ProductProperties.tsx",
        lineNumber: 68,
        columnNumber: 7
      },
      this
    )
  ), SortableContainer = (0, import_react_sortable_hoc8.sortableContainer)(({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
    import_polaris36.IndexTable,
    {
      resourceName,
      itemCount: (properties == null ? void 0 : properties.length) || 0,
      selectable: !1,
      headings: [
        { title: "" },
        { title: "Name" },
        { title: "Property base" },
        { title: "Ranking" },
        { title: "Property value" }
      ],
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 113,
      columnNumber: 7
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_polaris36.LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Loaders_default, {}, void 0, !1, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 137,
      columnNumber: 31
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      PropertyMetafieldEditForm_default,
      {
        activatorTitle: "",
        onAdd: onEdit,
        index: 0,
        active,
        handleToggle: active ? handleClose : handleOpen,
        standardProperties,
        values: item
      },
      void 0,
      !1,
      {
        fileName: "app/components/Tables/ProductProperties.tsx",
        lineNumber: 138,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_polaris36.VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(SortableContainer, { onSortEnd: ({ oldIndex, newIndex }) => {
      let _items = (0, import_react_sortable_hoc8.arrayMove)(properties, oldIndex, newIndex);
      handleItemChange(_items);
    }, useDragHandle: !0, children: _21.map(properties, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      SortableItem,
      {
        index,
        item: _21.get(value, "item"),
        name: value == null ? void 0 : value.name,
        id: _21.get(value, "id"),
        ranking: _21.get(value, "ranking"),
        propertyBase: _21.get(value, "propertyBase"),
        propertyValue: _21.get(value, "propertyValue")
      },
      `item-${_21.get(value, "id")}-${/* @__PURE__ */ new Date()}-${index}`,
      !1,
      {
        fileName: "app/components/Tables/ProductProperties.tsx",
        lineNumber: 150,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 148,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/ProductProperties.tsx",
    lineNumber: 136,
    columnNumber: 5
  }, this);
}, ProductProperties_default = ProductProperties;

// app/components/Form/Product/PropertyMetafieldForm.tsx
var import_polaris37 = require("@shopify/polaris"), import_react39 = require("react"), _22 = __toESM(require("lodash"));
var import_react40 = require("@remix-run/react"), import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), PropertyMetafieldForm = ({
  activatorTitle,
  onAdd,
  values,
  index,
  standardProperties
}) => {
  let { active, handleClose, handleOpen } = useHandleToggleModal(), [loading, setLoading] = (0, import_react39.useState)(!1), [options, setOptions] = (0, import_react39.useState)(standardProperties), [selectedOptions, setSelectedOptions] = (0, import_react39.useState)(
    _22.get(values, "item.id") ? [_22.get(values, "propertyBase.id")] : []
  ), [ranking, setRanking] = (0, import_react39.useState)("Key"), [name, setName] = (0, import_react39.useState)(_22.get(values, "name", "")), [propertyValue, setPropertyValue] = (0, import_react39.useState)(
    _22.get(values, "propertyValue", "")
  ), [errors, _setErrors] = (0, import_react39.useState)({}), [propertyBase, setPropertyBase] = (0, import_react39.useState)(
    _22.get(values, "propertyBase")
  ), fetcher = (0, import_react40.useFetcher)();
  (0, import_react39.useEffect)(() => {
    if (fetcher.data) {
      let o = _22.map(_22.get(fetcher.data, "data.metaobjects.edges"), (item) => ({
        value: _22.get(item, "node.id"),
        label: _22.get(item, "node.displayName")
      }));
      setOptions(o);
    }
  }, [fetcher.data]);
  let onSearch = async (data) => {
    await fetcher.load(
      `/app/search-metaobjects/standard_properties?query=${_22.get(
        data,
        "query"
      )}&d=${(/* @__PURE__ */ new Date()).toString()}&after=${_22.get(
        data,
        "after"
      )}&before=${_22.get(data, "before")}`
    );
  }, onSubmit = () => {
    setErrors({}), name || setErrors({ ...errors, name: FIELD_REQUIRED }), ranking || setErrors({ ...errors, ranking: FIELD_REQUIRED }), propertyValue || setErrors({ ...errors, propertyValue: FIELD_REQUIRED }), _22.get(propertyBase, "id") || setErrors({ ...errors, propertyBase: FIELD_REQUIRED }), !Object.keys(errors).length && (!name || !ranking || !propertyValue || !_22.get(propertyBase, "id") || (onAdd(
      {
        id: _22.get(values, "id") || numberGenerator(),
        name,
        ranking,
        propertyValue,
        meta: {},
        propertyBase
      },
      index
    ), handleClose()));
  }, setErrors = (0, import_react39.useCallback)((value) => _setErrors(value), []), handleRankingChange = (0, import_react39.useCallback)(
    (value) => setRanking(value),
    []
  ), handleNameChange = (0, import_react39.useCallback)(
    (newValue) => setName(newValue),
    []
  ), handlePropertyValueChange = (0, import_react39.useCallback)(
    (newValue) => setPropertyValue(newValue),
    []
  ), raking = [
    { label: "Key", value: "Key" },
    { label: "Main", value: "Main" },
    { label: "Details", value: "Details" }
  ];
  return (0, import_react39.useEffect)(() => {
    if (!_22.get(selectedOptions, "[0]"))
      return;
    let option = _22.find(
      _22.get(fetcher.data, "data.metaobjects.edges"),
      (item) => _22.get(item, "node.id") === _22.get(selectedOptions, "[0]")
    ), propertyBase2 = {
      name: _22.get(option, "node.displayName"),
      id: _22.get(option, "node.id"),
      metaobject_type: _22.get(option, "node.id")
    };
    setPropertyBase(propertyBase2);
  }, [selectedOptions]), (0, import_react39.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
    import_polaris37.Modal,
    {
      activator: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { style: { display: activatorTitle ? "block" : "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_polaris37.Button, { size: "micro", onClick: handleOpen, children: activatorTitle }, void 0, !1, {
        fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
        lineNumber: 146,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
        lineNumber: 145,
        columnNumber: 5
      }, this),
      open: active,
      onClose: handleClose,
      title: "Property",
      primaryAction: {
        content: "Ok",
        onAction: onSubmit
      },
      secondaryActions: [
        {
          content: "Cancel",
          onAction: handleClose
        }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_polaris37.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_polaris37.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          import_polaris37.TextField,
          {
            label: "Name",
            value: name,
            onChange: handleNameChange,
            autoComplete: "off",
            error: errors.name
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
            lineNumber: 172,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_polaris37.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          import_polaris37.Select,
          {
            label: "Ranking",
            options: raking,
            onChange: handleRankingChange,
            value: ranking,
            error: errors.ranking
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
            lineNumber: 180,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_polaris37.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          import_polaris37.TextField,
          {
            label: "Property Value",
            value: propertyValue,
            onChange: handlePropertyValueChange,
            autoComplete: "off",
            error: errors.propertyValue
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
            lineNumber: 188,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_polaris37.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
          lineNumber: 195,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          SelectField_default,
          {
            onSearch,
            options,
            loading,
            label: "Select Item (Type First Letters to Search)",
            selectedOptions,
            setSelectedOptions,
            error: errors.propertyBase,
            placeholder: _22.get(values, "propertyBase.name") || "search.."
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
            lineNumber: 196,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
        lineNumber: 171,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
      lineNumber: 154,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
}, PropertyMetafieldForm_default = PropertyMetafieldForm;

// app/components/Form/Product/DuplicateMetaobject.tsx
var import_polaris38 = require("@shopify/polaris"), import_react41 = require("react");
var _23 = __toESM(require("lodash")), import_react42 = require("@remix-run/react"), import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), DuplicateMetaobject = ({ modalTitle, metaobject, activatorRef }) => {
  var _a2;
  let actionErrors = ((_a2 = (0, import_react42.useActionData)()) == null ? void 0 : _a2.errors) || {}, action9 = (0, import_react42.useActionData)() || {}, location = (0, import_react42.useLocation)(), [name, setName] = (0, import_react41.useState)(`Copy of - ${_23.get(metaobject, "name")}`), [errors, setErrors] = (0, import_react41.useState)({}), [laoding, setLoading] = (0, import_react41.useState)(!1), handleLoadingChange = (0, import_react41.useCallback)((value) => setLoading(value), []), handleValueChange = (0, import_react41.useCallback)((value) => setName(value), []), handleSetErrors = (0, import_react41.useCallback)((value) => setErrors(value), []), [active, setActive] = (0, import_react41.useState)(!1), submit = (0, import_react42.useSubmit)(), handleOpen = (0, import_react41.useCallback)(() => {
    setActive(!0), setLoading(!1);
  }, []), handleClose = (0, import_react41.useCallback)(() => {
    setActive(!1), setLoading(!1);
  }, []);
  return (0, import_react41.useEffect)(() => {
    setLoading(!1);
  }, []), (0, import_react41.useEffect)(() => {
    setLoading(!1);
  }, [action9 == null ? void 0 : action9.data]), (0, import_react41.useEffect)(() => {
    handleClose(), setLoading(!1);
  }, [location]), /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { style: { height: 0, display: "none" }, ref: activatorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_polaris38.Button, { onClick: handleOpen, children: "~" }, void 0, !1, {
      fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      import_polaris38.Modal,
      {
        small: !0,
        open: active,
        onClose: handleClose,
        title: modalTitle,
        primaryAction: {
          content: "Ok",
          onAction: async () => {
            if (handleSetErrors({}), handleLoadingChange(!0), !name)
              return handleSetErrors({ title: FIELD_REQUIRED });
            let data = {
              name,
              metaobject,
              description: _23.get(metaobject, "description"),
              content: _23.get(metaobject, "content"),
              ownerId: _23.get(metaobject, "id"),
              properties: _23.get(metaobject, "properties"),
              strapi_id: _23.get(metaobject, "strapi_id"),
              handle: _23.get(metaobject, "handle"),
              additionalmedia: _23.get(metaobject, "additionalmedia"),
              mainmedia: _23.get(metaobject, "mainmedia[0]", ""),
              prop_use: _23.get(metaobject, "prop_use")
            };
            await submit(data, { method: "post", action: "/app/item/duplicate" });
          },
          loading: laoding
        },
        secondaryActions: [
          {
            content: "Cancel",
            onAction: handleClose
          }
        ],
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_polaris38.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_polaris38.Box, { children: [
          Object.keys(actionErrors).length ? /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            import_polaris38.InlineError,
            {
              message: JSON.stringify(actionErrors),
              fieldID: "errors"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
              lineNumber: 97,
              columnNumber: 15
            },
            this
          ) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            import_polaris38.TextField,
            {
              label: "Name",
              value: name,
              onChange: handleValueChange,
              autoComplete: "off",
              error: errors.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
              lineNumber: 102,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_polaris38.Box, { padding: "2" }, void 0, !1, {
            fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_polaris38.Text, { variant: "bodyLg", as: "p", children: "All item details will be copied from the original item." }, void 0, !1, {
            fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
            lineNumber: 111,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
        lineNumber: 77,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}, DuplicateMetaobject_default = DuplicateMetaobject;

// app/routes/app.item.$handle.tsx
var import_formik3 = require("formik");
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: markdown_editor_default },
  { rel: "stylesheet", href: markdown_default },
  { rel: "stylesheet", href: styles_default }
], MDEditor5 = (0, import_react44.lazy)(() => import("@uiw/react-md-editor"));
async function loader7({ request, params }) {
  let id = numberGenerator(), data = await (await useStorefrontFetch_default(
    JSON.stringify({
      query: getMetaobjectQuery,
      variables: {
        metaobjectHandleInput: {
          handle: params.handle,
          type: "item_definition"
        }
      }
    })
  )).json(), metaobject = _24.get(data, "data.metaobject"), properties = findValueFromFields(metaobject, "prop_use");
  properties && (properties = JSON.parse(properties));
  let metaobjectId = _24.get(metaobject, "id"), description = findValueFromFields(metaobject, "description"), content = findValueFromFields(metaobject, "content") || description, name = findValueFromFields(metaobject, "name"), deprecated_properties = findValueFromFields(metaobject, "properties"), strapi_id = findValueFromFields(metaobject, "strapi_id") || "", main_media = findValueFromFields(metaobject, "main_media") || "", additional_media = findValueFromFields(metaobject, "additional_media");
  additional_media != null && additional_media.length ? additional_media = JSON.parse(additional_media) : additional_media = [];
  let _metaobject = {
    id: metaobjectId,
    description,
    content,
    name,
    main_media,
    additional_media,
    handle: params.handle,
    strapi_id,
    properties: deprecated_properties,
    prop_use: _24.map(_24.get(properties, "data", []), (it, index) => ({
      id: index + id + 1,
      ...it
    }))
  };
  return (0, import_node11.json)(
    {
      metaobject: _metaobject,
      type: "item_definition",
      productProperties: _24.map(_24.get(properties, "data", []), (it, index) => ({
        id: index + id + 1,
        ...it
      }))
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate"
      }
    }
  );
}
async function action5({ request, params }) {
  var _a2, _b;
  let { admin } = await authenticate.admin(request), data = {
    ...Object.fromEntries(await request.formData())
  }, id = _24.get(data, "ownerId"), handle = _24.get(data, "handle"), fields = [];
  fields.push({
    key: "name",
    value: _24.get(data, "name")
  }), fields.push({
    key: "strapi_id",
    value: _24.get(data, "strapi_id")
  }), fields.push({
    key: "description",
    value: _24.get(data, "description")
  }), fields.push({
    key: "content",
    value: _24.get(data, "content")
  }), _24.get(data, "properties") && fields.push({
    key: "properties",
    value: _24.get(data, "properties")
  }), _24.get(data, "prop_use") ? fields.push({
    key: "prop_use",
    value: _24.get(data, "prop_use")
  }) : fields.push({
    key: "prop_use",
    value: JSON.stringify({ data: [] })
  }), fields.push({
    key: "main_media",
    value: _24.get(data, "mainmedia", "")
  }), _24.get(data, "additionalmedia") && fields.push({
    key: "additional_media",
    value: _24.get(data, "additionalmedia")
  });
  let variables = createItemDefinitionVariables({
    id,
    handle,
    fields
  }), response = await updateItemDefinitionMutation({
    graphql: admin.graphql,
    variables
  }), errors = (_b = (_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2.metaobjectUpdate) == null ? void 0 : _b.userErrors;
  return errors != null && errors.length ? (0, import_node11.json)({ errors }, { status: 422 }) : (0, import_node11.json)(
    { data: _24.get(response, "data") },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate"
      }
    }
  );
}
function ProductPage() {
  let { metaobject, productProperties, type } = (0, import_react43.useLoaderData)(), [formDirty, setFormDirty] = (0, import_react44.useState)(!1), [loading, setLoading] = (0, import_react44.useState)(!1), activatorRef = (0, import_react44.useRef)(null), propertiesFetcher = (0, import_react43.useFetcher)(), [standardProperties, setStandardProperties] = (0, import_react44.useState)([]);
  (0, import_react44.useEffect)(() => {
    if (propertiesFetcher.data) {
      let o = _24.map(
        _24.get(propertiesFetcher.data, "data.metaobjects.edges"),
        (item) => ({
          value: _24.get(item, "node.id"),
          label: _24.get(item, "node.displayName")
        })
      );
      setStandardProperties(o);
    }
  }, [propertiesFetcher.data]), (0, import_react44.useEffect)(() => {
    !standardProperties.length && !loading && onSearch({});
  }, []);
  let onSearch = async (data) => {
    propertiesFetcher.load(
      `/app/search-metaobjects/standard_properties?query=${_24.get(
        data,
        "query"
      )}&after=${_24.get(data, "after")}&before=${_24.get(data, "before")}&first=10`
    );
  }, actionData = (0, import_react43.useActionData)(), [additionalMedia, setAdditionalMedia] = (0, import_react44.useState)(
    _24.get(metaobject, "additional_media")
  ), handleLoadingChange = (0, import_react44.useCallback)((value) => setLoading(value), []), handleImagesChange = (0, import_react44.useCallback)((value) => {
    setAdditionalMedia(value), setFormDirty(!0);
  }, []), submit = (0, import_react43.useSubmit)(), handleFormDirty = (0, import_react44.useCallback)(() => setFormDirty(!0), []), initialValues = (0, import_react44.useMemo)(
    () => ({
      properties: productProperties || [],
      name: _24.get(metaobject, "name", ""),
      description: _24.get(metaobject, "description", " "),
      content: _24.get(metaobject, "content", " "),
      mainmedia: _24.get(metaobject, "main_media", "") ? [_24.get(metaobject, "main_media", "")] : []
    }),
    [productProperties, actionData, metaobject]
  ), formik = (0, import_formik3.useFormik)({
    initialValues,
    validateOnChange: !1,
    onSubmit: (values) => {
      var _a2;
      handleLoadingChange(!0);
      let data = {
        name: values.name,
        description: values.description,
        content: values.content,
        ownerId: _24.get(metaobject, "id"),
        properties: _24.get(metaobject, "properties", []),
        strapi_id: _24.get(metaobject, "strapi_id"),
        handle: _24.get(metaobject, "handle"),
        additionalmedia: JSON.stringify(additionalMedia),
        mainmedia: _24.get(values, "mainmedia")
      };
      (_a2 = values.properties) != null && _a2.length && (data.prop_use = JSON.stringify({ data: values.properties })), submit(data, { method: "post" });
    }
  }), navigate = (0, import_react43.useNavigate)(), { toastMarkup, showToast } = useToast();
  (0, import_react44.useEffect)(() => {
    if (handleLoadingChange(!1), _24.get(actionData, "errors"))
      return showToast(
        `Something went wrong. ${JSON.stringify(
          _24.get(actionData, "errors[0].message")
        )}`,
        !0
      );
    formik.dirty && showToast("Updated successfully"), setFormDirty(!1);
  }, [actionData]);
  let handlePropertiesChange = (0, import_react44.useCallback)((values) => {
    formik.setFieldValue("properties", values), setFormDirty(!0);
  }, []), handleSubmit = () => {
    formik.handleSubmit();
  }, addProperty = (item) => {
    formik.setFieldValue(
      "properties",
      [
        item,
        ...get2(formik, "values.properties", [])
      ]
    ), handleFormDirty();
  }, removeProperty = (id) => {
    var _a2;
    formik.setFieldValue(
      "properties",
      (_a2 = get2(formik, "values.properties", [])) == null ? void 0 : _a2.filter(
        (it) => _24.get(it, "id") !== id
      )
    ), handleFormDirty();
  }, onEditProperty = (item) => {
    let index = _24.findIndex(
      formik.values.properties,
      (prop) => (prop == null ? void 0 : prop.id) === (item == null ? void 0 : item.id)
    );
    formik.setFieldValue(`properties[${index}]`, item), handleFormDirty();
  }, removeAdditionalImages = (image) => {
    setAdditionalMedia([...additionalMedia.filter((it) => it !== image)]), handleFormDirty();
  }, onAddMainMedia = (value) => {
    formik.setFieldValue("mainmedia", [value]), handleFormDirty();
  }, onAddAdditionalMedia = (image) => {
    setAdditionalMedia([image, ...additionalMedia]), handleFormDirty();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
    import_polaris39.Page,
    {
      backAction: { content: "Products", url: "/app/items/item_definition" },
      title: _24.get(metaobject, "name", ""),
      subtitle: "Item",
      compactTitle: !0,
      secondaryActions: [
        {
          content: "Duplicate",
          accessibilityLabel: "Secondary action label",
          onAction: () => {
            var _a2, _b;
            (_b = (_a2 = activatorRef.current) == null ? void 0 : _a2.querySelector("button")) == null || _b.click();
          }
        }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_polaris39.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_polaris39.Layout.Section, { children: [
        formDirty ? /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          SaveAppBar_default,
          {
            saveAction: handleSubmit,
            loading,
            discardAction: () => {
              navigate(`/app/items/${type}`);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 390,
            columnNumber: 11
          },
          this
        ) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_polaris39.Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
            DuplicateMetaobject_default,
            {
              modalTitle: "Duplicate",
              metaobject: {
                name: get2(formik, "values.name"),
                description: get2(formik, "values.description"),
                content: get2(formik, "values.content"),
                id: _24.get(metaobject, "id"),
                properties: _24.get(metaobject, "properties"),
                strapi_id: _24.get(metaobject, "strapi_id"),
                handle: _24.get(metaobject, "handle"),
                additionalmedia: JSON.stringify(additionalMedia),
                mainmedia: _24.get(formik, "values.mainmedia"),
                prop_use: JSON.stringify({
                  data: _24.get(formik, "values.properties")
                })
              },
              activatorRef
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.item.$handle.tsx",
              lineNumber: 399,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_polaris39.VerticalStack, { gap: "3", children: [
            toastMarkup,
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
              import_polaris39.TextField,
              {
                label: "Name",
                value: get2(formik, "values.name"),
                onChange: (e) => {
                  formik.setFieldValue("name", e), handleFormDirty();
                },
                autoComplete: "off"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.item.$handle.tsx",
                lineNumber: 419,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_react44.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_react43.Await, { resolve: get2(formik, "values.content"), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_jsx_dev_runtime41.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("label", { children: "Description" }, void 0, !1, {
                fileName: "app/routes/app.item.$handle.tsx",
                lineNumber: 433,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_polaris39.Box, { padding: "1" }, void 0, !1, {
                fileName: "app/routes/app.item.$handle.tsx",
                lineNumber: 434,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { "data-color-mode": "light", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
                  MDEditor5,
                  {
                    id: get2(formik, "values.content"),
                    value: value != null && value.includes("children") ? toHTML(value) : value,
                    name: "description",
                    onChange: (e) => {
                      formik.setFieldValue("content", e), setFormDirty(!0);
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.item.$handle.tsx",
                    lineNumber: 436,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_polaris39.Box, { padding: "2" }, void 0, !1, {
                  fileName: "app/routes/app.item.$handle.tsx",
                  lineNumber: 447,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.item.$handle.tsx",
                lineNumber: 435,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.item.$handle.tsx",
              lineNumber: 432,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.item.$handle.tsx",
              lineNumber: 430,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.item.$handle.tsx",
              lineNumber: 429,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_polaris39.Text, { variant: "headingMd", as: "h6", children: "Properties" }, void 0, !1, {
                    fileName: "app/routes/app.item.$handle.tsx",
                    lineNumber: 461,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
                    PropertyMetafieldForm_default,
                    {
                      activatorTitle: "Add Property",
                      onAdd: addProperty,
                      values: {},
                      standardProperties
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.item.$handle.tsx",
                      lineNumber: 465,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/app.item.$handle.tsx",
                lineNumber: 454,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
              ProductProperties_default,
              {
                fetcher: propertiesFetcher,
                onEdit: onEditProperty,
                onRemove: removeProperty,
                properties: get2(formik, "values.properties"),
                handleItemChange: handlePropertiesChange,
                standardProperties
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.item.$handle.tsx",
                lineNumber: 473,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_polaris39.Text, { variant: "headingMd", as: "h6", children: "Main Media" }, void 0, !1, {
                    fileName: "app/routes/app.item.$handle.tsx",
                    lineNumber: 488,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
                    ImageForm_default,
                    {
                      activatorTitle: `${_24.get(formik, "values.mainmedia.length") ? "Edit" : "Add"} Main Media`,
                      onAdd: onAddMainMedia
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.item.$handle.tsx",
                      lineNumber: 492,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/app.item.$handle.tsx",
                lineNumber: 481,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
              ImageGrid_default,
              {
                images: _24.get(formik, "values.mainmedia"),
                onRemove: (image) => {
                  formik.setFieldValue("mainmedia", []), handleFormDirty();
                },
                setImages: (values) => {
                  formik.setFieldValue("mainmedia", values), handleFormDirty();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.item.$handle.tsx",
                lineNumber: 499,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_polaris39.Text, { variant: "headingMd", as: "h6", children: "Additional Media" }, void 0, !1, {
                    fileName: "app/routes/app.item.$handle.tsx",
                    lineNumber: 518,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
                    ImageForm_default,
                    {
                      onAdd: onAddAdditionalMedia,
                      activatorTitle: "Add More Media"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.item.$handle.tsx",
                      lineNumber: 522,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/app.item.$handle.tsx",
                lineNumber: 511,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
              ImageGrid_default,
              {
                images: additionalMedia,
                onRemove: removeAdditionalImages,
                setImages: handleImagesChange
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.item.$handle.tsx",
                lineNumber: 527,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 417,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 398,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.item.$handle.tsx",
        lineNumber: 388,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.item.$handle.tsx",
        lineNumber: 387,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.item.$handle.tsx",
      lineNumber: 372,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app._index copy.jsx
var app_index_copy_exports = {};
__export(app_index_copy_exports, {
  default: () => MetaobjectsPage2,
  loader: () => loader8
});
var import_node12 = require("@remix-run/node"), import_react46 = require("@remix-run/react"), import_polaris41 = require("@shopify/polaris"), _25 = __toESM(require("lodash")), import_react47 = require("react"), import_polaris42 = require("@shopify/polaris");

// app/components/Tables/MetaDefinition.tsx
var import_react45 = require("@remix-run/react"), import_polaris40 = require("@shopify/polaris");
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), MetaDefinition = ({ edges, pageInfo }) => {
  let orders = [
    {
      id: "1020",
      order: "#1020",
      date: "Jul 20 at 4:34pm",
      customer: "Jaydon Stanton",
      total: "$969.44",
      paymentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_polaris40.Badge, { progress: "complete", children: "Paid" }, void 0, !1, {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 20,
        columnNumber: 22
      }, this),
      fulfillmentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_polaris40.Badge, { progress: "incomplete", children: "Unfulfilled" }, void 0, !1, {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 21,
        columnNumber: 26
      }, this)
    },
    {
      id: "1019",
      order: "#1019",
      date: "Jul 20 at 3:46pm",
      customer: "Ruben Westerfelt",
      total: "$701.19",
      paymentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_polaris40.Badge, { progress: "partiallyComplete", children: "Partially paid" }, void 0, !1, {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 29,
        columnNumber: 22
      }, this),
      fulfillmentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_polaris40.Badge, { progress: "incomplete", children: "Unfulfilled" }, void 0, !1, {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 30,
        columnNumber: 26
      }, this)
    },
    {
      id: "1018",
      order: "#1018",
      date: "Jul 20 at 3.44pm",
      customer: "Leo Carder",
      total: "$798.24",
      paymentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_polaris40.Badge, { progress: "complete", children: "Paid" }, void 0, !1, {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 38,
        columnNumber: 22
      }, this),
      fulfillmentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_polaris40.Badge, { progress: "incomplete", children: "Unfulfilled" }, void 0, !1, {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 39,
        columnNumber: 26
      }, this)
    }
  ], resourceName = {
    singular: "order",
    plural: "orders"
  }, rowMarkup = edges.map(
    ({ node: { id, name, type, metaobjectsCount } }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      import_polaris40.IndexTable.Row,
      {
        onNavigation: () => {
        },
        id,
        position: index,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_polaris40.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react45.Link, { to: `/app/metaobject/${type}`, children: name }, void 0, !1, {
            fileName: "app/components/Tables/MetaDefinition.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/MetaDefinition.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_polaris40.IndexTable.Cell, { children: type }, void 0, !1, {
            fileName: "app/components/Tables/MetaDefinition.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_polaris40.IndexTable.Cell, { children: `${numberFormat(
            metaobjectsCount
          )} ` }, void 0, !1, {
            fileName: "app/components/Tables/MetaDefinition.tsx",
            lineNumber: 63,
            columnNumber: 11
          }, this)
        ]
      },
      id,
      !0,
      {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 53,
        columnNumber: 9
      },
      this
    )
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_polaris40.LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    import_polaris40.IndexTable,
    {
      resourceName,
      itemCount: orders.length,
      selectable: !1,
      headings: [
        { title: "Name" },
        { title: "Definition Type" },
        { title: "Entries" }
      ],
      children: rowMarkup
    },
    void 0,
    !1,
    {
      fileName: "app/components/Tables/MetaDefinition.tsx",
      lineNumber: 73,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Tables/MetaDefinition.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}, MetaDefinition_default = MetaDefinition;

// app/routes/app._index copy.jsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
async function loader8({ request }) {
  let { admin, session } = await authenticate.admin(request), metaDefinitions = await getMetaDefinitions({
    graphql: admin.graphql,
    definitionCount: 64
  });
  return (0, import_node12.json)({ metaDefinitions });
}
function MetaobjectsPage2() {
  let { metaDefinitions } = (0, import_react46.useLoaderData)(), [active, setActive] = (0, import_react47.useState)(!0), toggleActive = (0, import_react47.useCallback)(() => setActive((active2) => !active2), []), definitions = _25.get(metaDefinitions, "data.metaobjectDefinitions"), activator = /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_polaris42.Button, { onClick: toggleActive, disclosure: !0, children: "More actions" }, void 0, !1, {
    fileName: "app/routes/app._index copy.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
    import_polaris41.Page,
    {
      title: "Metaobjects",
      subtitle: `${numberFormat(
        _25.get(definitions, "edges.length", 0)
      )} definitions`,
      compactTitle: !0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_polaris41.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_polaris41.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_polaris41.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_polaris41.VerticalStack, { gap: "3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
        MetaDefinition_default,
        {
          edges: _25.get(definitions, "edges"),
          pageInfo: _25.get(definitions, "pageInfo")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app._index copy.jsx",
          lineNumber: 53,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/app._index copy.jsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index copy.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index copy.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index copy.jsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app._index copy.jsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.items.$type.tsx
var app_items_type_exports = {};
__export(app_items_type_exports, {
  default: () => MetaobjectsPage3,
  loader: () => loader9
});
var import_node13 = require("@remix-run/node"), import_react50 = require("@remix-run/react"), import_polaris45 = require("@shopify/polaris"), _26 = __toESM(require("lodash")), import_react51 = require("react");

// app/components/Loaders/PageLoader.tsx
var import_polaris43 = require("@shopify/polaris"), import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function PageLoader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonPage, { primaryAction: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.Layout.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.LegacyCard, { sectioned: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonBodyText, {}, void 0, !1, {
        fileName: "app/components/Loaders/PageLoader.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Loaders/PageLoader.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.LegacyCard, { sectioned: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.TextContainer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonDisplayText, { size: "small" }, void 0, !1, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonBodyText, {}, void 0, !1, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Loaders/PageLoader.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Loaders/PageLoader.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.LegacyCard, { sectioned: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.TextContainer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonDisplayText, { size: "small" }, void 0, !1, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 26,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonBodyText, {}, void 0, !1, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 27,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Loaders/PageLoader.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Loaders/PageLoader.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Loaders/PageLoader.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.Layout.Section, { secondary: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.LegacyCard, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.TextContainer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonDisplayText, { size: "small" }, void 0, !1, {
            fileName: "app/components/Loaders/PageLoader.tsx",
            lineNumber: 35,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonBodyText, { lines: 2 }, void 0, !1, {
            fileName: "app/components/Loaders/PageLoader.tsx",
            lineNumber: 36,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonBodyText, { lines: 1 }, void 0, !1, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Loaders/PageLoader.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.LegacyCard, { subdued: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.TextContainer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonDisplayText, { size: "small" }, void 0, !1, {
            fileName: "app/components/Loaders/PageLoader.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonBodyText, { lines: 2 }, void 0, !1, {
            fileName: "app/components/Loaders/PageLoader.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_polaris43.SkeletonBodyText, { lines: 2 }, void 0, !1, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Loaders/PageLoader.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Loaders/PageLoader.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Loaders/PageLoader.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loaders/PageLoader.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Loaders/PageLoader.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var PageLoader_default = PageLoader;

// app/components/Tables/ItemMetaObjects.tsx
var import_react48 = require("@remix-run/react"), import_polaris44 = require("@shopify/polaris");
var import_react49 = require("react"), import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), ItemMetaObjects = ({
  edges,
  pageInfo,
  type,
  onSearch,
  loading: isLoading
}) => {
  let navigate = (0, import_react48.useNavigate)(), resourceName = {
    singular: "item",
    plural: "items"
  }, [loading, setLoading] = (0, import_react49.useState)(!1), handleNavigation = (next) => {
    let rest = {};
    setLoading(!0), next ? rest.after = pageInfo.endCursor : rest.before = pageInfo.startCursor, queryValue != null && (rest.query = queryValue), onSearch(rest);
  }, [queryValue, setQueryValue] = (0, import_react49.useState)(null), handleFiltersQueryChange = (0, import_react49.useCallback)(
    (value) => setQueryValue(value),
    []
  );
  (0, import_react49.useEffect)(() => {
    queryValue != null && onSearch({ query: queryValue });
  }, [queryValue]);
  let [selected] = (0, import_react49.useState)(0), onHandleCancel = () => {
  }, { mode, setMode } = (0, import_polaris44.useSetIndexFiltersMode)();
  (0, import_react49.useEffect)(() => {
    setLoading(!1);
  }, [edges]);
  let rowMarkup = edges.map(
    ({
      node: {
        id,
        definition,
        capabilities,
        displayName,
        handle,
        type: type2,
        updatedAt
      }
    }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
      import_polaris44.IndexTable.Row,
      {
        onNavigation: () => {
        },
        id,
        position: index,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_polaris44.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_polaris44.Text, { variant: "bodyMd", as: "span", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react48.Link, { to: `/app/item/${handle}`, children: truncate(displayName) }, void 0, !1, {
            fileName: "app/components/Tables/ItemMetaObjects.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/ItemMetaObjects.tsx",
            lineNumber: 89,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/ItemMetaObjects.tsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_polaris44.IndexTable.Cell, { children: definition.name }, void 0, !1, {
            fileName: "app/components/Tables/ItemMetaObjects.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_polaris44.IndexTable.Cell, { children: definition.access.storefront }, void 0, !1, {
            fileName: "app/components/Tables/ItemMetaObjects.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_polaris44.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_polaris44.Badge, { size: "small", children: capabilities.publishable.status }, void 0, !1, {
            fileName: "app/components/Tables/ItemMetaObjects.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/ItemMetaObjects.tsx",
            lineNumber: 96,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_polaris44.IndexTable.Cell, { children: dateFormatter(updatedAt) }, void 0, !1, {
            fileName: "app/components/Tables/ItemMetaObjects.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ]
      },
      id,
      !0,
      {
        fileName: "app/components/Tables/ItemMetaObjects.tsx",
        lineNumber: 82,
        columnNumber: 7
      },
      this
    )
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_polaris44.LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Loaders_default, {}, void 0, !1, {
      fileName: "app/components/Tables/ItemMetaObjects.tsx",
      lineNumber: 106,
      columnNumber: 31
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_polaris44.VerticalStack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        import_polaris44.IndexFilters,
        {
          selected,
          filters: [],
          onClearAll: () => {
          },
          cancelAction: {
            onAction: onHandleCancel,
            disabled: !1,
            loading: !1
          },
          tabs: [],
          queryValue: queryValue || "",
          queryPlaceholder: "Search ...",
          onQueryChange: handleFiltersQueryChange,
          onQueryClear: () => {
            setQueryValue("");
          },
          mode,
          setMode,
          hideFilters: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/ItemMetaObjects.tsx",
          lineNumber: 108,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        import_polaris44.IndexTable,
        {
          resourceName,
          itemCount: edges.length,
          selectable: !1,
          headings: [
            { title: "Display Name" },
            { title: "Definition" },
            { title: "Storefront access" },
            { title: "Status" },
            { title: "Last updated" }
          ],
          children: rowMarkup
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/ItemMetaObjects.tsx",
          lineNumber: 128,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_polaris44.HorizontalGrid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "grid-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        "div",
        {
          className: "pagination-wrapper",
          style: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 20
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            import_polaris44.Pagination,
            {
              hasPrevious: pageInfo.hasPreviousPage,
              onPrevious: () => {
                handleNavigation(!1);
              },
              hasNext: pageInfo.hasNextPage,
              onNext: () => {
                handleNavigation(!0);
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/ItemMetaObjects.tsx",
              lineNumber: 153,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/ItemMetaObjects.tsx",
          lineNumber: 144,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Tables/ItemMetaObjects.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Tables/ItemMetaObjects.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Tables/ItemMetaObjects.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/ItemMetaObjects.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}, ItemMetaObjects_default = ItemMetaObjects;

// app/routes/app.items.$type.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
async function loader9({ request, params }) {
  let { admin, session } = await authenticate.admin(request);
  return (0, import_node13.json)({
    definitionType: parseDefinitionType(params.type),
    type: params.type,
    graphql: admin.graphql
  });
}
function MetaobjectsPage3() {
  let { definitionType, type } = (0, import_react50.useLoaderData)(), [edges, setEdges] = (0, import_react51.useState)([]), [pageInfo, setPageInfo] = (0, import_react51.useState)({}), fetcher = (0, import_react50.useFetcher)(), [loading, setLoading] = (0, import_react51.useState)(fetcher.state === "loading"), [pageLoading, setPageLoading] = (0, import_react51.useState)(!0), onSearch = async (data) => {
    fetcher.load(
      `/app/search-metaobjects/${type}?query=${_26.get(
        data,
        "query"
      )}&after=${_26.get(data, "after")}&before=${_26.get(data, "before")}`
    );
  };
  return (0, import_react51.useEffect)(() => {
    fetcher.state === "loading" ? setLoading(!0) : setLoading(!1), fetcher.data && (setEdges(_26.get(fetcher.data, "data.metaobjects.edges", [])), setPageInfo(_26.get(fetcher.data, "data.metaobjects.pageInfo", {})));
  }, [fetcher]), (0, import_react51.useEffect)(() => {
    fetcher.state !== "loading" && pageLoading && setPageLoading(!1);
  }, [fetcher.state]), (0, import_react51.useEffect)(() => {
    fetcher.data || (setPageLoading(!0), onSearch({}));
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    import_polaris45.Page,
    {
      backAction: { content: "Products", url: "/app" },
      title: "Items",
      subtitle: "",
      compactTitle: !0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_polaris45.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_polaris45.Layout.Section, { children: [
        pageLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(PageLoader_default, {}, void 0, !1, {
          fileName: "app/routes/app.items.$type.tsx",
          lineNumber: 78,
          columnNumber: 26
        }, this) : null,
        pageLoading ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_polaris45.VerticalStack, { gap: "3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
          ItemMetaObjects_default,
          {
            edges,
            pageInfo,
            type,
            onSearch,
            loading
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.items.$type.tsx",
            lineNumber: 81,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.items.$type.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.items.$type.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.items.$type.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.items.$type.tsx",
      lineNumber: 70,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.metaobjects.tsx
var app_metaobjects_exports = {};
__export(app_metaobjects_exports, {
  default: () => MetaobjectsPage4,
  loader: () => loader10
});
var import_node14 = require("@remix-run/node"), import_react52 = require("@remix-run/react"), import_polaris46 = require("@shopify/polaris"), _27 = __toESM(require("lodash")), import_react53 = require("react"), import_polaris47 = require("@shopify/polaris");
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
async function loader10({ request }) {
  let { admin, session } = await authenticate.admin(request), metaDefinitions = await getMetaDefinitions({
    graphql: admin.graphql,
    definitionCount: 64
  });
  return (0, import_node14.json)({ metaDefinitions });
}
function MetaobjectsPage4() {
  let { metaDefinitions } = (0, import_react52.useLoaderData)(), [active, setActive] = (0, import_react53.useState)(!0), toggleActive = (0, import_react53.useCallback)(() => setActive((active2) => !active2), []), definitions = _27.get(metaDefinitions, "data.metaobjectDefinitions"), activator = /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_polaris47.Button, { onClick: toggleActive, disclosure: !0, children: "More actions" }, void 0, !1, {
    fileName: "app/routes/app.metaobjects.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
    import_polaris46.Page,
    {
      backAction: { content: "Products", url: "/app" },
      title: "Metaobjects",
      subtitle: `${numberFormat(
        _27.get(definitions, "edges.length", 0)
      )} definitions`,
      compactTitle: !0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_polaris46.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_polaris46.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_polaris46.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_polaris46.VerticalStack, { gap: "3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        MetaDefinition_default,
        {
          edges: _27.get(definitions, "edges"),
          pageInfo: _27.get(definitions, "pageInfo")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.metaobjects.tsx",
          lineNumber: 45,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/app.metaobjects.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.metaobjects.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.metaobjects.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.metaobjects.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.metaobjects.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.product.$id.tsx
var app_product_id_exports = {};
__export(app_product_id_exports, {
  action: () => action6,
  default: () => ProductPage2,
  links: () => links4,
  loader: () => loader11
});
var import_node15 = require("@remix-run/node"), import_react61 = require("@remix-run/react"), import_polaris52 = require("@shopify/polaris"), _32 = __toESM(require("lodash")), import_react62 = require("react");

// app/components/Tables/ProductItems.tsx
var import_polaris49 = require("@shopify/polaris");
var import_react55 = require("react");
var import_react_sortable_hoc9 = require("react-sortable-hoc"), _29 = __toESM(require("lodash"));

// app/components/Form/Product/ItemMetafieldEditorForm.tsx
var import_polaris48 = require("@shopify/polaris"), import_react54 = require("react"), _28 = __toESM(require("lodash"));
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime"), ItemMetafieldEditorForm = ({
  fetcher,
  activatorTitle,
  onAdd,
  values,
  active,
  handleToggle
}) => {
  let [options, setOptions] = (0, import_react54.useState)([]), [loading, setLoading] = (0, import_react54.useState)(!1), [selectedOptions, setSelectedOptions] = (0, import_react54.useState)(
    _28.get(values, "item.id") ? [_28.get(values, "item.id")] : []
  ), [ranking, handleSetRanking] = (0, import_react54.useState)("Key"), setRanking = (0, import_react54.useCallback)((value) => handleSetRanking(value), []), [name, handleSetName] = (0, import_react54.useState)(_28.get(values, "name", "")), setName = (0, import_react54.useCallback)((value) => handleSetName(value), [values]), [qty, setQty] = (0, import_react54.useState)(_28.get(values, "qty", "")), [errors, handleSetErrors] = (0, import_react54.useState)({}), setErrors = (0, import_react54.useCallback)((value) => handleSetErrors(value), []), [item, handleSetItem] = (0, import_react54.useState)(_28.get(values, "item")), setItem = (0, import_react54.useCallback)((value) => handleSetItem(value), []);
  (0, import_react54.useEffect)(() => {
    _28.get(values, "name") && setName(_28.get(values, "name")), _28.get(values, "qty") && setQty(_28.get(values, "qty")), _28.get(values, "ranking") && setRanking(_28.get(values, "ranking")), _28.get(values, "item") && handleSetItem(_28.get(values, "item"));
  }, [values]);
  let onSubmit = () => {
    setErrors({}), name || setErrors({ ...errors, name: FIELD_REQUIRED }), ranking || setErrors({ ...errors, ranking: FIELD_REQUIRED }), qty || setErrors({ ...errors, qty: FIELD_REQUIRED }), item != null && item.id || setErrors({ ...errors, item: FIELD_REQUIRED }), !Object.keys(errors).length && (onAdd({
      id: _28.get(values, "id") || numberGenerator(),
      name,
      ranking,
      qty,
      meta: {},
      item
    }), handleToggle());
  }, handleRankingChange = (0, import_react54.useCallback)(
    (value) => setRanking(value),
    []
  ), handleNameChange = (0, import_react54.useCallback)(
    (newValue) => setName(newValue),
    []
  ), handleQtyChange = (0, import_react54.useCallback)((newValue) => setQty(newValue), []), raking = [
    { label: "Key", value: "Key" },
    { label: "Main", value: "Main" },
    { label: "Details", value: "Details" }
  ];
  (0, import_react54.useEffect)(() => {
    if (!_28.get(selectedOptions, "[0]"))
      return;
    let option = _28.find(
      _28.get(fetcher.data, "data.metaobjects.edges"),
      (item2) => _28.get(item2, "node.id") === _28.get(selectedOptions, "[0]")
    ), propertyBase = {
      name: _28.get(option, "node.displayName"),
      id: _28.get(option, "node.id"),
      metaobject_type: _28.get(option, "node.id")
    };
    setItem(propertyBase);
  }, [selectedOptions]), (0, import_react54.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]), (0, import_react54.useEffect)(() => {
    if (fetcher.data) {
      let o = _28.map(_28.get(fetcher.data, "data.metaobjects.edges"), (item2) => ({
        value: _28.get(item2, "node.id"),
        label: _28.get(item2, "node.displayName")
      }));
      setOptions(o);
    }
  }, [fetcher.data, loading]);
  let onSearch = _28.debounce(function(data) {
    try {
      search(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  }, 1e3), search = (0, import_react54.useCallback)((data) => {
    fetcher.load(
      `/app/search-metaobjects/item_definition?query=${_28.get(
        data,
        "query"
      )}&after=${_28.get(data, "after")}&before=${_28.get(data, "before")}`
    );
  }, []), activator = /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { style: { display: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_polaris48.Button, { size: "micro", onClick: handleToggle, children: activatorTitle }, void 0, !1, {
    fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
    lineNumber: 154,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
  return values != null && values.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
    import_polaris48.Modal,
    {
      activator,
      open: active,
      onClose: handleToggle,
      title: "Item",
      primaryAction: {
        content: "Ok",
        onAction: onSubmit
      },
      secondaryActions: [
        {
          content: "Cancel",
          onAction: handleToggle
        }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_polaris48.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_polaris48.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
          import_polaris48.TextField,
          {
            label: "Name",
            value: name,
            onChange: handleNameChange,
            autoComplete: "off",
            error: errors.name
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
            lineNumber: 184,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_polaris48.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
          import_polaris48.Select,
          {
            label: "Ranking",
            options: raking,
            onChange: handleRankingChange,
            value: ranking,
            error: errors.ranking
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
            lineNumber: 192,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_polaris48.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
          import_polaris48.TextField,
          {
            label: "Qty",
            value: qty,
            type: "number",
            onChange: handleQtyChange,
            autoComplete: "off",
            error: errors.qty
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
            lineNumber: 200,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_polaris48.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
          SelectField_default,
          {
            onSearch,
            label: "Select Item (Type First Letters to Search)",
            options,
            loading,
            selectedOptions,
            setSelectedOptions,
            error: errors.item,
            placeholder: _28.get(values, "item.name") || "search.."
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
            lineNumber: 209,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
        lineNumber: 183,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
      lineNumber: 166,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
    lineNumber: 165,
    columnNumber: 5
  }, this) : null;
}, ItemMetafieldEditorForm_default = ItemMetafieldEditorForm;

// app/components/Tables/ProductItems.tsx
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime"), ProductItems = ({
  items,
  loading: isLoading,
  onRemove,
  onEdit,
  fetcher,
  handleItemChange,
  itemDefinitions,
  formik
}) => {
  let resourceName = {
    singular: "Item",
    plural: "Items"
  }, [loading, setLoading] = (0, import_react55.useState)(!1), [item, setItem] = (0, import_react55.useState)({}), handleSetItem = (0, import_react55.useCallback)(
    (value) => {
      setItem(value);
    },
    [item]
  );
  (0, import_react55.useEffect)(() => {
    get2(item, "name") && handleOpen();
  }, [item]);
  let SortableItem = (0, import_react_sortable_hoc9.sortableElement)(
    ({ id, name, ranking, qty, item: item2 }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
      import_polaris49.IndexTable.Row,
      {
        id: item2 == null ? void 0 : item2.id,
        position: index,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_polaris49.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_polaris49.ButtonGroup, { segmented: !0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_polaris49.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DragHandle_default, {}, void 0, !1, {
              fileName: "app/components/Tables/ProductItems.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/Tables/ProductItems.tsx",
              lineNumber: 74,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
              import_polaris49.Button,
              {
                size: "micro",
                onClick: () => {
                  onRemove(id);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DeleteIcon_default, {}, void 0, !1, {
                  fileName: "app/components/Tables/ProductItems.tsx",
                  lineNumber: 84,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Tables/ProductItems.tsx",
                lineNumber: 78,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_polaris49.Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DragHandle_default, {}, void 0, !1, {
              fileName: "app/components/Tables/ProductItems.tsx",
              lineNumber: 88,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/Tables/ProductItems.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
              import_polaris49.Button,
              {
                size: "micro",
                onClick: () => {
                  handleSetItem({
                    id,
                    name,
                    qty,
                    ranking,
                    item: item2
                  });
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(EditIcon_default, {}, void 0, !1, {
                  fileName: "app/components/Tables/ProductItems.tsx",
                  lineNumber: 103,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Tables/ProductItems.tsx",
                lineNumber: 91,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Tables/ProductItems.tsx",
            lineNumber: 73,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/ProductItems.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_polaris49.IndexTable.Cell, { children: truncate(name) }, void 0, !1, {
            fileName: "app/components/Tables/ProductItems.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_polaris49.IndexTable.Cell, { children: item2 == null ? void 0 : item2.name }, void 0, !1, {
            fileName: "app/components/Tables/ProductItems.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_polaris49.IndexTable.Cell, { children: ranking }, void 0, !1, {
            fileName: "app/components/Tables/ProductItems.tsx",
            lineNumber: 110,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_polaris49.IndexTable.Cell, { children: qty }, void 0, !1, {
            fileName: "app/components/Tables/ProductItems.tsx",
            lineNumber: 111,
            columnNumber: 9
          }, this)
        ]
      },
      `${index}-${item2 == null ? void 0 : item2.id}-${name}`,
      !0,
      {
        fileName: "app/components/Tables/ProductItems.tsx",
        lineNumber: 67,
        columnNumber: 7
      },
      this
    )
  ), SortableContainer = (0, import_react_sortable_hoc9.sortableContainer)(({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
    import_polaris49.IndexTable,
    {
      resourceName,
      itemCount: (items == null ? void 0 : items.length) || 0,
      selectable: !1,
      headings: [
        { title: "" },
        { title: "Name" },
        { title: "Item definition" },
        { title: "Ranking" },
        { title: "Quantity" }
      ],
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 118,
      columnNumber: 7
    },
    this
  )), onSortEnd = ({ oldIndex, newIndex }) => {
    let _items = (0, import_react_sortable_hoc9.arrayMove)(items, oldIndex, newIndex);
    handleItemChange(_items), formik.setFieldValue("items", _items);
  }, { active, handleClose, handleOpen } = useHandleToggleModal();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_polaris49.LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(Loaders_default, {}, void 0, !1, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 143,
      columnNumber: 31
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
      ItemMetafieldEditorForm_default,
      {
        activatorTitle: "",
        active,
        handleToggle: active ? handleClose : handleOpen,
        fetcher,
        onAdd: onEdit,
        itemDefinitions,
        values: item
      },
      void 0,
      !1,
      {
        fileName: "app/components/Tables/ProductItems.tsx",
        lineNumber: 144,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_polaris49.VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(SortableContainer, { onSortEnd, useDragHandle: !0, children: items == null ? void 0 : items.map((value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
      SortableItem,
      {
        index,
        item: _29.get(value, "item"),
        name: value == null ? void 0 : value.name,
        id: _29.get(value, "id"),
        ranking: _29.get(value, "ranking"),
        qty: _29.get(value, "qty")
      },
      `item-${value == null ? void 0 : value.id}-${value == null ? void 0 : value.qty}-${(/* @__PURE__ */ new Date()).toString()}`,
      !1,
      {
        fileName: "app/components/Tables/ProductItems.tsx",
        lineNumber: 156,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 154,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/ProductItems.tsx",
    lineNumber: 142,
    columnNumber: 5
  }, this);
}, ProductItems_default = ProductItems;

// app/graphql/products/productQuery.ts
var productQuery = async ({ graphql, id }) => (await graphql(query5, { variables: { id } })).json(), query5 = `

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

// app/components/Form/Product/ItemMetafieldForm.tsx
var import_polaris50 = require("@shopify/polaris"), import_react56 = require("react"), _30 = __toESM(require("lodash"));
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime"), ItemMetafieldForm = ({ fetcher, activatorTitle, onAdd, values }) => {
  let [active, setActive] = (0, import_react56.useState)(!1), [options, setOptions] = (0, import_react56.useState)([]), [loading, setLoading] = (0, import_react56.useState)(!1), [selectedOptions, setSelectedOptions] = (0, import_react56.useState)(
    _30.get(values, "item.id") ? [_30.get(values, "item.id")] : []
  ), [ranking, handleSetRanking] = (0, import_react56.useState)("Key"), setRanking = (0, import_react56.useCallback)((value) => handleSetRanking(value), []), [name, handleSetName] = (0, import_react56.useState)(_30.get(values, "name", "")), setName = (0, import_react56.useCallback)((value) => handleSetName(value), []), [qty, setQty] = (0, import_react56.useState)(_30.get(values, "qty", "")), [errors, handleSetErrors] = (0, import_react56.useState)({}), setErrors = (0, import_react56.useCallback)((value) => handleSetErrors(value), []), [item, handleSetItem] = (0, import_react56.useState)(_30.get(values, "item")), setItem = (0, import_react56.useCallback)((value) => handleSetItem(value), []), onSubmit = () => {
    setErrors({}), name || setErrors({ ...errors, name: FIELD_REQUIRED }), ranking || setErrors({ ...errors, ranking: FIELD_REQUIRED }), qty || setErrors({ ...errors, qty: FIELD_REQUIRED }), item != null && item.id || setErrors({ ...errors, item: FIELD_REQUIRED }), !Object.keys(errors).length && (onAdd({
      id: _30.get(values, "id") || numberGenerator(),
      name,
      ranking,
      qty,
      meta: {},
      item
    }), handleChange(), setRanking("Key"), setName(""), setItem({}), setQty(""));
  }, handleRankingChange = (0, import_react56.useCallback)(
    (value) => setRanking(value),
    []
  ), handleNameChange = (0, import_react56.useCallback)(
    (newValue) => setName(newValue),
    []
  ), handleQtyChange = (0, import_react56.useCallback)((newValue) => setQty(newValue), []), raking = [
    { label: "Key", value: "Key" },
    { label: "Main", value: "Main" },
    { label: "Details", value: "Details" }
  ];
  (0, import_react56.useEffect)(() => {
    if (!_30.get(selectedOptions, "[0]"))
      return;
    let option = _30.find(
      _30.get(fetcher.data, "data.metaobjects.edges"),
      (item2) => _30.get(item2, "node.id") === _30.get(selectedOptions, "[0]")
    ), propertyBase = {
      name: _30.get(option, "node.displayName"),
      id: _30.get(option, "node.id"),
      metaobject_type: _30.get(option, "node.id")
    };
    setItem(propertyBase);
  }, [selectedOptions]), (0, import_react56.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]), (0, import_react56.useEffect)(() => {
    if (fetcher.data) {
      let o = _30.map(_30.get(fetcher.data, "data.metaobjects.edges"), (item2) => ({
        value: _30.get(item2, "node.id"),
        label: _30.get(item2, "node.displayName")
      }));
      setOptions(o);
    }
  }, [fetcher.data, loading]);
  let onSearch = _30.debounce(function(data) {
    try {
      search(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  }, 1e3), search = (0, import_react56.useCallback)((data) => {
    fetcher.load(
      `/app/search-metaobjects/item_definition?query=${_30.get(
        data,
        "query"
      )}&after=${_30.get(data, "after")}&before=${_30.get(data, "before")}`
    );
  }, []), handleChange = (0, import_react56.useCallback)(() => setActive(!active), [active]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
    import_polaris50.Modal,
    {
      activator: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_polaris50.Button, { size: "micro", onClick: handleChange, children: activatorTitle }, void 0, !1, {
        fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
        lineNumber: 138,
        columnNumber: 5
      }, this),
      open: active,
      onClose: handleChange,
      title: "Item",
      primaryAction: {
        content: "Ok",
        onAction: onSubmit
      },
      secondaryActions: [
        {
          content: "Cancel",
          onAction: handleChange
        }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_polaris50.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_polaris50.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          import_polaris50.TextField,
          {
            label: "Name",
            value: name,
            onChange: handleNameChange,
            autoComplete: "off",
            error: errors.name
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
            lineNumber: 163,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_polaris50.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          import_polaris50.Select,
          {
            label: "Ranking",
            options: raking,
            onChange: handleRankingChange,
            value: ranking,
            error: errors.ranking
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
            lineNumber: 171,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_polaris50.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          import_polaris50.TextField,
          {
            label: "Qty",
            value: qty,
            type: "number",
            onChange: handleQtyChange,
            autoComplete: "off",
            error: errors.qty
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
            lineNumber: 179,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_polaris50.Box, { padding: "2" }, void 0, !1, {
          fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          SelectField_default,
          {
            onSearch,
            label: "Select Item (Type First Letters to Search)",
            options,
            loading,
            selectedOptions,
            setSelectedOptions,
            error: errors.item,
            placeholder: _30.get(values, "item.name") || "search.."
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
            lineNumber: 188,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
      lineNumber: 145,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
    lineNumber: 144,
    columnNumber: 5
  }, this);
}, ItemMetafieldForm_default = ItemMetafieldForm;

// app/graphql/metafields/metafieldSetMutation.ts
var metafieldSetMutation = async ({ graphql, variables }) => (await graphql(query6, {
  variables
})).json(), createVariables = ({
  ownerId,
  properties,
  items,
  additionalmedia,
  mainmedia,
  productdescription
}) => ({
  metafields: [
    {
      namespace: "custom",
      key: "productdescription",
      type: "json",
      value: productdescription,
      ownerId
    },
    {
      namespace: "custom",
      key: "properties",
      type: "json",
      value: properties,
      ownerId
    },
    {
      namespace: "custom",
      key: "items",
      type: "json",
      value: items,
      ownerId
    },
    {
      namespace: "custom",
      key: "additionalmedia",
      type: "list.url",
      value: additionalmedia,
      ownerId
    },
    {
      namespace: "custom",
      key: "mainmedia",
      type: "url",
      value: mainmedia,
      ownerId
    }
  ]
}), query6 = `
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

// app/graphql/products/productUpdate.ts
var productSaveUpdateMutation = async ({ graphql, variables }) => (await graphql(query7, { variables })).json(), createUpdateProductVariables = ({
  productId,
  title,
  descriptionHtml
}) => ({
  shouldQueryMarkets: !0,
  shouldQueryMarketsPro: !1,
  shouldQueryB2bCatalogs: !0,
  shouldMutateInventory: !0,
  includeProductPublicationStatus: !1,
  product: {
    title,
    descriptionHtml,
    id: productId
  },
  productId,
  skipProductUpdate: !1,
  shouldBulkUpdateVariants: !0,
  publicationsToPublish: [],
  publicationsToUnpublish: [],
  shouldPublish: !1,
  shouldUnpublish: !1,
  inventoryItemAdjustments: []
}), query7 = `


mutation ProductSaveUpdate($product: ProductInput!, $productId: ID!, $publicationsToPublish: [PublicationInput!]!, $publicationsToUnpublish: [PublicationInput!]!, $shouldPublish: Boolean!, $shouldUnpublish: Boolean!,  $shouldQueryMarkets: Boolean = false, $shouldQueryMarketsPro: Boolean = false, $shouldQueryB2bCatalogs: Boolean = false, $variantsToBulkUpdate: [ProductVariantsBulkInput!] = [], $shouldBulkUpdateVariants: Boolean!, $skipProductUpdate: Boolean!) {
  productUpdate(input: $product) @skip(if: $skipProductUpdate) {
    product {
      id
      ...OrganizationCardProductDetails
      __typename
    }
    userErrors {
      field
      message
      __typename
    }
    __typename
  }
  productVariantsBulkUpdate(
    productId: $productId
    variants: $variantsToBulkUpdate
  ) @include(if: $shouldBulkUpdateVariants) {
    productVariants {
      ...VariantsCardVariant
      __typename
    }
    userErrors {
      field
      message
      __typename
    }
    __typename
  }
  publishablePublish(id: $productId, input: $publicationsToPublish) @include(if: $shouldPublish) {
    publishable @skip(if: $shouldUnpublish) {
      ... on Product {
        id
        onlineStoreUrl
        resourceMarketPublications: resourcePublicationsV2(
          first: 250
          catalogType: MARKET
          onlyPublished: false
        ) @include(if: $shouldQueryMarkets) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        resourceCountryPublications: resourcePublicationsV2(
          first: 250
          onlyPublished: false
        ) @include(if: $shouldQueryMarketsPro) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        resourceMerchantOfRecordPublications: resourcePublicationsV2(
          first: 1
          onlyPublished: false
        ) @include(if: $shouldQueryMarketsPro) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        resourceB2bCatalogPublications: resourcePublicationsV2(
          first: 250
          catalogType: COMPANY_LOCATION
          onlyPublished: false
        ) @include(if: $shouldQueryB2bCatalogs) {
          nodes {
            publication {
              id
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
    userErrors {
      field
      message
      __typename
    }
    __typename
  }
  publishableUnpublish(id: $productId, input: $publicationsToUnpublish) @include(if: $shouldUnpublish) {
    publishable {
      ... on Product {
        id
        onlineStoreUrl
        resourceMarketPublications: resourcePublicationsV2(
          first: 250
          catalogType: MARKET
          onlyPublished: false
        ) @include(if: $shouldQueryMarkets) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        resourceCountryPublications: resourcePublicationsV2(
          first: 250
          onlyPublished: false
        ) @include(if: $shouldQueryMarketsPro) {
          nodes {
            publication {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        resourceB2bCatalogPublications: resourcePublicationsV2(
          first: 250
          catalogType: COMPANY_LOCATION
          onlyPublished: false
        ) @include(if: $shouldQueryB2bCatalogs) {
          nodes {
            publication {
              id
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
    userErrors {
      field
      message
      __typename
    }
    __typename
  }
}

fragment OrganizationCardProductDetails on Product {
  tags
  vendor
  smartCollections: collections(first: 250, query: "collection_type:smart") {
    ...OrganizationCardCollectionConnection
    __typename
  }
  customCollections: collections(first: 250, query: "collection_type:custom") {
    ...OrganizationCardCollectionConnection
    __typename
  }
  __typename
}

fragment OrganizationCardCollectionConnection on CollectionConnection {
  edges {
    node {
      id
      title
      __typename
    }
    __typename
  }
  __typename
}

fragment VariantsCardVariant on ProductVariant {
  id
  barcode
  price
  compareAtPrice
  requiresShipping
  inventoryQuantity
  position
  sku
  taxable
  weight
  weightUnit
  fulfillmentService {
    serviceName
    handle
    id
    __typename
  }
  inventoryItem {
    id
    locationsCount
    __typename
  }
  ...InventoryItemVariantWithFirstInventoryLevel
  inventoryPolicy
  image {
    id
    src: url
    altText
    __typename
  }
  selectedOptions {
    name
    value
    __typename
  }
  taxCode
  __typename
}

fragment InventoryItemVariantWithFirstInventoryLevel on ProductVariant {
  inventoryItem {
    id
    tracked
    trackedEditable {
      locked
      reason
      __typename
    }
    unitCost {
      amount
      currencyCode
      __typename
    }
    countryCodeOfOrigin
    provinceCodeOfOrigin
    harmonizedSystemCode
    __typename
  }
  __typename
}`;

// app/components/Form/Product/DuplicateForm.tsx
var import_polaris51 = require("@shopify/polaris"), import_react57 = require("react");
var _31 = __toESM(require("lodash")), import_react58 = require("@remix-run/react"), import_jsx_dev_runtime51 = require("react/jsx-dev-runtime"), DuplicateForm = ({ modalTitle, product, activatorRef }) => {
  var _a2;
  let actionErrors = ((_a2 = (0, import_react58.useActionData)()) == null ? void 0 : _a2.errors) || {}, location = (0, import_react58.useLocation)(), [title, setTitle] = (0, import_react57.useState)(`Copy of - ${_31.get(product, "title")}`), [errors, setErrors] = (0, import_react57.useState)({}), [laoding, setLoading] = (0, import_react57.useState)(!1), handleLoadingChange = (0, import_react57.useCallback)((value) => setLoading(value), []), handleValueChange = (0, import_react57.useCallback)((value) => setTitle(value), []), handleSetErrors = (0, import_react57.useCallback)((value) => setErrors(value), []), [active, setActive] = (0, import_react57.useState)(!1), submit = (0, import_react58.useSubmit)(), handleOpen = (0, import_react57.useCallback)(() => setActive(!0), []), handleClose = (0, import_react57.useCallback)(() => {
    setActive(!1);
  }, []);
  return (0, import_react57.useEffect)(() => {
    setLoading(!1);
  }, [active]), (0, import_react57.useEffect)(() => {
    handleClose();
  }, [location]), /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { style: { height: 0, display: "none" }, ref: activatorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_polaris51.Button, { onClick: handleOpen, children: "~" }, void 0, !1, {
      fileName: "app/components/Form/Product/DuplicateForm.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/Product/DuplicateForm.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
      import_polaris51.Modal,
      {
        small: !0,
        open: active,
        onClose: handleClose,
        title: modalTitle,
        primaryAction: {
          content: "Ok",
          onAction: async () => {
            if (handleSetErrors({}), handleLoadingChange(!0), !title)
              return handleSetErrors({ title: FIELD_REQUIRED });
            let data = {
              title,
              productId: _31.get(product, "id")
            };
            await submit(data, { method: "post", action: "/app/product/duplicate" });
          },
          loading: laoding
        },
        secondaryActions: [
          {
            content: "Cancel",
            onAction: handleClose
          }
        ],
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_polaris51.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_polaris51.Box, { children: [
          Object.keys(actionErrors).length ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            import_polaris51.InlineError,
            {
              message: JSON.stringify(actionErrors),
              fieldID: "errors"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/Product/DuplicateForm.tsx",
              lineNumber: 81,
              columnNumber: 15
            },
            this
          ) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            import_polaris51.TextField,
            {
              label: "Title",
              value: title,
              onChange: handleValueChange,
              autoComplete: "off",
              error: errors.title
            },
            void 0,
            !1,
            {
              fileName: "app/components/Form/Product/DuplicateForm.tsx",
              lineNumber: 86,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_polaris51.Box, { padding: "2" }, void 0, !1, {
            fileName: "app/components/Form/Product/DuplicateForm.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_polaris51.Text, { variant: "bodyLg", as: "p", children: "All product details will be copied from the original product." }, void 0, !1, {
            fileName: "app/components/Form/Product/DuplicateForm.tsx",
            lineNumber: 95,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Form/Product/DuplicateForm.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Form/Product/DuplicateForm.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Form/Product/DuplicateForm.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Form/Product/DuplicateForm.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}, DuplicateForm_default = DuplicateForm;

// app/routes/app.product.$id.tsx
var import_formik4 = require("formik");

// node_modules/react-dnd/dist/core/DndContext.js
var import_react59 = require("react"), DndContext = (0, import_react59.createContext)({
  dragDropManager: void 0
});

// node_modules/react-dnd/dist/core/DndProvider.js
var import_jsx_runtime = require("react/jsx-runtime");

// node_modules/dnd-core/dist/createDragDropManager.js
var import_redux = require("redux");

// node_modules/@react-dnd/invariant/dist/index.js
function invariant(condition, format, ...args) {
  if (isProduction() && format === void 0)
    throw new Error("invariant requires an error message argument");
  if (!condition) {
    let error;
    if (format === void 0)
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      })), error.name = "Invariant Violation";
    }
    throw error.framesToPop = 1, error;
  }
}
function isProduction() {
  return typeof process < "u" && !1;
}

// node_modules/dnd-core/dist/utils/js_utils.js
function get31(obj, path, defaultValue) {
  return path.split(".").reduce(
    (a, c) => a && a[c] ? a[c] : defaultValue || null,
    obj
  );
}
function without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function isObject(input) {
  return typeof input == "object";
}
function xor(itemsA, itemsB) {
  let map22 = /* @__PURE__ */ new Map(), insertItem = (item) => {
    map22.set(item, map22.has(item) ? map22.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem), itemsB.forEach(insertItem);
  let result = [];
  return map22.forEach((count, key) => {
    count === 1 && result.push(key);
  }), result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t) => itemsB.indexOf(t) > -1
  );
}

// node_modules/dnd-core/dist/actions/dragDrop/types.js
var INIT_COORDS = "dnd-core/INIT_COORDS", BEGIN_DRAG = "dnd-core/BEGIN_DRAG", PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE", HOVER = "dnd-core/HOVER", DROP = "dnd-core/DROP", END_DRAG = "dnd-core/END_DRAG";

// node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

// node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js
var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function(sourceIds = [], options = {
    publishSource: !0
  }) {
    let { publishSource = !0, clientOffset, getSourceClientOffset: getSourceClientOffset2 } = options, monitor = manager.getMonitor(), registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset)), verifyInvariants(sourceIds, monitor, registry);
    let sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2)
        throw new Error("getSourceClientOffset must be defined");
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2), sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    let item = registry.getSource(sourceId).beginDrag(monitor, sourceId);
    if (item == null)
      return;
    verifyItemIsObject(item), registry.pinSource(sourceId);
    let itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging."), sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--)
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  return sourceId;
}

// node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function createDrop(manager) {
  return function(options = {}) {
    let monitor = manager.getMonitor(), registry = manager.getRegistry();
    verifyInvariants2(monitor), getDroppableTargets(monitor).forEach((targetId, index) => {
      let dropResult = determineDropResult(targetId, index, registry, monitor), action9 = {
        type: DROP,
        payload: {
          dropResult: _objectSpread({}, options, dropResult)
        }
      };
      manager.dispatch(action9);
    });
  };
}
function verifyInvariants2(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging."), invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  let target = registry.getTarget(targetId), dropResult = target ? target.drop(monitor, targetId) : void 0;
  return verifyDropResultType(dropResult), typeof dropResult > "u" && (dropResult = index === 0 ? {} : monitor.getDropResult()), dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult > "u" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  let targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  return targetIds.reverse(), targetIds;
}

// node_modules/dnd-core/dist/actions/dragDrop/endDrag.js
function createEndDrag(manager) {
  return function() {
    let monitor = manager.getMonitor(), registry = manager.getRegistry();
    verifyIsDragging(monitor);
    let sourceId = monitor.getSourceId();
    return sourceId != null && (registry.getSource(sourceId, !0).endDrag(monitor, sourceId), registry.unpinSource()), {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}

// node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  return draggedItemType === null ? targetType === null : Array.isArray(targetType) ? targetType.some(
    (t) => t === draggedItemType
  ) : targetType === draggedItemType;
}

// node_modules/dnd-core/dist/actions/dragDrop/hover.js
function createHover(manager) {
  return function(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    let targetIds = targetIdsArg.slice(0), monitor = manager.getMonitor(), registry = manager.getRegistry(), draggedItemType = monitor.getItemType();
    return removeNonMatchingTargetIds(targetIds, registry, draggedItemType), checkInvariants(targetIds, monitor, registry), hoverAllTargets(targetIds, monitor, registry), {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging."), invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i = 0; i < targetIds.length; i++) {
    let targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    let target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i = targetIds.length - 1; i >= 0; i--) {
    let targetId = targetIds[i], targetType = registry.getTargetType(targetId);
    matchesType(targetType, draggedItemType) || targetIds.splice(i, 1);
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    registry.getTarget(targetId).hover(monitor, targetId);
  });
}

// node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js
function createPublishDragSource(manager) {
  return function() {
    if (manager.getMonitor().isDragging())
      return {
        type: PUBLISH_DRAG_SOURCE
      };
  };
}

// node_modules/dnd-core/dist/actions/dragDrop/index.js
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

// node_modules/dnd-core/dist/classes/DragDropManagerImpl.js
var DragDropManagerImpl = class {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    let manager = this, { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        let action9 = actionCreator.apply(manager, args);
        typeof action9 < "u" && dispatch(action9);
      };
    }
    let actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      let action9 = actions[key];
      return boundActions[key] = bindActionCreator(action9), boundActions;
    }, {});
  }
  dispatch(action9) {
    this.store.dispatch(action9);
  }
  constructor(store, monitor) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      let shouldSetUp = this.store.getState().refCount > 0;
      this.backend && (shouldSetUp && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !shouldSetUp && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = store, this.monitor = monitor, store.subscribe(this.handleRefCountChange);
  }
};

// node_modules/dnd-core/dist/utils/coords.js
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  let { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  return !clientOffset || !initialClientOffset || !initialSourceClientOffset ? null : subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  let { clientOffset, initialClientOffset } = state;
  return !clientOffset || !initialClientOffset ? null : subtract(clientOffset, initialClientOffset);
}

// node_modules/dnd-core/dist/utils/dirtiness.js
var NONE = [], ALL = [];
NONE.__IS_NONE__ = !0;
ALL.__IS_ALL__ = !0;
function areDirty(dirtyIds, handlerIds) {
  return dirtyIds === NONE ? !1 : dirtyIds === ALL || typeof handlerIds > "u" ? !0 : intersection(handlerIds, dirtyIds).length > 0;
}

// node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js
var DragDropMonitorImpl = class {
  subscribeToStateChange(listener, options = {}) {
    let { handlerIds } = options;
    invariant(typeof listener == "function", "listener must be a function."), invariant(typeof handlerIds > "u" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId, handleChange = () => {
      let state = this.store.getState(), currentStateId = state.stateId;
      try {
        currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds) || listener();
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    invariant(typeof listener == "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset, handleChange = () => {
      let nextState = this.store.getState().dragOffset;
      nextState !== previousState && (previousState = nextState, listener());
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId)
      return !1;
    let source = this.registry.getSource(sourceId);
    return invariant(source, `Expected to find a valid source. sourceId=${sourceId}`), this.isDragging() ? !1 : source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId)
      return !1;
    let target = this.registry.getTarget(targetId);
    if (invariant(target, `Expected to find a valid target. targetId=${targetId}`), !this.isDragging() || this.didDrop())
      return !1;
    let targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId)
      return !1;
    let source = this.registry.getSource(sourceId, !0);
    if (invariant(source, `Expected to find a valid source. sourceId=${sourceId}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    let sourceType = this.registry.getSourceType(sourceId), draggedItemType = this.getItemType();
    return sourceType !== draggedItemType ? !1 : source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options = {
    shallow: !1
  }) {
    if (!targetId)
      return !1;
    let { shallow } = options;
    if (!this.isDragging())
      return !1;
    let targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType))
      return !1;
    let targetIds = this.getTargetIds();
    if (!targetIds.length)
      return !1;
    let index = targetIds.indexOf(targetId);
    return shallow ? index === targetIds.length - 1 : index > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store, this.registry = registry;
  }
};

// node_modules/@react-dnd/asap/dist/makeRequestCall.js
var scope = typeof global < "u" ? global : self, BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function() {
    let timeoutHandle = setTimeout(handleTimer, 0), intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle), clearInterval(intervalHandle), callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1, observer = new BrowserMutationObserver(callback), node = document.createTextNode("");
  return observer.observe(node, {
    characterData: !0
  }), function() {
    toggle = -toggle, node.data = toggle;
  };
}
var makeRequestCall = typeof BrowserMutationObserver == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  makeRequestCallFromMutationObserver
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  makeRequestCallFromTimer
);

// node_modules/@react-dnd/asap/dist/AsapQueue.js
var AsapQueue = class {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(task) {
    let { queue: q, requestFlush } = this;
    q.length || (requestFlush(), this.flushing = !0), q[q.length] = task;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      let { queue: q } = this;
      for (; this.index < q.length; ) {
        let currentIndex = this.index;
        if (this.index++, q[currentIndex].call(), this.index > this.capacity) {
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++)
            q[scan] = q[scan + this.index];
          q.length -= this.index, this.index = 0;
        }
      }
      q.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (err) => {
      this.pendingErrors.push(err), this.requestErrorThrow();
    }, this.requestFlush = makeRequestCall(this.flush), this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
};

// node_modules/@react-dnd/asap/dist/RawTask.js
var RawTask = class {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError, this.release = release, this.task = null;
  }
};

// node_modules/@react-dnd/asap/dist/TaskFactory.js
var TaskFactory = class {
  create(task) {
    let tasks = this.freeTasks, t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t) => tasks[tasks.length] = t
    );
    return t1.task = task, t1;
  }
  constructor(onError) {
    this.onError = onError, this.freeTasks = [];
  }
};

// node_modules/@react-dnd/asap/dist/asap.js
var asapQueue = new AsapQueue(), taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

// node_modules/dnd-core/dist/actions/registry.js
var ADD_SOURCE = "dnd-core/ADD_SOURCE", ADD_TARGET = "dnd-core/ADD_TARGET", REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE", REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}

// node_modules/dnd-core/dist/contracts.js
function validateSourceContract(source) {
  invariant(typeof source.canDrag == "function", "Expected canDrag to be a function."), invariant(typeof source.beginDrag == "function", "Expected beginDrag to be a function."), invariant(typeof source.endDrag == "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop == "function", "Expected canDrop to be a function."), invariant(typeof target.hover == "function", "Expected hover to be a function."), invariant(typeof target.drop == "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t) => validateType(t, !1)
    );
    return;
  }
  invariant(typeof type == "string" || typeof type == "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}

// node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2.SOURCE = "SOURCE", HandlerRole2.TARGET = "TARGET";
})(HandlerRole || (HandlerRole = {}));

// node_modules/dnd-core/dist/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

// node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js
function getNextHandlerId(role) {
  let id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${handlerId}`);
  }
}
function mapContainsValue(map22, searchValue) {
  let entries = map22.entries(), isDone = !1;
  do {
    let { done, value: [, value] } = entries.next();
    if (value === searchValue)
      return !0;
    isDone = !!done;
  } while (!isDone);
  return !1;
}
var HandlerRegistryImpl = class {
  addSource(type, source) {
    validateType(type), validateSourceContract(source);
    let sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    return this.store.dispatch(addSource(sourceId)), sourceId;
  }
  addTarget(type, target) {
    validateType(type, !0), validateTargetContract(target);
    let targetId = this.addHandler(HandlerRole.TARGET, type, target);
    return this.store.dispatch(addTarget(targetId)), targetId;
  }
  containsHandler(handler) {
    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
  }
  getSource(sourceId, includePinned = !1) {
    return invariant(this.isSourceId(sourceId), "Expected a valid source ID."), includePinned && sourceId === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(sourceId);
  }
  getTarget(targetId) {
    return invariant(this.isTargetId(targetId), "Expected a valid target ID."), this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    return invariant(this.isSourceId(sourceId), "Expected a valid source ID."), this.types.get(sourceId);
  }
  getTargetType(targetId) {
    return invariant(this.isTargetId(targetId), "Expected a valid target ID."), this.types.get(targetId);
  }
  isSourceId(handlerId) {
    return parseRoleFromHandlerId(handlerId) === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    return parseRoleFromHandlerId(handlerId) === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    invariant(this.getSource(sourceId), "Expected an existing source."), this.store.dispatch(removeSource(sourceId)), asap(() => {
      this.dragSources.delete(sourceId), this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    invariant(this.getTarget(targetId), "Expected an existing target."), this.store.dispatch(removeTarget(targetId)), this.dropTargets.delete(targetId), this.types.delete(targetId);
  }
  pinSource(sourceId) {
    let source = this.getSource(sourceId);
    invariant(source, "Expected an existing source."), this.pinnedSourceId = sourceId, this.pinnedSource = source;
  }
  unpinSource() {
    invariant(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(role, type, handler) {
    let id = getNextHandlerId(role);
    return this.types.set(id, type), role === HandlerRole.SOURCE ? this.dragSources.set(id, handler) : role === HandlerRole.TARGET && this.dropTargets.set(id, handler), id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = store;
  }
};

// node_modules/dnd-core/dist/utils/equality.js
var strictEquality = (a, b) => a === b;
function areCoordsEqual(offsetA, offsetB) {
  return !offsetA && !offsetB ? !0 : !offsetA || !offsetB ? !1 : offsetA.x === offsetB.x && offsetA.y === offsetB.y;
}
function areArraysEqual(a, b, isEqual = strictEquality) {
  if (a.length !== b.length)
    return !1;
  for (let i = 0; i < a.length; ++i)
    if (!isEqual(a[i], b[i]))
      return !1;
  return !0;
}

// node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js
function reduce(_state = NONE, action9) {
  switch (action9.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  let { targetIds = [], prevTargetIds = [] } = action9.payload, result = xor(targetIds, prevTargetIds);
  if (!(result.length > 0 || !areArraysEqual(targetIds, prevTargetIds)))
    return NONE;
  let prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1], innermostTargetId = targetIds[targetIds.length - 1];
  return prevInnermostTargetId !== innermostTargetId && (prevInnermostTargetId && result.push(prevInnermostTargetId), innermostTargetId && result.push(innermostTargetId)), result;
}

// node_modules/dnd-core/dist/reducers/dragOffset.js
function _defineProperty2(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    });
  }
  return target;
}
var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce2(state = initialState, action9) {
  let { payload } = action9;
  switch (action9.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      return areCoordsEqual(state.clientOffset, payload.clientOffset) ? state : _objectSpread2({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState;
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/dragOperation.js
function _defineProperty3(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    });
  }
  return target;
}
var initialState2 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function reduce3(state = initialState2, action9) {
  let { payload } = action9;
  switch (action9.type) {
    case BEGIN_DRAG:
      return _objectSpread3({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread3({}, state, {
        isSourcePublic: !0
      });
    case HOVER:
      return _objectSpread3({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      return state.targetIds.indexOf(payload.targetId) === -1 ? state : _objectSpread3({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread3({}, state, {
        dropResult: payload.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread3({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/refCount.js
function reduce4(state = 0, action9) {
  switch (action9.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/stateId.js
function reduce5(state = 0) {
  return state + 1;
}

// node_modules/dnd-core/dist/reducers/index.js
function _defineProperty4(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    });
  }
  return target;
}
function reduce6(state = {}, action9) {
  return {
    dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
      type: action9.type,
      payload: _objectSpread4({}, action9.payload, {
        prevTargetIds: get31(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce2(state.dragOffset, action9),
    refCount: reduce4(state.refCount, action9),
    dragOperation: reduce3(state.dragOperation, action9),
    stateId: reduce5(state.stateId)
  };
}

// node_modules/dnd-core/dist/createDragDropManager.js
function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = !1) {
  let store = makeStoreInstance(debugMode), monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store)), manager = new DragDropManagerImpl(store, monitor), backend = backendFactory(manager, globalContext, backendOptions);
  return manager.receiveBackend(backend), manager;
}
function makeStoreInstance(debugMode) {
  let reduxDevTools = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return (0, import_redux.createStore)(reduce6, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}

// node_modules/react-dnd/dist/core/DndProvider.js
var import_react60 = require("react");
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded), key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++)
      key = sourceSymbolKeys[i], !(excluded.indexOf(key) >= 0) && Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
var refCount = 0, INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), DndProvider = /* @__PURE__ */ (0, import_react60.memo)(function(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  let [manager, isGlobalInstance] = getDndContextValue(props);
  return (0, import_react60.useEffect)(() => {
    if (isGlobalInstance) {
      let context = getGlobalContext();
      return ++refCount, () => {
        --refCount === 0 && (context[INSTANCE_SYM] = null);
      };
    }
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props)
    return [
      {
        dragDropManager: props.manager
      },
      !1
    ];
  let manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode), isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  let ctx = context;
  return ctx[INSTANCE_SYM] || (ctx[INSTANCE_SYM] = {
    dragDropManager: createDragDropManager(backend, context, options, debugMode)
  }), ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global < "u" ? global : window;
}

// node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
function memoize(fn) {
  let result = null;
  return () => (result == null && (result = fn()), result);
}
function without2(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  let set = /* @__PURE__ */ new Set(), insertItem = (item) => set.add(item);
  itemsA.forEach(insertItem), itemsB.forEach(insertItem);
  let result = [];
  return set.forEach(
    (key) => result.push(key)
  ), result;
}

// node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js
var EnterLeaveCounter = class {
  enter(enteringNode) {
    let previousLength = this.entered.length, isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    return this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]), previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    let previousLength = this.entered.length;
    return this.entered = without2(this.entered.filter(this.isNodeInDocument), leavingNode), previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [], this.isNodeInDocument = isNodeInDocument;
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
var NativeDragSource = class {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: !0,
        enumerable: !0,
        get() {
          return console.warn(`Browser doesn't allow reading "${property}" until the drop event.`), null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      let newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        let propertyFn = this.config.exposeProperties[property];
        propertyFn != null && (newProperties[property] = {
          value: propertyFn(dataTransfer, this.config.matchesTypes),
          configurable: !0,
          enumerable: !0
        });
      }), Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config, this.item = {}, this.initializeExposedProperties();
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_exports = {};
__export(NativeTypes_exports, {
  FILE: () => FILE,
  HTML: () => HTML,
  TEXT: () => TEXT,
  URL: () => URL2
});
var FILE = "__NATIVE_FILE__", URL2 = "__NATIVE_URL__", TEXT = "__NATIVE_TEXT__", HTML = "__NATIVE_HTML__";

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  let result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result ?? defaultValue;
}

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js
var nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [URL2]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split(`
`),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js
function createNativeDragSource(type, dataTransfer) {
  let config = nativeTypesConfig[type];
  if (!config)
    throw new Error(`native type ${type} has no configuration`);
  let result = new NativeDragSource(config);
  return result.loadDataTransfer(dataTransfer), result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer)
    return null;
  let dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    let typeConfig = nativeTypesConfig[nativeItemType];
    return typeConfig != null && typeConfig.matchesTypes ? typeConfig.matchesTypes.some(
      (t) => dataTransferTypes.indexOf(t) > -1
    ) : !1;
  })[0] || null;
}

// node_modules/react-dnd-html5-backend/dist/BrowserDetector.js
var isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
), isSafari = memoize(
  () => Boolean(window.safari)
);

// node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
var MonotonicInterpolant = class {
  interpolate(x) {
    let { xs, ys, c1s, c2s, c3s } = this, i = xs.length - 1;
    if (x === xs[i])
      return ys[i];
    let low = 0, high = c3s.length - 1, mid;
    for (; low <= high; ) {
      mid = Math.floor(0.5 * (low + high));
      let xHere = xs[mid];
      if (xHere < x)
        low = mid + 1;
      else if (xHere > x)
        high = mid - 1;
      else
        return ys[mid];
    }
    i = Math.max(0, high);
    let diff = x - xs[i], diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    let { length } = xs, indexes = [];
    for (let i = 0; i < length; i++)
      indexes.push(i);
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    let dys = [], dxs = [], ms = [], dx, dy;
    for (let i1 = 0; i1 < length - 1; i1++)
      dx = xs[i1 + 1] - xs[i1], dy = ys[i1 + 1] - ys[i1], dxs.push(dx), dys.push(dy), ms.push(dy / dx);
    let c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      let m2 = ms[i2], mNext = ms[i2 + 1];
      if (m2 * mNext <= 0)
        c1s.push(0);
      else {
        dx = dxs[i2];
        let dxNext = dxs[i2 + 1], common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    let c2s = [], c3s = [], m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      let c1 = c1s[i3], invDx = 1 / dxs[i3], common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx), c3s.push(common * invDx * invDx);
    }
    this.xs = xs, this.ys = ys, this.c1s = c1s, this.c2s = c2s, this.c3s = c3s;
  }
};

// node_modules/react-dnd-html5-backend/dist/OffsetUtils.js
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  let el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el)
    return null;
  let { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === "IMG" && (isFirefox() || !(!((ref = document.documentElement) === null || ref === void 0) && ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth, dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  return isSafari() && isImage && (dragPreviewHeight /= window.devicePixelRatio, dragPreviewWidth /= window.devicePixelRatio), {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  let isImage = isImageNode(dragPreview), dragPreviewNodeOffsetFromClient = getNodeClientOffset(isImage ? sourceNode : dragPreview), offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  }, { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode, { anchorX, anchorY } = anchorPoint, { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), calculateYOffset = () => {
    let y = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      offsetFromDragPreview.y,
      // Align at the center
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      // Dock to the bottom
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]).interpolate(anchorY);
    return isSafari() && isImage && (y += (window.devicePixelRatio - 1) * dragPreviewHeight), y;
  }, calculateXOffset = () => new MonotonicInterpolant([
    0,
    0.5,
    1
  ], [
    // Dock to the left
    offsetFromDragPreview.x,
    // Align at the center
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
    // Dock to the right
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
  ]).interpolate(anchorX), { offsetX, offsetY } = offsetPoint, isManualOffsetX = offsetX === 0 || offsetX, isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

// node_modules/react-dnd-html5-backend/dist/OptionsReader.js
var OptionsReader = class {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var ref;
    return !((ref = this.globalContext) === null || ref === void 0) && ref.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null, this.globalContext = globalContext, this.optionsArgs = options;
  }
};

// node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function _defineProperty5(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    });
  }
  return target;
}
var HTML5BackendImpl = class {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    let root = this.rootElement;
    if (root !== void 0) {
      if (root.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      root.__isReactDndBackendSetUp = !0, this.addEventListeners(root);
    }
  }
  teardown() {
    let root = this.rootElement;
    if (root !== void 0 && (root.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var ref;
      (ref = this.window) === null || ref === void 0 || ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    return this.sourcePreviewNodeOptions.set(sourceId, options), this.sourcePreviewNodes.set(sourceId, node), () => {
      this.sourcePreviewNodes.delete(sourceId), this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node), this.sourceNodeOptions.set(sourceId, options);
    let handleDragStart = (e) => this.handleDragStart(e, sourceId), handleSelectStart = (e) => this.handleSelectStart(e);
    return node.setAttribute("draggable", "true"), node.addEventListener("dragstart", handleDragStart), node.addEventListener("selectstart", handleSelectStart), () => {
      this.sourceNodes.delete(sourceId), this.sourceNodeOptions.delete(sourceId), node.removeEventListener("dragstart", handleDragStart), node.removeEventListener("selectstart", handleSelectStart), node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    let handleDragEnter = (e) => this.handleDragEnter(e, targetId), handleDragOver = (e) => this.handleDragOver(e, targetId), handleDrop = (e) => this.handleDrop(e, targetId);
    return node.addEventListener("dragenter", handleDragEnter), node.addEventListener("dragover", handleDragOver), node.addEventListener("drop", handleDrop), () => {
      node.removeEventListener("dragenter", handleDragEnter), node.removeEventListener("dragover", handleDragOver), node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    target.addEventListener && (target.addEventListener("dragstart", this.handleTopDragStart), target.addEventListener("dragstart", this.handleTopDragStartCapture, !0), target.addEventListener("dragend", this.handleTopDragEndCapture, !0), target.addEventListener("dragenter", this.handleTopDragEnter), target.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), target.addEventListener("dragover", this.handleTopDragOver), target.addEventListener("dragover", this.handleTopDragOverCapture, !0), target.addEventListener("drop", this.handleTopDrop), target.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(target) {
    target.removeEventListener && (target.removeEventListener("dragstart", this.handleTopDragStart), target.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), target.removeEventListener("dragend", this.handleTopDragEndCapture, !0), target.removeEventListener("dragenter", this.handleTopDragEnter), target.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), target.removeEventListener("dragover", this.handleTopDragOver), target.removeEventListener("dragover", this.handleTopDragOverCapture, !0), target.removeEventListener("drop", this.handleTopDrop), target.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    let sourceId = this.monitor.getSourceId(), sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread5({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    let sourceId = this.monitor.getSourceId(), sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread5({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    let itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes_exports).some(
      (key) => NativeTypes_exports[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = createNativeDragSource(type, dataTransfer), this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = node;
    let MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 || ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(e, sourceId) {
    e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(sourceId));
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (sourceId) => {
      let source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    }, this.endDragNativeItem = () => {
      this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (node) => Boolean(node && this.document && this.document.body && this.document.body.contains(node)), this.endDragIfSourceWasRemovedFromDOM = () => {
      let node = this.currentDragSourceNode;
      node == null || this.isNodeInDocument(node) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (dragOverTargetIds) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(dragOverTargetIds || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (e) => {
      if (e.defaultPrevented)
        return;
      let { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      let clientOffset = getEventClientOffset(e);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      let { dataTransfer } = e, nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage == "function") {
          let sourceId = this.monitor.getSourceId(), sourceNode = this.sourceNodes.get(sourceId), dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            let { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions(), dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, {
              anchorX,
              anchorY
            }, {
              offsetX,
              offsetY
            });
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer == null || dataTransfer.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(e.target);
        let { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        captureDraggingState ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (nativeType)
        this.beginDragNativeItem(nativeType);
      else {
        if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable")))
          return;
        e.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (e) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(e.target) || this.monitor.isDragging())
        return;
      let { dataTransfer } = e, nativeType = matchNativeItemType(dataTransfer);
      nativeType && this.beginDragNativeItem(nativeType, dataTransfer);
    }, this.handleTopDragEnter = (e) => {
      let { dragEnterTargetIds } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = e.altKey, dragEnterTargetIds.length > 0 && this.actions.hover(dragEnterTargetIds, {
        clientOffset: getEventClientOffset(e)
      }), dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      ) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (e) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      }
    }, this.handleTopDragOver = (e) => {
      let { dragOverTargetIds } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = e.altKey, this.lastClientOffset = getEventClientOffset(e), this.scheduleHover(dragOverTargetIds), (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      ) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (e) => {
      this.isDraggingNativeItem() && e.preventDefault(), this.enterLeaveCounter.leave(e.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (e) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault(), (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      } else
        matchNativeItemType(e.dataTransfer) && e.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (e) => {
      let { dropTargetIds } = this;
      this.dropTargetIds = [], this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (e) => {
      let target = e.target;
      typeof target.dragDrop == "function" && (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable || (e.preventDefault(), target.dragDrop()));
    }, this.options = new OptionsReader(globalContext, options), this.actions = manager.getActions(), this.monitor = manager.getMonitor(), this.registry = manager.getRegistry(), this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
};

// node_modules/react-dnd-html5-backend/dist/index.js
var HTML5Backend = function(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};

// app/routes/app.product.$id.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime"), MDEditor6 = (0, import_react62.lazy)(() => import("@uiw/react-md-editor")), links4 = () => [
  { rel: "stylesheet", href: markdown_editor_default },
  { rel: "stylesheet", href: markdown_default }
];
async function loader11({ request, params }) {
  let { admin } = await authenticate.admin(request), id = numberGenerator(), data = await productQuery({
    graphql: admin.graphql,
    id: getProductIDString(params.id)
  }), productdescription = parseJSONWithData(
    _32.get(data, "data.product.productdescription.value")
  ), productItems = [], productProperties = [];
  return _32.get(data, "data.product.items.value") && (productItems = JSON.parse(_32.get(data, "data.product.items.value", "{}"))), _32.get(data, "data.product.properties.value") && (productProperties = JSON.parse(
    _32.get(data, "data.product.properties.value", "{}")
  )), (0, import_node15.json)(
    {
      product: _32.get(data, "data.product"),
      productdescription,
      productItems: _32.map(_32.get(productItems, "data", []), (it, index) => ({
        id: id + index + 1,
        ...it
      })),
      productProperties: _32.map(
        _32.get(productProperties, "data", []),
        (it, index) => ({ id: index + id + 1, ...it })
      )
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate"
      }
    }
  );
}
async function action6({ request, params }) {
  let { session, admin } = await authenticate.admin(request), data = {
    ...Object.fromEntries(await request.formData())
  }, productId = getProductIDString(params.id), variables = createVariables({
    ownerId: _32.get(data, "ownerId"),
    properties: _32.get(data, "properties"),
    items: _32.get(data, "items"),
    additionalmedia: _32.get(data, "additionalmedia"),
    mainmedia: _32.get(data, "mainmedia"),
    productdescription: JSON.stringify({
      data: _32.get(data, "productdescription")
    })
  }), response = await metafieldSetMutation({
    graphql: admin.graphql,
    variables
  }), productVariables = createUpdateProductVariables({
    productId,
    title: _32.get(data, "title"),
    descriptionHtml: _32.get(data, "description")
  }), res = await productSaveUpdateMutation({
    graphql: admin.graphql,
    variables: productVariables
  });
  return (0, import_node15.json)({ data: res });
}
function ProductPage2() {
  var _a2;
  let { product, productItems, productProperties, productdescription } = (0, import_react61.useLoaderData)(), [formDirty, setFormDirty] = (0, import_react62.useState)(!1), [loading, setLoading] = (0, import_react62.useState)(!1), actionData = (0, import_react61.useActionData)(), activatorRef = (0, import_react62.useRef)(null), itemFetcher = (0, import_react61.useFetcher)(), [itemDefinitions, setItemDefinitions] = (0, import_react62.useState)([]), handleItemDefinitionsChange = (0, import_react62.useCallback)((values) => {
    setItemDefinitions(values);
  }, []);
  (0, import_react62.useEffect)(() => {
    if (itemFetcher.data) {
      let o = _32.map(
        _32.get(itemFetcher.data, "data.metaobjects.edges"),
        (item) => ({
          value: _32.get(item, "node.id"),
          label: _32.get(item, "node.displayName")
        })
      );
      handleItemDefinitionsChange(o);
    }
  }, [itemFetcher.data, loading]);
  let propertiesFetcher = (0, import_react61.useFetcher)(), [standardProperties, setStandardProperties] = (0, import_react62.useState)([]), handleSetPropertiesChange = (0, import_react62.useCallback)((values) => {
    setStandardProperties(values);
  }, []);
  (0, import_react62.useEffect)(() => {
    if (propertiesFetcher.data) {
      let o = _32.map(
        _32.get(propertiesFetcher.data, "data.metaobjects.edges"),
        (item) => ({
          value: _32.get(item, "node.id"),
          label: _32.get(item, "node.displayName")
        })
      );
      handleSetPropertiesChange(o);
    }
  }, [propertiesFetcher.data]);
  let handlePropertiesChange = (0, import_react62.useCallback)((values) => {
    formik.setFieldValue("properties", values), setFormDirty(!0);
  }, []), handleLoadingChange = (0, import_react62.useCallback)((value) => setLoading(value), []);
  (0, import_react62.useEffect)(() => {
    handleLoadingChange(!1), setFormDirty(!1), initialValues == formik.values && setFormDirty(!1);
  }, [actionData]);
  let images = (0, import_react62.useMemo)(() => _32.get(product, "additionalmedia.value") ? JSON.parse(_32.get(product, "additionalmedia.value", "[]")) : [], []), fetcher = (0, import_react61.useFetcher)(), fetcher2 = (0, import_react61.useFetcher)(), navigate = (0, import_react61.useNavigate)(), setAdditionalMedia = (values) => {
    formik.setFieldValue("additionalMedia", values), handleFormDirty();
  }, submit = (0, import_react61.useSubmit)(), handleFormDirty = (0, import_react62.useCallback)(() => setFormDirty(!0), []), initialValues = {
    items: productItems,
    properties: productProperties,
    title: _32.get(product, "title"),
    description: _32.get(product, "description"),
    mainMedia: _32.get(product, "mainMedia.value", "") ? [_32.get(product, "mainMedia.value", "")] : [],
    additionalMedia: images,
    id: _32.get(product, "id"),
    productdescription: productdescription || ""
  }, formik = (0, import_formik4.useFormik)({
    initialValues,
    onSubmit: async (values) => {
      setLoading(!0);
      let data = {
        title: _32.get(values, "title"),
        description: _32.get(values, "description"),
        ownerId: _32.get(product, "id"),
        properties: JSON.stringify({ data: _32.get(values, "properties") }),
        items: JSON.stringify({ data: _32.get(values, "items") }),
        additionalmedia: JSON.stringify(_32.get(values, "additionalMedia")),
        mainmedia: _32.get(values, "mainMedia"),
        productdescription: _32.get(values, "productdescription")
      };
      submit(data, { method: "post" });
    }
  });
  (0, import_react62.useEffect)(() => {
    setLoading(!1);
  }, [formDirty]), (0, import_react62.useEffect)(() => {
    setLoading(!1);
  }, []);
  let addItem = (item) => {
    handleFormDirty();
    let items = _32.get(formik, "values.items", []), _item = _32.findIndex(items, (it) => it.id === item.id), newItem = item;
    _item && (newItem = { ...item, id: numberGenerator() + numberGenerator() }), formik.setFieldValue("items", [item, ...items]);
  }, removeItem = (id) => {
    let items = _32.get(formik, "values.items", []);
    formik.setFieldValue(
      "items",
      items == null ? void 0 : items.filter((it) => _32.get(it, "id") !== id)
    ), handleFormDirty();
  }, onEditItem = (item) => {
    let items = _32.get(formik, "values.items", []), index = _32.findIndex(items, (_item) => (_item == null ? void 0 : _item.id) == item.id);
    formik.setFieldValue(`items[${index}]`, item), handleFormDirty();
  }, handleItemsChange = (0, import_react62.useCallback)((values) => {
    formik.setFieldValue("items", values), setFormDirty(!0);
  }, []), addProperty = (item) => {
    let otherProperties = _32.get(formik, "values.properties", []);
    formik.setFieldValue("properties", [item, ...otherProperties]), handleFormDirty();
  }, removeProperty = (id) => {
    var _a3;
    formik.setFieldValue(
      "properties",
      (_a3 = get2(formik, "values.properties", [])) == null ? void 0 : _a3.filter(
        (it) => _32.get(it, "id") !== id
      )
    ), handleFormDirty();
  }, onEditProperty = (item, idx) => {
    let index = _32.findIndex(
      get2(formik, "values.properties", []),
      (prop) => (prop == null ? void 0 : prop.id) === (item == null ? void 0 : item.id)
    );
    formik.setFieldValue(`properties[${index}]`, item), handleFormDirty();
  }, removeAdditionalImages = (image) => {
    var _a3;
    formik.setFieldValue(
      "additionalMedia",
      [
        ...(_a3 = get2(formik, "values.additionalMedia")) == null ? void 0 : _a3.filter((it) => it !== image)
      ]
    ), handleFormDirty();
  }, onAddMainMedia = (value) => {
    formik.setFieldValue("mainMedia", [value]), handleFormDirty();
  }, onAddAdditionalMedia = (image) => {
    formik.setFieldValue(
      "additionalMedia",
      [
        image,
        ...get2(formik, "values.additionalMedia", [])
      ]
    ), handleFormDirty();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
    import_polaris52.Page,
    {
      backAction: { content: "Products", url: "/app/products" },
      title: _32.get(product, "title", ""),
      subtitle: "product",
      compactTitle: !0,
      secondaryActions: [
        {
          content: "Duplicate",
          accessibilityLabel: "Secondary action label",
          onAction: () => {
            var _a3, _b;
            (_b = (_a3 = activatorRef.current) == null ? void 0 : _a3.querySelector("button")) == null || _b.click();
          }
        }
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.Layout.Section, { children: [
        formDirty ? /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
          SaveAppBar_default,
          {
            loading,
            saveAction: formik.submitForm,
            discardAction: () => {
              navigate("/app/products");
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 357,
            columnNumber: 13
          },
          this
        ) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
            DuplicateForm_default,
            {
              modalTitle: "Duplicate",
              product,
              activatorRef
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 366,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.VerticalStack, { gap: "3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              import_polaris52.TextField,
              {
                label: "Title",
                value: get2(formik, "values.title"),
                onChange: (e) => {
                  formik.setFieldValue("title", e), handleFormDirty();
                },
                autoComplete: "off"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 372,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react62.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react61.Await, { resolve: get2(formik, "values.productdescription"), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_jsx_dev_runtime52.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("label", { children: "Description" }, void 0, !1, {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 386,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { "data-color-mode": "light", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
                  MDEditor6,
                  {
                    value: value != null && value.includes("children") ? toHTML(value) : value,
                    name: "productdescription",
                    onChange: (e) => {
                      formik.setFieldValue("productdescription", e), handleFormDirty();
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.product.$id.tsx",
                    lineNumber: 388,
                    columnNumber: 27
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.Box, { padding: "2" }, void 0, !1, {
                  fileName: "app/routes/app.product.$id.tsx",
                  lineNumber: 400,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 387,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 385,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 383,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 382,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react62.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react61.Await, { resolve: get2(formik, "values.description"), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_jsx_dev_runtime52.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("label", { children: "Original Description (not editable - to be removed in future)" }, void 0, !1, {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 411,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { "data-color-mode": "light", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
                  MDEditor6,
                  {
                    value: value != null && value.includes("children") ? toHTML(value) : value,
                    name: "description",
                    onChange: (e) => {
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.product.$id.tsx",
                    lineNumber: 417,
                    columnNumber: 27
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.Box, { padding: "2" }, void 0, !1, {
                  fileName: "app/routes/app.product.$id.tsx",
                  lineNumber: 430,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 416,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 410,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 408,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 407,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.Text, { variant: "headingMd", as: "h6", children: "Items" }, void 0, !1, {
                    fileName: "app/routes/app.product.$id.tsx",
                    lineNumber: 443,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
                    ItemMetafieldForm_default,
                    {
                      activatorTitle: "Add Item",
                      fetcher,
                      onAdd: addItem,
                      values: {}
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.product.$id.tsx",
                      lineNumber: 447,
                      columnNumber: 19
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 436,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              ProductItems_default,
              {
                fetcher,
                onEdit: onEditItem,
                items: get2(formik, "values.items"),
                onRemove: removeItem,
                handleItemChange: handleItemsChange,
                itemDefinitions,
                formik
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 454,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.Box, { padding: "5" }, void 0, !1, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 463,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.Text, { variant: "headingMd", as: "h6", children: "Properties" }, void 0, !1, {
                    fileName: "app/routes/app.product.$id.tsx",
                    lineNumber: 471,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
                    PropertyMetafieldForm_default,
                    {
                      activatorTitle: "Add Property",
                      standardProperties,
                      onAdd: addProperty,
                      values: {}
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.product.$id.tsx",
                      lineNumber: 475,
                      columnNumber: 19
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 464,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              ProductProperties_default,
              {
                fetcher: fetcher2,
                onEdit: onEditProperty,
                onAdd: addProperty,
                onRemove: removeProperty,
                properties: get2(formik, "values.properties"),
                handleItemChange: handlePropertiesChange,
                standardProperties
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 483,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.Text, { variant: "headingMd", as: "h6", children: "Main Media" }, void 0, !1, {
                    fileName: "app/routes/app.product.$id.tsx",
                    lineNumber: 499,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
                    ImageForm_default,
                    {
                      activatorTitle: `${(_a2 = get2(formik, "values.mainMedia", [])) != null && _a2.length ? "Edit" : "Add"} Main Media`,
                      onAdd: onAddMainMedia
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.product.$id.tsx",
                      lineNumber: 503,
                      columnNumber: 19
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 492,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              ImageGrid_default,
              {
                images: get2(formik, "values.mainMedia", []),
                onRemove: (image) => {
                  formik.setFieldValue("mainMedia", []), handleFormDirty();
                },
                setImages: (values) => {
                  formik.setFieldValue("mainMedia", values), handleFormDirty();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 512,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_polaris52.Text, { variant: "headingMd", as: "h6", children: "Additional Media" }, void 0, !1, {
                    fileName: "app/routes/app.product.$id.tsx",
                    lineNumber: 531,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
                    ImageForm_default,
                    {
                      onAdd: onAddAdditionalMedia,
                      activatorTitle: "Add More Media"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.product.$id.tsx",
                      lineNumber: 535,
                      columnNumber: 19
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 524,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              ImageGrid_default,
              {
                images: get2(formik, "values.additionalMedia", []),
                onRemove: removeAdditionalImages,
                setImages: setAdditionalMedia
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.product.$id.tsx",
                lineNumber: 540,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 371,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 365,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.product.$id.tsx",
        lineNumber: 355,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.product.$id.tsx",
        lineNumber: 354,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.product.$id.tsx",
      lineNumber: 339,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/app.product.$id.tsx",
    lineNumber: 338,
    columnNumber: 5
  }, this);
}

// app/routes/app.additional.jsx
var app_additional_exports = {};
__export(app_additional_exports, {
  default: () => AdditionalPage
});
var import_polaris53 = require("@shopify/polaris"), import_jsx_dev_runtime53 = require("react/jsx-dev-runtime");
function AdditionalPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("ui-title-bar", { title: "Additional page" }, void 0, !1, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.VerticalStack, { gap: "3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.Text, { as: "p", variant: "bodyMd", children: [
          "The app template comes with an additional page which demonstrates how to create multiple pages within app navigation using",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
            import_polaris53.Link,
            {
              url: "https://shopify.dev/docs/apps/tools/app-bridge",
              target: "_blank",
              children: "App Bridge"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.additional.jsx",
              lineNumber: 24,
              columnNumber: 17
            },
            this
          ),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.Text, { as: "p", variant: "bodyMd", children: [
          "To create your own page and have it show up in the app navigation, add a page inside ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Code, { children: "app/routes" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 34,
            columnNumber: 47
          }, this),
          ", and a link to it in the ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Code, { children: "<ui-nav-menu>" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 35,
            columnNumber: 35
          }, this),
          " component found in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Code, { children: "app/routes/app.jsx" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 36,
            columnNumber: 26
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.Layout.Section, { secondary: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.VerticalStack, { gap: "2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.Text, { as: "h2", variant: "headingMd", children: "Resources" }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.List, { spacing: "extraTight", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_polaris53.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
          import_polaris53.Link,
          {
            url: "https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav",
            target: "_blank",
            children: "App nav best practices"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 49,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 47,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.additional.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function Code({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
    import_polaris53.Box,
    {
      as: "span",
      padding: "025",
      paddingInlineStart: "1",
      paddingInlineEnd: "1",
      background: "bg-subdued",
      borderWidth: "1",
      borderColor: "border",
      borderRadius: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("code", { children }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.site-maps.tsx
var app_site_maps_exports = {};
__export(app_site_maps_exports, {
  default: () => MetaobjectsPage5,
  loader: () => loader12
});
var import_node16 = require("@remix-run/node"), import_react65 = require("@remix-run/react"), import_polaris55 = require("@shopify/polaris"), _33 = __toESM(require("lodash")), import_react66 = require("react");

// app/components/Tables/SiteMapMetaObjects.tsx
var import_react63 = require("@remix-run/react"), import_polaris54 = require("@shopify/polaris");
var import_react64 = require("react"), import_jsx_dev_runtime54 = require("react/jsx-dev-runtime"), SiteMapMetaObjects = ({
  edges,
  pageInfo,
  type,
  onSearch,
  loading: isLoading
}) => {
  let navigate = (0, import_react63.useNavigate)(), resourceName = {
    singular: "site",
    plural: "sites"
  }, [loading, setLoading] = (0, import_react64.useState)(!1), handleNavigation = (next) => {
    let rest = {};
    setLoading(!0), next ? rest.after = pageInfo.endCursor : rest.before = pageInfo.startCursor, queryValue != null && (rest.query = queryValue), onSearch(rest);
  }, [queryValue, setQueryValue] = (0, import_react64.useState)(null), handleFiltersQueryChange = (0, import_react64.useCallback)(
    (value) => setQueryValue(value),
    []
  );
  (0, import_react64.useEffect)(() => {
    queryValue != null && onSearch({ query: queryValue });
  }, [queryValue]);
  let [selected] = (0, import_react64.useState)(0), onHandleCancel = () => {
  }, { mode, setMode } = (0, import_polaris54.useSetIndexFiltersMode)();
  (0, import_react64.useEffect)(() => {
    setLoading(!1);
  }, [edges]);
  let rowMarkup = edges.map(
    ({
      node: {
        id,
        definition,
        capabilities,
        displayName,
        handle,
        type: type2,
        updatedAt
      }
    }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.IndexTable.Row, { onNavigation: () => {
    }, id, position: index, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.Text, { variant: "bodyMd", as: "span", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react63.Link, { to: `/app/site-map/${handle}`, children: truncate(displayName) }, void 0, !1, {
        fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.IndexTable.Cell, { children: definition.name }, void 0, !1, {
        fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.IndexTable.Cell, { children: definition.access.storefront }, void 0, !1, {
        fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.Badge, { size: "small", children: capabilities.publishable.status }, void 0, !1, {
        fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.IndexTable.Cell, { children: dateFormatter(updatedAt) }, void 0, !1, {
        fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, id, !0, {
      fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(Loaders_default, {}, void 0, !1, {
      fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
      lineNumber: 101,
      columnNumber: 31
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.VerticalStack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
        import_polaris54.IndexFilters,
        {
          selected,
          filters: [],
          onClearAll: () => {
          },
          cancelAction: {
            onAction: onHandleCancel,
            disabled: !1,
            loading: !1
          },
          tabs: [],
          queryValue: queryValue || "",
          queryPlaceholder: "Search ...",
          onQueryChange: handleFiltersQueryChange,
          onQueryClear: () => {
            setQueryValue("");
          },
          mode,
          setMode,
          hideFilters: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
          lineNumber: 103,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
        import_polaris54.IndexTable,
        {
          resourceName,
          itemCount: edges.length,
          selectable: !1,
          headings: [
            { title: "Display Name" },
            { title: "Definition" },
            { title: "Storefront access" },
            { title: "Status" },
            { title: "Last updated" }
          ],
          children: rowMarkup
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
          lineNumber: 123,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_polaris54.HorizontalGrid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "grid-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
        "div",
        {
          className: "pagination-wrapper",
          style: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 20
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
            import_polaris54.Pagination,
            {
              hasPrevious: pageInfo.hasPreviousPage,
              onPrevious: () => {
                handleNavigation(!1);
              },
              hasNext: pageInfo.hasNextPage,
              onNext: () => {
                handleNavigation(!0);
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
              lineNumber: 148,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
          lineNumber: 139,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/SiteMapMetaObjects.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}, SiteMapMetaObjects_default = SiteMapMetaObjects;

// app/routes/app.site-maps.tsx
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime");
async function loader12({ request, params }) {
  let { admin, session } = await authenticate.admin(request);
  return (0, import_node16.json)({
    type: "site_map",
    graphql: admin.graphql
  });
}
function MetaobjectsPage5() {
  let { type } = (0, import_react65.useLoaderData)(), [edges, setEdges] = (0, import_react66.useState)([]), [pageInfo, setPageInfo] = (0, import_react66.useState)({}), fetcher = (0, import_react65.useFetcher)(), [loading, setLoading] = (0, import_react66.useState)(fetcher.state === "loading"), [pageLoading, setPageLoading] = (0, import_react66.useState)(!0), onSearch = async (data) => {
    fetcher.load(
      `/app/search-metaobjects/${type}?query=${_33.get(
        data,
        "query"
      )}&after=${_33.get(data, "after")}&before=${_33.get(data, "before")}`
    );
  };
  return (0, import_react66.useEffect)(() => {
    fetcher.state === "loading" ? setLoading(!0) : setLoading(!1), fetcher.data && (setEdges(_33.get(fetcher.data, "data.metaobjects.edges", [])), setPageInfo(_33.get(fetcher.data, "data.metaobjects.pageInfo", {})));
  }, [fetcher]), (0, import_react66.useEffect)(() => {
    fetcher.state !== "loading" && pageLoading && setPageLoading(!1);
  }, [fetcher.state]), (0, import_react66.useEffect)(() => {
    fetcher.data || (setPageLoading(!0), onSearch({}));
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
    import_polaris55.Page,
    {
      backAction: { content: "Products", url: "/app" },
      title: "Sites",
      subtitle: "",
      compactTitle: !0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_polaris55.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_polaris55.Layout.Section, { children: [
        pageLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(PageLoader_default, {}, void 0, !1, {
          fileName: "app/routes/app.site-maps.tsx",
          lineNumber: 74,
          columnNumber: 26
        }, this) : null,
        pageLoading ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_polaris55.VerticalStack, { gap: "3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
          SiteMapMetaObjects_default,
          {
            edges,
            pageInfo,
            type,
            onSearch,
            loading
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.site-maps.tsx",
            lineNumber: 77,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.site-maps.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.site-maps.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.site-maps.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.site-maps.tsx",
      lineNumber: 66,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.articles.tsx
var app_articles_exports = {};
__export(app_articles_exports, {
  default: () => MetaobjectsPage6,
  loader: () => loader13
});
var import_node17 = require("@remix-run/node"), import_react69 = require("@remix-run/react"), import_polaris57 = require("@shopify/polaris"), _34 = __toESM(require("lodash")), import_react70 = require("react");

// app/components/Tables/Articles.tsx
var import_react67 = require("@remix-run/react"), import_polaris56 = require("@shopify/polaris");
var import_react68 = require("react"), import_jsx_dev_runtime56 = require("react/jsx-dev-runtime"), Articles = ({
  edges,
  pageInfo,
  type,
  onSearch,
  loading: isLoading
}) => {
  let navigate = (0, import_react67.useNavigate)(), resourceName = {
    singular: "article",
    plural: "articles"
  }, [loading, setLoading] = (0, import_react68.useState)(!1), handleNavigation = (next) => {
    let rest = {};
    setLoading(!0), next ? rest.after = pageInfo.endCursor : rest.before = pageInfo.startCursor, queryValue != null && (rest.query = queryValue), onSearch(rest);
  }, [queryValue, setQueryValue] = (0, import_react68.useState)(null), handleFiltersQueryChange = (0, import_react68.useCallback)(
    (value) => setQueryValue(value),
    []
  );
  (0, import_react68.useEffect)(() => {
    queryValue != null && onSearch({ query: queryValue });
  }, [queryValue]);
  let [selected] = (0, import_react68.useState)(0), onHandleCancel = () => {
  }, { mode, setMode } = (0, import_polaris56.useSetIndexFiltersMode)();
  (0, import_react68.useEffect)(() => {
    setLoading(!1);
  }, [edges]);
  let rowMarkup = edges.map(
    ({
      node: {
        id,
        definition,
        capabilities,
        displayName,
        handle,
        type: type2,
        updatedAt
      }
    }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
      import_polaris56.IndexTable.Row,
      {
        onNavigation: () => {
        },
        id,
        position: index,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_polaris56.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_polaris56.Text, { variant: "bodyMd", as: "span", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react67.Link, { to: `/app/article/${handle}`, children: truncate(displayName) }, void 0, !1, {
            fileName: "app/components/Tables/Articles.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/Articles.tsx",
            lineNumber: 89,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/Articles.tsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_polaris56.IndexTable.Cell, { children: definition.name }, void 0, !1, {
            fileName: "app/components/Tables/Articles.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_polaris56.IndexTable.Cell, { children: definition.access.storefront }, void 0, !1, {
            fileName: "app/components/Tables/Articles.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_polaris56.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_polaris56.Badge, { size: "small", children: capabilities.publishable.status }, void 0, !1, {
            fileName: "app/components/Tables/Articles.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Tables/Articles.tsx",
            lineNumber: 96,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_polaris56.IndexTable.Cell, { children: dateFormatter(updatedAt) }, void 0, !1, {
            fileName: "app/components/Tables/Articles.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ]
      },
      id,
      !0,
      {
        fileName: "app/components/Tables/Articles.tsx",
        lineNumber: 82,
        columnNumber: 7
      },
      this
    )
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_polaris56.LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(Loaders_default, {}, void 0, !1, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 106,
      columnNumber: 31
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_polaris56.VerticalStack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
        import_polaris56.IndexFilters,
        {
          selected,
          filters: [],
          onClearAll: () => {
          },
          cancelAction: {
            onAction: onHandleCancel,
            disabled: !1,
            loading: !1
          },
          tabs: [],
          queryValue: queryValue || "",
          queryPlaceholder: "Search ...",
          onQueryChange: handleFiltersQueryChange,
          onQueryClear: () => {
            setQueryValue("");
          },
          mode,
          setMode,
          hideFilters: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/Articles.tsx",
          lineNumber: 108,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
        import_polaris56.IndexTable,
        {
          resourceName,
          itemCount: edges.length,
          selectable: !1,
          headings: [
            { title: "Display Name" },
            { title: "Definition" },
            { title: "Storefront access" },
            { title: "Status" },
            { title: "Last updated" }
          ],
          children: rowMarkup
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/Articles.tsx",
          lineNumber: 128,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_polaris56.HorizontalGrid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "grid-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
        "div",
        {
          className: "pagination-wrapper",
          style: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 20
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
            import_polaris56.Pagination,
            {
              hasPrevious: pageInfo.hasPreviousPage,
              onPrevious: () => {
                handleNavigation(!1);
              },
              hasNext: pageInfo.hasNextPage,
              onNext: () => {
                handleNavigation(!0);
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/Articles.tsx",
              lineNumber: 153,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/Articles.tsx",
          lineNumber: 144,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Tables/Articles.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Tables/Articles.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/Articles.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}, Articles_default = Articles;

// app/routes/app.articles.tsx
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime");
async function loader13({ request, params }) {
  let { admin, session } = await authenticate.admin(request);
  return (0, import_node17.json)({
    type: "article",
    graphql: admin.graphql
  });
}
function MetaobjectsPage6() {
  let { type } = (0, import_react69.useLoaderData)(), [edges, setEdges] = (0, import_react70.useState)([]), [pageInfo, setPageInfo] = (0, import_react70.useState)({}), fetcher = (0, import_react69.useFetcher)(), [loading, setLoading] = (0, import_react70.useState)(fetcher.state === "loading"), [pageLoading, setPageLoading] = (0, import_react70.useState)(!0), onSearch = async (data) => {
    fetcher.load(
      `/app/search-metaobjects/${type}?query=${_34.get(
        data,
        "query"
      )}&after=${_34.get(data, "after")}&before=${_34.get(data, "before")}`
    );
  };
  return (0, import_react70.useEffect)(() => {
    fetcher.state === "loading" ? setLoading(!0) : setLoading(!1), fetcher.data && (setEdges(_34.get(fetcher.data, "data.metaobjects.edges", [])), setPageInfo(_34.get(fetcher.data, "data.metaobjects.pageInfo", {})));
  }, [fetcher]), (0, import_react70.useEffect)(() => {
    fetcher.state !== "loading" && pageLoading && setPageLoading(!1);
  }, [fetcher.state]), (0, import_react70.useEffect)(() => {
    fetcher.data || (setPageLoading(!0), onSearch({}));
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
    import_polaris57.Page,
    {
      backAction: { content: "Products", url: "/app" },
      title: "Articles",
      subtitle: "",
      compactTitle: !0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_polaris57.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_polaris57.Layout.Section, { children: [
        pageLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(PageLoader_default, {}, void 0, !1, {
          fileName: "app/routes/app.articles.tsx",
          lineNumber: 75,
          columnNumber: 26
        }, this) : null,
        pageLoading ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_polaris57.VerticalStack, { gap: "3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
          Articles_default,
          {
            edges,
            pageInfo,
            type,
            onSearch,
            loading
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.articles.tsx",
            lineNumber: 78,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.articles.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.articles.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.articles.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.articles.tsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.products.tsx
var app_products_exports = {};
__export(app_products_exports, {
  default: () => ProductsPage,
  loader: () => loader14
});
var import_node18 = require("@remix-run/node"), import_react73 = require("@remix-run/react"), import_polaris59 = require("@shopify/polaris"), _35 = __toESM(require("lodash")), import_react74 = require("react");

// app/components/Tables/Products.tsx
var import_polaris58 = require("@shopify/polaris");
var import_react71 = require("react");
var import_react72 = require("@remix-run/react"), import_jsx_dev_runtime58 = require("react/jsx-dev-runtime"), Products = ({
  edges,
  pageInfo,
  onSearch,
  loading: isLoading
}) => {
  let resourceName = {
    singular: "product",
    plural: "products"
  }, [loading, setLoading] = (0, import_react71.useState)(!1), handleNavigation = (next) => {
    let rest = {};
    setLoading(!0), next ? rest.after = pageInfo.endCursor : rest.before = pageInfo.startCursor, queryValue != null && (rest.query = queryValue), onSearch(rest);
  }, [queryValue, setQueryValue] = (0, import_react71.useState)(null), handleFiltersQueryChange = (0, import_react71.useCallback)(
    (value) => setQueryValue(value),
    []
  );
  (0, import_react71.useEffect)(() => {
    queryValue != null && onSearch({ query: queryValue });
  }, [queryValue]);
  let [selected] = (0, import_react71.useState)(0), onHandleCancel = () => {
  }, { mode, setMode } = (0, import_polaris58.useSetIndexFiltersMode)();
  (0, import_react71.useEffect)(() => {
    setLoading(!1);
  }, [edges]);
  let rowMarkup = edges.map(
    ({
      node: {
        id,
        title,
        status,
        totalInventory,
        featuredImage,
        featuredMedia
      }
    }, index) => {
      var _a2;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_polaris58.IndexTable.Row, { onNavigation: () => {
      }, id, position: index, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_polaris58.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
          import_polaris58.Thumbnail,
          {
            source: (featuredImage == null ? void 0 : featuredImage.transformedSrc) || ((_a2 = featuredMedia == null ? void 0 : featuredMedia.preview) == null ? void 0 : _a2.transformedSrc) || IMAGE_PLACEHOLDER,
            size: "small",
            alt: title
          },
          void 0,
          !1,
          {
            fileName: "app/components/Tables/Products.tsx",
            lineNumber: 80,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Tables/Products.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_polaris58.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_polaris58.Text, { variant: "bodyMd", fontWeight: "bold", as: "span", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react72.Link, { to: `/app/product/${getProductIDNumber(id)}`, children: truncate(title) }, void 0, !1, {
          fileName: "app/components/Tables/Products.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Tables/Products.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Tables/Products.tsx",
          lineNumber: 90,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_polaris58.IndexTable.Cell, { children: status }, void 0, !1, {
          fileName: "app/components/Tables/Products.tsx",
          lineNumber: 98,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_polaris58.IndexTable.Cell, { children: [
          totalInventory,
          " in stock"
        ] }, void 0, !0, {
          fileName: "app/components/Tables/Products.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this)
      ] }, id, !0, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this);
    }
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_polaris58.LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Loaders_default, {}, void 0, !1, {
      fileName: "app/components/Tables/Products.tsx",
      lineNumber: 106,
      columnNumber: 31
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_polaris58.VerticalStack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        import_polaris58.IndexFilters,
        {
          selected,
          filters: [],
          onClearAll: () => {
          },
          cancelAction: {
            onAction: onHandleCancel,
            disabled: !1,
            loading: !1
          },
          tabs: [],
          queryValue: queryValue || "",
          queryPlaceholder: "Search ...",
          onQueryChange: handleFiltersQueryChange,
          onQueryClear: () => {
            setQueryValue("");
          },
          mode,
          setMode,
          hideFilters: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/Products.tsx",
          lineNumber: 108,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        import_polaris58.IndexTable,
        {
          resourceName,
          itemCount: edges.length,
          selectable: !1,
          headings: [
            { title: "Product" },
            { title: "Title" },
            { title: "Status" },
            { title: "Inventory" }
          ],
          children: rowMarkup
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/Products.tsx",
          lineNumber: 128,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_polaris58.HorizontalGrid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "grid-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        "div",
        {
          className: "pagination-wrapper",
          style: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 20
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
            import_polaris58.Pagination,
            {
              hasPrevious: pageInfo.hasPreviousPage,
              onPrevious: () => {
                handleNavigation(!1);
              },
              hasNext: pageInfo.hasNextPage,
              onNext: () => {
                handleNavigation(!0);
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/Tables/Products.tsx",
              lineNumber: 152,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tables/Products.tsx",
          lineNumber: 143,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Tables/Products.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Tables/Products.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}, Products_default = Products;

// app/routes/app.products.tsx
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime");
async function loader14({ request, params }) {
  return (0, import_node18.json)({
    type: params.type
  });
}
function ProductsPage() {
  let { definitionType, type } = (0, import_react73.useLoaderData)(), [edges, setEdges] = (0, import_react74.useState)([]), [pageInfo, setPageInfo] = (0, import_react74.useState)({}), fetcher = (0, import_react73.useFetcher)(), [loading, setLoading] = (0, import_react74.useState)(fetcher.state === "loading"), [pageLoading, setPageLoading] = (0, import_react74.useState)(!0);
  (0, import_react74.useEffect)(() => {
    fetcher.state !== "loading" && pageLoading && setPageLoading(!1);
  }, [fetcher.state]);
  let handleFetch = async (data) => {
    fetcher.load(
      `/app/search-products/?query=${_35.get(data, "query")}&after=${_35.get(
        data,
        "after",
        null
      )}&before=${_35.get(data, "before", null)}`
    );
  };
  return (0, import_react74.useEffect)(() => {
    fetcher.data || (setPageLoading(!0), handleFetch({}));
  }, []), (0, import_react74.useEffect)(() => {
    fetcher.state === "loading" ? setLoading(!0) : setLoading(!1), fetcher.data && (setEdges(_35.get(fetcher.data, "data.products.edges", [])), setPageInfo(_35.get(fetcher.data, "data.products.pageInfo", {})));
  }, [fetcher]), /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
    import_polaris59.Page,
    {
      backAction: { content: "Products", url: "/app" },
      title: "Products",
      subtitle: "",
      compactTitle: !0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_polaris59.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_polaris59.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_polaris59.VerticalStack, { gap: "3", children: [
        pageLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(PageLoader_default, {}, void 0, !1, {
          fileName: "app/routes/app.products.tsx",
          lineNumber: 70,
          columnNumber: 28
        }, this) : null,
        pageLoading ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
          Products_default,
          {
            edges,
            pageInfo,
            type,
            onSearch: handleFetch,
            loading
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.products.tsx",
            lineNumber: 72,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.products.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.products.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.products.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.products.tsx",
      lineNumber: 61,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app._index.tsx
var app_index_exports = {};
__export(app_index_exports, {
  default: () => ProductsPage2,
  loader: () => loader15
});
var import_node19 = require("@remix-run/node"), import_react75 = require("@remix-run/react"), import_polaris60 = require("@shopify/polaris"), _36 = __toESM(require("lodash")), import_react76 = require("react");
var import_jsx_dev_runtime60 = require("react/jsx-dev-runtime");
async function loader15({ request, params }) {
  return (0, import_node19.json)({
    type: params.type
  });
}
function ProductsPage2() {
  let { definitionType, type } = (0, import_react75.useLoaderData)(), [edges, setEdges] = (0, import_react76.useState)([]), [pageInfo, setPageInfo] = (0, import_react76.useState)({}), fetcher = (0, import_react75.useFetcher)(), [loading, setLoading] = (0, import_react76.useState)(fetcher.state === "loading"), [pageLoading, setPageLoading] = (0, import_react76.useState)(!0);
  (0, import_react76.useEffect)(() => {
    fetcher.state !== "loading" && pageLoading && setPageLoading(!1);
  }, [fetcher.state]);
  let handleFetch = async (data) => {
    fetcher.load(
      `/app/search-products/?query=${_36.get(data, "query")}&after=${_36.get(
        data,
        "after",
        null
      )}&before=${_36.get(data, "before", null)}`
    );
  };
  return (0, import_react76.useEffect)(() => {
    fetcher.data || (setPageLoading(!0), handleFetch({}));
  }, []), (0, import_react76.useEffect)(() => {
    fetcher.state === "loading" ? setLoading(!0) : setLoading(!1), fetcher.data && (setEdges(_36.get(fetcher.data, "data.products.edges", [])), setPageInfo(_36.get(fetcher.data, "data.products.pageInfo", {})));
  }, [fetcher]), /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
    import_polaris60.Page,
    {
      backAction: { content: "Products", url: "/app" },
      title: definitionType,
      subtitle: "Products",
      compactTitle: !0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_polaris60.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_polaris60.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_polaris60.VerticalStack, { gap: "3", children: [
        pageLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(PageLoader_default, {}, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 70,
          columnNumber: 28
        }, this) : null,
        pageLoading ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
          Products_default,
          {
            edges,
            pageInfo,
            type,
            onSearch: handleFetch,
            loading
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 72,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 61,
      columnNumber: 5
    },
    this
  );
}

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action7,
  default: () => Auth,
  links: () => links5,
  loader: () => loader16
});
var import_react77 = require("react"), import_node20 = require("@remix-run/node"), import_polaris61 = require("@shopify/polaris"), import_react78 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default2 = "/build/_assets/styles-VWGT2L3K.css";

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return (loginErrors == null ? void 0 : loginErrors.shop) === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : (loginErrors == null ? void 0 : loginErrors.shop) === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime61 = require("react/jsx-dev-runtime"), links5 = () => [{ rel: "stylesheet", href: styles_default2 }];
async function loader16({ request }) {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node20.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}
async function action7({ request }) {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node20.json)({
    errors
  });
}
function Auth() {
  let { polarisTranslations } = (0, import_react78.useLoaderData)(), loaderData = (0, import_react78.useLoaderData)(), actionData = (0, import_react78.useActionData)(), [shop, setShop] = (0, import_react77.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_polaris61.AppProvider, { i18n: polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_polaris61.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_polaris61.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_react78.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_polaris61.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_polaris61.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 51,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
      import_polaris61.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.jsx",
        lineNumber: 54,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_polaris61.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 64,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 49,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/webhooks.jsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action8
});
var action8 = async ({ request }) => {
  let { topic, shop, session } = await authenticate.webhook(request);
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await db_server_default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/_index/route.jsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links6,
  loader: () => loader17
});
var import_node21 = require("@remix-run/node"), import_react79 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-SMVNRRZV.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime62 = require("react/jsx-dev-runtime"), links6 = () => [{ rel: "stylesheet", href: style_default }];
async function loader17({ request }) {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node21.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node21.json)({ showForm: Boolean(login) });
}
function App2() {
  let { showForm } = (0, import_react79.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(import_react79.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$.jsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader18
});
async function loader18({ request }) {
  return await authenticate.admin(request), null;
}

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links7,
  loader: () => loader19
});
var import_node22 = require("@remix-run/node"), import_react80 = require("@remix-run/react");
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react81 = require("@shopify/shopify-app-remix/react");
var import_polaris62 = require("@shopify/polaris"), import_jsx_dev_runtime63 = require("react/jsx-dev-runtime"), links7 = () => [{ rel: "stylesheet", href: styles_default2 }];
async function loader19({ request }) {
  return await authenticate.admin(request), (0, import_node22.json)({ apiKey: process.env.SHOPIFY_API_KEY });
}
function App3() {
  let { apiKey } = (0, import_react80.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react81.AppProvider, { isEmbeddedApp: !0, apiKey, children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_polaris62.Frame, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react80.Link, { to: "/app", rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react80.Link, { to: "/app/products", children: "Products" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react80.Link, { to: "/app/items/item_definition", children: "Items" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react80.Link, { to: "/app/site-maps", children: "Sites" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react80.Link, { to: "/app/articles", children: "Articles" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 33,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react80.Link, { to: "/app/metaobjects", children: "Metaobjects" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 34,
        columnNumber: 10
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react80.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 23,
    columnNumber: 8
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react80.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HZFEQ3JN.js", imports: ["/build/_shared/chunk-JXHNNPNR.js", "/build/_shared/chunk-H36SQQE5.js", "/build/_shared/chunk-U2JNBMDV.js", "/build/_shared/chunk-JKUASME7.js", "/build/_shared/chunk-COYC34KL.js", "/build/_shared/chunk-N4FG5RPV.js", "/build/_shared/chunk-TVZC3ZTX.js", "/build/_shared/chunk-RODUX5XG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KNF5UWD4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-D7AVG6ZK.js", imports: ["/build/_shared/chunk-2L7VYSCH.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-3AWGCQ4D.js", imports: ["/build/_shared/chunk-SEK2WCG6.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-NMF5CLGW.js", "/build/_shared/chunk-FPZ7L3CR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/app._index copy": { id: "routes/app._index copy", parentId: "routes/app", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/app._index copy-C5XA7KFM.js", imports: ["/build/_shared/chunk-IOGSFHWH.js", "/build/_shared/chunk-KMCPHBOA.js", "/build/_shared/chunk-E7A3J4TI.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-E5LSV6WZ.js", imports: ["/build/_shared/chunk-O554AZBH.js", "/build/_shared/chunk-OCNRREPE.js", "/build/_shared/chunk-HQGD24L4.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.additional": { id: "routes/app.additional", parentId: "routes/app", path: "additional", index: void 0, caseSensitive: void 0, module: "/build/routes/app.additional-J2KZ4CQF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.article.$handle": { id: "routes/app.article.$handle", parentId: "routes/app", path: "article/:handle", index: void 0, caseSensitive: void 0, module: "/build/routes/app.article.$handle-7XYJP3ZG.js", imports: ["/build/_shared/chunk-M5JWZECC.js", "/build/_shared/chunk-NYBVFPCE.js", "/build/_shared/chunk-SOZWN2R5.js", "/build/_shared/chunk-3YSHUN6I.js", "/build/_shared/chunk-E7A3J4TI.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.articles": { id: "routes/app.articles", parentId: "routes/app", path: "articles", index: void 0, caseSensitive: void 0, module: "/build/routes/app.articles-IDAU6GDM.js", imports: ["/build/_shared/chunk-OCNRREPE.js", "/build/_shared/chunk-HQGD24L4.js", "/build/_shared/chunk-E7A3J4TI.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.item.$handle": { id: "routes/app.item.$handle", parentId: "routes/app", path: "item/:handle", index: void 0, caseSensitive: void 0, module: "/build/routes/app.item.$handle-YAYDBOTA.js", imports: ["/build/_shared/chunk-PQLXFXZG.js", "/build/_shared/chunk-HQGD24L4.js", "/build/_shared/chunk-2MPW2Q6T.js", "/build/_shared/chunk-M5JWZECC.js", "/build/_shared/chunk-SOZWN2R5.js", "/build/_shared/chunk-3YSHUN6I.js", "/build/_shared/chunk-E7A3J4TI.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.item.duplicate": { id: "routes/app.item.duplicate", parentId: "routes/app", path: "item/duplicate", index: void 0, caseSensitive: void 0, module: "/build/routes/app.item.duplicate-LXGN3DMA.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.items.$type": { id: "routes/app.items.$type", parentId: "routes/app", path: "items/:type", index: void 0, caseSensitive: void 0, module: "/build/routes/app.items.$type-LILAOSQT.js", imports: ["/build/_shared/chunk-OCNRREPE.js", "/build/_shared/chunk-HQGD24L4.js", "/build/_shared/chunk-E7A3J4TI.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.metaobject.$type": { id: "routes/app.metaobject.$type", parentId: "routes/app", path: "metaobject/:type", index: void 0, caseSensitive: void 0, module: "/build/routes/app.metaobject.$type-TA2LRIXD.js", imports: ["/build/_shared/chunk-KMCPHBOA.js", "/build/_shared/chunk-HQGD24L4.js", "/build/_shared/chunk-E7A3J4TI.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.metaobjects": { id: "routes/app.metaobjects", parentId: "routes/app", path: "metaobjects", index: void 0, caseSensitive: void 0, module: "/build/routes/app.metaobjects-H7G2RB3E.js", imports: ["/build/_shared/chunk-IOGSFHWH.js", "/build/_shared/chunk-KMCPHBOA.js", "/build/_shared/chunk-E7A3J4TI.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.product.$id": { id: "routes/app.product.$id", parentId: "routes/app", path: "product/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app.product.$id-JLGUAUXI.js", imports: ["/build/_shared/chunk-PQLXFXZG.js", "/build/_shared/chunk-HQGD24L4.js", "/build/_shared/chunk-2MPW2Q6T.js", "/build/_shared/chunk-M5JWZECC.js", "/build/_shared/chunk-3YSHUN6I.js", "/build/_shared/chunk-E7A3J4TI.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.product.duplicate": { id: "routes/app.product.duplicate", parentId: "routes/app", path: "product/duplicate", index: void 0, caseSensitive: void 0, module: "/build/routes/app.product.duplicate-4KPDXDOO.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.products": { id: "routes/app.products", parentId: "routes/app", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/app.products-36N5W7X5.js", imports: ["/build/_shared/chunk-O554AZBH.js", "/build/_shared/chunk-OCNRREPE.js", "/build/_shared/chunk-HQGD24L4.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.search-collections": { id: "routes/app.search-collections", parentId: "routes/app", path: "search-collections", index: void 0, caseSensitive: void 0, module: "/build/routes/app.search-collections-H5TZFVDI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.search-metaobjects.$type": { id: "routes/app.search-metaobjects.$type", parentId: "routes/app", path: "search-metaobjects/:type", index: void 0, caseSensitive: void 0, module: "/build/routes/app.search-metaobjects.$type-3SNQBDN4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.search-products": { id: "routes/app.search-products", parentId: "routes/app", path: "search-products", index: void 0, caseSensitive: void 0, module: "/build/routes/app.search-products-6AIRR33V.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.site-map.$handle": { id: "routes/app.site-map.$handle", parentId: "routes/app", path: "site-map/:handle", index: void 0, caseSensitive: void 0, module: "/build/routes/app.site-map.$handle-6CLFIQIK.js", imports: ["/build/_shared/chunk-2MPW2Q6T.js", "/build/_shared/chunk-NYBVFPCE.js", "/build/_shared/chunk-SOZWN2R5.js", "/build/_shared/chunk-3YSHUN6I.js", "/build/_shared/chunk-E7A3J4TI.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.site-maps": { id: "routes/app.site-maps", parentId: "routes/app", path: "site-maps", index: void 0, caseSensitive: void 0, module: "/build/routes/app.site-maps-R52JCPK6.js", imports: ["/build/_shared/chunk-OCNRREPE.js", "/build/_shared/chunk-HQGD24L4.js", "/build/_shared/chunk-E7A3J4TI.js", "/build/_shared/chunk-HEEBV5QK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-7PY6ZHS6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-3A7YNLFM.js", imports: ["/build/_shared/chunk-SEK2WCG6.js", "/build/_shared/chunk-2L7VYSCH.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-NMF5CLGW.js", "/build/_shared/chunk-FPZ7L3CR.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-AKIH6B3Q.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "40b98eb5", hmr: { runtime: "/build/_shared/chunk-COYC34KL.js", timestamp: 1711439254180 }, url: "/build/manifest-40B98EB5.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: { port: "51420" }, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.search-metaobjects.$type": {
    id: "routes/app.search-metaobjects.$type",
    parentId: "routes/app",
    path: "search-metaobjects/:type",
    index: void 0,
    caseSensitive: void 0,
    module: app_search_metaobjects_type_exports
  },
  "routes/app.search-collections": {
    id: "routes/app.search-collections",
    parentId: "routes/app",
    path: "search-collections",
    index: void 0,
    caseSensitive: void 0,
    module: app_search_collections_exports
  },
  "routes/app.product.duplicate": {
    id: "routes/app.product.duplicate",
    parentId: "routes/app",
    path: "product/duplicate",
    index: void 0,
    caseSensitive: void 0,
    module: app_product_duplicate_exports
  },
  "routes/app.metaobject.$type": {
    id: "routes/app.metaobject.$type",
    parentId: "routes/app",
    path: "metaobject/:type",
    index: void 0,
    caseSensitive: void 0,
    module: app_metaobject_type_exports
  },
  "routes/app.site-map.$handle": {
    id: "routes/app.site-map.$handle",
    parentId: "routes/app",
    path: "site-map/:handle",
    index: void 0,
    caseSensitive: void 0,
    module: app_site_map_handle_exports
  },
  "routes/app.article.$handle": {
    id: "routes/app.article.$handle",
    parentId: "routes/app",
    path: "article/:handle",
    index: void 0,
    caseSensitive: void 0,
    module: app_article_handle_exports
  },
  "routes/app.search-products": {
    id: "routes/app.search-products",
    parentId: "routes/app",
    path: "search-products",
    index: void 0,
    caseSensitive: void 0,
    module: app_search_products_exports
  },
  "routes/app.item.duplicate": {
    id: "routes/app.item.duplicate",
    parentId: "routes/app",
    path: "item/duplicate",
    index: void 0,
    caseSensitive: void 0,
    module: app_item_duplicate_exports
  },
  "routes/app.item.$handle": {
    id: "routes/app.item.$handle",
    parentId: "routes/app",
    path: "item/:handle",
    index: void 0,
    caseSensitive: void 0,
    module: app_item_handle_exports
  },
  "routes/app._index copy": {
    id: "routes/app._index copy",
    parentId: "routes/app",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_index_copy_exports
  },
  "routes/app.items.$type": {
    id: "routes/app.items.$type",
    parentId: "routes/app",
    path: "items/:type",
    index: void 0,
    caseSensitive: void 0,
    module: app_items_type_exports
  },
  "routes/app.metaobjects": {
    id: "routes/app.metaobjects",
    parentId: "routes/app",
    path: "metaobjects",
    index: void 0,
    caseSensitive: void 0,
    module: app_metaobjects_exports
  },
  "routes/app.product.$id": {
    id: "routes/app.product.$id",
    parentId: "routes/app",
    path: "product/:id",
    index: void 0,
    caseSensitive: void 0,
    module: app_product_id_exports
  },
  "routes/app.additional": {
    id: "routes/app.additional",
    parentId: "routes/app",
    path: "additional",
    index: void 0,
    caseSensitive: void 0,
    module: app_additional_exports
  },
  "routes/app.site-maps": {
    id: "routes/app.site-maps",
    parentId: "routes/app",
    path: "site-maps",
    index: void 0,
    caseSensitive: void 0,
    module: app_site_maps_exports
  },
  "routes/app.articles": {
    id: "routes/app.articles",
    parentId: "routes/app",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: app_articles_exports
  },
  "routes/app.products": {
    id: "routes/app.products",
    parentId: "routes/app",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: app_products_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
