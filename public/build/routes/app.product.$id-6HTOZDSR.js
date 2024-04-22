import {
  require_jsx_runtime
} from "/build/_shared/chunk-WQFJ2CRD.js";
import {
  ProductProperties_default,
  PropertyMetafieldForm_default
} from "/build/_shared/chunk-4NINSXQV.js";
import {
  Loaders_default
} from "/build/_shared/chunk-Q5N6DXQA.js";
import {
  DragHandle_default,
  EditIcon_default,
  SelectField_default,
  arrayMove,
  sortableContainer,
  sortableElement,
  useHandleToggleModal
} from "/build/_shared/chunk-VZP5GZ3W.js";
import {
  ImageForm_default,
  ImageGrid_default
} from "/build/_shared/chunk-EDXGPGNJ.js";
import {
  DeleteIcon_default,
  SaveAppBar_default,
  markdown_default,
  markdown_editor_default,
  useFormik
} from "/build/_shared/chunk-54DZ43JQ.js";
import {
  require_shopify
} from "/build/_shared/chunk-E7A3J4TI.js";
import {
  FIELD_REQUIRED,
  get,
  numberGenerator,
  require_lodash,
  toHTML,
  truncate
} from "/build/_shared/chunk-W333RDEB.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  IndexTable,
  InlineError,
  Layout,
  LegacyCard,
  Modal,
  Page,
  Select,
  Text,
  TextField,
  VerticalStack,
  init_esm as init_esm2
} from "/build/_shared/chunk-3FUCSJLB.js";
import "/build/_shared/chunk-FPZ7L3CR.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  Await,
  init_esm,
  useActionData,
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit
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
  __export,
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/app.product.$id.tsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
init_esm2();
var _5 = __toESM(require_lodash());
var import_react9 = __toESM(require_react());

// app/components/Tables/ProductItems.tsx
init_remix_hmr();
init_esm2();
var import_react2 = __toESM(require_react());
var _2 = __toESM(require_lodash());

// app/components/Form/Product/ItemMetafieldEditorForm.tsx
init_remix_hmr();
init_esm2();
var import_react = __toESM(require_react());
var _ = __toESM(require_lodash());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/Product/ItemMetafieldEditorForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/Product/ItemMetafieldEditorForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110832.4924";
}
var ItemMetafieldEditorForm = ({
  fetcher,
  activatorTitle,
  onAdd,
  values,
  active,
  handleToggle
}) => {
  _s();
  const [options, setOptions] = (0, import_react.useState)([]);
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [selectedOptions, setSelectedOptions] = (0, import_react.useState)(_.get(values, "item.id") ? [_.get(values, "item.id")] : []);
  const [ranking, handleSetRanking] = (0, import_react.useState)("Key");
  const setRanking = (0, import_react.useCallback)((value) => handleSetRanking(value), []);
  const [name, handleSetName] = (0, import_react.useState)(_.get(values, "name", ""));
  const setName = (0, import_react.useCallback)((value) => handleSetName(value), [values]);
  const [qty, setQty] = (0, import_react.useState)(_.get(values, "qty", ""));
  const [errors, handleSetErrors] = (0, import_react.useState)({});
  const setErrors = (0, import_react.useCallback)((value) => handleSetErrors(value), []);
  const [item, handleSetItem] = (0, import_react.useState)(_.get(values, "item"));
  const setItem = (0, import_react.useCallback)((value) => handleSetItem(value), []);
  (0, import_react.useEffect)(() => {
    if (_.get(values, "name")) {
      setName(_.get(values, "name"));
    }
    if (_.get(values, "qty")) {
      setQty(_.get(values, "qty"));
    }
    if (_.get(values, "ranking")) {
      setRanking(_.get(values, "ranking"));
    }
    if (_.get(values, "item")) {
      handleSetItem(_.get(values, "item"));
    }
  }, [values]);
  const onSubmit = () => {
    setErrors({});
    if (!name) {
      setErrors({
        ...errors,
        name: FIELD_REQUIRED
      });
    }
    if (!ranking) {
      setErrors({
        ...errors,
        ranking: FIELD_REQUIRED
      });
    }
    if (!qty) {
      setErrors({
        ...errors,
        qty: FIELD_REQUIRED
      });
    }
    if (!(item == null ? void 0 : item.id)) {
      setErrors({
        ...errors,
        item: FIELD_REQUIRED
      });
    }
    if (Object.keys(errors).length) {
      return;
    }
    onAdd({
      id: _.get(values, "id") || numberGenerator(),
      name,
      ranking,
      qty,
      meta: {},
      item
    });
    handleToggle();
  };
  const handleRankingChange = (0, import_react.useCallback)((value) => setRanking(value), []);
  const handleNameChange = (0, import_react.useCallback)((newValue) => setName(newValue), []);
  const handleQtyChange = (0, import_react.useCallback)((newValue) => setQty(newValue), []);
  const raking = [{
    label: "Key",
    value: "Key"
  }, {
    label: "Main",
    value: "Main"
  }, {
    label: "Details",
    value: "Details"
  }];
  (0, import_react.useEffect)(() => {
    if (!_.get(selectedOptions, "[0]"))
      return;
    const option = _.find(_.get(fetcher.data, "data.metaobjects.edges"), (item2) => {
      return _.get(item2, "node.id") === _.get(selectedOptions, "[0]");
    });
    const propertyBase = {
      name: _.get(option, "node.displayName"),
      id: _.get(option, "node.id"),
      metaobject_type: _.get(option, "node.id")
    };
    setItem(propertyBase);
  }, [selectedOptions]);
  (0, import_react.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);
  (0, import_react.useEffect)(() => {
    if (fetcher.data) {
      const o = _.map(_.get(fetcher.data, "data.metaobjects.edges"), (item2) => {
        return {
          value: _.get(item2, "node.id"),
          label: _.get(item2, "node.displayName")
        };
      });
      setOptions(o);
    }
  }, [fetcher.data, loading]);
  const onSearch = _.debounce(function(data) {
    try {
      search(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  }, 1e3);
  const search = (0, import_react.useCallback)((data) => {
    fetcher.load(`/app/search-metaobjects/item_definition?query=${_.get(data, "query")}&after=${_.get(data, "after")}&before=${_.get(data, "before")}`);
  }, []);
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: "none"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "micro", onClick: handleToggle, children: activatorTitle }, void 0, false, {
    fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
    lineNumber: 155,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
    lineNumber: 152,
    columnNumber: 21
  }, this);
  if (!(values == null ? void 0 : values.name)) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { activator, open: active, onClose: handleToggle, title: "Item", primaryAction: {
    content: "Ok",
    onAction: onSubmit
  }, secondaryActions: [{
    content: "Cancel",
    onAction: handleToggle
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Name", value: name, onChange: handleNameChange, autoComplete: "off", error: errors.name }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
      lineNumber: 172,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
      lineNumber: 173,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Ranking", options: raking, onChange: handleRankingChange, value: ranking, error: errors.ranking }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
      lineNumber: 174,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
      lineNumber: 175,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Qty", value: qty, type: "number", onChange: handleQtyChange, autoComplete: "off", error: errors.qty }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
      lineNumber: 176,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
      lineNumber: 177,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectField_default, { onSearch, label: "Select Item (Type First Letters to Search)", options, loading, selectedOptions, setSelectedOptions, error: errors.item, placeholder: _.get(values, "item.name") || "search.." }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
      lineNumber: 178,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
    lineNumber: 171,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
    lineNumber: 170,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
    lineNumber: 163,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/ItemMetafieldEditorForm.tsx",
    lineNumber: 162,
    columnNumber: 10
  }, this);
};
_s(ItemMetafieldEditorForm, "TA/VYOodUjcTjhMbWIT/L0YnS9I=");
_c = ItemMetafieldEditorForm;
var ItemMetafieldEditorForm_default = ItemMetafieldEditorForm;
var _c;
$RefreshReg$(_c, "ItemMetafieldEditorForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/ProductItems.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/ProductItems.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/ProductItems.tsx"
  );
  import.meta.hot.lastModified = "1713578110839.2656";
}
var ProductItems = ({
  items,
  loading: isLoading,
  onRemove,
  onEdit,
  fetcher,
  handleItemChange,
  itemDefinitions,
  formik
}) => {
  _s2();
  const resourceName = {
    singular: "Item",
    plural: "Items"
  };
  const [loading, setLoading] = (0, import_react2.useState)(false);
  const [item, setItem] = (0, import_react2.useState)({});
  const handleSetItem = (0, import_react2.useCallback)((value) => {
    setItem(value);
  }, [item]);
  (0, import_react2.useEffect)(() => {
    if (get(item, "name")) {
      handleOpen();
    }
  }, [item]);
  const SortableItem = sortableElement(({
    id,
    name,
    ranking,
    qty,
    item: item2
  }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Row, { id: item2 == null ? void 0 : item2.id, position: index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonGroup, { segmented: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DragHandle_default, {}, void 0, false, {
        fileName: "app/components/Tables/ProductItems.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/ProductItems.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { size: "micro", onClick: () => {
        onRemove(id);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DeleteIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/ProductItems.tsx",
        lineNumber: 74,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/ProductItems.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { size: "micro", onClick: () => {
        handleSetItem({
          id,
          name,
          qty,
          ranking,
          item: item2
        });
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EditIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/ProductItems.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/ProductItems.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Cell, { children: truncate(name) }, void 0, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Cell, { children: item2 == null ? void 0 : item2.name }, void 0, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Cell, { children: ranking }, void 0, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Cell, { children: qty }, void 0, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this)
  ] }, `${index}-${item2 == null ? void 0 : item2.id}-${name}`, true, {
    fileName: "app/components/Tables/ProductItems.tsx",
    lineNumber: 64,
    columnNumber: 16
  }, this));
  const SortableContainer = sortableContainer(({
    children
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable, { resourceName, itemCount: (items == null ? void 0 : items.length) || 0, selectable: false, headings: [{
      title: ""
    }, {
      title: "Name"
    }, {
      title: "Item definition"
    }, {
      title: "Ranking"
    }, {
      title: "Quantity"
    }], children }, void 0, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 98,
      columnNumber: 12
    }, this);
  });
  const onSortEnd = ({
    oldIndex,
    newIndex
  }) => {
    const _items = arrayMove(items, oldIndex, newIndex);
    handleItemChange(_items);
    formik.setFieldValue("items", _items);
  };
  const {
    active,
    handleClose,
    handleOpen
  } = useHandleToggleModal();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Loaders_default, {}, void 0, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 126,
      columnNumber: 31
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ItemMetafieldEditorForm_default, { activatorTitle: "", active, handleToggle: active ? handleClose : handleOpen, fetcher, onAdd: onEdit, itemDefinitions, values: item }, void 0, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SortableContainer, { onSortEnd, useDragHandle: true, children: items == null ? void 0 : items.map((value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SortableItem, { index, item: _2.get(value, "item"), name: value == null ? void 0 : value.name, id: _2.get(value, "id"), ranking: _2.get(value, "ranking"), qty: _2.get(value, "qty") }, `item-${value == null ? void 0 : value.id}-${value == null ? void 0 : value.qty}-${(/* @__PURE__ */ new Date()).toString()}`, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 130,
      columnNumber: 41
    }, this)) }, void 0, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 129,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/ProductItems.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tables/ProductItems.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
};
_s2(ProductItems, "UoXdpr4GYdADyOYgpcqNNJOOVIw=", false, function() {
  return [useHandleToggleModal];
});
_c2 = ProductItems;
var ProductItems_default = ProductItems;
var _c2;
$RefreshReg$(_c2, "ProductItems");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/graphql/products/productQuery.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/graphql/products/productQuery.ts"
  );
  import.meta.hot.lastModified = "1713578110845.516";
}

