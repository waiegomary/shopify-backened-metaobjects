import { Autocomplete, Icon } from "@shopify/polaris";
import { SearchMinor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";

function SelectField({
  options,
  loading,
  selectedOptions,
  setSelectedOptions,
  onSearch,
  error,
  placeholder,
  label
}) {

  const [inputValue, setInputValue] = useState("");

  const updateText = useCallback(
    (value: string) => {
      setInputValue(value);

      setTimeout(() => {
        
        onSearch({ query: value });
      }, 300);
    },
    [loading]
  );

  const updateSelection = useCallback(
    (selected: string[]) => {
      const selectedText = selected?.map((selectedItem) => {
        const matchedOption = options?.find((option) => {
          return option?.value?.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });
      setSelectedOptions(selected);
      setInputValue(selectedText[0] || "");
    },
    [options]
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label={label}
      value={inputValue}
      prefix={<Icon source={SearchMinor} color="base" />}
      placeholder={placeholder}
      autoComplete="off"
      error={error}
    />
  );

  return (
    <div>
      <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        loading={loading}
        textField={textField}
      />
    </div>
  );
}

export default SelectField;
