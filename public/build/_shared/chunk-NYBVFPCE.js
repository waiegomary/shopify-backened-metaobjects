import {
  find,
  map
} from "/build/_shared/chunk-HEEBV5QK.js";
import {
  Autocomplete,
  LegacyStack,
  Tag,
  init_esm
} from "/build/_shared/chunk-NMF5CLGW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-COYC34KL.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/Form/Fields/TagSearchField.tsx
init_remix_hmr();
init_esm();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form/Fields/TagSearchField.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form/Fields/TagSearchField.tsx"
  );
  import.meta.hot.lastModified = "1709719980702.6868";
}
var validateOption = (options) => {
  return map(options, (option) => ({
    label: (option == null ? void 0 : option.label) || (option == null ? void 0 : option.name),
    value: (option == null ? void 0 : option.value) || (option == null ? void 0 : option.id)
  })) || [];
};
function TagSearchField({
  options: _options,
  selectedOptions: _selected,
  placeholder = "Search collections...",
  handleChangeCollection,
  label
}) {
  _s();
  const deselectedOptions = (0, import_react.useMemo)(() => validateOption(_options) || [], [_options]);
  const [selectedOptions, setSelectedOptions] = (0, import_react.useState)(map(validateOption(_selected), (it) => it.value));
  const handleSetSelection = (0, import_react.useCallback)((e) => {
    setSelectedOptions(e);
    const _collections = [];
    map(e, (id) => {
      const col = find(validateOption(_options), {
        value: id
      });
      if (col) {
        _collections.push(col);
      }
    });
    handleChangeCollection(_collections);
  }, []);
  const [inputValue, setInputValue] = (0, import_react.useState)("");
  const [options, setOptions] = (0, import_react.useState)(deselectedOptions);
  const updateText = (0, import_react.useCallback)((value) => {
    setInputValue(value);
    if (value === "") {
      setOptions(deselectedOptions);
      return;
    }
    const filterRegex = new RegExp(value, "i");
    const resultOptions = deselectedOptions == null ? void 0 : deselectedOptions.filter((option) => {
      var _a;
      return (_a = option == null ? void 0 : option.label) == null ? void 0 : _a.match(filterRegex);
    });
    setOptions(resultOptions);
  }, [deselectedOptions]);
  const removeTag = (0, import_react.useCallback)((tag) => () => {
    const options2 = [...selectedOptions];
    options2.splice(options2 == null ? void 0 : options2.indexOf(tag), 1);
    setSelectedOptions(options2);
    handleChangeCollection(options2);
  }, [selectedOptions]);
  const verticalContentMarkup = selectedOptions.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyStack, { spacing: "extraTight", alignment: "center", children: selectedOptions == null ? void 0 : selectedOptions.map((option) => {
    let tagLabel = "";
    tagLabel = option == null ? void 0 : option.replace("_", " ");
    tagLabel = titleCase(tagLabel);
    let item = find(deselectedOptions, {
      value: option
    });
    if (item) {
      tagLabel = item == null ? void 0 : item.label;
    }
    if (selectedOptions == null ? void 0 : selectedOptions.includes(tagLabel)) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, { onRemove: removeTag(option), children: tagLabel }, `option${option}`, false, {
      fileName: "app/components/Form/Fields/TagSearchField.tsx",
      lineNumber: 86,
      columnNumber: 14
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/Form/Fields/TagSearchField.tsx",
    lineNumber: 72,
    columnNumber: 62
  }, this) : null;
  const textField = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Autocomplete.TextField, { onChange: updateText, label, value: inputValue, placeholder, verticalContent: verticalContentMarkup, autoComplete: "off" }, void 0, false, {
    fileName: "app/components/Form/Fields/TagSearchField.tsx",
    lineNumber: 91,
    columnNumber: 21
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    height: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Autocomplete, { allowMultiple: true, options, selected: selectedOptions, textField, onSelect: handleSetSelection, listTitle: "Suggested collections" }, void 0, false, {
    fileName: "app/components/Form/Fields/TagSearchField.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Form/Fields/TagSearchField.tsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
  function titleCase(string) {
    var _a, _b;
    return (_b = (_a = string == null ? void 0 : string.toLowerCase()) == null ? void 0 : _a.split(" ")) == null ? void 0 : _b.map((word) => {
      var _a2;
      return word == null ? void 0 : word.replace(word[0], (_a2 = word[0]) == null ? void 0 : _a2.toUpperCase());
    }).join("");
  }
}
_s(TagSearchField, "pcGjBZd3CY1l9qKlYfrCgiJS2QM=");
_c = TagSearchField;
var TagSearchField_default = TagSearchField;
var _c;
$RefreshReg$(_c, "TagSearchField");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TagSearchField_default
};
//# sourceMappingURL=/build/_shared/chunk-NYBVFPCE.js.map
