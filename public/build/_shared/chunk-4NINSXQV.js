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
  DeleteIcon_default
} from "/build/_shared/chunk-54DZ43JQ.js";
import {
  FIELD_REQUIRED,
  get,
  numberGenerator,
  require_lodash,
  truncate
} from "/build/_shared/chunk-W333RDEB.js";
import {
  Box,
  Button,
  ButtonGroup,
  IndexTable,
  LegacyCard,
  Modal,
  Select,
  TextField,
  VerticalStack,
  init_esm as init_esm2
} from "/build/_shared/chunk-3FUCSJLB.js";
import {
  init_esm,
  useFetcher
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

// app/components/Tables/ProductProperties.tsx
init_remix_hmr();
init_esm2();
var import_react3 = __toESM(require_react());
var _2 = __toESM(require_lodash());

// app/components/Form/Product/PropertyMetafieldEditForm.tsx
init_remix_hmr();
init_esm2();
var import_react = __toESM(require_react());
var _ = __toESM(require_lodash());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/Product/PropertyMetafieldEditForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/Product/PropertyMetafieldEditForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110832.8613";
}
var PropertyMetafieldEditForm = ({
  activatorTitle,
  onAdd,
  values,
  index,
  standardProperties,
  active,
  handleToggle
}) => {
  _s();
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [options, setOptions] = (0, import_react.useState)(standardProperties);
  const [selectedOptions, setSelectedOptions] = (0, import_react.useState)(_.get(values, "item.id") ? [_.get(values, "propertyBase.id")] : []);
  const handleSetSelectedOptions = (0, import_react.useCallback)((values2) => {
    setSelectedOptions(values2);
  }, []);
  const [ranking, handleSetRanking] = (0, import_react.useState)("Key");
  const setRanking = (0, import_react.useCallback)((value) => handleSetRanking(value), []);
  const [name, handleSetName] = (0, import_react.useState)(_.get(values, "name", ""));
  const setName = (0, import_react.useCallback)((value) => handleSetName(value), []);
  const [propertyValue, handleSetPropertyValue] = (0, import_react.useState)(_.get(values, "propertyValue", ""));
  const setPropertyValue = (0, import_react.useCallback)((value) => handleSetPropertyValue(value), []);
  const [errors, _setErrors] = (0, import_react.useState)({});
  const [propertyBase, handleSetPropertyBase] = (0, import_react.useState)(_.get(values, "propertyBase"));
  const setPropertyBase = (0, import_react.useCallback)((value) => handleSetPropertyBase(value), []);
  (0, import_react.useEffect)(() => {
    if (_.get(values, "name")) {
      setName(_.get(values, "name"));
    }
    if (_.get(values, "propertyValue")) {
      setPropertyValue(_.get(values, "propertyValue"));
    }
    if (_.get(values, "ranking")) {
      setRanking(_.get(values, "ranking"));
    }
    if (_.get(values, "propertyBase")) {
      setPropertyBase(_.get(values, "propertyBase"));
    }
    if (_.get(values, "item.id") || _.get(values, "propertyBase.id")) {
      handleSetSelectedOptions(_.get(values, "item.id") ? [_.get(values, "propertyBase.id")] : []);
    }
    if (_.get(values, "id")) {
      setId(_.get(values, "id"));
    }
  }, [values]);
  const fetcher = useFetcher();
  (0, import_react.useEffect)(() => {
    if (fetcher.data) {
      const o = _.map(_.get(fetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _.get(item, "node.id"),
          label: _.get(item, "node.displayName")
        };
      });
      setOptions(o);
    }
  }, [fetcher.data]);
  (0, import_react.useEffect)(() => {
    if (fetcher.data) {
      const o = _.map(_.get(fetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _.get(item, "node.id"),
          label: _.get(item, "node.displayName")
        };
      });
      setOptions(o);
    }
  }, [fetcher.data]);
  const onSearch = async (data) => {
    await fetcher.load(`/app/search-metaobjects/standard_properties?query=${_.get(data, "query")}&d=${(/* @__PURE__ */ new Date()).toString()}&after=${_.get(data, "after")}&before=${_.get(data, "before")}`);
  };
  const [id, handleSetId] = (0, import_react.useState)(_.get(values, "id") || numberGenerator());
  const setId = (0, import_react.useCallback)((value) => handleSetId(value), []);
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
    if (!propertyValue) {
      setErrors({
        ...errors,
        propertyValue: FIELD_REQUIRED
      });
    }
    if (!_.get(propertyBase, "id")) {
      setErrors({
        ...errors,
        propertyBase: FIELD_REQUIRED
      });
    }
    if (Object.keys(errors).length) {
      return;
    }
    if (!name || !ranking || !propertyValue || !_.get(propertyBase, "id"))
      return;
    onAdd({
      id,
      name,
      ranking,
      propertyValue,
      meta: {},
      propertyBase
    }, index);
    setId(numberGenerator());
    handleToggle();
  };
  const setErrors = (0, import_react.useCallback)((value) => _setErrors(value), []);
  const handleRankingChange = (0, import_react.useCallback)((value) => setRanking(value), []);
  const handleNameChange = (0, import_react.useCallback)((newValue) => setName(newValue), []);
  const handlePropertyValueChange = (0, import_react.useCallback)((newValue) => setPropertyValue(newValue), []);
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
    const option = _.find(_.get(fetcher.data, "data.metaobjects.edges"), (item) => {
      return _.get(item, "node.id") === _.get(selectedOptions, "[0]");
    });
    const propertyBase2 = {
      name: _.get(option, "node.displayName"),
      id: _.get(option, "node.id"),
      metaobject_type: _.get(option, "node.id")
    };
    setPropertyBase(propertyBase2);
  }, [selectedOptions]);
  (0, import_react.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: activatorTitle ? "block" : "none"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "micro", onClick: handleToggle, children: activatorTitle }, void 0, false, {
    fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
    lineNumber: 175,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
    lineNumber: 172,
    columnNumber: 21
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { activator, open: active, onClose: handleToggle, title: "Property", primaryAction: {
    content: "Ok",
    onAction: onSubmit
  }, secondaryActions: [{
    content: "Cancel",
    onAction: handleToggle
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Name", value: name, onChange: handleNameChange, autoComplete: "off", error: errors.name }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
      lineNumber: 189,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
      lineNumber: 190,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Ranking", options: raking, onChange: handleRankingChange, value: ranking, error: errors.ranking }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
      lineNumber: 191,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
      lineNumber: 192,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Property Value", value: propertyValue, onChange: handlePropertyValueChange, autoComplete: "off", error: errors.propertyValue }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
      lineNumber: 193,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
      lineNumber: 194,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectField_default, { onSearch, options, loading, label: "Select Item (Type First Letters to Search)", selectedOptions, setSelectedOptions: handleSetSelectedOptions, error: errors.propertyBase, placeholder: _.get(values, "propertyBase.name") || "search.." }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
      lineNumber: 195,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
    lineNumber: 188,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
    lineNumber: 187,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
    lineNumber: 180,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/PropertyMetafieldEditForm.tsx",
    lineNumber: 179,
    columnNumber: 10
  }, this);
};
_s(PropertyMetafieldEditForm, "EKNQ5qcJHTl8Il/AijqXbMZKL9k=", false, function() {
  return [useFetcher];
});
_c = PropertyMetafieldEditForm;
var PropertyMetafieldEditForm_default = PropertyMetafieldEditForm;
var _c;
$RefreshReg$(_c, "PropertyMetafieldEditForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/ProductProperties.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/ProductProperties.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/ProductProperties.tsx"
  );
  import.meta.hot.lastModified = "1713578110839.8948";
}
var ProductProperties = ({
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
  _s2();
  const resourceName = {
    singular: "property",
    plural: "properties"
  };
  const [loading, setLoading] = (0, import_react3.useState)(false);
  const [item, setItem] = (0, import_react3.useState)({});
  const handleSetItem = (0, import_react3.useCallback)((value) => {
    setItem(value);
  }, [item]);
  const {
    active,
    handleClose,
    handleOpen
  } = useHandleToggleModal();
  (0, import_react3.useEffect)(() => {
    if (get(item, "name")) {
      handleOpen();
    }
  }, [item]);
  const SortableItem = sortableElement(({
    id,
    name,
    ranking,
    propertyValue,
    propertyBase
  }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Row, { id: propertyBase.id, position: index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonGroup, { segmented: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DragHandle_default, {}, void 0, false, {
        fileName: "app/components/Tables/ProductProperties.tsx",
        lineNumber: 74,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/ProductProperties.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { size: "micro", onClick: () => {
        onRemove(id);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DeleteIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/ProductProperties.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/ProductProperties.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { size: "micro", onClick: () => {
        handleSetItem({
          id,
          name,
          propertyValue,
          ranking,
          propertyBase
        });
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EditIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/ProductProperties.tsx",
        lineNumber: 90,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/ProductProperties.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Cell, { children: truncate(name) }, void 0, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Cell, { children: propertyBase.name }, void 0, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Cell, { children: ranking }, void 0, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable.Cell, { children: propertyValue }, void 0, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this)
  ] }, `${index}-${propertyBase.id}-${name}`, true, {
    fileName: "app/components/Tables/ProductProperties.tsx",
    lineNumber: 70,
    columnNumber: 16
  }, this));
  const SortableContainer = sortableContainer(({
    children
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IndexTable, { resourceName, itemCount: (properties == null ? void 0 : properties.length) || 0, selectable: false, headings: [{
      title: ""
    }, {
      title: "Name"
    }, {
      title: "Property base"
    }, {
      title: "Ranking"
    }, {
      title: "Property value"
    }], children }, void 0, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 103,
      columnNumber: 12
    }, this);
  });
  const onSortEnd = ({
    oldIndex,
    newIndex
  }) => {
    const _items = arrayMove(properties, oldIndex, newIndex);
    handleItemChange(_items);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LegacyCard, { children: [
    loading || isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Loaders_default, {}, void 0, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 125,
      columnNumber: 31
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropertyMetafieldEditForm_default, { activatorTitle: "", onAdd: onEdit, index: 0, active, handleToggle: active ? handleClose : handleOpen, standardProperties, values: item }, void 0, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SortableContainer, { onSortEnd, useDragHandle: true, children: _2.map(properties, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SortableItem, { index, item: _2.get(value, "item"), name: value == null ? void 0 : value.name, id: _2.get(value, "id"), ranking: _2.get(value, "ranking"), propertyBase: _2.get(value, "propertyBase"), propertyValue: _2.get(value, "propertyValue") }, `item-${_2.get(value, "id")}-${/* @__PURE__ */ new Date()}-${index}`, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 129,
      columnNumber: 48
    }, this)) }, void 0, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/ProductProperties.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tables/ProductProperties.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
};
_s2(ProductProperties, "qz+PB0O+ynKN2DWfcsHEt/useb8=", false, function() {
  return [useHandleToggleModal];
});
_c2 = ProductProperties;
var ProductProperties_default = ProductProperties;
var _c2;
$RefreshReg$(_c2, "ProductProperties");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Form/Product/PropertyMetafieldForm.tsx
init_remix_hmr();
init_esm2();
var import_react4 = __toESM(require_react());
var _3 = __toESM(require_lodash());
init_esm();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/Product/PropertyMetafieldForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/Product/PropertyMetafieldForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110833.089";
}
var PropertyMetafieldForm = ({
  activatorTitle,
  onAdd,
  values,
  index,
  standardProperties
}) => {
  _s3();
  const {
    active,
    handleClose,
    handleOpen
  } = useHandleToggleModal();
  const [loading, setLoading] = (0, import_react4.useState)(false);
  const [options, setOptions] = (0, import_react4.useState)(standardProperties);
  const [selectedOptions, setSelectedOptions] = (0, import_react4.useState)(_3.get(values, "item.id") ? [_3.get(values, "propertyBase.id")] : []);
  const [ranking, setRanking] = (0, import_react4.useState)("Key");
  const [name, setName] = (0, import_react4.useState)(_3.get(values, "name", ""));
  const [propertyValue, setPropertyValue] = (0, import_react4.useState)(_3.get(values, "propertyValue", ""));
  const [errors, _setErrors] = (0, import_react4.useState)({});
  const [propertyBase, setPropertyBase] = (0, import_react4.useState)(_3.get(values, "propertyBase"));
  const fetcher = useFetcher();
  (0, import_react4.useEffect)(() => {
    if (fetcher.data) {
      const o = _3.map(_3.get(fetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _3.get(item, "node.id"),
          label: _3.get(item, "node.displayName")
        };
      });
      setOptions(o);
    }
  }, [fetcher.data]);
  const onSearch = async (data) => {
    await fetcher.load(`/app/search-metaobjects/standard_properties?query=${_3.get(data, "query")}&d=${(/* @__PURE__ */ new Date()).toString()}&after=${_3.get(data, "after")}&before=${_3.get(data, "before")}`);
  };
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
    if (!propertyValue) {
      setErrors({
        ...errors,
        propertyValue: FIELD_REQUIRED
      });
    }
    if (!_3.get(propertyBase, "id")) {
      setErrors({
        ...errors,
        propertyBase: FIELD_REQUIRED
      });
    }
    if (Object.keys(errors).length) {
      return;
    }
    if (!name || !ranking || !propertyValue || !_3.get(propertyBase, "id"))
      return;
    onAdd({
      id: _3.get(values, "id") || numberGenerator(),
      name,
      ranking,
      propertyValue,
      meta: {},
      propertyBase
    }, index);
    handleClose();
  };
  const setErrors = (0, import_react4.useCallback)((value) => _setErrors(value), []);
  const handleRankingChange = (0, import_react4.useCallback)((value) => setRanking(value), []);
  const handleNameChange = (0, import_react4.useCallback)((newValue) => setName(newValue), []);
  const handlePropertyValueChange = (0, import_react4.useCallback)((newValue) => setPropertyValue(newValue), []);
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
  (0, import_react4.useEffect)(() => {
    if (!_3.get(selectedOptions, "[0]"))
      return;
    const option = _3.find(_3.get(fetcher.data, "data.metaobjects.edges"), (item) => {
      return _3.get(item, "node.id") === _3.get(selectedOptions, "[0]");
    });
    const propertyBase2 = {
      name: _3.get(option, "node.displayName"),
      id: _3.get(option, "node.id"),
      metaobject_type: _3.get(option, "node.id")
    };
    setPropertyBase(propertyBase2);
  }, [selectedOptions]);
  (0, import_react4.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: {
    display: !activatorTitle ? "none" : "block"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { size: "micro", onClick: handleOpen, children: activatorTitle }, void 0, false, {
    fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
    lineNumber: 138,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
    lineNumber: 135,
    columnNumber: 21
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal, { activator, open: active, onClose: handleClose, title: "Property", primaryAction: {
    content: "Ok",
    onAction: onSubmit
  }, secondaryActions: [{
    content: "Cancel",
    onAction: handleClose
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TextField, { label: "Name", value: name, onChange: handleNameChange, autoComplete: "off", error: errors.name }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
      lineNumber: 152,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
      lineNumber: 153,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Select, { label: "Ranking", options: raking, onChange: handleRankingChange, value: ranking, error: errors.ranking }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
      lineNumber: 154,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
      lineNumber: 155,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TextField, { label: "Property Value", value: propertyValue, onChange: handlePropertyValueChange, autoComplete: "off", error: errors.propertyValue }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
      lineNumber: 156,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
      lineNumber: 157,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectField_default, { onSearch, options, loading, label: "Select Item (Type First Letters to Search)", selectedOptions, setSelectedOptions, error: errors.propertyBase, placeholder: _3.get(values, "propertyBase.name") || "search.." }, void 0, false, {
      fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
      lineNumber: 158,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
    lineNumber: 151,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
    lineNumber: 150,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
    lineNumber: 143,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Product/PropertyMetafieldForm.tsx",
    lineNumber: 142,
    columnNumber: 10
  }, this);
};
_s3(PropertyMetafieldForm, "TBGjThD+nIEzGcNmQXao8R/N6cc=", false, function() {
  return [useHandleToggleModal, useFetcher];
});
_c3 = PropertyMetafieldForm;
var PropertyMetafieldForm_default = PropertyMetafieldForm;
var _c3;
$RefreshReg$(_c3, "PropertyMetafieldForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ProductProperties_default,
  PropertyMetafieldForm_default
};
//# sourceMappingURL=/build/_shared/chunk-4NINSXQV.js.map
