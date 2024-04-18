import {
  numberFormat
} from "/build/_shared/chunk-HEEBV5QK.js";
import {
  Badge,
  IndexTable,
  LegacyCard,
  init_esm as init_esm2
} from "/build/_shared/chunk-NMF5CLGW.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-U2JNBMDV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-COYC34KL.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/Tables/MetaDefinition.tsx
init_remix_hmr();
init_esm();
init_esm2();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/MetaDefinition.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/MetaDefinition.tsx"
  );
  import.meta.hot.lastModified = "1709719980712.9211";
}
var MetaDefinition = ({
  edges,
  pageInfo
}) => {
  const orders = [{
    id: "1020",
    order: "#1020",
    date: "Jul 20 at 4:34pm",
    customer: "Jaydon Stanton",
    total: "$969.44",
    paymentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "complete", children: "Paid" }, void 0, false, {
      fileName: "app/components/Tables/MetaDefinition.tsx",
      lineNumber: 34,
      columnNumber: 20
    }, this),
    fulfillmentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "incomplete", children: "Unfulfilled" }, void 0, false, {
      fileName: "app/components/Tables/MetaDefinition.tsx",
      lineNumber: 35,
      columnNumber: 24
    }, this)
  }, {
    id: "1019",
    order: "#1019",
    date: "Jul 20 at 3:46pm",
    customer: "Ruben Westerfelt",
    total: "$701.19",
    paymentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "partiallyComplete", children: "Partially paid" }, void 0, false, {
      fileName: "app/components/Tables/MetaDefinition.tsx",
      lineNumber: 42,
      columnNumber: 20
    }, this),
    fulfillmentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "incomplete", children: "Unfulfilled" }, void 0, false, {
      fileName: "app/components/Tables/MetaDefinition.tsx",
      lineNumber: 43,
      columnNumber: 24
    }, this)
  }, {
    id: "1018",
    order: "#1018",
    date: "Jul 20 at 3.44pm",
    customer: "Leo Carder",
    total: "$798.24",
    paymentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "complete", children: "Paid" }, void 0, false, {
      fileName: "app/components/Tables/MetaDefinition.tsx",
      lineNumber: 50,
      columnNumber: 20
    }, this),
    fulfillmentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "incomplete", children: "Unfulfilled" }, void 0, false, {
      fileName: "app/components/Tables/MetaDefinition.tsx",
      lineNumber: 51,
      columnNumber: 24
    }, this)
  }];
  const resourceName = {
    singular: "order",
    plural: "orders"
  };
  const rowMarkup = edges.map(({
    node: {
      id,
      name,
      type,
      metaobjectsCount
    }
  }, index) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Row, { onNavigation: () => {
    }, id, position: index, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/app/metaobject/${type}`, children: name }, void 0, false, {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: type }, void 0, false, {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: `${numberFormat(metaobjectsCount)} ` }, void 0, false, {
        fileName: "app/components/Tables/MetaDefinition.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, id, true, {
      fileName: "app/components/Tables/MetaDefinition.tsx",
      lineNumber: 69,
      columnNumber: 12
    }, this);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    IndexTable,
    {
      resourceName,
      itemCount: orders.length,
      selectable: false,
      headings: [{
        title: "Name"
      }, {
        title: "Definition Type"
      }, {
        title: "Entries"
      }],
      children: rowMarkup
    },
    void 0,
    false,
    {
      fileName: "app/components/Tables/MetaDefinition.tsx",
      lineNumber: 78,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Tables/MetaDefinition.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
};
_c = MetaDefinition;
var MetaDefinition_default = MetaDefinition;
var _c;
$RefreshReg$(_c, "MetaDefinition");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  MetaDefinition_default
};
//# sourceMappingURL=/build/_shared/chunk-IOGSFHWH.js.map
