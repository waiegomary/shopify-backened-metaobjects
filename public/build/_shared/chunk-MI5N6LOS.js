import {
  Loaders_default
} from "/build/_shared/chunk-Q5N6DXQA.js";
import {
  IMAGE_PLACEHOLDER,
  getProductIDNumber,
  truncate
} from "/build/_shared/chunk-W333RDEB.js";
import {
  HorizontalGrid,
  IndexFilters,
  IndexTable,
  LegacyCard,
  Pagination,
  Text,
  Thumbnail,
  VerticalStack,
  init_esm as init_esm2,
  useSetIndexFiltersMode
} from "/build/_shared/chunk-3FUCSJLB.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-WEVALTTY.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-UUM35YD6.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/Tables/Products.tsx
init_remix_hmr();
init_esm2();
var import_react = __toESM(require_react());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/Products.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/Products.tsx"
  );
  import.meta.hot.lastModified = "1713578110840.448";
}
var Products = ({
  edges,
  pageInfo,
  onSearch,
  loading: isLoading
}) => {
  _s();
  const resourceName = {
    singular: "product",
    plural: "products"
  };
  const [loading, setLoading] = (0, import_react.useState)(false);
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
  const [queryValue, setQueryValue] = (0, import_react.useState)(null);
  const handleFiltersQueryChange = (0, import_react.useCallback)((value) => setQueryValue(value), []);
  (0, import_react.useEffect)(() => {
    if (queryValue !== void 0 && queryValue !== null) {
      onSearch({
        query: queryValue
      });
    }
  }, [queryValue]);
  const [selected] = (0, import_react.useState)(0);
  const onHandleCancel = () => {
  };
  const {
    mode,
    setMode
  } = useSetIndexFiltersMode();
  (0, import_react.useEffect)(() => {
    setLoading(false);
  }, [edges]);
  const rowMarkup = edges.map(({
    node: {
      id,
      title,
      status,
      totalInventory,
      featuredImage,
      featuredMedia
    }
  }, index) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Row, { onNavigation: () => {
    }, id, position: index, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: (featuredImage == null ? void 0 : featuredImage.transformedSrc) || ((_a = featuredMedia == null ? void 0 : featuredMedia.preview) == null ? void 0 : _a.transformedSrc) || IMAGE_PLACEHOLDER, size: "small", alt: title }, void 0, false, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", fontWeight: "bold", as: "span", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/app/product/${getProductIDNumber(id)}`, children: truncate(title) }, void 0, false, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: status }, void 0, false, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: [
        totalInventory,
        " in stock"
      ] }, void 0, true, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, id, true, {
      fileName: "app/components/Tables/Products.tsx",
      lineNumber: 80,
      columnNumber: 16
    }, this);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loaders_default, {}, void 0, false, {
      fileName: "app/components/Tables/Products.tsx",
      lineNumber: 96,
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
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable, { resourceName, itemCount: edges.length, selectable: false, headings: [{
        title: "Product"
      }, {
        title: "Title"
      }, {
        title: "Status"
      }, {
        title: "Inventory"
      }], children: rowMarkup }, void 0, false, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 105,
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
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/Products.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/Products.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tables/Products.tsx",
    lineNumber: 95,
    columnNumber: 10
  }, this);
};
_s(Products, "t9z4L4hniOOxE2GAKyX7tgs4tAM=", false, function() {
  return [useSetIndexFiltersMode];
});
_c = Products;
var Products_default = Products;
var _c;
$RefreshReg$(_c, "Products");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Products_default
};
//# sourceMappingURL=/build/_shared/chunk-MI5N6LOS.js.map