// app/routes/app.product.$id.tsx
var import_shopify = __toESM(require_shopify());

// app/components/Form/Product/ItemMetafieldForm.tsx
init_remix_hmr();
init_esm2();
var import_react3 = __toESM(require_react());
var _3 = __toESM(require_lodash());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/Product/ItemMetafieldForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/Product/ItemMetafieldForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110832.6616";
}
var ItemMetafieldForm = ({
  fetcher,
  activatorTitle,
  onAdd,
  values
}) => {
  _s3();
  const [active, setActive] = (0, import_react3.useState)(false);
  const [options, setOptions] = (0, import_react3.useState)([]);
  const [loading, setLoading] = (0, import_react3.useState)(false);
  const [selectedOptions, setSelectedOptions] = (0, import_react3.useState)(_3.get(values, "item.id") ? [_3.get(values, "item.id")] : []);
  const [ranking, handleSetRanking] = (0, import_react3.useState)("Key");
  const setRanking = (0, import_react3.useCallback)((value) => handleSetRanking(value), []);
  const [name, handleSetName] = (0, import_react3.useState)(_3.get(values, "name", ""));
  const setName = (0, import_react3.useCallback)((value) => handleSetName(value), []);
  const [qty, setQty] = (0, import_react3.useState)(_3.get(values, "qty", ""));
  const [errors, handleSetErrors] = (0, import_react3.useState)({});
  const setErrors = (0, import_react3.useCallback)((value) => handleSetErrors(value), []);
  const [item, handleSetItem] = (0, import_react3.useState)(_3.get(values, "item"));
  const setItem = (0, import_react3.useCallback)((value) => handleSetItem(value), []);
  const onSubmit = () => {
    setErrors({});
    if (!name) {
      setErrors({
        ...errors,
        name: FIELD_REQUIRED
      });
    }
    if (!ranking) {
      setErrors({
        ...errors,
        ranking: FIELD_REQUIRED
      });
    }
    if (!qty) {
      setErrors({
        ...errors,
        qty: FIELD_REQUIRED
      });
    }
    if (!(item == null ? void 0 : item.id)) {
      setErrors({
        ...errors,
        item: FIELD_REQUIRED
      });
    }
    if (Object.keys(errors).length) {
      return;
    }
    onAdd({
      id: _3.get(values, "id") || numberGenerator(),
      name,
      ranking,
      qty,
      meta: {},
      item
    });
    handleChange();
    setRanking("Key");
    setName("");
    setItem({});
    setQty("");
  };
  const handleRankingChange = (0, import_react3.useCallback)((value) => setRanking(value), []);
  const handleNameChange = (0, import_react3.useCallback)((newValue) => setName(newValue), []);
  const handleQtyChange = (0, import_react3.useCallback)((newValue) => setQty(newValue), []);
  const raking = [{
    label: "Key",
    value: "Key"
  }, {
    label: "Main",
    value: "Main"
  }, {
    label: "Details",
    value: "Details"
  }];
  (0, import_react3.useEffect)(() => {
    if (!_3.get(selectedOptions, "[0]"))
      return;
    const option = _3.find(_3.get(fetcher.data, "data.metaobjects.edges"), (item2) => {
      return _3.get(item2, "node.id") === _3.get(selectedOptions, "[0]");
    });
    const propertyBase = {
      name: _3.get(option, "node.displayName"),
      id: _3.get(option, "node.id"),
      metaobject_type: _3.get(option, "node.id")
    };
    setItem(propertyBase);
  }, [selectedOptions]);
  (0, import_react3.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);
  (0, import_react3.useEffect)(() => {
    if (fetcher.data) {
      const o = _3.map(_3.get(fetcher.data, "data.metaobjects.edges"), (item2) => {
        return {
          value: _3.get(item2, "node.id"),
          label: _3.get(item2, "node.displayName")
        };
      });
      setOptions(o);
    }
  }, [fetcher.data, loading]);
  const onSearch = _3.debounce(function(data) {
    try {
      search(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  }, 1e3);
  const search = (0, import_react3.useCallback)((data) => {
    fetcher.load(`/app/search-metaobjects/item_definition?query=${_3.get(data, "query")}&after=${_3.get(data, "after")}&before=${_3.get(data, "before")}`);
  }, []);
  const handleChange = (0, import_react3.useCallback)(() => setActive(!active), [active]);
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { size: "micro", onClick: handleChange, children: activatorTitle }, void 0, false, {
    fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
    lineNumber: 141,
    columnNumber: 21
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal, { activator, open: active, onClose: handleChange, title: "Item", primaryAction: {
    content: "Ok",
    onAction: onSubmit
  }, secondaryActions: [{
    content: "Cancel",
    onAction: handleChange
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TextField, { label: "Name", value: name, onChange: handleNameChange, autoComplete: "off", error: errors.name }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
      lineNumber: 154,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
      lineNumber: 155,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Select, { label: "Ranking", options: raking, onChange: handleRankingChange, value: ranking, error: errors.ranking }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
      lineNumber: 156,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
      lineNumber: 157,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TextField, { label: "Qty", value: qty, type: "number", onChange: handleQtyChange, autoComplete: "off", error: errors.qty }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
      lineNumber: 158,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
      lineNumber: 159,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectField_default, { onSearch, label: "Select Item (Type First Letters to Search)", options, loading, selectedOptions, setSelectedOptions, error: errors.item, placeholder: _3.get(values, "item.name") || "search.." }, void 0, false, {
      fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
      lineNumber: 160,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
    lineNumber: 153,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
    lineNumber: 152,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
    lineNumber: 145,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/ItemMetafieldForm.tsx",
    lineNumber: 144,
    columnNumber: 10
  }, this);
};
_s3(ItemMetafieldForm, "0iHgjDMa5mBPD35LhBuSu1GBBlM=");
_c3 = ItemMetafieldForm;
var ItemMetafieldForm_default = ItemMetafieldForm;
var _c3;
$RefreshReg$(_c3, "ItemMetafieldForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/graphql/metafields/metafieldSetMutation.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/graphql/metafields/metafieldSetMutation.ts"
  );
  import.meta.hot.lastModified = "1713578110844.7078";
}

// app/graphql/products/productUpdate.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/graphql/products/productUpdate.ts"
  );
  import.meta.hot.lastModified = "1713578110845.7012";
}

// app/components/Form/Product/DuplicateForm.tsx
init_remix_hmr();
init_esm2();
var import_react4 = __toESM(require_react());
var _4 = __toESM(require_lodash());
init_esm();
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/Product/DuplicateForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/Product/DuplicateForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110831.9219";
}
var DuplicateForm = ({
  modalTitle,
  product,
  activatorRef
}) => {
  var _a;
  _s4();
  const actionErrors = ((_a = useActionData()) == null ? void 0 : _a.errors) || {};
  const location = useLocation();
  const [title, setTitle] = (0, import_react4.useState)(`Copy of - ${_4.get(product, "title")}`);
  const [errors, setErrors] = (0, import_react4.useState)({});
  const [laoding, setLoading] = (0, import_react4.useState)(false);
  const handleLoadingChange = (0, import_react4.useCallback)((value) => setLoading(value), []);
  const handleValueChange = (0, import_react4.useCallback)((value) => setTitle(value), []);
  const handleSetErrors = (0, import_react4.useCallback)((value) => setErrors(value), []);
  const [active, setActive] = (0, import_react4.useState)(false);
  const submit = useSubmit();
  const handleOpen = (0, import_react4.useCallback)(() => setActive(true), []);
  const handleClose = (0, import_react4.useCallback)(() => {
    setActive(false);
  }, []);
  (0, import_react4.useEffect)(() => {
    setLoading(false);
  }, [active]);
  (0, import_react4.useEffect)(() => {
    handleClose();
  }, [location]);
  const handleSubmit = async () => {
    handleSetErrors({});
    handleLoadingChange(true);
    if (!title) {
      return handleSetErrors({
        title: FIELD_REQUIRED
      });
    }
    const data = {
      title,
      productId: _4.get(product, "id")
    };
    await submit(data, {
      method: "post",
      action: "/app/product/duplicate"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
      height: 0,
      display: "none"
    }, ref: activatorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: handleOpen, children: "~" }, void 0, false, {
      fileName: "app/components/Form/Product/DuplicateForm.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/Product/DuplicateForm.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal, { small: true, open: active, onClose: handleClose, title: modalTitle, primaryAction: {
      content: "Ok",
      onAction: handleSubmit,
      loading: laoding
    }, secondaryActions: [{
      content: "Cancel",
      onAction: handleClose
    }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { children: [
      Object.keys(actionErrors).length ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InlineError, { message: JSON.stringify(actionErrors), fieldID: "errors" }, void 0, false, {
        fileName: "app/components/Form/Product/DuplicateForm.tsx",
        lineNumber: 87,
        columnNumber: 49
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextField, { label: "Title", value: title, onChange: handleValueChange, autoComplete: "off", error: errors.title }, void 0, false, {
        fileName: "app/components/Form/Product/DuplicateForm.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { padding: "2" }, void 0, false, {
        fileName: "app/components/Form/Product/DuplicateForm.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: "bodyLg", as: "p", children: "All product details will be copied from the original product." }, void 0, false, {
        fileName: "app/components/Form/Product/DuplicateForm.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/Product/DuplicateForm.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Form/Product/DuplicateForm.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/Product/DuplicateForm.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/Product/DuplicateForm.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
};
_s4(DuplicateForm, "MkuG4tOhx6+un0bQSXcymIWnx1Y=", false, function() {
  return [useActionData, useLocation, useSubmit];
});
_c4 = DuplicateForm;
var DuplicateForm_default = DuplicateForm;
var _c4;
$RefreshReg$(_c4, "DuplicateForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/react-dnd/dist/core/DndContext.js
var import_react6 = __toESM(require_react(), 1);
var DndContext = (0, import_react6.createContext)({
  dragDropManager: void 0
});

// node_modules/react-dnd/dist/core/DndProvider.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/redux/es/redux.js
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  var type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  var constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  var typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(false ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(false ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(false ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(false ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }
    if (typeof action.type === "undefined") {
      throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(false ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(false ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

// node_modules/@react-dnd/invariant/dist/index.js
function invariant(condition, format, ...args) {
  if (isProduction()) {
    if (format === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  if (!condition) {
    let error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
function isProduction() {
  return typeof process !== "undefined" && false;
}

// node_modules/dnd-core/dist/utils/js_utils.js
function get6(obj, path, defaultValue) {
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
  return typeof input === "object";
}
function xor(itemsA, itemsB) {
  const map4 = /* @__PURE__ */ new Map();
  const insertItem = (item) => {
    map4.set(item, map4.has(item) ? map4.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  map4.forEach((count, key) => {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t) => itemsB.indexOf(t) > -1
  );
}

// node_modules/dnd-core/dist/actions/dragDrop/types.js
var INIT_COORDS = "dnd-core/INIT_COORDS";
var BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
var PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
var HOVER = "dnd-core/HOVER";
var DROP = "dnd-core/DROP";
var END_DRAG = "dnd-core/END_DRAG";

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
  return function beginDrag(sourceIds = [], options = {
    publishSource: true
  }) {
    const { publishSource = true, clientOffset, getSourceClientOffset: getSourceClientOffset2 } = options;
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants(sourceIds, monitor, registry);
    const sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2) {
        throw new Error("getSourceClientOffset must be defined");
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2);
      sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    const source = registry.getSource(sourceId);
    const item = source.beginDrag(monitor, sourceId);
    if (item == null) {
      return void 0;
    }
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    const itemType = registry.getSourceType(sourceId);
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
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
  sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }
  return sourceId;
}

// node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    });
  }
  return target;
}
function createDrop(manager) {
  return function drop(options = {}) {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyInvariants2(monitor);
    const targetIds = getDroppableTargets(monitor);
    targetIds.forEach((targetId, index) => {
      const dropResult = determineDropResult(targetId, index, registry, monitor);
      const action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread({}, options, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function verifyInvariants2(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  const target = registry.getTarget(targetId);
  let dropResult = target ? target.drop(monitor, targetId) : void 0;
  verifyDropResultType(dropResult);
  if (typeof dropResult === "undefined") {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult === "undefined" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}

// node_modules/dnd-core/dist/actions/dragDrop/endDrag.js
function createEndDrag(manager) {
  return function endDrag() {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyIsDragging(monitor);
    const sourceId = monitor.getSourceId();
    if (sourceId != null) {
      const source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}

// node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(
    (t) => t === draggedItemType
  ) : targetType === draggedItemType;
}

// node_modules/dnd-core/dist/actions/dragDrop/hover.js
function createHover(manager) {
  return function hover(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    const targetIds = targetIdsArg.slice(0);
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    const draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    checkInvariants(targetIds, monitor, registry);
    hoverAllTargets(targetIds, monitor, registry);
    return {
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
  invariant(monitor.isDragging(), "Cannot call hover while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i = 0; i < targetIds.length; i++) {
    const targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    const target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i = targetIds.length - 1; i >= 0; i--) {
    const targetId = targetIds[i];
    const targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    const target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}

// node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js
function createPublishDragSource(manager) {
  return function publishDragSource() {
    const monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
    return;
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
    const manager = this;
    const { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        const action = actionCreator.apply(manager, args);
        if (typeof action !== "undefined") {
          dispatch(action);
        }
      };
    }
    const actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      const action = actions[key];
      boundActions[key] = bindActionCreator(action);
      return boundActions;
    }, {});
  }
  dispatch(action) {
    this.store.dispatch(action);
  }
  constructor(store, monitor) {
    this.isSetUp = false;
    this.handleRefCountChange = () => {
      const shouldSetUp = this.store.getState().refCount > 0;
      if (this.backend) {
        if (shouldSetUp && !this.isSetUp) {
          this.backend.setup();
          this.isSetUp = true;
        } else if (!shouldSetUp && this.isSetUp) {
          this.backend.teardown();
          this.isSetUp = false;
        }
      }
    };
    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
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
  const { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  const { clientOffset, initialClientOffset } = state;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}

// node_modules/dnd-core/dist/utils/dirtiness.js
var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === "undefined") {
    return true;
  }
  const commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}

// node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js
var DragDropMonitorImpl = class {
  subscribeToStateChange(listener, options = {}) {
    const { handlerIds } = options;
    invariant(typeof listener === "function", "listener must be a function.");
    invariant(typeof handlerIds === "undefined" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId;
    const handleChange = () => {
      const state = this.store.getState();
      const currentStateId = state.stateId;
      try {
        const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    invariant(typeof listener === "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset;
    const handleChange = () => {
      const nextState = this.store.getState().dragOffset;
      if (nextState === previousState) {
        return;
      }
      previousState = nextState;
      listener();
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId);
    invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (this.isDragging()) {
      return false;
    }
    return source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId) {
      return false;
    }
    const target = this.registry.getTarget(targetId);
    invariant(target, `Expected to find a valid target. targetId=${targetId}`);
    if (!this.isDragging() || this.didDrop()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId, true);
    invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (!this.isDragging() || !this.isSourcePublic()) {
      return false;
    }
    const sourceType = this.registry.getSourceType(sourceId);
    const draggedItemType = this.getItemType();
    if (sourceType !== draggedItemType) {
      return false;
    }
    return source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options = {
    shallow: false
  }) {
    if (!targetId) {
      return false;
    }
    const { shallow } = options;
    if (!this.isDragging()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType)) {
      return false;
    }
    const targetIds = this.getTargetIds();
    if (!targetIds.length) {
      return false;
    }
    const index = targetIds.indexOf(targetId);
    if (shallow) {
      return index === targetIds.length - 1;
    } else {
      return index > -1;
    }
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
    this.store = store;
    this.registry = registry;
  }
};

// node_modules/@react-dnd/asap/dist/makeRequestCall.js
var scope = typeof globalThis !== "undefined" ? globalThis : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    const timeoutHandle = setTimeout(handleTimer, 0);
    const intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1;
  const observer = new BrowserMutationObserver(callback);
  const node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
var makeRequestCall = typeof BrowserMutationObserver === "function" ? (
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
    const { queue: q, requestFlush } = this;
    if (!q.length) {
      requestFlush();
      this.flushing = true;
    }
    q[q.length] = task;
  }
  constructor() {
    this.queue = [];
    this.pendingErrors = [];
    this.flushing = false;
    this.index = 0;
    this.capacity = 1024;
    this.flush = () => {
      const { queue: q } = this;
      while (this.index < q.length) {
        const currentIndex = this.index;
        this.index++;
        q[currentIndex].call();
        if (this.index > this.capacity) {
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++) {
            q[scan] = q[scan + this.index];
          }
          q.length -= this.index;
          this.index = 0;
        }
      }
      q.length = 0;
      this.index = 0;
      this.flushing = false;
    };
    this.registerPendingError = (err) => {
      this.pendingErrors.push(err);
      this.requestErrorThrow();
    };
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length) {
        throw this.pendingErrors.shift();
      }
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
      this.task = null;
      this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
};

// node_modules/@react-dnd/asap/dist/TaskFactory.js
var TaskFactory = class {
  create(task) {
    const tasks = this.freeTasks;
    const t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t) => tasks[tasks.length] = t
    );
    t1.task = task;
    return t1;
  }
  constructor(onError) {
    this.onError = onError;
    this.freeTasks = [];
  }
};

// node_modules/@react-dnd/asap/dist/asap.js
var asapQueue = new AsapQueue();
var taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

// node_modules/dnd-core/dist/actions/registry.js
var ADD_SOURCE = "dnd-core/ADD_SOURCE";
var ADD_TARGET = "dnd-core/ADD_TARGET";
var REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
var REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
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
  invariant(typeof source.canDrag === "function", "Expected canDrag to be a function.");
  invariant(typeof source.beginDrag === "function", "Expected beginDrag to be a function.");
  invariant(typeof source.endDrag === "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop === "function", "Expected canDrop to be a function.");
  invariant(typeof target.hover === "function", "Expected hover to be a function.");
  invariant(typeof target.drop === "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t) => validateType(t, false)
    );
    return;
  }
  invariant(typeof type === "string" || typeof type === "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}

// node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2["SOURCE"] = "SOURCE";
  HandlerRole2["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

// node_modules/dnd-core/dist/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

// node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js
function getNextHandlerId(role) {
  const id = getNextUniqueId().toString();
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
function mapContainsValue(map4, searchValue) {
  const entries = map4.entries();
  let isDone = false;
  do {
    const { done, value: [, value] } = entries.next();
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
var HandlerRegistryImpl = class {
  addSource(type, source) {
    validateType(type);
    validateSourceContract(source);
    const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    this.store.dispatch(addSource(sourceId));
    return sourceId;
  }
  addTarget(type, target) {
    validateType(type, true);
    validateTargetContract(target);
    const targetId = this.addHandler(HandlerRole.TARGET, type, target);
    this.store.dispatch(addTarget(targetId));
    return targetId;
  }
  containsHandler(handler) {
    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
  }
  getSource(sourceId, includePinned = false) {
    invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
    const isPinned = includePinned && sourceId === this.pinnedSourceId;
    const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
    return source;
  }
  getTarget(targetId) {
    invariant(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
    return this.types.get(sourceId);
  }
  getTargetType(targetId) {
    invariant(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.types.get(targetId);
  }
  isSourceId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    invariant(this.getSource(sourceId), "Expected an existing source.");
    this.store.dispatch(removeSource(sourceId));
    asap(() => {
      this.dragSources.delete(sourceId);
      this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    invariant(this.getTarget(targetId), "Expected an existing target.");
    this.store.dispatch(removeTarget(targetId));
    this.dropTargets.delete(targetId);
    this.types.delete(targetId);
  }
  pinSource(sourceId) {
    const source = this.getSource(sourceId);
    invariant(source, "Expected an existing source.");
    this.pinnedSourceId = sourceId;
    this.pinnedSource = source;
  }
  unpinSource() {
    invariant(this.pinnedSource, "No source is pinned at the time.");
    this.pinnedSourceId = null;
    this.pinnedSource = null;
  }
  addHandler(role, type, handler) {
    const id = getNextHandlerId(role);
    this.types.set(id, type);
    if (role === HandlerRole.SOURCE) {
      this.dragSources.set(id, handler);
    } else if (role === HandlerRole.TARGET) {
      this.dropTargets.set(id, handler);
    }
    return id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map();
    this.dragSources = /* @__PURE__ */ new Map();
    this.dropTargets = /* @__PURE__ */ new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }
};

// node_modules/dnd-core/dist/utils/equality.js
var strictEquality = (a, b) => a === b;
function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
function areArraysEqual(a, b, isEqual = strictEquality) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
}

// node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js
function reduce(_state = NONE, action) {
  switch (action.type) {
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
  const { targetIds = [], prevTargetIds = [] } = action.payload;
  const result = xor(targetIds, prevTargetIds);
  const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange) {
    return NONE;
  }
  const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  const innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}

// node_modules/dnd-core/dist/reducers/dragOffset.js
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    });
  }
  return target;
}
var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce2(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return _objectSpread3({}, state, {
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
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty4(target, key, source[key]);
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
  didDrop: false,
  isSourcePublic: null
};
function reduce3(state = initialState2, action) {
  const { payload } = action;
  switch (action.type) {
    case BEGIN_DRAG:
      return _objectSpread4({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread4({}, state, {
        isSourcePublic: true
      });
    case HOVER:
      return _objectSpread4({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return _objectSpread4({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread4({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread4({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/refCount.js
function reduce4(state = 0, action) {
  switch (action.type) {
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
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    });
  }
  return target;
}
function reduce6(state = {}, action) {
  return {
    dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread5({}, action.payload, {
        prevTargetIds: get6(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce2(state.dragOffset, action),
    refCount: reduce4(state.refCount, action),
    dragOperation: reduce3(state.dragOperation, action),
    stateId: reduce5(state.stateId)
  };
}

// node_modules/dnd-core/dist/createDragDropManager.js
function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = false) {
  const store = makeStoreInstance(debugMode);
  const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  const manager = new DragDropManagerImpl(store, monitor);
  const backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
function makeStoreInstance(debugMode) {
  const reduxDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reduce6, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}

// node_modules/react-dnd/dist/core/DndProvider.js
var import_react7 = __toESM(require_react(), 1);
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var refCount = 0;
var INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var DndProvider = /* @__PURE__ */ (0, import_react7.memo)(function DndProvider2(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  const [manager, isGlobalInstance] = getDndContextValue(props);
  (0, import_react7.useEffect)(() => {
    if (isGlobalInstance) {
      const context = getGlobalContext();
      ++refCount;
      return () => {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
    return;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props) {
    const manager2 = {
      dragDropManager: props.manager
    };
    return [
      manager2,
      false
    ];
  }
  const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  const isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  const ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof globalThis !== "undefined" ? globalThis : window;
}

// node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
function memoize(fn) {
  let result = null;
  const memoized = () => {
    if (result == null) {
      result = fn();
    }
    return result;
  };
  return memoized;
}
function without2(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  const set = /* @__PURE__ */ new Set();
  const insertItem = (item) => set.add(item);
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  set.forEach(
    (key) => result.push(key)
  );
  return result;
}

// node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js
var EnterLeaveCounter = class {
  enter(enteringNode) {
    const previousLength = this.entered.length;
    const isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]);
    return previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    const previousLength = this.entered.length;
    this.entered = without2(this.entered.filter(this.isNodeInDocument), leavingNode);
    return previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
var NativeDragSource = class {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: true,
        enumerable: true,
        get() {
          console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
          return null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      const newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        const propertyFn = this.config.exposeProperties[property];
        if (propertyFn != null) {
          newProperties[property] = {
            value: propertyFn(dataTransfer, this.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        }
      });
      Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return true;
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
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_exports = {};
__export(NativeTypes_exports, {
  FILE: () => FILE,
  HTML: () => HTML,
  TEXT: () => TEXT,
  URL: () => URL
});
var FILE = "__NATIVE_FILE__";
var URL = "__NATIVE_URL__";
var TEXT = "__NATIVE_TEXT__";
var HTML = "__NATIVE_HTML__";

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  const result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result != null ? result : defaultValue;
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
  [URL]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split("\n"),
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
  const config = nativeTypesConfig[type];
  if (!config) {
    throw new Error(`native type ${type} has no configuration`);
  }
  const result = new NativeDragSource(config);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }
  const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    const typeConfig = nativeTypesConfig[nativeItemType];
    if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
      return false;
    }
    return typeConfig.matchesTypes.some(
      (t) => dataTransferTypes.indexOf(t) > -1
    );
  })[0] || null;
}

// node_modules/react-dnd-html5-backend/dist/BrowserDetector.js
var isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
);
var isSafari = memoize(
  () => Boolean(window.safari)
);

// node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
var MonotonicInterpolant = class {
  interpolate(x) {
    const { xs, ys, c1s, c2s, c3s } = this;
    let i = xs.length - 1;
    if (x === xs[i]) {
      return ys[i];
    }
    let low = 0;
    let high = c3s.length - 1;
    let mid;
    while (low <= high) {
      mid = Math.floor(0.5 * (low + high));
      const xHere = xs[mid];
      if (xHere < x) {
        low = mid + 1;
      } else if (xHere > x) {
        high = mid - 1;
      } else {
        return ys[mid];
      }
    }
    i = Math.max(0, high);
    const diff = x - xs[i];
    const diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    const { length } = xs;
    const indexes = [];
    for (let i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    const dys = [];
    const dxs = [];
    const ms = [];
    let dx;
    let dy;
    for (let i1 = 0; i1 < length - 1; i1++) {
      dx = xs[i1 + 1] - xs[i1];
      dy = ys[i1 + 1] - ys[i1];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    }
    const c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      const m2 = ms[i2];
      const mNext = ms[i2 + 1];
      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[i2];
        const dxNext = dxs[i2 + 1];
        const common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    const c2s = [];
    const c3s = [];
    let m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      const c1 = c1s[i3];
      const invDx = 1 / dxs[i3];
      const common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx);
      c3s.push(common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
};

// node_modules/react-dnd-html5-backend/dist/OffsetUtils.js
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el) {
    return null;
  }
  const { top, left } = el.getBoundingClientRect();
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
  return node.nodeName === "IMG" && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  const isImage = isImageNode(dragPreview);
  const dragPreviewNode = isImage ? sourceNode : dragPreview;
  const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  const offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  const { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode;
  const { anchorX, anchorY } = anchorPoint;
  const { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
  const calculateYOffset = () => {
    const interpolantY = new MonotonicInterpolant([
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
    ]);
    let y = interpolantY.interpolate(anchorY);
    if (isSafari() && isImage) {
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y;
  };
  const calculateXOffset = () => {
    const interpolantX = new MonotonicInterpolant([
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
    ]);
    return interpolantX.interpolate(anchorX);
  };
  const { offsetX, offsetY } = offsetPoint;
  const isManualOffsetX = offsetX === 0 || offsetX;
  const isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

// node_modules/react-dnd-html5-backend/dist/OptionsReader.js
var OptionsReader = class {
  get window() {
    if (this.globalContext) {
      return this.globalContext;
    } else if (typeof window !== "undefined") {
      return window;
    }
    return void 0;
  }
  get document() {
    var ref;
    if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
      return this.globalContext.document;
    } else if (this.window) {
      return this.window.document;
    } else {
      return void 0;
    }
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null;
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
};

// node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function _defineProperty6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty6(target, key, source[key]);
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
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    if (root.__isReactDndBackendSetUp) {
      throw new Error("Cannot have two HTML5 backends at the same time.");
    }
    root.__isReactDndBackendSetUp = true;
    this.addEventListeners(root);
  }
  teardown() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    root.__isReactDndBackendSetUp = false;
    this.removeEventListeners(this.rootElement);
    this.clearCurrentDragSourceNode();
    if (this.asyncEndDragFrameId) {
      var ref;
      (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    this.sourcePreviewNodeOptions.set(sourceId, options);
    this.sourcePreviewNodes.set(sourceId, node);
    return () => {
      this.sourcePreviewNodes.delete(sourceId);
      this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node);
    this.sourceNodeOptions.set(sourceId, options);
    const handleDragStart = (e) => this.handleDragStart(e, sourceId);
    const handleSelectStart = (e) => this.handleSelectStart(e);
    node.setAttribute("draggable", "true");
    node.addEventListener("dragstart", handleDragStart);
    node.addEventListener("selectstart", handleSelectStart);
    return () => {
      this.sourceNodes.delete(sourceId);
      this.sourceNodeOptions.delete(sourceId);
      node.removeEventListener("dragstart", handleDragStart);
      node.removeEventListener("selectstart", handleSelectStart);
      node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    const handleDragEnter = (e) => this.handleDragEnter(e, targetId);
    const handleDragOver = (e) => this.handleDragOver(e, targetId);
    const handleDrop = (e) => this.handleDrop(e, targetId);
    node.addEventListener("dragenter", handleDragEnter);
    node.addEventListener("dragover", handleDragOver);
    node.addEventListener("drop", handleDrop);
    return () => {
      node.removeEventListener("dragenter", handleDragEnter);
      node.removeEventListener("dragover", handleDragOver);
      node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    if (!target.addEventListener) {
      return;
    }
    target.addEventListener("dragstart", this.handleTopDragStart);
    target.addEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.addEventListener("dragend", this.handleTopDragEndCapture, true);
    target.addEventListener("dragenter", this.handleTopDragEnter);
    target.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.addEventListener("dragover", this.handleTopDragOver);
    target.addEventListener("dragover", this.handleTopDragOverCapture, true);
    target.addEventListener("drop", this.handleTopDrop);
    target.addEventListener("drop", this.handleTopDropCapture, true);
  }
  removeEventListeners(target) {
    if (!target.removeEventListener) {
      return;
    }
    target.removeEventListener("dragstart", this.handleTopDragStart);
    target.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.removeEventListener("dragend", this.handleTopDragEndCapture, true);
    target.removeEventListener("dragenter", this.handleTopDragEnter);
    target.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.removeEventListener("dragover", this.handleTopDragOver);
    target.removeEventListener("dragover", this.handleTopDragOverCapture, true);
    target.removeEventListener("drop", this.handleTopDrop);
    target.removeEventListener("drop", this.handleTopDropCapture, true);
  }
  getCurrentSourceNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread6({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    if (this.isDraggingNativeItem()) {
      return "copy";
    }
    return this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread6({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: false
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    const itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes_exports).some(
      (key) => NativeTypes_exports[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode();
    this.currentNativeSource = createNativeDragSource(type, dataTransfer);
    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
    this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode();
    this.currentDragSourceNode = node;
    const MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      this.currentDragSourceNode = null;
      if (this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
        this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
      }
      this.mouseMoveTimeoutTimer = null;
      return true;
    }
    return false;
  }
  handleDragStart(e, sourceId) {
    if (e.defaultPrevented) {
      return;
    }
    if (!this.dragStartSourceIds) {
      this.dragStartSourceIds = [];
    }
    this.dragStartSourceIds.unshift(sourceId);
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    if (this.dragOverTargetIds === null) {
      this.dragOverTargetIds = [];
    }
    this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map();
    this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map();
    this.sourceNodes = /* @__PURE__ */ new Map();
    this.sourceNodeOptions = /* @__PURE__ */ new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;
    this.lastClientOffset = null;
    this.hoverRafId = null;
    this.getSourceClientOffset = (sourceId) => {
      const source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    };
    this.endDragNativeItem = () => {
      if (!this.isDraggingNativeItem()) {
        return;
      }
      this.actions.endDrag();
      if (this.currentNativeHandle) {
        this.registry.removeSource(this.currentNativeHandle);
      }
      this.currentNativeHandle = null;
      this.currentNativeSource = null;
    };
    this.isNodeInDocument = (node) => {
      return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
    };
    this.endDragIfSourceWasRemovedFromDOM = () => {
      const node = this.currentDragSourceNode;
      if (node == null || this.isNodeInDocument(node)) {
        return;
      }
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.scheduleHover = (dragOverTargetIds) => {
      if (this.hoverRafId === null && typeof requestAnimationFrame !== "undefined") {
        this.hoverRafId = requestAnimationFrame(() => {
          if (this.monitor.isDragging()) {
            this.actions.hover(dragOverTargetIds || [], {
              clientOffset: this.lastClientOffset
            });
          }
          this.hoverRafId = null;
        });
      }
    };
    this.cancelHover = () => {
      if (this.hoverRafId !== null && typeof cancelAnimationFrame !== "undefined") {
        cancelAnimationFrame(this.hoverRafId);
        this.hoverRafId = null;
      }
    };
    this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode();
      this.dragStartSourceIds = [];
    };
    this.handleTopDragStart = (e) => {
      if (e.defaultPrevented) {
        return;
      }
      const { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      const clientOffset = getEventClientOffset(e);
      if (this.monitor.isDragging()) {
        this.actions.endDrag();
        this.cancelHover();
      }
      this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      const { dataTransfer } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === "function") {
          const sourceId = this.monitor.getSourceId();
          const sourceNode = this.sourceNodes.get(sourceId);
          const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            const { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions();
            const anchorPoint = {
              anchorX,
              anchorY
            };
            const offsetPoint = {
              offsetX,
              offsetY
            };
            const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData("application/json", {});
        } catch (err) {
        }
        this.setCurrentDragSourceNode(e.target);
        const { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        if (!captureDraggingState) {
          setTimeout(
            () => this.actions.publishDragSource(),
            0
          );
        } else {
          this.actions.publishDragSource();
        }
      } else if (nativeType) {
        this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) {
        return;
      } else {
        e.preventDefault();
      }
    };
    this.handleTopDragEndCapture = () => {
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleTopDragEnterCapture = (e) => {
      this.dragEnterTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
      const isFirstEnter = this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || this.monitor.isDragging()) {
        return;
      }
      const { dataTransfer } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (nativeType) {
        this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };
    this.handleTopDragEnter = (e) => {
      const { dragEnterTargetIds } = this;
      this.dragEnterTargetIds = [];
      if (!this.monitor.isDragging()) {
        return;
      }
      this.altKeyPressed = e.altKey;
      if (dragEnterTargetIds.length > 0) {
        this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e)
        });
      }
      const canDrop = dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      }
    };
    this.handleTopDragOverCapture = (e) => {
      this.dragOverTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
    };
    this.handleTopDragOver = (e) => {
      const { dragOverTargetIds } = this;
      this.dragOverTargetIds = [];
      if (!this.monitor.isDragging()) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
        return;
      }
      this.altKeyPressed = e.altKey;
      this.lastClientOffset = getEventClientOffset(e);
      this.scheduleHover(dragOverTargetIds);
      const canDrop = (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      } else if (this.isDraggingNativeItem()) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
      }
    };
    this.handleTopDragLeaveCapture = (e) => {
      if (this.isDraggingNativeItem()) {
        e.preventDefault();
      }
      const isLastLeave = this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }
      if (this.isDraggingNativeItem()) {
        setTimeout(
          () => this.endDragNativeItem(),
          0
        );
      }
      this.cancelHover();
    };
    this.handleTopDropCapture = (e) => {
      this.dropTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault();
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      } else if (matchNativeItemType(e.dataTransfer)) {
        e.preventDefault();
      }
      this.enterLeaveCounter.reset();
    };
    this.handleTopDrop = (e) => {
      const { dropTargetIds } = this;
      this.dropTargetIds = [];
      this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      });
      this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      });
      if (this.isDraggingNativeItem()) {
        this.endDragNativeItem();
      } else if (this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleSelectStart = (e) => {
      const target = e.target;
      if (typeof target.dragDrop !== "function") {
        return;
      }
      if (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      e.preventDefault();
      target.dragDrop();
    };
    this.options = new OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
};

// node_modules/react-dnd-html5-backend/dist/index.js
var HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};

// app/routes/app.product.$id.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.product.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.product.$id.tsx"
  );
}
var MDEditor = (0, import_react9.lazy)(_c5 = () => import("/build/_shared/esm-X6HX3MOB.js"));
_c22 = MDEditor;
var links = () => [{
  rel: "stylesheet",
  href: markdown_editor_default
}, {
  rel: "stylesheet",
  href: markdown_default
}];
function ProductPage() {
  var _a;
  _s5();
  const {
    product,
    productItems,
    productProperties,
    productdescription
  } = useLoaderData();
  const [formDirty, setFormDirty] = (0, import_react9.useState)(false);
  const [loading, setLoading] = (0, import_react9.useState)(false);
  const actionData = useActionData();
  const activatorRef = (0, import_react9.useRef)(null);
  const itemFetcher = useFetcher();
  const [itemDefinitions, setItemDefinitions] = (0, import_react9.useState)([]);
  const handleItemDefinitionsChange = (0, import_react9.useCallback)((values) => {
    setItemDefinitions(values);
  }, []);
  (0, import_react9.useEffect)(() => {
    if (itemFetcher.data) {
      const o = _5.map(_5.get(itemFetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _5.get(item, "node.id"),
          label: _5.get(item, "node.displayName")
        };
      });
      handleItemDefinitionsChange(o);
    }
  }, [itemFetcher.data, loading]);
  const propertiesFetcher = useFetcher();
  const [standardProperties, setStandardProperties] = (0, import_react9.useState)([]);
  const handleSetPropertiesChange = (0, import_react9.useCallback)((values) => {
    setStandardProperties(values);
  }, []);
  (0, import_react9.useEffect)(() => {
    if (propertiesFetcher.data) {
      const o = _5.map(_5.get(propertiesFetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _5.get(item, "node.id"),
          label: _5.get(item, "node.displayName")
        };
      });
      handleSetPropertiesChange(o);
    }
  }, [propertiesFetcher.data]);
  const handlePropertiesChange = (0, import_react9.useCallback)((values) => {
    formik.setFieldValue("properties", values);
    setFormDirty(true);
  }, []);
  const handleLoadingChange = (0, import_react9.useCallback)((value) => setLoading(value), []);
  (0, import_react9.useEffect)(() => {
    handleLoadingChange(false);
    setFormDirty(false);
    if (initialValues == formik.values) {
      setFormDirty(false);
    }
  }, [actionData]);
  const images = (0, import_react9.useMemo)(() => {
    if (_5.get(product, "additionalmedia.value")) {
      return JSON.parse(_5.get(product, "additionalmedia.value", "[]"));
    }
    return [];
  }, []);
  const fetcher = useFetcher();
  const fetcher2 = useFetcher();
  const navigate = useNavigate();
  const setAdditionalMedia = (values) => {
    formik.setFieldValue("additionalMedia", values);
    handleFormDirty();
  };
  const submit = useSubmit();
  const handleFormDirty = (0, import_react9.useCallback)(() => setFormDirty(true), []);
  const initialValues = {
    items: productItems,
    properties: productProperties,
    title: _5.get(product, "title"),
    description: _5.get(product, "description"),
    mainMedia: _5.get(product, "mainMedia.value", "") ? [_5.get(product, "mainMedia.value", "")] : [],
    additionalMedia: images,
    id: _5.get(product, "id"),
    productdescription: productdescription || ""
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      setLoading(true);
      const data = {
        title: _5.get(values, "title"),
        description: _5.get(values, "description"),
        ownerId: _5.get(product, "id"),
        properties: JSON.stringify({
          data: _5.get(values, "properties")
        }),
        items: JSON.stringify({
          data: _5.get(values, "items")
        }),
        additionalmedia: JSON.stringify(_5.get(values, "additionalMedia")),
        mainmedia: _5.get(values, "mainMedia"),
        productdescription: _5.get(values, "productdescription")
      };
      submit(data, {
        method: "post"
      });
    }
  });
  (0, import_react9.useEffect)(() => {
    setLoading(false);
  }, [formDirty]);
  (0, import_react9.useEffect)(() => {
    setLoading(false);
  }, []);
  const addItem = (item) => {
    handleFormDirty();
    const items = _5.get(formik, "values.items", []);
    const _item = _5.findIndex(items, (it) => it.id === item.id);
    let newItem = item;
    if (_item) {
      newItem = {
        ...item,
        id: numberGenerator() + numberGenerator()
      };
    }
    formik.setFieldValue("items", [item, ...items]);
  };
  const removeItem = (id) => {
    const items = _5.get(formik, "values.items", []);
    formik.setFieldValue("items", items == null ? void 0 : items.filter((it) => _5.get(it, "id") !== id));
    handleFormDirty();
  };
  const onEditItem = (item) => {
    const items = _5.get(formik, "values.items", []);
    const index = _5.findIndex(items, (_item) => (_item == null ? void 0 : _item.id) == item.id);
    formik.setFieldValue(`items[${index}]`, item);
    handleFormDirty();
  };
  const handleItemsChange = (0, import_react9.useCallback)((values) => {
    formik.setFieldValue(`items`, values);
    setFormDirty(true);
  }, []);
  const addProperty = (item) => {
    const otherProperties = _5.get(formik, "values.properties", []);
    formik.setFieldValue("properties", [item, ...otherProperties]);
    handleFormDirty();
  };
  const removeProperty = (id) => {
    var _a2;
    formik.setFieldValue("properties", (_a2 = get(formik, "values.properties", [])) == null ? void 0 : _a2.filter((it) => _5.get(it, "id") !== id));
    handleFormDirty();
  };
  const onEditProperty = (item, idx) => {
    const index = _5.findIndex(get(formik, "values.properties", []), (prop) => (prop == null ? void 0 : prop.id) === (item == null ? void 0 : item.id));
    formik.setFieldValue(`properties[${index}]`, item);
    handleFormDirty();
  };
  const removeAdditionalImages = (image) => {
    var _a2;
    formik.setFieldValue("additionalMedia", [...(_a2 = get(formik, "values.additionalMedia")) == null ? void 0 : _a2.filter((it) => it !== image)]);
    handleFormDirty();
  };
  const onAddMainMedia = (value) => {
    formik.setFieldValue("mainMedia", [value]);
    handleFormDirty();
  };
  const onAddAdditionalMedia = (image) => {
    formik.setFieldValue("additionalMedia", [image, ...get(formik, "values.additionalMedia", [])]);
    handleFormDirty();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Page, { backAction: {
    content: "Products",
    url: "/app/products"
  }, title: _5.get(product, "title", ""), subtitle: "product", compactTitle: true, secondaryActions: [{
    content: "Duplicate",
    accessibilityLabel: "Secondary action label",
    onAction: () => {
      var _a2, _b;
      (_b = (_a2 = activatorRef.current) == null ? void 0 : _a2.querySelector("button")) == null ? void 0 : _b.click();
    }
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout.Section, { children: [
    formDirty ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SaveAppBar_default, { loading, saveAction: formik.submitForm, discardAction: () => {
      navigate("/app/products");
    } }, void 0, false, {
      fileName: "app/routes/app.product.$id.tsx",
      lineNumber: 311,
      columnNumber: 26
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DuplicateForm_default, { modalTitle: "Duplicate", product, activatorRef }, void 0, false, {
        fileName: "app/routes/app.product.$id.tsx",
        lineNumber: 315,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VerticalStack, { gap: "3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TextField, { label: "Title", value: get(formik, "values.title"), onChange: (e) => {
          formik.setFieldValue("title", e);
          handleFormDirty();
        }, autoComplete: "off" }, void 0, false, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 318,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react9.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Await, { resolve: get(formik, "values.productdescription"), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { children: "Description" }, void 0, false, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 327,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { "data-color-mode": "light", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MDEditor, { value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: "productdescription", onChange: (e) => {
              formik.setFieldValue("productdescription", e);
              handleFormDirty();
            } }, void 0, false, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 329,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { padding: "2" }, void 0, false, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 334,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 328,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 326,
          columnNumber: 31
        }, this) }, void 0, false, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 325,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 324,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react9.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Await, { resolve: get(formik, "values.description"), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { children: "Original Description (not editable - to be removed in future)" }, void 0, false, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 344,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { "data-color-mode": "light", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MDEditor, { value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: "description", onChange: (e) => {
            } }, void 0, false, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 349,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { padding: "2" }, void 0, false, {
              fileName: "app/routes/app.product.$id.tsx",
              lineNumber: 354,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 348,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 343,
          columnNumber: 31
        }, this) }, void 0, false, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 342,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 341,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "Items" }, void 0, false, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 366,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ItemMetafieldForm_default, { activatorTitle: "Add Item", fetcher, onAdd: addItem, values: {} }, void 0, false, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 370,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 360,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProductItems_default, { fetcher, onEdit: onEditItem, items: get(formik, "values.items"), onRemove: removeItem, handleItemChange: handleItemsChange, itemDefinitions, formik }, void 0, false, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 373,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { padding: "5" }, void 0, false, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 375,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "Properties" }, void 0, false, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 382,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PropertyMetafieldForm_default, { activatorTitle: "Add Property", standardProperties, onAdd: addProperty, values: {} }, void 0, false, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 386,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 376,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProductProperties_default, { fetcher: fetcher2, onEdit: onEditProperty, onAdd: addProperty, onRemove: removeProperty, properties: get(formik, "values.properties"), handleItemChange: handlePropertiesChange, standardProperties }, void 0, false, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 390,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "Main Media" }, void 0, false, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 398,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ImageForm_default, { activatorTitle: `${((_a = get(formik, "values.mainMedia", [])) == null ? void 0 : _a.length) ? "Edit" : "Add"} Main Media`, onAdd: onAddMainMedia }, void 0, false, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 402,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 392,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ImageGrid_default, { images: get(formik, "values.mainMedia", []), onRemove: (image) => {
          formik.setFieldValue("mainMedia", []);
          handleFormDirty();
        }, setImages: (values) => {
          formik.setFieldValue("mainMedia", values);
          handleFormDirty();
        } }, void 0, false, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 405,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "Additional Media" }, void 0, false, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 420,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ImageForm_default, { onAdd: onAddAdditionalMedia, activatorTitle: `Add More Media` }, void 0, false, {
            fileName: "app/routes/app.product.$id.tsx",
            lineNumber: 424,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 414,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ImageGrid_default, { images: get(formik, "values.additionalMedia", []), onRemove: removeAdditionalImages, setImages: setAdditionalMedia }, void 0, false, {
          fileName: "app/routes/app.product.$id.tsx",
          lineNumber: 427,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.product.$id.tsx",
        lineNumber: 317,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.product.$id.tsx",
      lineNumber: 314,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.product.$id.tsx",
    lineNumber: 310,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/app.product.$id.tsx",
    lineNumber: 309,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.product.$id.tsx",
    lineNumber: 297,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.product.$id.tsx",
    lineNumber: 296,
    columnNumber: 10
  }, this);
}
_s5(ProductPage, "1CzNfw2366eTpK2tC5EVymUk2v4=", false, function() {
  return [useLoaderData, useActionData, useFetcher, useFetcher, useFetcher, useFetcher, useNavigate, useSubmit, useFormik];
});
_c32 = ProductPage;
var _c5;
var _c22;
var _c32;
$RefreshReg$(_c5, "MDEditor$lazy");
$RefreshReg$(_c22, "MDEditor");
$RefreshReg$(_c32, "ProductPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductPage as default,
  links
};
//# sourceMappingURL=/build/routes/app.product.$id-6HTOZDSR.js.map
