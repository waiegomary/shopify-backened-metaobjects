import {
  Products_default
} from "/build/_shared/chunk-O554AZBH.js";
import {
  PageLoader_default
} from "/build/_shared/chunk-OCNRREPE.js";
import "/build/_shared/chunk-HQGD24L4.js";
import {
  require_lodash
} from "/build/_shared/chunk-HEEBV5QK.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Layout,
  Page,
  VerticalStack,
  init_esm as init_esm2
} from "/build/_shared/chunk-NMF5CLGW.js";
import "/build/_shared/chunk-FPZ7L3CR.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  init_esm,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-U2JNBMDV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-COYC34KL.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/app.products.tsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
init_esm2();
var _ = __toESM(require_lodash());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.products.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.products.tsx"
  );
  import.meta.hot.lastModified = "1709719980724.8606";
}
function ProductsPage() {
  _s();
  const {
    definitionType,
    type
  } = useLoaderData();
  const [edges, setEdges] = (0, import_react2.useState)([]);
  const [pageInfo, setPageInfo] = (0, import_react2.useState)({});
  const fetcher = useFetcher();
  const [loading, setLoading] = (0, import_react2.useState)(fetcher.state === "loading");
  const [pageLoading, setPageLoading] = (0, import_react2.useState)(true);
  (0, import_react2.useEffect)(() => {
    if (fetcher.state !== "loading" && pageLoading) {
      setPageLoading(false);
    }
  }, [fetcher.state]);
  const handleFetch = async (data) => {
    fetcher.load(`/app/search-products/?query=${_.get(data, "query")}&after=${_.get(data, "after", null)}&before=${_.get(data, "before", null)}`);
  };
  (0, import_react2.useEffect)(() => {
    if (!fetcher.data) {
      setPageLoading(true);
      handleFetch({});
    }
  }, []);
  (0, import_react2.useEffect)(() => {
    if (fetcher.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (fetcher.data) {
      setEdges(_.get(fetcher.data, "data.products.edges", []));
      setPageInfo(_.get(fetcher.data, "data.products.pageInfo", {}));
    }
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { backAction: {
    content: "Products",
    url: "/app"
  }, title: "Products", subtitle: "", compactTitle: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "3", children: [
    pageLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoader_default, {}, void 0, false, {
      fileName: "app/routes/app.products.tsx",
      lineNumber: 80,
      columnNumber: 28
    }, this) : null,
    !pageLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Products_default, { edges, pageInfo, type, onSearch: handleFetch, loading }, void 0, false, {
      fileName: "app/routes/app.products.tsx",
      lineNumber: 81,
      columnNumber: 29
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/app.products.tsx",
    lineNumber: 79,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/app.products.tsx",
    lineNumber: 78,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.products.tsx",
    lineNumber: 77,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.products.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(ProductsPage, "hw0ZAz5gox+37VY09xIX5/4lTOI=", false, function() {
  return [useLoaderData, useFetcher];
});
_c = ProductsPage;
var _c;
$RefreshReg$(_c, "ProductsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductsPage as default
};
//# sourceMappingURL=/build/routes/app.products-36N5W7X5.js.map
