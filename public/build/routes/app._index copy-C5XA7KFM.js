import {
  MetaDefinition_default
} from "/build/_shared/chunk-IOGSFHWH.js";
import "/build/_shared/chunk-KMCPHBOA.js";
import {
  require_shopify
} from "/build/_shared/chunk-E7A3J4TI.js";
import {
  numberFormat,
  require_lodash
} from "/build/_shared/chunk-HEEBV5QK.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Box,
  Button,
  Card,
  Layout,
  Page,
  VerticalStack,
  init_esm as init_esm2
} from "/build/_shared/chunk-NMF5CLGW.js";
import "/build/_shared/chunk-FPZ7L3CR.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  init_esm,
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

// app/routes/app._index copy.jsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
init_esm2();
var _ = __toESM(require_lodash());
var import_react2 = __toESM(require_react());
init_esm2();
var import_shopify = __toESM(require_shopify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app._index copy.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app._index copy.jsx"
  );
  import.meta.hot.lastModified = "1709719980721.946";
}
function MetaobjectsPage() {
  _s();
  const {
    metaDefinitions
  } = useLoaderData();
  const [active, setActive] = (0, import_react2.useState)(true);
  const toggleActive = (0, import_react2.useCallback)(() => setActive((active2) => !active2), []);
  const definitions = _.get(metaDefinitions, "data.metaobjectDefinitions");
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: toggleActive, disclosure: true, children: "More actions" }, void 0, false, {
    fileName: "app/routes/app._index copy.jsx",
    lineNumber: 55,
    columnNumber: 21
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Metaobjects", subtitle: `${numberFormat(_.get(definitions, "edges.length", 0))} definitions`, compactTitle: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MetaDefinition_default, { edges: _.get(definitions, "edges"), pageInfo: _.get(definitions, "pageInfo") }, void 0, false, {
    fileName: "app/routes/app._index copy.jsx",
    lineNumber: 63,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index copy.jsx",
    lineNumber: 62,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index copy.jsx",
    lineNumber: 61,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index copy.jsx",
    lineNumber: 60,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index copy.jsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index copy.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(MetaobjectsPage, "tZ4UvF4WVmTguqlF/6XnsXS34dU=", false, function() {
  return [useLoaderData];
});
_c = MetaobjectsPage;
function Code({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { as: "span", padding: "025", paddingInlineStart: "1", paddingInlineEnd: "1", background: "bg-subdued", borderWidth: "1", borderColor: "border", borderRadius: "1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children }, void 0, false, {
    fileName: "app/routes/app._index copy.jsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index copy.jsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_c2 = Code;
var _c;
var _c2;
$RefreshReg$(_c, "MetaobjectsPage");
$RefreshReg$(_c2, "Code");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MetaobjectsPage as default
};
//# sourceMappingURL=/build/routes/app._index copy-C5XA7KFM.js.map
