import {
  ProductProperties_default,
  PropertyMetafieldForm_default
} from "/build/_shared/chunk-4NINSXQV.js";
import "/build/_shared/chunk-Q5N6DXQA.js";
import "/build/_shared/chunk-VZP5GZ3W.js";
import {
  ImageForm_default,
  ImageGrid_default
} from "/build/_shared/chunk-EDXGPGNJ.js";
import {
  getMetaobjectQuery,
  styles_default,
  useStorefrontFetch_default,
  useToast
} from "/build/_shared/chunk-YMF6HLSR.js";
import {
  SaveAppBar_default,
  findValueFromFields,
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
  toHTML
} from "/build/_shared/chunk-W333RDEB.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Box,
  Button,
  Card,
  InlineError,
  Layout,
  Modal,
  Page,
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
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/app.item.$handle.tsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
init_esm2();
var _2 = __toESM(require_lodash());
var import_react4 = __toESM(require_react());
var import_shopify = __toESM(require_shopify());

// app/components/Form/Product/DuplicateMetaobject.tsx
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
    window.$RefreshRuntime$.register(type, '"app/components/Form/Product/DuplicateMetaobject.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/Product/DuplicateMetaobject.tsx"
  );
  import.meta.hot.lastModified = "1713578110832.0134";
}
var DuplicateMetaobject = ({
  modalTitle,
  metaobject,
  activatorRef
}) => {
  var _a;
  _s();
  const actionErrors = ((_a = useActionData()) == null ? void 0 : _a.errors) || {};
  const action = useActionData() || {};
  const location = useLocation();
  const [name, setName] = (0, import_react.useState)(`Copy of - ${_.get(metaobject, "name")}`);
  const [errors, setErrors] = (0, import_react.useState)({});
  const [laoding, setLoading] = (0, import_react.useState)(false);
  const handleLoadingChange = (0, import_react.useCallback)((value) => setLoading(value), []);
  const handleValueChange = (0, import_react.useCallback)((value) => setName(value), []);
  const handleSetErrors = (0, import_react.useCallback)((value) => setErrors(value), []);
  const [active, setActive] = (0, import_react.useState)(false);
  const submit = useSubmit();
  const handleOpen = (0, import_react.useCallback)(() => {
    setActive(true);
    setLoading(false);
  }, []);
  const handleClose = (0, import_react.useCallback)(() => {
    setActive(false);
    setLoading(false);
  }, []);
  (0, import_react.useEffect)(() => {
    setLoading(false);
  }, []);
  (0, import_react.useEffect)(() => {
    setLoading(false);
  }, [action == null ? void 0 : action.data]);
  (0, import_react.useEffect)(() => {
    handleClose();
    setLoading(false);
  }, [location]);
  const handleSubmit = async () => {
    handleSetErrors({});
    handleLoadingChange(true);
    if (!name) {
      return handleSetErrors({
        title: FIELD_REQUIRED
      });
    }
    const data = {
      name,
      metaobject,
      description: _.get(metaobject, "description"),
      content: _.get(metaobject, "content"),
      ownerId: _.get(metaobject, "id"),
      properties: _.get(metaobject, "properties"),
      strapi_id: _.get(metaobject, "strapi_id"),
      handle: _.get(metaobject, "handle"),
      additionalmedia: _.get(metaobject, "additionalmedia"),
      mainmedia: _.get(metaobject, "mainmedia[0]", ""),
      prop_use: _.get(metaobject, "prop_use")
    };
    await submit(data, {
      method: "post",
      action: "/app/item/duplicate"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      height: 0,
      display: "none"
    }, ref: activatorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: handleOpen, children: "~" }, void 0, false, {
      fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { small: true, open: active, onClose: handleClose, title: modalTitle, primaryAction: {
      content: "Ok",
      onAction: handleSubmit,
      loading: laoding
    }, secondaryActions: [{
      content: "Cancel",
      onAction: handleClose
    }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
      Object.keys(actionErrors).length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineError, { message: JSON.stringify(actionErrors), fieldID: "errors" }, void 0, false, {
        fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
        lineNumber: 105,
        columnNumber: 49
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Name", value: name, onChange: handleValueChange, autoComplete: "off", error: errors.name }, void 0, false, {
        fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
        fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyLg", as: "p", children: "All item details will be copied from the original item." }, void 0, false, {
        fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/Product/DuplicateMetaobject.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
};
_s(DuplicateMetaobject, "8RVYq2x8+kHbn9yZXSQgZ293fyQ=", false, function() {
  return [useActionData, useActionData, useLocation, useSubmit];
});
_c = DuplicateMetaobject;
var DuplicateMetaobject_default = DuplicateMetaobject;
var _c;
$RefreshReg$(_c, "DuplicateMetaobject");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.item.$handle.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.item.$handle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.item.$handle.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: markdown_editor_default
}, {
  rel: "stylesheet",
  href: markdown_default
}, {
  rel: "stylesheet",
  href: styles_default
}];
var MDEditor = (0, import_react4.lazy)(_c2 = () => import("/build/_shared/esm-X6HX3MOB.js"));
_c22 = MDEditor;
async function loader({
  request,
  params
}) {
  _s2();
  const id = numberGenerator();
  const response = await useStorefrontFetch_default(JSON.stringify({
    query: getMetaobjectQuery,
    variables: {
      metaobjectHandleInput: {
        handle: params.handle,
        type: "item_definition"
      }
    }
  }));
  const data = await response.json();
  const metaobject = _2.get(data, "data.metaobject");
  let properties = findValueFromFields(metaobject, "prop_use");
  if (properties) {
    properties = JSON.parse(properties);
  }
  const metaobjectId = _2.get(metaobject, "id");
  const description = findValueFromFields(metaobject, "description");
  const content = findValueFromFields(metaobject, "content") || description;
  const name = findValueFromFields(metaobject, "name");
  const deprecated_properties = findValueFromFields(metaobject, "properties");
  const strapi_id = findValueFromFields(metaobject, "strapi_id") || "";
  const main_media = findValueFromFields(metaobject, "main_media") || "";
  let additional_media = findValueFromFields(metaobject, "additional_media");
  if (additional_media == null ? void 0 : additional_media.length) {
    additional_media = JSON.parse(additional_media);
  } else {
    additional_media = [];
  }
  const _metaobject = {
    id: metaobjectId,
    description,
    content,
    name,
    main_media,
    additional_media,
    handle: params.handle,
    strapi_id,
    properties: deprecated_properties,
    prop_use: _2.map(_2.get(properties, "data", []), (it, index) => ({
      id: index + id + 1,
      ...it
    }))
  };
  return (0, import_node.json)({
    metaobject: _metaobject,
    type: "item_definition",
    productProperties: _2.map(_2.get(properties, "data", []), (it, index) => ({
      id: index + id + 1,
      ...it
    }))
  }, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate"
    }
  });
}
_s2(loader, "HjlD7OEXg7KZXmWK74RlnbVYHlA=", false, function() {
  return [useStorefrontFetch_default];
});
function ProductPage() {
  _s22();
  const {
    metaobject,
    productProperties,
    type
  } = useLoaderData();
  const [formDirty, setFormDirty] = (0, import_react4.useState)(false);
  const [loading, setLoading] = (0, import_react4.useState)(false);
  const activatorRef = (0, import_react4.useRef)(null);
  const propertiesFetcher = useFetcher();
  const [standardProperties, setStandardProperties] = (0, import_react4.useState)([]);
  (0, import_react4.useEffect)(() => {
    if (propertiesFetcher.data) {
      const o = _2.map(_2.get(propertiesFetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _2.get(item, "node.id"),
          label: _2.get(item, "node.displayName")
        };
      });
      setStandardProperties(o);
    }
  }, [propertiesFetcher.data]);
  (0, import_react4.useEffect)(() => {
    if (!standardProperties.length && !loading) {
      onSearch({});
    }
  }, []);
  const onSearch = async (data) => {
    propertiesFetcher.load(`/app/search-metaobjects/standard_properties?query=${_2.get(data, "query")}&after=${_2.get(data, "after")}&before=${_2.get(data, "before")}&first=10`);
  };
  const actionData = useActionData();
  const [additionalMedia, setAdditionalMedia] = (0, import_react4.useState)(_2.get(metaobject, "additional_media"));
  const handleLoadingChange = (0, import_react4.useCallback)((value) => setLoading(value), []);
  const handleImagesChange = (0, import_react4.useCallback)((value) => {
    setAdditionalMedia(value);
    setFormDirty(true);
  }, []);
  const submit = useSubmit();
  const handleFormDirty = (0, import_react4.useCallback)(() => setFormDirty(true), []);
  const initialValues = (0, import_react4.useMemo)(() => ({
    properties: productProperties || [],
    name: _2.get(metaobject, "name", ""),
    description: _2.get(metaobject, "description", " "),
    content: _2.get(metaobject, "content", " "),
    mainmedia: _2.get(metaobject, "main_media", "") ? [_2.get(metaobject, "main_media", "")] : []
  }), [productProperties, actionData, metaobject]);
  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onSubmit: (values) => {
      var _a;
      handleLoadingChange(true);
      const data = {
        name: values.name,
        description: values.description,
        content: values.content,
        ownerId: _2.get(metaobject, "id"),
        properties: _2.get(metaobject, "properties", []),
        strapi_id: _2.get(metaobject, "strapi_id"),
        handle: _2.get(metaobject, "handle"),
        additionalmedia: JSON.stringify(additionalMedia),
        mainmedia: _2.get(values, "mainmedia")
      };
      if ((_a = values.properties) == null ? void 0 : _a.length) {
        data["prop_use"] = JSON.stringify({
          data: values.properties
        });
      }
      submit(data, {
        method: "post"
      });
    }
  });
  const navigate = useNavigate();
  const {
    toastMarkup,
    showToast
  } = useToast();
  (0, import_react4.useEffect)(() => {
    handleLoadingChange(false);
    if (_2.get(actionData, "errors")) {
      return showToast(`Something went wrong. ${JSON.stringify(_2.get(actionData, "errors[0].message"))}`, true);
    } else {
      if (formik.dirty) {
        showToast("Updated successfully");
      }
    }
    setFormDirty(false);
  }, [actionData]);
  const handlePropertiesChange = (0, import_react4.useCallback)((values) => {
    formik.setFieldValue("properties", values);
    setFormDirty(true);
  }, []);
  const handleSubmit = () => {
    formik.handleSubmit();
  };
  const addProperty = (item) => {
    formik.setFieldValue("properties", [item, ...get(formik, "values.properties", [])]);
    handleFormDirty();
  };
  const removeProperty = (id) => {
    var _a;
    formik.setFieldValue("properties", (_a = get(formik, "values.properties", [])) == null ? void 0 : _a.filter((it) => _2.get(it, "id") !== id));
    handleFormDirty();
  };
  const onEditProperty = (item) => {
    const index = _2.findIndex(formik.values.properties, (prop) => (prop == null ? void 0 : prop.id) === (item == null ? void 0 : item.id));
    formik.setFieldValue(`properties[${index}]`, item);
    handleFormDirty();
  };
  const removeAdditionalImages = (image) => {
    setAdditionalMedia([...additionalMedia.filter((it) => it !== image)]);
    handleFormDirty();
  };
  const onAddMainMedia = (value) => {
    formik.setFieldValue("mainmedia", [value]);
    handleFormDirty();
  };
  const onAddAdditionalMedia = (image) => {
    setAdditionalMedia([image, ...additionalMedia]);
    handleFormDirty();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Page, { backAction: {
    content: "Products",
    url: "/app/items/item_definition"
  }, title: _2.get(metaobject, "name", ""), subtitle: "Item", compactTitle: true, secondaryActions: [{
    content: "Duplicate",
    accessibilityLabel: "Secondary action label",
    onAction: () => {
      var _a, _b;
      (_b = (_a = activatorRef.current) == null ? void 0 : _a.querySelector("button")) == null ? void 0 : _b.click();
    }
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout.Section, { children: [
    formDirty ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SaveAppBar_default, { saveAction: handleSubmit, loading, discardAction: () => {
      navigate(`/app/items/${type}`);
    } }, void 0, false, {
      fileName: "app/routes/app.item.$handle.tsx",
      lineNumber: 340,
      columnNumber: 24
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DuplicateMetaobject_default, { modalTitle: "Duplicate", metaobject: {
        name: get(formik, "values.name"),
        description: get(formik, "values.description"),
        content: get(formik, "values.content"),
        id: _2.get(metaobject, "id"),
        properties: _2.get(metaobject, "properties"),
        strapi_id: _2.get(metaobject, "strapi_id"),
        handle: _2.get(metaobject, "handle"),
        additionalmedia: JSON.stringify(additionalMedia),
        mainmedia: _2.get(formik, "values.mainmedia"),
        prop_use: JSON.stringify({
          data: _2.get(formik, "values.properties")
        })
      }, activatorRef }, void 0, false, {
        fileName: "app/routes/app.item.$handle.tsx",
        lineNumber: 344,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VerticalStack, { gap: "3", children: [
        toastMarkup,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextField, { label: "Name", value: get(formik, "values.name"), onChange: (e) => {
          formik.setFieldValue("name", e);
          handleFormDirty();
        }, autoComplete: "off" }, void 0, false, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 361,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Await, { resolve: get(formik, "values.content"), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: "Description" }, void 0, false, {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 370,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { padding: "1" }, void 0, false, {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 371,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { "data-color-mode": "light", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MDEditor, { id: get(formik, "values.content"), value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: "description", onChange: (e) => {
              formik.setFieldValue("content", e);
              setFormDirty(true);
            } }, void 0, false, {
              fileName: "app/routes/app.item.$handle.tsx",
              lineNumber: 373,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { padding: "2" }, void 0, false, {
              fileName: "app/routes/app.item.$handle.tsx",
              lineNumber: 378,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 372,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 369,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 368,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 367,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "Properties" }, void 0, false, {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 391,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropertyMetafieldForm_default, { activatorTitle: "Add Property", onAdd: addProperty, values: {}, standardProperties }, void 0, false, {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 395,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 385,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductProperties_default, { fetcher: propertiesFetcher, onEdit: onEditProperty, onRemove: removeProperty, properties: get(formik, "values.properties"), handleItemChange: handlePropertiesChange, standardProperties }, void 0, false, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 399,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "Main Media" }, void 0, false, {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 407,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImageForm_default, { activatorTitle: `${_2.get(formik, "values.mainmedia.length") ? "Edit" : "Add"} Main Media`, onAdd: onAddMainMedia }, void 0, false, {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 411,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 401,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImageGrid_default, { images: _2.get(formik, "values.mainmedia"), onRemove: (image) => {
          formik.setFieldValue("mainmedia", []);
          handleFormDirty();
        }, setImages: (values) => {
          formik.setFieldValue("mainmedia", values);
          handleFormDirty();
        } }, void 0, false, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 414,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "Additional Media" }, void 0, false, {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 429,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImageForm_default, { onAdd: onAddAdditionalMedia, activatorTitle: `Add More Media` }, void 0, false, {
            fileName: "app/routes/app.item.$handle.tsx",
            lineNumber: 433,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 423,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImageGrid_default, { images: additionalMedia, onRemove: removeAdditionalImages, setImages: handleImagesChange }, void 0, false, {
          fileName: "app/routes/app.item.$handle.tsx",
          lineNumber: 436,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.item.$handle.tsx",
        lineNumber: 359,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.item.$handle.tsx",
      lineNumber: 343,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.item.$handle.tsx",
    lineNumber: 339,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.item.$handle.tsx",
    lineNumber: 338,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.item.$handle.tsx",
    lineNumber: 326,
    columnNumber: 10
  }, this);
}
_s22(ProductPage, "SkKnD4y4CWJbTxz7RlHs516tmR4=", false, function() {
  return [useLoaderData, useFetcher, useActionData, useSubmit, useFormik, useNavigate, useToast];
});
_c3 = ProductPage;
var _c2;
var _c22;
var _c3;
$RefreshReg$(_c2, "MDEditor$lazy");
$RefreshReg$(_c22, "MDEditor");
$RefreshReg$(_c3, "ProductPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductPage as default,
  links
};
//# sourceMappingURL=/build/routes/app.item.$handle-R7QCI3BM.js.map
