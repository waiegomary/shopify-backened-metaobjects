import {
  Autocomplete,
  Box,
  Button,
  Icon,
  Modal,
  TextContainer,
  TextField,
} from "@shopify/polaris";
import React, { useCallback, useMemo, useState } from "react";
import { FIELD_REQUIRED } from "~/constants";
import { get, logger, map, numberGenerator } from "~/utils";
import { useHandleToggleModal } from "~/utils/hooks";
import { SearchMinor } from "@shopify/polaris-icons";

interface IError {
  page: string;
  name: TemplateStringsArray;
}
const MenuEditorForm = ({
  menuItem = {},
  formik,
  activatorElement,
  activatorRef,
  onSubmit,
}) => {
  const { active, handleClose, handleOpen } = useHandleToggleModal();
  const [name, setName] = useState(get(menuItem, "name", ""));
  const [page, setPage] = useState(get(menuItem, "page", {}));
  const handleChangeName = useCallback((value) => setName(value), []);
  const handleChangePage = useCallback((value) => {
    setPage(value);
  }, []);
  const [errors, setErrors] = useState({} as IError);
  const handleChangeErrors = useCallback((value) => setErrors(value), []);

  const pages = useMemo(() => {
    return get(formik, "values.pages");
  }, [formik.values]);

  const deselectedOptions = useMemo(
    () =>
      map(get(formik, "values.pages"), (item) => ({
        value: get(item, "id"),
        label: get(item, "name"),
      })),
    [formik.values]
  );

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);
  const [loading, setLoading] = useState(false);

  const updateText = useCallback(
    (value: string) => {
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
        const resultOptions = deselectedOptions.filter((option) =>
          option.label.match(filterRegex)
        );
        setOptions(resultOptions);
        setLoading(false);
      }, 300);
    },
    [deselectedOptions, loading]
  );
  const updateSelection = useCallback(
    (selected: string[]) => {
      const selectedPage = pages?.filter(
        (it) => it?.id === get(selected, "[0]")
      );

      handleChangePage({
        id: get(selectedPage, "[0].id"),
        handle: get(selectedPage, "[0].handle"),
        name: get(selectedPage, "[0].name"),
      });

      const selectedText = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
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
      label="Page"
      value={inputValue}
      prefix={<Icon source={SearchMinor} tone="base" />}
      placeholder={get(page, "name", "Search")}
      autoComplete="off"
      error={get(errors, "page")}
    />
  );
  const handleSubmit = () => {
    setErrors({} as IError);
    if (!page?.handle) {
      return handleChangeErrors({ ...errors, page: FIELD_REQUIRED });
    }

    if (!name) {
      return handleChangeErrors({ ...errors, name: FIELD_REQUIRED });
    }

    onSubmit({ page, name, id: get(menuItem, "id", numberGenerator()) });
    handleClose();
  };

  const emptyState = (
    <React.Fragment>
      <Icon source={SearchMinor} />
      <div style={{ textAlign: "center" }}>
        <TextContainer>Could not find any results</TextContainer>
      </div>
    </React.Fragment>
  );

  return (
    <div>
      <div style={{}} id={`${page?.id}-page-button`} ref={activatorRef}>
        <Button size="micro" onClick={handleOpen}>
          {activatorElement}
        </Button>
      </div>
      <Modal
        large
        open={active}
        onClose={handleClose}
        title={get(page, "name", "New Page") || "New Page"}
        primaryAction={{
          content: "Ok",
          onAction: handleSubmit,
          loading: false,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleClose,
          },
        ]}
      >
        <Modal.Section>
          <Box>
            <TextField
              label="Name"
              value={name}
              error={get(errors, "name")}
              onChange={(e) => {
                handleChangeName(e);
              }}
              autoComplete="off"
            />
            <Box padding={"1"} />
            <Autocomplete             
              options={options}
              selected={selectedOptions}
              onSelect={updateSelection}
              emptyState={emptyState}
              loading={loading}
              textField={textField}
            />
          </Box>
        </Modal.Section>
      </Modal>
    </div>
  );
};
export default MenuEditorForm;
