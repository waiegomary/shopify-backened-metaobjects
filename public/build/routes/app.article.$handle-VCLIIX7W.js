import {
  ImageForm_default,
  ImageGrid_default
} from "/build/_shared/chunk-EDXGPGNJ.js";
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
  SaveAppBar_default,
  findValueFromFields,
  markdown_default,
  markdown_editor_default,
  parseJSON,
  useFormik
} from "/build/_shared/chunk-54DZ43JQ.js";
import {
  require_shopify
} from "/build/_shared/chunk-E7A3J4TI.js";
import {
  get,
  require_lodash,
  toHTML
} from "/build/_shared/chunk-W333RDEB.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Box,
  Card,
  Layout,
  LegacyCard,
  Page,
  SkeletonBodyText,
  SkeletonDisplayText,
  Text,
  TextContainer,
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

// app/routes/app.article.$handle.tsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
init_esm2();
var _ = __toESM(require_lodash());
var import_react2 = __toESM(require_react());
var import_shopify = __toESM(require_shopify());

// app/components/Loaders/FormLoader.tsx
init_remix_hmr();
init_esm2();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Loaders/FormLoader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Loaders/FormLoader.tsx"
  );
  import.meta.hot.lastModified = "1713578110835.8455";
}
var FormLoader = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { sectioned: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkeletonBodyText, {}, void 0, false, {
      fileName: "app/components/Loaders/FormLoader.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Loaders/FormLoader.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { sectioned: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkeletonDisplayText, { size: "small" }, void 0, false, {
        fileName: "app/components/Loaders/FormLoader.tsx",
        lineNumber: 31,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkeletonBodyText, {}, void 0, false, {
        fileName: "app/components/Loaders/FormLoader.tsx",
        lineNumber: 32,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Loaders/FormLoader.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Loaders/FormLoader.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Loaders/FormLoader.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Loaders/FormLoader.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Loaders/FormLoader.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = FormLoader;
var FormLoader_default = FormLoader;
var _c;
$RefreshReg$(_c, "FormLoader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.article.$handle.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.article.$handle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.article.$handle.tsx"
  );
}
var MDEditor = (0, import_react2.lazy)(_c2 = () => import("/build/_shared/esm-X6HX3MOB.js"));
_c22 = MDEditor;
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
  _s();
  const response = await useStorefrontFetch_default(JSON.stringify({
    query: getMetaobjectQuery,
    variables: {
      metaobjectHandleInput: {
        handle: params.handle,
        type: "article"
      }
    }
  }));
  const data = await response.json();
  const metaobject = _.get(data, "data.metaobject");
  let title = findValueFromFields(metaobject, "title");
  let authors = parseJSON(findValueFromFields(metaobject, "authors"));
  let categories = parseJSON(findValueFromFields(metaobject, "categories"));
  let content = findValueFromFields(metaobject, "content");
  let media = findValueFromFields(metaobject, "media");
  let content_MD = findValueFromFields(metaobject, "content_md");
  const additional_media = findValueFromFields(metaobject, "additional_media") || "";
  const created_at = findValueFromFields(metaobject, "created_at");
  return (0, import_node.json)({
    title,
    authors,
    categories,
    content,
    content_MD,
    media,
    additional_media,
    created_at,
    handle: params.handle,
    metaobject,
    type: "article"
  }, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate"
    }
  });
}
_s(loader, "HjlD7OEXg7KZXmWK74RlnbVYHlA=", false, function() {
  return [useStorefrontFetch_default];
});
function ArticlePage() {
  var _a;
  _s2();
  const {
    title,
    authors,
    categories,
    content,
    content_MD,
    media,
    handle,
    metaobject,
    created_at,
    additional_media
  } = useLoaderData();
  const [formDirty, setFormDirty] = (0, import_react2.useState)(false);
  const [loading, setLoading] = (0, import_react2.useState)(false);
  const [allAuthors, _setAllAuthors] = (0, import_react2.useState)([]);
  const setAllAuthors = (0, import_react2.useCallback)((value) => _setAllAuthors(value), []);
  const [allCategories, _setCategories] = (0, import_react2.useState)([]);
  const setAllCategories = (0, import_react2.useCallback)((value) => _setCategories(value), []);
  const actionData = useActionData();
  const authorFetcher = useFetcher();
  const categoriesFetcher = useFetcher();
  const navigate = useNavigate();
  const handleLoadingChange = (0, import_react2.useCallback)((value) => setLoading(value), []);
  const handleFormDirty = (0, import_react2.useCallback)(() => setFormDirty(true), []);
  const onSearchCategories = async (data) => {
    await categoriesFetcher.load(`/app/search-metaobjects/article_category?query=${_.get(data, "query")}&d=${(/* @__PURE__ */ new Date()).toString()}&after=${_.get(data, "after")}&before=${_.get(data, "before")}`);
  };
  const {
    toastMarkup,
    showToast
  } = useToast();
  (0, import_react2.useEffect)(() => {
    handleLoadingChange(false);
    if (_.get(actionData, "errors")) {
      return showToast(`Something went wrong. ${JSON.stringify(_.get(actionData, "errors[0].message"))}`, true);
    } else {
      if (formik.dirty) {
        showToast("Updated successfully");
      }
    }
    setFormDirty(false);
  }, [actionData]);
  const onSearchAuthors = async (data) => {
    await authorFetcher.load(`/app/search-metaobjects/author?query=${_.get(data, "query")}&d=${(/* @__PURE__ */ new Date()).toString()}&after=${_.get(data, "after")}&before=${_.get(data, "before")}`);
  };
  (0, import_react2.useEffect)(() => {
    onSearchAuthors({});
    onSearchCategories({});
  }, []);
  (0, import_react2.useEffect)(() => {
    if (categoriesFetcher.data) {
      const o = _.map(_.get(categoriesFetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _.get(item, "node.id"),
          label: _.get(item, "node.displayName")
        };
      });
      setAllCategories(o);
    }
  }, [categoriesFetcher.data]);
  (0, import_react2.useEffect)(() => {
    if (authorFetcher.data) {
      const o = _.map(_.get(authorFetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _.get(item, "node.id"),
          label: _.get(item, "node.displayName")
        };
      });
      setAllAuthors(o);
    }
  }, [authorFetcher.data]);
  const submit = useSubmit();
  const initialValues = (0, import_react2.useMemo)(() => ({
    id: _.get(metaobject, "id"),
    title,
    authors: !_.isEmpty(authors) ? authors : [],
    categories: !_.isEmpty(categories) ? categories : [],
    content,
    content_MD,
    media: media ? [media] : [],
    handle
  }), [metaobject, title, authors, categories, content, media, handle]);
  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onSubmit: (values2) => {
      var _a2;
      handleLoadingChange(true);
      const data = {
        id: _.get(metaobject, "id"),
        handle: _.get(metaobject, "handle"),
        created_at,
        additional_media,
        title: values2.title,
        authors: JSON.stringify(_.map(values2.authors, (it) => it.value || it)),
        categories: JSON.stringify(_.map(values2.categories, (it) => it.value || it)),
        content: values2.content,
        content_MD: values2.content_MD,
        media: ((_a2 = values2.media) == null ? void 0 : _a2.length) ? _.get(values2, "media[0]") : ""
      };
      submit(data, {
        method: "post"
      });
    }
  });
  const {
    values
  } = (0, import_react2.useMemo)(() => formik, [formik]);
  (0, import_react2.useEffect)(() => {
    handleLoadingChange(false);
    setFormDirty(false);
    formik.resetForm({
      values
    });
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Page, { backAction: {
    content: "Sites",
    url: "/app/articles"
  }, title: _.get(metaobject, "name", ""), subtitle: "Article", compactTitle: true, secondaryActions: [{}], children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
    formDirty || loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SaveAppBar_default, { saveAction: formik.handleSubmit, loading, discardAction: () => {
      navigate(`/app/articles`);
    } }, void 0, false, {
      fileName: "app/routes/app.article.$handle.tsx",
      lineNumber: 283,
      columnNumber: 37
    }, this) : null,
    toastMarkup,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VerticalStack, { gap: "3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextField, { label: "Title", name: "title", value: values.title, onChange: (value) => {
        formik.setFieldValue("title", value);
        handleFormDirty();
      }, autoComplete: "off" }, void 0, false, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 288,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormLoader_default, {}, void 0, false, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 293,
        columnNumber: 35
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Await, { resolve: values.content_MD, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: "Content" }, void 0, false, {
          fileName: "app/routes/app.article.$handle.tsx",
          lineNumber: 296,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { "data-color-mode": "light", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MDEditor, { value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: `content_MD`, onChange: (e) => {
            formik.setFieldValue("content_MD", e);
            handleFormDirty();
          } }, void 0, false, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 298,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { padding: "2" }, void 0, false, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 303,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.article.$handle.tsx",
          lineNumber: 297,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 295,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 294,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 293,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormLoader_default, {}, void 0, false, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 309,
        columnNumber: 35
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Await, { resolve: values.content, children: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: "Content in rich text format (not editable)" }, void 0, false, {
          fileName: "app/routes/app.article.$handle.tsx",
          lineNumber: 312,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { "data-color-mode": "light", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MDEditor, { value: (value == null ? void 0 : value.includes("children")) ? toHTML(value) : value, name: `content`, onChange: (e) => {
            alert("This content is not editable");
          } }, void 0, false, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 314,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { padding: "2" }, void 0, false, {
            fileName: "app/routes/app.article.$handle.tsx",
            lineNumber: 318,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.article.$handle.tsx",
          lineNumber: 313,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 311,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 310,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 309,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.article.$handle.tsx",
      lineNumber: 287,
      columnNumber: 13
    }, this),
    !(allCategories == null ? void 0 : allCategories.length) || !allAuthors.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormLoader_default, {}, void 0, false, {
      fileName: "app/routes/app.article.$handle.tsx",
      lineNumber: 325,
      columnNumber: 61
    }, this) : null,
    (allCategories == null ? void 0 : allCategories.length) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TagSearchField_default, { label: "Categories", options: _.map(allCategories, (it) => ({
      value: _.get(it, "value"),
      label: _.get(it, "label"),
      id: _.get(it, "value"),
      name: _.get(it, "label")
    })), placeholder: "Selected categories", selectedOptions: _.filter(allCategories, (obj) => {
      var _a2;
      return (_a2 = _.get(formik, "values.categories", [])) == null ? void 0 : _a2.includes(obj.value);
    }), handleChangeCollection: (e) => {
      formik.setFieldValue("categories", e);
      handleFormDirty();
    } }, void 0, false, {
      fileName: "app/routes/app.article.$handle.tsx",
      lineNumber: 326,
      columnNumber: 38
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/routes/app.article.$handle.tsx",
      lineNumber: 335,
      columnNumber: 13
    }, this),
    (allAuthors == null ? void 0 : allAuthors.length) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TagSearchField_default, { label: "Authors", options: _.map(allAuthors, (it) => ({
      value: _.get(it, "value"),
      label: _.get(it, "label"),
      id: _.get(it, "value"),
      name: _.get(it, "label")
    })), placeholder: "Select authors", selectedOptions: _.filter(allAuthors, (obj) => {
      var _a2;
      return (_a2 = _.get(formik, "values.authors", [])) == null ? void 0 : _a2.includes(obj.value);
    }), handleChangeCollection: (e) => {
      formik.setFieldValue("authors", e);
      handleFormDirty();
    } }, void 0, false, {
      fileName: "app/routes/app.article.$handle.tsx",
      lineNumber: 336,
      columnNumber: 35
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { padding: "2" }, void 0, false, {
      fileName: "app/routes/app.article.$handle.tsx",
      lineNumber: 345,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: "headingMd", as: "h6", children: "Main Media" }, void 0, false, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 352,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImageForm_default, { activatorTitle: `${((_a = get(formik, "values.media", [])) == null ? void 0 : _a.length) ? "Edit" : "Add"} Media`, onAdd: (value) => {
        formik.setFieldValue("media", [value]);
        handleFormDirty();
      } }, void 0, false, {
        fileName: "app/routes/app.article.$handle.tsx",
        lineNumber: 356,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.article.$handle.tsx",
      lineNumber: 346,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImageGrid_default, { images: get(formik, "values.media", []), onRemove: (image) => {
      formik.setFieldValue("media", []);
      handleFormDirty();
    }, setImages: (values2) => {
      formik.setFieldValue("media", values2);
      handleFormDirty();
    } }, void 0, false, {
      fileName: "app/routes/app.article.$handle.tsx",
      lineNumber: 362,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.article.$handle.tsx",
    lineNumber: 282,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/app.article.$handle.tsx",
    lineNumber: 281,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.article.$handle.tsx",
    lineNumber: 280,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.article.$handle.tsx",
    lineNumber: 275,
    columnNumber: 10
  }, this);
}
_s2(ArticlePage, "djE9KdyssVihMTtmLrn5m0wVnEQ=", false, function() {
  return [useLoaderData, useActionData, useFetcher, useFetcher, useNavigate, useToast, useSubmit, useFormik];
});
_c3 = ArticlePage;
var _c2;
var _c22;
var _c3;
$RefreshReg$(_c2, "MDEditor$lazy");
$RefreshReg$(_c22, "MDEditor");
$RefreshReg$(_c3, "ArticlePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ArticlePage as default,
  links
};
//# sourceMappingURL=/build/routes/app.article.$handle-VCLIIX7W.js.map
