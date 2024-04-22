import {
  PageLoader_default
} from "/build/_shared/chunk-I3XSTOLI.js";
import {
  Loaders_default
} from "/build/_shared/chunk-Q5N6DXQA.js";
import {
  require_shopify
} from "/build/_shared/chunk-E7A3J4TI.js";
import {
  dateFormatter,
  require_lodash,
  truncate
} from "/build/_shared/chunk-W333RDEB.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Badge,
  HorizontalGrid,
  IndexFilters,
  IndexTable,
  Layout,
  LegacyCard,
  Page,
  Pagination,
  Text,
  VerticalStack,
  init_esm as init_esm2,
  useSetIndexFiltersMode
} from "/build/_shared/chunk-3FUCSJLB.js";
import "/build/_shared/chunk-FPZ7L3CR.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  Link,
  init_esm,
  useFetcher,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-WEVALTTY.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-UUM35YD6.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/app.articles.tsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
init_esm2();
var _ = __toESM(require_lodash());
var import_react4 = __toESM(require_react());
var import_shopify = __toESM(require_shopify());

// app/components/Tables/Articles.tsx
init_remix_hmr();
init_esm();
init_esm2();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/Articles.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/Articles.tsx"
  );
  import.meta.hot.lastModified = "1713578110837.0723";
}
var Articles = ({
  edges,
  pageInfo,
  type,
  onSearch,
  loading: isLoading
}) => {
  _s();
  const navigate = useNavigate();
  const resourceName = {
    singular: "article",
    plural: "articles"
  };
  const [loading, setLoading] = (0, import_react2.useState)(false);
  const handleNavigation = (next) => {
    let rest = {};
    setLoading(true);
    if (next) {
      rest["after"] = pageInfo.endCursor;
    } else {
      rest["before"] = pageInfo.startCursor;
    }
    if (queryValue !== void 0 && queryValue !== null) {
      rest["query"] = queryValue;
    }
    onSearch(rest);
  };
  const [queryValue, setQueryValue] = (0, import_react2.useState)(null);
  const handleFiltersQueryChange = (0, import_react2.useCallback)((value) => setQueryValue(value), []);
  (0, import_react2.useEffect)(() => {
    if (queryValue !== void 0 && queryValue !== null) {
      onSearch({
        query: queryValue
      });
    }
  }, [queryValue]);
  const [selected] = (0, import_react2.useState)(0);
  const onHandleCancel = () => {
  };
  const {
    mode,
    setMode
  } = useSetIndexFiltersMode();
  (0, import_react2.useEffect)(() => {
    setLoading(false);
  }, [edges]);
  const rowMarkup = edges.map(({
    node: {
      id,
      definition,
      capabilities,
      displayName,
      handle,
      type: type2,
      updatedAt
    }
  }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Row, { onNavigation: () => {
  }, id, position: index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", as: "span", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/app/article/${handle}`, children: truncate(displayName) }, void 0, false, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: definition.name }, void 0, false, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: definition.access.storefront }, void 0, false, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { size: "small", children: capabilities.publishable.status }, void 0, false, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: dateFormatter(updatedAt) }, void 0, false, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this)
  ] }, id, true, {
    fileName: "app/components/Tables/Articles.tsx",
    lineNumber: 82,
    columnNumber: 16
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loaders_default, {}, void 0, false, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 97,
      columnNumber: 31
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexFilters, { selected, filters: [], onClearAll: () => {
      }, cancelAction: {
        onAction: onHandleCancel,
        disabled: false,
        loading: false
      }, tabs: [], queryValue: queryValue || "", queryPlaceholder: "Search ...", onQueryChange: handleFiltersQueryChange, onQueryClear: () => {
        setQueryValue("");
      }, mode, setMode, hideFilters: true }, void 0, false, {
        fileName: "app/components/Tables/Articles.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable, { resourceName, itemCount: edges.length, selectable: false, headings: [{
        title: "Display Name"
      }, {
        title: "Definition"
      }, {
        title: "Storefront access"
      }, {
        title: "Status"
      }, {
        title: "Last updated"
      }], children: rowMarkup }, void 0, false, {
        fileName: "app/components/Tables/Articles.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HorizontalGrid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pagination-wrapper", style: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        padding: 20
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { hasPrevious: pageInfo.hasPreviousPage, onPrevious: () => {
        handleNavigation(false);
      }, hasNext: pageInfo.hasNextPage, onNext: () => {
        handleNavigation(true);
      } }, void 0, false, {
        fileName: "app/components/Tables/Articles.tsx",
        lineNumber: 127,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/Articles.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/Articles.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/Articles.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/Articles.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tables/Articles.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
};
_s(Articles, "SnZl4qOGazheYiX33WnSXPTvQN0=", false, function() {
  return [useNavigate, useSetIndexFiltersMode];
});
_c = Articles;
var Articles_default = Articles;
var _c;
$RefreshReg$(_c, "Articles");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.articles.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.articles.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.articles.tsx"
  );
  import.meta.hot.lastModified = "1713578110846.9397";
}
function MetaobjectsPage() {
  _s2();
  const {
    type
  } = useLoaderData();
  const [edges, setEdges] = (0, import_react4.useState)([]);
  const [pageInfo, setPageInfo] = (0, import_react4.useState)({});
  const fetcher = useFetcher();
  const [loading, setLoading] = (0, import_react4.useState)(fetcher.state === "loading");
  const [pageLoading, setPageLoading] = (0, import_react4.useState)(true);
  const onSearch = async (data) => {
    fetcher.load(`/app/search-metaobjects/${type}?query=${_.get(data, "query")}&after=${_.get(data, "after")}&before=${_.get(data, "before")}`);
  };
  (0, import_react4.useEffect)(() => {
    if (fetcher.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (fetcher.data) {
      setEdges(_.get(fetcher.data, "data.metaobjects.edges", []));
      setPageInfo(_.get(fetcher.data, "data.metaobjects.pageInfo", {}));
    }
  }, [fetcher]);
  (0, import_react4.useEffect)(() => {
    if (fetcher.state !== "loading" && pageLoading) {
      setPageLoading(false);
    }
  }, [fetcher.state]);
  (0, import_react4.useEffect)(() => {
    if (!fetcher.data) {
      setPageLoading(true);
      onSearch({});
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Page, { backAction: {
    content: "Products",
    url: "/app"
  }, title: "Articles", subtitle: "", compactTitle: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout.Section, { children: [
    pageLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PageLoader_default, {}, void 0, false, {
      fileName: "app/routes/app.articles.tsx",
      lineNumber: 84,
      columnNumber: 26
    }, this) : null,
    !pageLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VerticalStack, { gap: "3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Articles_default, { edges, pageInfo, type, onSearch, loading }, void 0, false, {
      fileName: "app/routes/app.articles.tsx",
      lineNumber: 86,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/app.articles.tsx",
      lineNumber: 85,
      columnNumber: 27
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/app.articles.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.articles.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.articles.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
_s2(MetaobjectsPage, "iRitMK1sE3JJ0dpBbuXtvOB4AFc=", false, function() {
  return [useLoaderData, useFetcher];
});
_c2 = MetaobjectsPage;
var _c2;
$RefreshReg$(_c2, "MetaobjectsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MetaobjectsPage as default
};
//# sourceMappingURL=/build/routes/app.articles-MH67SANU.js.map
