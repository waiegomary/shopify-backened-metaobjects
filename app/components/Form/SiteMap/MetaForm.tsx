import { useMemo } from "react";
import { Box, ChoiceList, Select, TextField } from "@shopify/polaris";
import { Suspense, lazy } from "react";
import * as _ from "lodash";
import { toHTML } from "~/utils";
import { get } from "~/utils";
import SelectField from "../Fields/SelectField";
import { Await } from "@remix-run/react";

const MDEditor = lazy(() => import("@uiw/react-md-editor"));

const MetaForm = ({ formik }) => {
  const { values, errors } = formik;

  return (
    <Box>
      <TextField
        label="Title"
        name="meta.title"
        value={values.meta?.title}
        onChange={(value) => {
          formik.setFieldValue("meta.title", value);
        }}
        autoComplete="off"
        error={get(errors, "meta.title")}
      />
      <Box padding="2"></Box>
      <TextField
        label="URL"
        name="meta.url"
        value={values.meta?.url}
        onChange={(value) => {
          formik.setFieldValue("meta.url", value);
        }}
        autoComplete="off"
        error={get(errors, "meta.url")}
      />
      <Box padding="2"></Box>
      <TextField
        label="Logo"
        name="meta.logo"
        value={values.meta?.logo}
        onChange={(value) => {
          formik.setFieldValue("meta.logo", value);
        }}
        autoComplete="off"
        error={get(errors, "meta.logo")}
      />
      <Box padding="2"></Box>
      <TextField
        label="Tagline"
        name="meta.tagline"
        value={values.meta?.tagline}
        onChange={(value) => {
          formik.setFieldValue("meta.tagline", value);
        }}
        autoComplete="off"
        error={get(errors, "meta.tagline")}
      />
      <Box padding="2"></Box>
      <TextField
        label="Favicon"
        name="meta.favicon"
        value={values.meta?.favicon}
        onChange={(value) => {
          formik.setFieldValue("meta.favicon", value);
        }}
        autoComplete="off"
        error={get(errors, "meta.favicon")}
      />
      <Box padding="2"></Box>
      <TextField
        label="Copyright"
        name="meta.copyright"
        value={values.meta?.copyright}
        onChange={(value) => {
          formik.setFieldValue("meta.copyright", value);
        }}
        autoComplete="off"
        error={get(errors, "meta.copyright")}
      />
      <Box padding="2"></Box>
      <TextField
        label="Keywords"
        name="meta.keywords"
        value={values.meta?.keywords}
        onChange={(value) => {
          formik.setFieldValue("meta.keywords", value);
        }}
        autoComplete="off"
        error={get(errors, "meta.keywords")}
      />
      <Box padding="2"></Box>
      <Suspense>
        <Await resolve={get(values, "meta.about")}>
          {(value) => (
            <>
              <label>About</label>
              <Box padding="1"></Box>
              <div data-color-mode="light">
                <MDEditor
                  value={value?.includes("children") ? toHTML(value) : value}
                  name="meta.about"
                  onChange={(e) => {
                    formik.setFieldValue("meta.about", e);
                  }}
                />
                <Box padding="2"></Box>
              </div>
            </>
          )}
        </Await>
      </Suspense>
      <Box padding="2"></Box>
    </Box>
  );
};

export default MetaForm;
