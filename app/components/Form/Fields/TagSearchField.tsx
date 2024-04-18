import { LegacyStack, Tag, Autocomplete } from "@shopify/polaris";
import { useState, useCallback, useMemo } from "react";
import { find, map } from "~/utils";

const validateOption = (options) => {
  return (
    map(options, (option) => ({
      label: option?.label || option?.name,
      value: option?.value || option?.id,
    })) || []
  );
};

function TagSearchField({
  options: _options,
  selectedOptions: _selected,
  placeholder = "Search collections...",
  handleChangeCollection,
  label,
}) {
  const deselectedOptions = useMemo(
    () => validateOption(_options) || [],
    [_options]
  );
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    map(validateOption(_selected), (it) => it.value)
  );

  const handleSetSelection = useCallback((e) => {
    setSelectedOptions(e);
    const _collections = [];
    map(e, (id) => {
      const col = find(validateOption(_options), {
        value: id,
      });
      if (col) {
        _collections.push(col);
      }
    });
    handleChangeCollection(_collections);
  }, []);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value: string) => {
      setInputValue(value);

      if (value === "") {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions?.filter((option) =>
        option?.label?.match(filterRegex)
      );

      setOptions(resultOptions);
    },
    [deselectedOptions]
  );

  const removeTag = useCallback(
    (tag: string) => () => {
      const options = [...selectedOptions];
      options.splice(options?.indexOf(tag), 1);
      setSelectedOptions(options);

      handleChangeCollection(options);
    },
    [selectedOptions]
  );

  const verticalContentMarkup =
    selectedOptions.length > 0 ? (
      <LegacyStack spacing="extraTight" alignment="center">
        {selectedOptions?.map((option) => {
          let tagLabel = "";
          tagLabel = option?.replace("_", " ");
          tagLabel = titleCase(tagLabel);
          let item = find(deselectedOptions, { value: option });
          if (item) {
            tagLabel = item?.label;
          }
          if (selectedOptions?.includes(tagLabel)) {
            return null;
          }
          return (
            <Tag key={`option${option}`} onRemove={removeTag(option)}>
              {tagLabel}
            </Tag>
          );
        })}
      </LegacyStack>
    ) : null;

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label={label}
      value={inputValue}
      placeholder={placeholder}
      verticalContent={verticalContentMarkup}
      autoComplete="off"
    />
  );

  return (
    <div style={{ height: "100%" }}>
      <Autocomplete
        allowMultiple
        options={options}
        selected={selectedOptions}
        textField={textField}
        onSelect={handleSetSelection}
        listTitle="Suggested collections"
      />
    </div>
  );

  function titleCase(string: string) {
    return string
      ?.toLowerCase()
      ?.split(" ")
      ?.map((word) => word?.replace(word[0], word[0]?.toUpperCase()))
      .join("");
  }
}

export default TagSearchField;
