import {
  Frame,
  Loading,
  init_esm
} from "/build/_shared/chunk-3FUCSJLB.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-UUM35YD6.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/Loaders/index.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Loaders/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Loaders/index.tsx"
  );
  import.meta.hot.lastModified = "1713578110836.053";
}
function Loader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    height: "1px"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loading, {}, void 0, false, {
    fileName: "app/components/Loaders/index.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Loaders/index.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Loaders/index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Loader;
var Loaders_default = Loader;
var _c;
$RefreshReg$(_c, "Loader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Loaders_default
};
//# sourceMappingURL=/build/_shared/chunk-Q5N6DXQA.js.map
