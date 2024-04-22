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
  TagSearchField_default
} from "/build/_shared/chunk-AHPLIXZP.js";
import {
  getMetaobjectQuery,
  styles_default,
  useStorefrontFetch_default,
  useToast
} from "/build/_shared/chunk-YMF6HLSR.js";
import {
  DeleteIcon_default,
  SaveAppBar_default,
  findValueFromFields,
  getFieldData,
  getSiteMetadataFieldData,
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
  logger,
  map,
  numberGenerator,
  require_lodash,
  slugify,
  toHTML,
  truncate
} from "/build/_shared/chunk-W333RDEB.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  Card,
  ChoiceList,
  Collapsible,
  Icon,
  IndexTable,
  Layout,
  LegacyCard,
  LegacyStack,
  Modal,
  Page,
  Select,
  SvgChevronDownMinor,
  SvgChevronRightMinor,
  SvgSearchMinor,
  Text,
  TextContainer,
  TextField,
  Thumbnail,
  VerticalStack,
  init_dist,
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

// app/routes/app.site-map.$handle.tsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
init_esm2();
var _12 = __toESM(require_lodash());
var import_react21 = __toESM(require_react());
var import_shopify = __toESM(require_shopify());

// app/components/Form/SiteMap/MetaForm.tsx
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
    window.$RefreshRuntime$.register(type, '"app/components/Form/SiteMap/MetaForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/SiteMap/MetaForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110834.4614";
}
var MDEditor = (0, import_react.lazy)(_c = () => import("/build/_shared/esm-X6HX3MOB.js"));
_c2 = MDEditor;
var MetaForm = ({
  formik
}) => {
  var _a, _b, _c21, _d, _e, _f, _g;
  const {
    values,
    errors
  } = formik;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Title", name: "meta.title", value: (_a = values.meta) == null ? void 0 : _a.title, onChange: (value) => {
      formik.setFieldValue("meta.title", value);
    }, autoComplete: "off", error: get(errors, "meta.title") }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "URL", name: "meta.url", value: (_b = values.meta) == null ? void 0 : _b.url, onChange: (value) => {
      formik.setFieldValue("meta.url", value);
    }, autoComplete: "off", error: get(errors, "meta.url") }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Logo", name: "meta.logo", value: (_c21 = values.meta) == null ? void 0 : _c21.logo, onChange: (value) => {
      formik.setFieldValue("meta.logo", value);
    }, autoComplete: "off", error: get(errors, "meta.logo") }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Tagline", name: "meta.tagline", value: (_d = values.meta) == null ? void 0 : _d.tagline, onChange: (value) => {
      formik.setFieldValue("meta.tagline", value);
    }, autoComplete: "off", error: get(errors, "meta.tagline") }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Favicon", name: "meta.favicon", value: (_e = values.meta) == null ? void 0 : _e.favicon, onChange: (value) => {
      formik.setFieldValue("meta.favicon", value);
    }, autoComplete: "off", error: get(errors, "meta.favicon") }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Copyright", name: "meta.copyright", value: (_f = values.meta) == null ? void 0 : _f.copyright, onChange: (value) => {
      formik.setFieldValue("meta.copyright", value);
    }, autoComplete: "off", error: get(errors, "meta.copyright") }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Keywords", name: "meta.keywords", value: (_g = values.meta) == null ? void 0 : _g.keywords, onChange: (value) => {
      formik.setFieldValue("meta.keywords", value);
    }, autoComplete: "off", error: get(errors, "meta.keywords") }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: get(values, "meta.about"), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "About" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 67,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "1" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-color-mode": "light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MDEditor, { value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: "meta.about", onChange: (e) => {
          formik.setFieldValue("meta.about", e);
        } }, void 0, false, {
          fileName: "app/components/Form/SiteMap/MetaForm.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
          fileName: "app/components/Form/SiteMap/MetaForm.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Form/SiteMap/MetaForm.tsx",
        lineNumber: 69,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 66,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MetaForm.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/MetaForm.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_c3 = MetaForm;
var MetaForm_default = MetaForm;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "MDEditor$lazy");
$RefreshReg$(_c2, "MDEditor");
$RefreshReg$(_c3, "MetaForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Form/SiteMap/HeaderFrom.tsx
init_remix_hmr();
init_esm2();
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/SiteMap/HeaderFrom.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/SiteMap/HeaderFrom.tsx"
  );
  import.meta.hot.lastModified = "1713578110834.0847";
}
var HeaderFrom = ({
  formik
}) => {
  var _a, _b, _c21;
  _s();
  const {
    values,
    errors
  } = formik;
  const inputs = (0, import_react3.useMemo)(() => [{
    label: "Logo",
    value: get(values, "header.logo"),
    error: get(errors, "header.logo"),
    type: "text",
    name: "header.logo"
  }, {
    label: "Search",
    choices: [{
      label: "True",
      value: "true"
    }, {
      label: "False",
      value: "false"
    }],
    error: get(errors, "header.search"),
    name: "header.search",
    type: "choice",
    value: get(values, "header.search")
  }, {
    label: "Login",
    choices: [{
      label: "True",
      value: "true"
    }, {
      label: "False",
      value: "false"
    }],
    error: get(errors, "header.login"),
    name: "header.login",
    type: "choice",
    value: get(values, "header.login")
  }], []);
  const choices = [{
    label: "True",
    value: "true"
  }, {
    label: "False",
    value: "false"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextField, { label: "Logo", name: "header.logo", value: (_a = get(values, "header.logo")) == null ? void 0 : _a.toString(), onChange: (value) => {
      formik.setFieldValue("header.logo", value);
    }, autoComplete: "off", error: get(errors, "header.logo") }, void 0, false, {
      fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChoiceList, { title: "Search", choices, selected: [(_b = get(values, "header.search")) == null ? void 0 : _b.toString()], onChange: (e) => {
      formik.setFieldValue("header.search", e);
    } }, void 0, false, {
      fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChoiceList, { title: "Login", choices, selected: [(_c21 = get(values, "header.login")) == null ? void 0 : _c21.toString()], onChange: (e) => {
      formik.setFieldValue("header.login", e);
    } }, void 0, false, {
      fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
      lineNumber: 82,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/HeaderFrom.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
};
_s(HeaderFrom, "s0lh7hv+SfIjfXnX0KWvMzCQRlg=");
_c4 = HeaderFrom;
var HeaderFrom_default = HeaderFrom;
var _c4;
$RefreshReg$(_c4, "HeaderFrom");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Form/SiteMap/FooterForm.tsx
init_remix_hmr();
init_esm2();
var import_react4 = __toESM(require_react());
init_esm();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/SiteMap/FooterForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/SiteMap/FooterForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110833.957";
}
var MDEditor2 = (0, import_react4.lazy)(_c5 = () => import("/build/_shared/esm-X6HX3MOB.js"));
_c22 = MDEditor2;
var FooterForm = ({
  formik
}) => {
  const {
    values,
    errors
  } = formik;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: get(values, "footer.widget_1", ""), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: "Widget 1" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "1" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { "data-color-mode": "light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MDEditor2, { value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: "footer.widget_1", onChange: (e) => {
          formik.setFieldValue("footer.widget_1", e);
        } }, void 0, false, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "2" }, void 0, false, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 37,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: get(values, "footer.widget_2", ""), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: "Widget 2" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "1" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { "data-color-mode": "light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MDEditor2, { value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: "footer.widget_2", onChange: (e) => {
          formik.setFieldValue("footer.widget_2", e);
        } }, void 0, false, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "2" }, void 0, false, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: get(values, "footer.widget_3", ""), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: "Widget 3" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "1" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 67,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { "data-color-mode": "light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MDEditor2, { value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: "footer.widget_3", onChange: (e) => {
          formik.setFieldValue("footer.widget_3", e);
        } }, void 0, false, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "2" }, void 0, false, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 65,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: get(values, "footer.widget_4", ""), children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: "Widget 4" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "1" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 81,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { "data-color-mode": "light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MDEditor2, { value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: "footer.widget_4", onChange: (e) => {
          formik.setFieldValue("footer.widget_4", e);
        } }, void 0, false, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { padding: "2" }, void 0, false, {
          fileName: "app/components/Form/SiteMap/FooterForm.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Form/SiteMap/FooterForm.tsx",
        lineNumber: 82,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 79,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FooterForm.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/FooterForm.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c32 = FooterForm;
var FooterForm_default = FooterForm;
var _c5;
var _c22;
var _c32;
$RefreshReg$(_c5, "MDEditor$lazy");
$RefreshReg$(_c22, "MDEditor");
$RefreshReg$(_c32, "FooterForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/PageMetaObject.tsx
init_remix_hmr();
init_esm2();
var import_react11 = __toESM(require_react());
var _4 = __toESM(require_lodash());

// app/components/Form/SiteMap/PageEditor/PageForm.tsx
init_remix_hmr();
init_esm2();
var import_react10 = __toESM(require_react());
var _3 = __toESM(require_lodash());

// app/components/Form/SiteMap/PageEditor/SectionForm.tsx
init_remix_hmr();
init_esm2();
var import_react9 = __toESM(require_react());
init_dist();

// app/components/Tables/BlocksMetaobject.tsx
init_remix_hmr();
init_esm2();
var import_react8 = __toESM(require_react());
var _2 = __toESM(require_lodash());

// app/components/Form/SiteMap/PageEditor/BlockForm.tsx
init_remix_hmr();
init_esm2();
var import_react6 = __toESM(require_react());
var _ = __toESM(require_lodash());
init_esm();
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/SiteMap/PageEditor/BlockForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/SiteMap/PageEditor/BlockForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110834.945";
}
var MDEditor3 = (0, import_react6.lazy)(_c6 = () => import("/build/_shared/esm-X6HX3MOB.js"));
_c23 = MDEditor3;
var BlockForm = ({
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
  _s2();
  const errors = {};
  const [active, setActive] = (0, import_react6.useState)(false);
  const handleChange = (0, import_react6.useCallback)(() => setActive(!active), [active]);
  const handleClose = (0, import_react6.useCallback)(() => {
    setActive(false);
  }, []);
  const handleOpen = (0, import_react6.useCallback)(() => setActive(true), []);
  const section = `pages[${pageIndex}].sections[${sectionIndex}]`;
  const blockIndex = _.findIndex(blocks, {
    id: block == null ? void 0 : block.id
  });
  const fieldName = `${section}.blocks[${blockIndex}]`;
  const [style, setStyle] = (0, import_react6.useState)(get(block, `style`, "hero"));
  const handleChangeStyle = (0, import_react6.useCallback)((value) => setStyle(value), []);
  const [title, setTitle] = (0, import_react6.useState)(get(block, `title`));
  const handleChangeTitle = (0, import_react6.useCallback)((value) => setTitle(value), []);
  const [media, setMedia] = (0, import_react6.useState)(get(block, `media`));
  const handleChangeMedia = (0, import_react6.useCallback)((value) => setMedia(value), []);
  const [ctaLabel, setctaLabel] = (0, import_react6.useState)(get(block, `ctaLabel`));
  const handleChangectaLabel = (0, import_react6.useCallback)((value) => setctaLabel(value), []);
  const [ctaLink, setctaLink] = (0, import_react6.useState)(get(block, `ctaLink`));
  const handleChangectaLink = (0, import_react6.useCallback)((value) => setctaLink(value), []);
  const [text, setText] = (0, import_react6.useState)(get(block, `text`));
  const handleChangeText = (0, import_react6.useCallback)((value) => setText(value), []);
  const [collection, setCollection] = (0, import_react6.useState)(get(block, `collections`, []));
  const handleChangeCollection = (0, import_react6.useCallback)((value) => {
    setCollection(value);
  }, []);
  const handleSubmit = () => {
    const data = {
      style,
      title,
      media,
      ctaLabel,
      ctaLink,
      text,
      collections: collection,
      id: get(block, `id`)
    };
    onsubmit(data);
    handleClose();
  };
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { size: "micro", onClick: handleChange, children: activatorTitle }, void 0, false, {
    fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
    lineNumber: 85,
    columnNumber: 21
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
      height: 0,
      display: "none"
    }, ref: activatorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: handleOpen, children: "~" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal, { activator, large: true, open: active, onClose: handleClose, title: modalTitle, primaryAction: {
      content: "Ok",
      onAction: handleSubmit
    }, secondaryActions: [{
      content: "Cancel",
      onAction: handleClose
    }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { label: "Style", options: [{
        label: "Hero",
        value: "hero"
      }, {
        label: "Text Image",
        value: "text_image"
      }, {
        label: "Image Text",
        value: "image_text"
      }, {
        label: "Page Banner",
        value: "page_banner"
      }, {
        label: "Articles",
        value: "articles"
      }, {
        label: "Products",
        value: "products"
      }, {
        label: "FAQs",
        value: "q&a"
      }, {
        label: "Features",
        value: "features"
      }, {
        label: "Teams",
        value: "teams"
      }], onChange: (e) => {
        handleChangeStyle(e);
      }, value: style, error: get(errors, `${fieldName}.style`) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextField, { label: "Title", value: title, name: `${fieldName}.title`, onChange: (e) => {
        handleChangeTitle(e);
      }, autoComplete: "off", error: get(errors, `${fieldName}.title`) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { padding: "2" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 137,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextField, { label: "Media", value: media, name: `${fieldName}.media`, onChange: (e) => {
        handleChangeMedia(e);
      }, autoComplete: "off", error: get(errors, `${fieldName}.media`) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { padding: "2" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextField, { label: "ctaLabel", value: ctaLabel, name: `${fieldName}.ctaLabel`, onChange: (e) => {
        handleChangectaLabel(e);
      }, autoComplete: "off", error: get(errors, `${fieldName}.ctaLabel`) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { padding: "2" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextField, { label: "ctaLink", value: ctaLink, name: `${fieldName}.ctaLink`, onChange: (e) => {
        handleChangectaLink(e);
      }, autoComplete: "off", error: get(errors, `${fieldName}.ctaLink`) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { padding: "2" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Await, { resolve: text, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: "Text" }, void 0, false, {
          fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
          lineNumber: 153,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { padding: "1" }, void 0, false, {
          fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
          lineNumber: 154,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { "data-color-mode": "light", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MDEditor3, { value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: `${fieldName}.text`, onChange: (e) => {
            handleChangeText(e);
          } }, void 0, false, {
            fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
            lineNumber: 156,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { padding: "2" }, void 0, false, {
            fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
            lineNumber: 159,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
          lineNumber: 155,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 152,
        columnNumber: 27
      }, this) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 151,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 150,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { padding: "2" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TagSearchField_default, { label: "Collections", options: _.map(_.get(formik, "values.product_collections", []), (it) => ({
        value: _.get(it, "id"),
        label: _.get(it, "name"),
        id: _.get(it, "id"),
        name: _.get(it, "name")
      })), selectedOptions: collection, handleChangeCollection }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/PageEditor/BlockForm.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
};
_s2(BlockForm, "HB4r0piTeC8X0DANIDEhI/S2wKI=");
_c33 = BlockForm;
var BlockForm_default = BlockForm;
var _c6;
var _c23;
var _c33;
$RefreshReg$(_c6, "MDEditor$lazy");
$RefreshReg$(_c23, "MDEditor");
$RefreshReg$(_c33, "BlockForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/BlocksMetaobject.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/BlocksMetaobject.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/BlocksMetaobject.tsx"
  );
  import.meta.hot.lastModified = "1713578110837.342";
}
var BlocksMetaobject = ({
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
  _s3();
  const resourceName = {
    singular: "block",
    plural: "blocks"
  };
  const activatorRef = (0, import_react8.useRef)(null);
  const activatorRefAdd = (0, import_react8.useRef)(null);
  const remove = (id) => {
    handleSetBlocks(blocks == null ? void 0 : blocks.filter((b) => (b == null ? void 0 : b.id) != id));
  };
  const add = (block) => {
    const id = numberGenerator();
    handleSetBlocks([{
      ...block,
      id
    }, ...blocks]);
  };
  const edit = (block) => {
    const index = _2.findIndex(blocks, (_item) => (_item == null ? void 0 : _item.id) == block.id);
    const otherItems = [...blocks];
    otherItems[index] = block;
    logger(index);
    logger(block);
    handleSetBlocks(otherItems);
  };
  const SortableItem = sortableElement((block, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IndexTable.Row, { id: get(block, "id"), position: index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IndexTable.Cell, { className: "draggable-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ButtonGroup, { segmented: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DragHandle_default, {}, void 0, false, {
        fileName: "app/components/Tables/BlocksMetaobject.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/BlocksMetaobject.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { size: "micro", onClick: () => {
        remove(get(block, "id"));
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DeleteIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/BlocksMetaobject.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/BlocksMetaobject.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BlockForm_default, { activatorRef, activatorTitle: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(EditIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/BlocksMetaobject.tsx",
        lineNumber: 82,
        columnNumber: 66
      }, this), modalTitle: "Block", pageIndex, sectionIndex, block, blocks, onsubmit: edit, formik, ...rest }, void 0, false, {
        fileName: "app/components/Tables/BlocksMetaobject.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Thumbnail, { source: get(block, "media", "https://placehold.co/600x400/000000/FFFFFF/png"), size: "small", alt: "Black choker necklace" }, void 0, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IndexTable.Cell, { children: get(block, "style") }, void 0, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IndexTable.Cell, { children: get(block, "ctaLabel") }, void 0, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IndexTable.Cell, { children: get(block, "ctaLink") }, void 0, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, `${index}-${get(block, "id")}-${get(block, "name")}`, true, {
    fileName: "app/components/Tables/BlocksMetaobject.tsx",
    lineNumber: 70,
    columnNumber: 58
  }, this));
  const SortableContainer = sortableContainer(({
    children,
    helperClass = "draggable-item"
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IndexTable, { resourceName, itemCount: (blocks == null ? void 0 : blocks.length) || 0, selectable: false, headings: [{
      title: ""
    }, {
      title: "media"
    }, {
      title: "style"
    }, {
      title: "ctaLabel"
    }, {
      title: "ctaLink"
    }], children }, void 0, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 96,
      columnNumber: 12
    }, this);
  });
  const onSortEnd = ({
    oldIndex,
    newIndex
  }) => {
    const __blocks = arrayMove(blocks, oldIndex, newIndex);
    handleSetBlocks(__blocks);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VerticalStack, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableContainer, { onSortEnd, useDragHandle: true, children: _2.map(blocks, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableItem, { index, ...{
      ...value,
      key: index
    } }, `item-${get(value, "id")}-${numberGenerator()}`, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 120,
      columnNumber: 44
    }, this)) }, void 0, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: {
      padding: 5
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BlockForm_default, { activatorRef: activatorRefAdd, activatorTitle: "Add block", modalTitle: "Block", pageIndex, sectionIndex, onsubmit: add, formik, ...rest }, void 0, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 128,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/BlocksMetaobject.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tables/BlocksMetaobject.tsx",
    lineNumber: 118,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Tables/BlocksMetaobject.tsx",
    lineNumber: 117,
    columnNumber: 10
  }, this);
};
_s3(BlocksMetaobject, "mpKMZvZfiL2e46agJi2LcYWyW38=");
_c7 = BlocksMetaobject;
var BlocksMetaobject_default = BlocksMetaobject;
var _c7;
$RefreshReg$(_c7, "BlocksMetaobject");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Form/SiteMap/PageEditor/SectionForm.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/SiteMap/PageEditor/SectionForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/SiteMap/PageEditor/SectionForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110835.2405";
}
function SectionForm({
  sectionIndex,
  section,
  formik,
  handleSetPage,
  page,
  pageIndex,
  ...rest
}) {
  _s4();
  const [open, setOpen] = (0, import_react9.useState)(sectionIndex == 0);
  const handleToggle = (0, import_react9.useCallback)(() => setOpen((open2) => !open2), []);
  const [blocks, setBlocks] = (0, import_react9.useState)(get(page, `sections[${sectionIndex}].blocks`, []));
  const handleSetBlocks = (0, import_react9.useCallback)((value) => {
    setBlocks(value);
    const _page = {
      ...page
    };
    _page.sections[sectionIndex].blocks = value;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: {
    marginTop: "20px"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LegacyCard, { sectioned: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LegacyStack, { vertical: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { size: "micro", onClick: handleToggle, ariaExpanded: open, ariaControls: "basic-collapsible", children: !open ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { source: SvgChevronRightMinor, color: "base" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
        lineNumber: 59,
        columnNumber: 24
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { source: SvgChevronDownMinor, color: "base" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
        lineNumber: 59,
        columnNumber: 75
      }, this) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: [
        "Section ",
        sectionIndex + 1
      ] }, void 0, true, {
        fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { size: "micro", onClick: () => {
        var _a;
        handleSetPage({
          ...page,
          sections: (_a = get(page, "sections")) == null ? void 0 : _a.filter((it) => (it == null ? void 0 : it.id) !== (section == null ? void 0 : section.id))
        });
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DeleteIcon_default, {}, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Collapsible, { open, id: "basic-collapsible", transition: {
      duration: "500ms",
      timingFunction: "ease-in-out"
    }, expandOnPrint: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BlocksMetaobject_default, { blocks: blocks || [], sectionIndex, pageIndex, formik, handleSetBlocks, ...rest }, `page-section-${sectionIndex}-${get(section, "id")}`, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
      lineNumber: 81,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/SiteMap/PageEditor/SectionForm.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s4(SectionForm, "3WBhBXdgWt+4KeUL49XEw8ernis=");
_c8 = SectionForm;
var SectionForm_default = SectionForm;
var _c8;
$RefreshReg$(_c8, "SectionForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Form/SiteMap/PageEditor/PageForm.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/SiteMap/PageEditor/PageForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/SiteMap/PageEditor/PageForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110835.1296";
}
var PageForm = ({
  page: _page,
  activatorRef,
  formik,
  pageIndex,
  _collections,
  onSubmit,
  activatorElement,
  ...rest
}) => {
  _s5();
  const [active, setActive] = (0, import_react10.useState)(false);
  const [errors, setErrors] = (0, import_react10.useState)({});
  const handleSetErrors = (0, import_react10.useCallback)((value) => setErrors(value), []);
  const handleOpen = (0, import_react10.useCallback)(() => setActive(true), []);
  const [page, setPage] = (0, import_react10.useState)(_page);
  const handleSetPage = (value) => setPage(value);
  const {
    toastMarkup,
    showToast
  } = useToast();
  const handleChangeStyle = (0, import_react10.useCallback)((value) => {
    setPage({
      ...page,
      style: value
    });
  }, [page]);
  const handleClose = (0, import_react10.useCallback)(() => {
    setActive(false);
  }, []);
  const handleSubmit = () => {
    handleSetErrors({});
    if (!get(page, "handle")) {
      handleSetErrors({
        ...errors,
        handle: FIELD_REQUIRED
      });
    }
    if (!get(page, "name")) {
      handleSetErrors({
        ...errors,
        name: FIELD_REQUIRED
      });
    }
    if (!get(page, "title")) {
      handleSetErrors({
        ...errors,
        title: FIELD_REQUIRED
      });
    }
    if (!get(page, "style")) {
      handleSetErrors({
        ...errors,
        style: FIELD_REQUIRED
      });
    }
    if (!_3.isEmpty(Object.keys(errors))) {
      logger(errors, "errors");
      return;
    }
    if (!(page == null ? void 0 : page.handle)) {
      return;
    }
    onSubmit({
      ...page,
      id: numberGenerator()
    }, pageIndex);
    handleClose();
  };
  const collections = (0, import_react10.useMemo)(() => {
    return _collections;
  }, [rest]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: {}, id: `${page == null ? void 0 : page.id}-page-button`, ref: activatorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { size: "micro", onClick: handleOpen, children: activatorElement }, void 0, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Modal, { large: true, open: active, onClose: handleClose, title: get(page, "name", "New Page") || "New Page", primaryAction: {
      content: "Ok",
      onAction: handleSubmit,
      loading: false
    }, secondaryActions: [{
      content: "Cancel",
      onAction: handleClose
    }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { children: [
      toastMarkup,
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextField, { label: "Name", value: get(page, "name"), error: get(errors, "name"), onChange: (e) => {
        handleSetPage({
          ...page,
          name: e
        });
      }, autoComplete: "off" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextField, { label: "Title", value: get(page, "title"), error: get(errors, "title"), onChange: (e) => {
        handleSetPage({
          ...page,
          title: e
        });
      }, onBlur: (e) => {
        var _a;
        handleSetPage({
          ...page,
          handle: slugify(((_a = e == null ? void 0 : e.target) == null ? void 0 : _a.value) || "")
        });
      }, autoComplete: "off" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Select, { label: "Style", options: [{
        label: "Dark Header",
        value: "dark_header"
      }, {
        label: "Light Header",
        value: "light_header"
      }], onChange: (e) => {
        handleChangeStyle(e);
      }, value: get(page, "style", "light_header"), error: get(errors, `style`) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 135,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextField, { label: "Keywords", value: get(page, "keywords"), onChange: (e) => {
        handleSetPage({
          ...page,
          keywords: e
        });
      }, autoComplete: "off" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextField, { label: "Handle", value: get(page, "handle"), error: get(errors, "handle"), onChange: (e) => {
        handleSetPage({
          ...page,
          handle: e
        });
      }, autoComplete: "off" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 150,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextField, { label: "Description", value: get(page, "description"), onChange: (e) => {
        handleSetPage({
          ...page,
          description: e
        });
      }, multiline: 4, autoComplete: "off" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 156,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { padding: 2 }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 162,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "Sections" }, void 0, false, {
          fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { onClick: () => {
          handleSetPage({
            ...page,
            sections: [...page == null ? void 0 : page.sections, {
              id: numberGenerator(),
              blocks: [{
                id: numberGenerator(),
                style: "hero",
                title: "",
                ctaLabel: "",
                ctaLink: "",
                collections: [],
                text: ""
              }]
            }]
          });
          showToast("Section added");
        }, size: "micro", children: "Add section" }, void 0, false, {
          fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
          lineNumber: 172,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: map(get(page, `sections`), (section, sectionIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SectionForm_default, { section, index: sectionIndex, formik, pageIndex, sectionIndex, handleSetPage, page, collections, ...rest }, `page-section-${sectionIndex}-${get(section, "id")}`, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 195,
        columnNumber: 70
      }, this)) }, void 0, false, {
        fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
        lineNumber: 194,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/PageEditor/PageForm.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
};
_s5(PageForm, "eS5i+PDuHohdJMpukDHh9gtUQRs=", false, function() {
  return [useToast];
});
_c9 = PageForm;
var PageForm_default = PageForm;
var _c9;
$RefreshReg$(_c9, "PageForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/PageMetaObject.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/PageMetaObject.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/PageMetaObject.tsx"
  );
  import.meta.hot.lastModified = "1713578110838.7793";
}
var PageMetaObject = ({
  fetcher,
  formik
}) => {
  _s6();
  const resourceName = {
    singular: "page",
    plural: "pages"
  };
  const [loading, setLoading] = (0, import_react11.useState)(false);
  const [collections, setCollections] = (0, import_react11.useState)([]);
  const activatorRef = (0, import_react11.useRef)(null);
  const {
    values
  } = formik;
  const {
    pages
  } = (0, import_react11.useMemo)(() => values, [values]);
  const onSearchCollections = async (data) => {
    await fetcher.load(`/app/search-collections?query=${_4.get(data, "query", "")}&after=${_4.get(data, "after")}&before=${_4.get(data, "before")}`);
  };
  (0, import_react11.useEffect)(() => {
    if (_4.isEmpty(collections) && fetcher.state !== "loading") {
      onSearchCollections({});
    }
  });
  (0, import_react11.useEffect)(() => {
    if (fetcher.data) {
      const res = _4.map(_4.get(fetcher.data, "data.collections.edges"), (item) => {
        return {
          value: _4.get(item, "node.id"),
          label: _4.get(item, "node.title")
        };
      });
      setCollections(res || []);
    }
  }, [fetcher.data, loading]);
  (0, import_react11.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);
  const onRemove = (page) => {
    const pagesCopy = [...pages];
    formik.setFieldValue("pages", pagesCopy == null ? void 0 : pagesCopy.filter((it) => _4.get(page, "id") !== get(it, "id")));
  };
  const SortableItem = sortableElement((page, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IndexTable.Row, { id: get(page, "id"), position: index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonGroup, { segmented: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DragHandle_default, {}, void 0, false, {
        fileName: "app/components/Tables/PageMetaObject.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/PageMetaObject.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { size: "micro", onClick: () => {
        onRemove(page);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DeleteIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/PageMetaObject.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/PageMetaObject.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(PageForm_default, { pageIndex: _4.findIndex(pages, {
        id: get(page, "id")
      }), formik, activatorRef, activatorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(EditIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/PageMetaObject.tsx",
        lineNumber: 89,
        columnNumber: 75
      }, this), page, onSearchCollections, collections, loading, _collections: collections, onSubmit: onEdit }, void 0, false, {
        fileName: "app/components/Tables/PageMetaObject.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IndexTable.Cell, { children: get(page, "name") }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IndexTable.Cell, { children: get(page, "title") }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IndexTable.Cell, { children: get(page, "style") }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IndexTable.Cell, { children: get(page, "handle") }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IndexTable.Cell, { children: get(page, "sections.length") }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, `${index}-${get(page, "id")}-${get(page, "name")}`, true, {
    fileName: "app/components/Tables/PageMetaObject.tsx",
    lineNumber: 75,
    columnNumber: 57
  }, this));
  const SortableContainer = sortableContainer(({
    children
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IndexTable, { resourceName, itemCount: (pages == null ? void 0 : pages.length) || 0, selectable: false, headings: [{
      title: ""
    }, {
      title: "name"
    }, {
      title: "Title"
    }, {
      title: "style"
    }, {
      title: "Handle"
    }, {
      title: "Sections"
    }], children }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 102,
      columnNumber: 12
    }, this);
  });
  const onAdd = (page, pageIndex) => {
    formik.setFieldValue("pages", [page, ...pages]);
  };
  const onEdit = (page, pageIndex) => {
    formik.setFieldValue(`pages[${pageIndex}]`, page);
  };
  const onSortEnd = ({
    oldIndex,
    newIndex
  }) => {
    const _items = arrayMove(pages, oldIndex, newIndex);
    formik.setFieldValue("pages", _items);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: "headingMd", as: "h6" }, void 0, false, {
        fileName: "app/components/Tables/PageMetaObject.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(PageForm_default, { pageIndex: -1, formik, activatorRef, activatorElement: "Add Page", page: {
        id: "",
        name: "",
        style: "light_header",
        title: "",
        description: "",
        keywords: "",
        handle: "",
        sections: []
      }, onSearchCollections, collections, loading, _collections: collections, onSubmit: onAdd }, void 0, false, {
        fileName: "app/components/Tables/PageMetaObject.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Box, { padding: 2 }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SortableContainer, { onSortEnd, useDragHandle: true, children: _4.map(pages, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SortableItem, { index, ...value }, `item-${get(value, "id")}-${numberGenerator()}`, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 156,
      columnNumber: 45
    }, this)) }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 155,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 154,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/PageMetaObject.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tables/PageMetaObject.tsx",
    lineNumber: 131,
    columnNumber: 10
  }, this);
};
_s6(PageMetaObject, "ZpySuLv82YDNMb9rwPLYQOeD3KU=");
_c10 = PageMetaObject;
var PageMetaObject_default = PageMetaObject;
var _c10;
$RefreshReg$(_c10, "PageMetaObject");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/MenuMetaobject.tsx
init_remix_hmr();
init_esm2();
var import_react13 = __toESM(require_react());
var _5 = __toESM(require_lodash());

// app/components/Form/SiteMap/MenuEditor/index.tsx
init_remix_hmr();
init_esm2();
var import_react12 = __toESM(require_react());
init_dist();
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/SiteMap/MenuEditor/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/SiteMap/MenuEditor/index.tsx"
  );
  import.meta.hot.lastModified = "1713578110834.36";
}
var MenuEditorForm = ({
  menuItem = {},
  formik,
  activatorElement,
  activatorRef,
  onSubmit
}) => {
  _s7();
  const {
    active,
    handleClose,
    handleOpen
  } = useHandleToggleModal();
  const [name, setName] = (0, import_react12.useState)(get(menuItem, "name", ""));
  const [page, setPage] = (0, import_react12.useState)(get(menuItem, "page", {}));
  const handleChangeName = (0, import_react12.useCallback)((value) => setName(value), []);
  const handleChangePage = (0, import_react12.useCallback)((value) => {
    setPage(value);
  }, []);
  const [errors, setErrors] = (0, import_react12.useState)({});
  const handleChangeErrors = (0, import_react12.useCallback)((value) => setErrors(value), []);
  const pages = (0, import_react12.useMemo)(() => {
    return get(formik, "values.pages");
  }, [formik.values]);
  const deselectedOptions = (0, import_react12.useMemo)(() => map(get(formik, "values.pages"), (item) => ({
    value: get(item, "id"),
    label: get(item, "name")
  })), [formik.values]);
  const [selectedOptions, setSelectedOptions] = (0, import_react12.useState)([]);
  const [inputValue, setInputValue] = (0, import_react12.useState)("");
  const [options, setOptions] = (0, import_react12.useState)(deselectedOptions);
  const [loading, setLoading] = (0, import_react12.useState)(false);
  const updateText = (0, import_react12.useCallback)((value) => {
    setInputValue(value);
    if (!loading) {
      setLoading(true);
    }
    setTimeout(() => {
      if (value === "") {
        setOptions(deselectedOptions);
        setLoading(false);
        return;
      }
      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions.filter((option) => option.label.match(filterRegex));
      setOptions(resultOptions);
      setLoading(false);
    }, 300);
  }, [deselectedOptions, loading]);
  const updateSelection = (0, import_react12.useCallback)((selected) => {
    const selectedPage = pages == null ? void 0 : pages.filter((it) => (it == null ? void 0 : it.id) === get(selected, "[0]"));
    handleChangePage({
      id: get(selectedPage, "[0].id"),
      handle: get(selectedPage, "[0].handle"),
      name: get(selectedPage, "[0].name")
    });
    const selectedText = selected.map((selectedItem) => {
      const matchedOption = options.find((option) => {
        return option.value.match(selectedItem);
      });
      return matchedOption && matchedOption.label;
    });
    setSelectedOptions(selected);
    setInputValue(selectedText[0] || "");
  }, [options]);
  const textField = /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Autocomplete.TextField, { onChange: updateText, label: "Page", value: inputValue, prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Icon, { source: SvgSearchMinor, tone: "base" }, void 0, false, {
    fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
    lineNumber: 93,
    columnNumber: 107
  }, this), placeholder: get(page, "name", "Search"), autoComplete: "off", error: get(errors, "page") }, void 0, false, {
    fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
    lineNumber: 93,
    columnNumber: 21
  }, this);
  const handleSubmit = () => {
    setErrors({});
    if (!(page == null ? void 0 : page.handle)) {
      return handleChangeErrors({
        ...errors,
        page: FIELD_REQUIRED
      });
    }
    if (!name) {
      return handleChangeErrors({
        ...errors,
        name: FIELD_REQUIRED
      });
    }
    onSubmit({
      page,
      name,
      id: get(menuItem, "id", numberGenerator())
    });
    handleClose();
  };
  const emptyState = /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Icon, { source: SvgSearchMinor }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: {
      textAlign: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TextContainer, { children: "Could not find any results" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
    lineNumber: 115,
    columnNumber: 22
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: {}, id: `${page == null ? void 0 : page.id}-page-button`, ref: activatorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button, { size: "micro", onClick: handleOpen, children: activatorElement }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Modal, { large: true, open: active, onClose: handleClose, title: get(page, "name", "New Page") || "New Page", primaryAction: {
      content: "Ok",
      onAction: handleSubmit,
      loading: false
    }, secondaryActions: [{
      content: "Cancel",
      onAction: handleClose
    }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TextField, { label: "Name", value: name, error: get(errors, "name"), onChange: (e) => {
        handleChangeName(e);
      }, autoComplete: "off" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { padding: "1" }, void 0, false, {
        fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Autocomplete, { options, selected: selectedOptions, onSelect: updateSelection, emptyState, loading, textField }, void 0, false, {
        fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/MenuEditor/index.tsx",
    lineNumber: 123,
    columnNumber: 10
  }, this);
};
_s7(MenuEditorForm, "LCDdWSaGYYz4ki8089cnXDo3He4=", false, function() {
  return [useHandleToggleModal];
});
_c11 = MenuEditorForm;
var MenuEditor_default = MenuEditorForm;
var _c11;
$RefreshReg$(_c11, "MenuEditorForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/MenuMetaobject.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/MenuMetaobject.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/MenuMetaobject.tsx"
  );
  import.meta.hot.lastModified = "1713578110838.0803";
}
var MenuMetaobject = ({
  formik
}) => {
  _s8();
  const resourceName = {
    singular: "menu",
    plural: "menus"
  };
  const {
    values
  } = formik;
  const menuItems = (0, import_react13.useMemo)(() => get(values, "menu.menuItems", []), [values]);
  const activatorRef = (0, import_react13.useRef)(null);
  const onRemove = (menuItem) => {
    const copyItems = [...menuItems];
    formik.setFieldValue("menu.menuItems", copyItems == null ? void 0 : copyItems.filter((it) => (it == null ? void 0 : it.id) !== (menuItem == null ? void 0 : menuItem.id)));
  };
  const handleChangeMenuItems = (0, import_react13.useCallback)((items) => {
    formik.setFieldValue("menu.menuItems", items);
  }, []);
  const onAdd = (menuItem) => {
    handleChangeMenuItems([menuItem, ...menuItems]);
  };
  const onEdit = (menuItem) => {
    const index = _5.findIndex(menuItems, (_item) => (_item == null ? void 0 : _item.id) === menuItem.id);
    formik.setFieldValue(`menu.menuItems[${index}]`, menuItem);
  };
  const SortableItem = sortableElement(({
    menuItem
  }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IndexTable.Row, { id: get(menuItem, "id"), position: index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ButtonGroup, { segmented: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DragHandle_default, {}, void 0, false, {
        fileName: "app/components/Tables/MenuMetaobject.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/MenuMetaobject.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { size: "micro", onClick: () => {
        onRemove(menuItem);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DeleteIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/MenuMetaobject.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/MenuMetaobject.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(MenuEditor_default, { formik, menuItem, activatorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(EditIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/MenuMetaobject.tsx",
        lineNumber: 71,
        columnNumber: 81
      }, this), activatorRef, onSubmit: onEdit }, void 0, false, {
        fileName: "app/components/Tables/MenuMetaobject.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IndexTable.Cell, { children: truncate(get(menuItem, "name")) }, void 0, false, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IndexTable.Cell, { children: get(menuItem, "page.name") }, void 0, false, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IndexTable.Cell, { children: [
      get(menuItem, "page.handle"),
      " "
    ] }, void 0, true, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, `${index}-${get(menuItem, "id")}-${get(menuItem, "name")}`, true, {
    fileName: "app/components/Tables/MenuMetaobject.tsx",
    lineNumber: 60,
    columnNumber: 16
  }, this));
  const SortableContainer = sortableContainer(({
    children
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IndexTable, { resourceName, itemCount: (menuItems == null ? void 0 : menuItems.length) || 0, selectable: false, headings: [{
      title: ""
    }, {
      title: "Name"
    }, {
      title: "Page Name"
    }, {
      title: "Handle"
    }], children }, void 0, false, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 82,
      columnNumber: 12
    }, this);
  });
  const onSortEnd = ({
    oldIndex,
    newIndex
  }) => {
    const _menuItems = arrayMove(menuItems, oldIndex, newIndex);
    handleChangeMenuItems(_menuItems);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Box, { padding: 1 }, void 0, false, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "Menu Items" }, void 0, false, {
        fileName: "app/components/Tables/MenuMetaobject.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(MenuEditor_default, { formik, menuItem: {}, activatorElement: "Add MenuItem", activatorRef, onSubmit: onAdd }, void 0, false, {
        fileName: "app/components/Tables/MenuMetaobject.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SortableContainer, { onSortEnd, useDragHandle: true, children: _5.map(menuItems, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SortableItem, { index, menuItem: value, name: value == null ? void 0 : value.name, id: _5.get(value, "id") }, `menu-item-${get(value, "id")}-${index}`, false, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 116,
      columnNumber: 49
    }, this)) }, void 0, false, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/MenuMetaobject.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tables/MenuMetaobject.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
};
_s8(MenuMetaobject, "Qp+30wE55WqcHsiHzotFgbS56Co=");
_c12 = MenuMetaobject;
var MenuMetaobject_default = MenuMetaobject;
var _c12;
$RefreshReg$(_c12, "MenuMetaobject");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Accordion.tsx
init_remix_hmr();
init_esm2();
init_dist();
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Accordion.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s9 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Accordion.tsx"
  );
  import.meta.hot.lastModified = "1713578110831.0066";
}
var Accordion = ({
  children,
  title
}) => {
  _s9();
  const {
    active: open,
    handleClose,
    handleOpen
  } = useHandleToggleModal();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "row"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { size: "micro", onClick: open ? handleClose : handleOpen, ariaExpanded: open, ariaControls: "basic-collapsible", children: !open ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Icon, { source: SvgChevronRightMinor, color: "base" }, void 0, false, {
        fileName: "app/components/Accordion.tsx",
        lineNumber: 41,
        columnNumber: 20
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Icon, { source: SvgChevronDownMinor, color: "base" }, void 0, false, {
        fileName: "app/components/Accordion.tsx",
        lineNumber: 41,
        columnNumber: 71
      }, this) }, void 0, false, {
        fileName: "app/components/Accordion.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: [
        "\xA0\xA0\xA0 ",
        title
      ] }, void 0, true, {
        fileName: "app/components/Accordion.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Accordion.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Collapsible, { open, id: "basic-collapsible", transition: {
      duration: "500ms",
      timingFunction: "ease-in-out"
    }, expandOnPrint: true, children }, void 0, false, {
      fileName: "app/components/Accordion.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Accordion.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s9(Accordion, "qAM0b07DvAPuuWKhJJV40T2Qvl4=", false, function() {
  return [useHandleToggleModal];
});
_c13 = Accordion;
var Accordion_default = Accordion;
var _c13;
$RefreshReg$(_c13, "Accordion");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/FaqMetaObjects.tsx
init_remix_hmr();
init_esm2();
var import_react15 = __toESM(require_react());
var _7 = __toESM(require_lodash());

// app/components/Form/SiteMap/FaqForm.tsx
init_remix_hmr();
var import_react14 = __toESM(require_react());
var _6 = __toESM(require_lodash());
init_esm2();
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/SiteMap/FaqForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s10 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/SiteMap/FaqForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110833.8599";
}
var FaqForm = ({
  fetcher,
  activatorTitle,
  formik
}) => {
  _s10();
  const [faq, setFaq] = (0, import_react14.useState)();
  const handleSetFaq = (0, import_react14.useCallback)((value) => setFaq(value), []);
  const {
    active,
    handleClose,
    handleOpen
  } = useHandleToggleModal();
  const [loading, setLoading] = (0, import_react14.useState)(false);
  const handleLoading = (0, import_react14.useCallback)((value) => setLoading(value), []);
  const [options, setOptions] = (0, import_react14.useState)([]);
  const [selectedOptions, setSelectedOptions] = (0, import_react14.useState)([]);
  const [error, setError] = (0, import_react14.useState)();
  const handleSelectedOption = (0, import_react14.useCallback)((value) => {
    const _faq = options == null ? void 0 : options.filter((it) => {
      return get(it, "value") == get(value, "[0]");
    });
    if (_faq) {
      handleSetFaq({
        name: get(_faq, "[0].label"),
        id: get(value, "[0]"),
        type: "q_a"
      });
    }
    setSelectedOptions(value);
  }, [options]);
  (0, import_react14.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);
  (0, import_react14.useEffect)(() => {
    if (fetcher.data) {
      const o = _6.map(_6.get(fetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _6.get(item, "node.id"),
          label: _6.get(item, "node.displayName")
        };
      });
      setOptions(o);
    }
  }, [fetcher.data, loading]);
  const onSearch = async (data) => {
    await fetcher.load(`/app/search-metaobjects/q_a?query=${_6.get(data, "query")}&after=${_6.get(data, "after")}&before=${_6.get(data, "before")}`);
  };
  const onSubmit = () => {
    if (faq) {
      formik.setFieldValue("faq", [faq, ...get(formik, "values.faq")]);
    }
    handleClose();
  };
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button, { size: "micro", onClick: handleOpen, children: activatorTitle }, void 0, false, {
    fileName: "app/components/Form/SiteMap/FaqForm.tsx",
    lineNumber: 82,
    columnNumber: 21
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Modal, { activator, open: active, onClose: handleClose, title: "FAQ", primaryAction: {
    content: "Ok",
    onAction: onSubmit
  }, secondaryActions: [{
    content: "Cancel",
    onAction: handleClose
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FaqForm.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SelectField_default, { onSearch, options, loading, label: "Select Item (Type First Letters to Search)", selectedOptions, setSelectedOptions: handleSelectedOption, error, placeholder: "search.." }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FaqForm.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/FaqForm.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/FaqForm.tsx",
    lineNumber: 93,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Form/SiteMap/FaqForm.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/SiteMap/FaqForm.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
};
_s10(FaqForm, "eOWaEnEaWnnh3F+anlUEcWC3Uq4=", false, function() {
  return [useHandleToggleModal];
});
_c14 = FaqForm;
var FaqForm_default = FaqForm;
var _c14;
$RefreshReg$(_c14, "FaqForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/FaqMetaObjects.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/FaqMetaObjects.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s11 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/FaqMetaObjects.tsx"
  );
  import.meta.hot.lastModified = "1713578110837.5889";
}
var FaqMetaObjects = ({
  formik,
  faqFetcher: fetcher
}) => {
  _s11();
  const resourceName = {
    singular: "faq",
    plural: "faqs"
  };
  const {
    faq: faqs = []
  } = (0, import_react15.useMemo)(() => get(formik, "values"), [formik.values]);
  const onRemove = (id) => {
    formik.setFieldValue("faq", faqs == null ? void 0 : faqs.filter((it) => get(it, "id") !== id));
  };
  const SortableItem = sortableElement((faq, type, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(IndexTable.Row, { id: get(faq, "id"), position: index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ButtonGroup, { segmented: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DragHandle_default, {}, void 0, false, {
        fileName: "app/components/Tables/FaqMetaObjects.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/FaqMetaObjects.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { size: "micro", onClick: () => {
        onRemove(get(faq, "id"));
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DeleteIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/FaqMetaObjects.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/FaqMetaObjects.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(IndexTable.Cell, { children: get(faq, "name") }, void 0, false, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(IndexTable.Cell, { children: get(faq, "type") }, void 0, false, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(IndexTable.Cell, { children: get(faq, "id") }, void 0, false, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, `${index}-${get(faq, "id")}-${get(faq, "name")}`, true, {
    fileName: "app/components/Tables/FaqMetaObjects.tsx",
    lineNumber: 45,
    columnNumber: 62
  }, this));
  const SortableContainer = sortableContainer(({
    children
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(IndexTable, { resourceName, itemCount: (faqs == null ? void 0 : faqs.length) || 0, selectable: false, headings: [{
      title: ""
    }, {
      title: "Name"
    }, {
      title: "Type"
    }, {
      title: "MetaObject Id"
    }], children }, void 0, false, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 71,
      columnNumber: 12
    }, this);
  });
  const onSortEnd = ({
    oldIndex,
    newIndex
  }) => {
    const _items = arrayMove(faqs, oldIndex, newIndex);
    formik.setFieldValue("faq", _items);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "\xA0" }, void 0, false, {
        fileName: "app/components/Tables/FaqMetaObjects.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(FaqForm_default, { fetcher, activatorTitle: "Add FAQ", formik }, void 0, false, {
        fileName: "app/components/Tables/FaqMetaObjects.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Box, { padding: 2 }, void 0, false, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SortableContainer, { onSortEnd, useDragHandle: true, children: _7.map(faqs, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SortableItem, { index, item: _7.get(value, "item"), name: value == null ? void 0 : value.name, id: _7.get(value, "id"), value, type: get(value, "type") }, `item-${get(value, "id")}`, false, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 106,
      columnNumber: 44
    }, this)) }, void 0, false, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 105,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/FaqMetaObjects.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tables/FaqMetaObjects.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
};
_s11(FaqMetaObjects, "1lbOuLVC8ZTKBqmr+/zDcPMzQlQ=");
_c15 = FaqMetaObjects;
var FaqMetaObjects_default = FaqMetaObjects;
var _c15;
$RefreshReg$(_c15, "FaqMetaObjects");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/ArticleMetaobject.tsx
init_remix_hmr();
init_esm2();
var import_react17 = __toESM(require_react());
var _9 = __toESM(require_lodash());

// app/components/Form/SiteMap/ArticleForm.tsx
init_remix_hmr();
var import_react16 = __toESM(require_react());
var _8 = __toESM(require_lodash());
init_esm2();
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/SiteMap/ArticleForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s12 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/SiteMap/ArticleForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110833.6882";
}
var ArticleForm = ({
  fetcher,
  activatorTitle,
  formik
}) => {
  _s12();
  const [faq, setFaq] = (0, import_react16.useState)();
  const handleSetFaq = (0, import_react16.useCallback)((value) => setFaq(value), []);
  const {
    active,
    handleClose,
    handleOpen
  } = useHandleToggleModal();
  const [loading, setLoading] = (0, import_react16.useState)(false);
  const handleLoading = (0, import_react16.useCallback)((value) => setLoading(value), []);
  const [options, setOptions] = (0, import_react16.useState)([]);
  const [selectedOptions, setSelectedOptions] = (0, import_react16.useState)([]);
  const [error, setError] = (0, import_react16.useState)();
  const handleSelectedOption = (0, import_react16.useCallback)((value) => {
    const _faq = options == null ? void 0 : options.filter((it) => {
      return get(it, "value") == get(value, "[0]");
    });
    if (_faq) {
      handleSetFaq({
        name: get(_faq, "[0].label"),
        id: get(value, "[0]"),
        type: "article"
      });
    }
    setSelectedOptions(value);
  }, [options]);
  (0, import_react16.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);
  (0, import_react16.useEffect)(() => {
    if (fetcher.data) {
      const o = _8.map(_8.get(fetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _8.get(item, "node.id"),
          label: _8.get(item, "node.displayName")
        };
      });
      setOptions(o);
    }
  }, [fetcher.data, loading]);
  const onSearch = async (data) => {
    await fetcher.load(`/app/search-metaobjects/article?query=${_8.get(data, "query")}&after=${_8.get(data, "after")}&before=${_8.get(data, "before")}`);
  };
  const onSubmit = () => {
    if (faq) {
      formik.setFieldValue("articles", [faq, ...get(formik, "values.articles")]);
    }
    handleClose();
  };
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Button, { size: "micro", onClick: handleOpen, children: activatorTitle }, void 0, false, {
    fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
    lineNumber: 82,
    columnNumber: 21
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Modal, { activator, open: active, onClose: handleClose, title: "Article", primaryAction: {
    content: "Ok",
    onAction: onSubmit
  }, secondaryActions: [{
    content: "Cancel",
    onAction: handleClose
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SelectField_default, { onSearch, options, loading, label: "Select Item (Type First Letters to Search)", selectedOptions, setSelectedOptions: handleSelectedOption, error, placeholder: "search.." }, void 0, false, {
      fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
    lineNumber: 93,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/SiteMap/ArticleForm.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
};
_s12(ArticleForm, "eOWaEnEaWnnh3F+anlUEcWC3Uq4=", false, function() {
  return [useHandleToggleModal];
});
_c16 = ArticleForm;
var ArticleForm_default = ArticleForm;
var _c16;
$RefreshReg$(_c16, "ArticleForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/ArticleMetaobject.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/ArticleMetaobject.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s13 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/ArticleMetaobject.tsx"
  );
  import.meta.hot.lastModified = "1713578110836.767";
}
var ArticleMetaobject = ({
  formik,
  faqFetcher: fetcher
}) => {
  _s13();
  const resourceName = {
    singular: "article",
    plural: "articles"
  };
  const {
    articles = []
  } = (0, import_react17.useMemo)(() => get(formik, "values"), [formik.values]);
  const onRemove = (id) => {
    formik.setFieldValue("articles", articles == null ? void 0 : articles.filter((it) => get(it, "id") !== id));
  };
  const SortableItem = sortableElement((faq, type, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(IndexTable.Row, { id: get(faq, "id"), position: index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ButtonGroup, { segmented: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DragHandle_default, {}, void 0, false, {
        fileName: "app/components/Tables/ArticleMetaobject.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/ArticleMetaobject.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { size: "micro", onClick: () => {
        onRemove(get(faq, "id"));
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DeleteIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/ArticleMetaobject.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/ArticleMetaobject.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(IndexTable.Cell, { children: get(faq, "name") }, void 0, false, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(IndexTable.Cell, { children: get(faq, "type") }, void 0, false, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(IndexTable.Cell, { children: get(faq, "id") }, void 0, false, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, `${index}-${get(faq, "id")}-${get(faq, "name")}-${type}`, true, {
    fileName: "app/components/Tables/ArticleMetaobject.tsx",
    lineNumber: 45,
    columnNumber: 62
  }, this));
  const SortableContainer = sortableContainer(({
    children
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(IndexTable, { resourceName, itemCount: (articles == null ? void 0 : articles.length) || 0, selectable: false, headings: [{
      title: ""
    }, {
      title: "Name"
    }, {
      title: "Type"
    }, {
      title: "MetaObject Id"
    }], children }, void 0, false, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 65,
      columnNumber: 12
    }, this);
  });
  const onSortEnd = ({
    oldIndex,
    newIndex
  }) => {
    const _items = arrayMove(articles, oldIndex, newIndex);
    formik.setFieldValue("articles", _items);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "\xA0" }, void 0, false, {
        fileName: "app/components/Tables/ArticleMetaobject.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ArticleForm_default, { fetcher, activatorTitle: "Add Article", formik }, void 0, false, {
        fileName: "app/components/Tables/ArticleMetaobject.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Box, { padding: 2 }, void 0, false, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SortableContainer, { onSortEnd, useDragHandle: true, children: _9.map(articles, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SortableItem, { index, item: _9.get(value, "item"), name: value == null ? void 0 : value.name, id: _9.get(value, "id"), value, type: get(value, "type") }, `item-${get(value, "name")}-${index}`, false, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 100,
      columnNumber: 48
    }, this)) }, void 0, false, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/ArticleMetaobject.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tables/ArticleMetaobject.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
};
_s13(ArticleMetaobject, "lO2yX7CspEODH/kZz7PzaFhvX9Q=");
_c17 = ArticleMetaobject;
var ArticleMetaobject_default = ArticleMetaobject;
var _c17;
$RefreshReg$(_c17, "ArticleMetaobject");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/CollectionMetaobject.tsx
init_remix_hmr();
init_esm2();
var import_react19 = __toESM(require_react());
var _11 = __toESM(require_lodash());

// app/components/Form/SiteMap/CollectionForm.tsx
init_remix_hmr();
var import_react18 = __toESM(require_react());
var _10 = __toESM(require_lodash());
init_esm2();
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/SiteMap/CollectionForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s14 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/SiteMap/CollectionForm.tsx"
  );
  import.meta.hot.lastModified = "1713578110833.7698";
}
var CollectionForm = ({
  fetcher,
  activatorTitle,
  formik
}) => {
  _s14();
  const [faq, setFaq] = (0, import_react18.useState)();
  const handleSetFaq = (0, import_react18.useCallback)((value) => setFaq(value), []);
  const {
    active,
    handleClose,
    handleOpen
  } = useHandleToggleModal();
  const [loading, setLoading] = (0, import_react18.useState)(false);
  const [options, setOptions] = (0, import_react18.useState)([]);
  const [selectedOptions, setSelectedOptions] = (0, import_react18.useState)([]);
  const [error, setError] = (0, import_react18.useState)();
  const handleSelectedOption = (0, import_react18.useCallback)((value) => {
    const _faq = options == null ? void 0 : options.filter((it) => {
      return get(it, "value") == get(value, "[0]");
    });
    if (_faq) {
      handleSetFaq({
        name: get(_faq, "[0].label"),
        id: get(value, "[0]"),
        type: "collection"
      });
    }
    setSelectedOptions(value);
  }, [options]);
  (0, import_react18.useEffect)(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);
  (0, import_react18.useEffect)(() => {
    if (fetcher.data) {
      const res = _10.map(_10.get(fetcher.data, "data.collections.edges"), (item) => {
        return {
          value: _10.get(item, "node.id"),
          label: _10.get(item, "node.title")
        };
      });
      setOptions(res || []);
    }
  }, [fetcher.data, loading]);
  const onSearch = async (data) => {
    await fetcher.load(`/app/search-collections?query=${_10.get(data, "query")}&after=${_10.get(data, "after")}&before=${_10.get(data, "before")}`);
  };
  const onSubmit = () => {
    if (faq) {
      formik.setFieldValue("product_collections", [faq, ...get(formik, "values.product_collections", [])]);
    }
    handleClose();
  };
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Button, { size: "micro", onClick: handleOpen, children: activatorTitle }, void 0, false, {
    fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
    lineNumber: 81,
    columnNumber: 21
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Modal, { activator, open: active, onClose: handleClose, title: "Collection", primaryAction: {
    content: "Ok",
    onAction: onSubmit
  }, secondaryActions: [{
    content: "Cancel",
    onAction: handleClose
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SelectField_default, { onSearch, options, loading, label: "Select Item (Type First Letters to Search)", selectedOptions, setSelectedOptions: handleSelectedOption, error, placeholder: "search.." }, void 0, false, {
      fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
    lineNumber: 92,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/SiteMap/CollectionForm.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
};
_s14(CollectionForm, "d2AmlGGOVaHtFlgsTAM32/S0K6A=", false, function() {
  return [useHandleToggleModal];
});
_c18 = CollectionForm;
var CollectionForm_default = CollectionForm;
var _c18;
$RefreshReg$(_c18, "CollectionForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Tables/CollectionMetaobject.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Tables/CollectionMetaobject.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s15 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Tables/CollectionMetaobject.tsx"
  );
  import.meta.hot.lastModified = "1713578110837.454";
}
var CollectionMetaobject = ({
  formik,
  faqFetcher: fetcher
}) => {
  _s15();
  const resourceName = {
    singular: "collection",
    plural: "collections"
  };
  const product_collections = (0, import_react19.useMemo)(() => get(formik, "values.product_collections", []), [formik.values]);
  const onRemove = (id) => {
    formik.setFieldValue("product_collections", product_collections == null ? void 0 : product_collections.filter((it) => get(it, "id") !== id));
  };
  const SortableItem = sortableElement((faq, type, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IndexTable.Row, { id: get(faq, "id"), position: index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ButtonGroup, { segmented: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Button, { size: "micro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DragHandle_default, {}, void 0, false, {
        fileName: "app/components/Tables/CollectionMetaobject.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/CollectionMetaobject.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Button, { size: "micro", onClick: () => {
        onRemove(get(faq, "id"));
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DeleteIcon_default, {}, void 0, false, {
        fileName: "app/components/Tables/CollectionMetaobject.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Tables/CollectionMetaobject.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IndexTable.Cell, { children: get(faq, "name") }, void 0, false, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IndexTable.Cell, { children: get(faq, "type") }, void 0, false, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IndexTable.Cell, { children: get(faq, "id") }, void 0, false, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, `${index}-${get(faq, "id")}-${get(faq, "name")}`, true, {
    fileName: "app/components/Tables/CollectionMetaobject.tsx",
    lineNumber: 43,
    columnNumber: 62
  }, this));
  const SortableContainer = sortableContainer(({
    children
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IndexTable, { resourceName, itemCount: (product_collections == null ? void 0 : product_collections.length) || 0, selectable: false, headings: [{
      title: ""
    }, {
      title: "Name"
    }, {
      title: "Type"
    }, {
      title: "MetaObject Id"
    }], children }, void 0, false, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 63,
      columnNumber: 12
    }, this);
  });
  const onSortEnd = ({
    oldIndex,
    newIndex
  }) => {
    const _items = arrayMove(product_collections, oldIndex, newIndex);
    formik.setFieldValue("product_collections", _items);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "\xA0" }, void 0, false, {
        fileName: "app/components/Tables/CollectionMetaobject.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CollectionForm_default, { fetcher, activatorTitle: "Add collection", formik }, void 0, false, {
        fileName: "app/components/Tables/CollectionMetaobject.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Box, { padding: 2 }, void 0, false, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(VerticalStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SortableContainer, { onSortEnd, useDragHandle: true, children: _11.map(product_collections, (value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SortableItem, { index, item: _11.get(value, "item"), name: value == null ? void 0 : value.name, id: _11.get(value, "id"), value, type: get(value, "type") }, `item-${get(value, "id")}-${index}`, false, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 98,
      columnNumber: 59
    }, this)) }, void 0, false, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 97,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Tables/CollectionMetaobject.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Tables/CollectionMetaobject.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
};
_s15(CollectionMetaobject, "yyXOCGxUlEOKrLnBZVNijq/wN70=");
_c19 = CollectionMetaobject;
var CollectionMetaobject_default = CollectionMetaobject;
var _c19;
$RefreshReg$(_c19, "CollectionMetaobject");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.site-map.$handle.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.site-map.$handle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s16 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.site-map.$handle.tsx"
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
async function loader({
  request,
  params
}) {
  _s16();
  const response = await useStorefrontFetch_default(JSON.stringify({
    query: getMetaobjectQuery,
    variables: {
      metaobjectHandleInput: {
        handle: params.handle,
        type: "site_map"
      }
    }
  }));
  const data = await response.json();
  const metaobject = _12.get(data, "data.metaobject");
  const articles = getSiteMetadataFieldData(metaobject, "articles") || [];
  const meta = getSiteMetadataFieldData(metaobject, "meta");
  const pages = getSiteMetadataFieldData(metaobject, "pages");
  const menu = getSiteMetadataFieldData(metaobject, "menu");
  const header = getSiteMetadataFieldData(metaobject, "header");
  const footer = getSiteMetadataFieldData(metaobject, "footer");
  const faq = getSiteMetadataFieldData(metaobject, "faq") || [];
  const product_collections = getSiteMetadataFieldData(metaobject, "product_collections") || [];
  let name = findValueFromFields(metaobject, "name");
  let domain = findValueFromFields(metaobject, "domain");
  const _metaobject = {
    id: _12.get(metaobject, "id"),
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
  return (0, import_node.json)({
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
  }, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate"
    }
  });
}
_s16(loader, "HjlD7OEXg7KZXmWK74RlnbVYHlA=", false, function() {
  return [useStorefrontFetch_default];
});
function SiteMetaPage() {
  _s22();
  const {
    metaobject,
    articles,
    meta,
    pages,
    menu,
    header,
    footer = {},
    faq,
    product_collections
  } = useLoaderData();
  const [formDirty, setFormDirty] = (0, import_react21.useState)(false);
  const [loading, setLoading] = (0, import_react21.useState)(false);
  const actionData = useActionData();
  const faqFetcher = useFetcher();
  const collectionFetcher = useFetcher();
  const articleFetcher = useFetcher();
  const navigate = useNavigate();
  const handleLoadingChange = (0, import_react21.useCallback)((value) => setLoading(value), []);
  const submit = useSubmit();
  const initialValues = (0, import_react21.useMemo)(() => ({
    id: _12.get(metaobject, "id"),
    handle: _12.get(metaobject, "handle"),
    name: _12.get(metaobject, "name"),
    domain: _12.get(metaobject, "domain"),
    articles,
    meta,
    pages,
    menu,
    header,
    footer,
    faq,
    product_collections,
    collections: []
  }), [metaobject, articles, meta, pages, header, footer, faq, product_collections]);
  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onSubmit: (values2) => {
      handleLoadingChange(true);
      const data = {
        id: _12.get(metaobject, "id"),
        handle: _12.get(metaobject, "handle"),
        name: values2.name,
        domain: values2.domain,
        menu: getFieldData(get(values2, "menu")),
        meta: getFieldData(get(values2, "meta")),
        pages: getFieldData(get(values2, "pages")),
        header: getFieldData(get(values2, "header")),
        footer: getFieldData(get(values2, "footer", {})),
        faq: getFieldData(get(values2, "faq", {})),
        product_collections: getFieldData(get(values2, "product_collections")),
        articles: getFieldData(get(values2, "articles"))
      };
      submit(data, {
        method: "post"
      });
    }
  });
  const {
    values
  } = (0, import_react21.useMemo)(() => formik, [formik]);
  (0, import_react21.useEffect)(() => {
    handleLoadingChange(false);
    setFormDirty(false);
    formik.resetForm({
      values
    });
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Page, { backAction: {
    content: "Sites",
    url: "/app/site-maps"
  }, title: _12.get(metaobject, "name", ""), subtitle: "Site Map", compactTitle: true, secondaryActions: [values.domain ? {
    content: "Preview",
    accessibilityLabel: "Secondary action label",
    onAction: () => {
      const newTab = window.open(values.domain, "_blank");
      if (newTab) {
        newTab.focus();
      }
    }
  } : {}], children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Card, { children: [
    formDirty || loading || formik.dirty ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SaveAppBar_default, { saveAction: formik.handleSubmit, loading, discardAction: () => {
      navigate(`/app/site-maps`);
    } }, void 0, false, {
      fileName: "app/routes/app.site-map.$handle.tsx",
      lineNumber: 255,
      columnNumber: 53
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(VerticalStack, { gap: "3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TextField, { label: "Name", name: "name", value: values.name, onChange: (value) => {
        formik.setFieldValue("name", value);
      }, autoComplete: "off" }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 259,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TextField, { label: "Domain", name: "domain", value: values.domain, onChange: (value) => {
        formik.setFieldValue("domain", value);
      }, autoComplete: "off" }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 263,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Accordion_default, { title: "Metadata", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(MetaForm_default, { formik }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 269,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 268,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 267,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Accordion_default, { title: "Header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react21.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Await, { resolve: formik, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(HeaderFrom_default, { formik: value }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 277,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 276,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 275,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 274,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 273,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Accordion_default, { title: "Footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react21.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Await, { resolve: formik, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(FooterForm_default, { formik: value }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 287,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 286,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 285,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 284,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 283,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Accordion_default, { title: "FAQs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react21.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Await, { resolve: formik, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(FaqMetaObjects_default, { faqFetcher, formik: value }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 297,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 296,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 295,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 294,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 293,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Accordion_default, { title: "Articles", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react21.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Await, { resolve: formik, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ArticleMetaobject_default, { faqFetcher: articleFetcher, formik: value }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 309,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 308,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 307,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 306,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 305,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Accordion_default, { title: "Products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react21.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Await, { resolve: formik, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(CollectionMetaobject_default, { faqFetcher: collectionFetcher, formik: value }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 321,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 320,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 319,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 318,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 317,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Accordion_default, { title: "Pages", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PageMetaObject_default, { fetcher: collectionFetcher, formik }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 330,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 329,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 328,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Accordion_default, { title: "Menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(MenuMetaobject_default, { formik }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 335,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 334,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app.site-map.$handle.tsx",
        lineNumber: 333,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.site-map.$handle.tsx",
      lineNumber: 258,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.site-map.$handle.tsx",
    lineNumber: 254,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/app.site-map.$handle.tsx",
    lineNumber: 253,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.site-map.$handle.tsx",
    lineNumber: 252,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.site-map.$handle.tsx",
    lineNumber: 237,
    columnNumber: 10
  }, this);
}
_s22(SiteMetaPage, "Joj92bGlpMGbIwI95IX8C2R8B0M=", false, function() {
  return [useLoaderData, useActionData, useFetcher, useFetcher, useFetcher, useNavigate, useSubmit, useFormik];
});
_c20 = SiteMetaPage;
var _c20;
$RefreshReg$(_c20, "SiteMetaPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SiteMetaPage as default,
  links
};
//# sourceMappingURL=/build/routes/app.site-map.$handle-72EFAFWR.js.map
