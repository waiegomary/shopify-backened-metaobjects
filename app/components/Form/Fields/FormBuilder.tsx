import { Await } from "@remix-run/react";
import { Box, ChoiceList, Select, TextField } from "@shopify/polaris";
import { Suspense, lazy } from "react";
import * as _ from "lodash";
import { toHTML } from "~/utils";
import SelectField from "./SelectField";

const MDEditor = lazy(() => import("@uiw/react-md-editor"));

const FormBuilder = ({ inputs, formik }) => {
  const render = (field) => {
    switch (field.type) {
      case "select-async":
        return (
          <SelectField
            onSearch={field.onSearch}
            label={field.label}
            options={field.options}
            loading={field.loading}
            selectedOptions={field.selectedOptions}
            setSelectedOptions={field.setSelectedOptions}
            error={field.error}
            placeholder={field.value || "search.."}
          />
        );
      case "select":
        return (
          <Select
            label={field.label}
            options={field.options}
            onChange={(e) => {
              formik.setFieldValue(field.name, e);
            }}
            value={field.value}
            error={field.error}
          />
        );
      case "choice":
        return (
          <ChoiceList
            title="Company name"
            choices={field?.choices}
            selected={[field.value?.toString()]}
            onChange={(e) => {
              formik.setFieldValue(field.name, e);
            }}
          />
        );
      case "text":
        return (
          <>
            <TextField
              label={field.label}
              value={field.value}
              name={field.name || "title"}
              id={field.name || "title"}
              onChange={(e) => {
                formik.setFieldValue(field.name, e);
              }}
              autoComplete="off"
              error={field.error}
            />
            <Box padding="2"></Box>
          </>
        );
      case "textarea":
        return (
          <Suspense>
            <Await resolve={field.value}>
              {(value) => (
                <>
                  <label>{field.label}</label>
                  <Box padding="1"></Box>
                  <div data-color-mode="light">
                    <MDEditor
                      id={field.name}
                      value={
                        value?.includes("children") ? toHTML(value) : value
                      }
                      name={field.name}
                      onChange={(e) => {
                        formik.setFieldValue(field.name, e);
                      }}
                    />
                    <Box padding="2"></Box>
                  </div>
                </>
              )}
            </Await>
          </Suspense>
        );

      default:
        break;
    }
  };

  return (
    <>
      {_.map(inputs, (input) => {
        return (
          <div key={`input-${input.id || input.name}-${input.value}`}>
            {render(input)}
          </div>
        );
      })}
    </>
  );
};

export default FormBuilder;
