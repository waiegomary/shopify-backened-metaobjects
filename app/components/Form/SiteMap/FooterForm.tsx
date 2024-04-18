import { Box } from "@shopify/polaris";
import { Suspense, lazy, useMemo } from "react";
import { get, toHTML } from "~/utils";
import { Await } from "@remix-run/react";
const MDEditor = lazy(() => import("@uiw/react-md-editor"));

const FooterForm = ({ formik }) => {
  const { values, errors } = formik;

  return (
    <Box>
      <Suspense>
        <Await resolve={get(values, "footer.widget_1", "")}>
          {(value) => (
            <>
              <label>Widget 1</label>
              <Box padding="1"></Box>
              <div data-color-mode="light">
                <MDEditor
                  value={value?.includes("children") ? toHTML(value) : value}
                  name={"footer.widget_1"}
                  onChange={(e) => {
                    formik.setFieldValue("footer.widget_1", e);
                  }}
                />
                <Box padding="2"></Box>
              </div>
            </>
          )}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={get(values, "footer.widget_2", "")}>
          {(value) => (
            <>
              <label>Widget 2</label>
              <Box padding="1"></Box>
              <div data-color-mode="light">
                <MDEditor
                  value={value?.includes("children") ? toHTML(value) : value}
                  name={"footer.widget_2"}
                  onChange={(e) => {
                    formik.setFieldValue("footer.widget_2", e);
                  }}
                />
                <Box padding="2"></Box>
              </div>
            </>
          )}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={get(values, "footer.widget_3", "")}>
          {(value) => (
            <>
              <label>Widget 3</label>
              <Box padding="1"></Box>
              <div data-color-mode="light">
                <MDEditor
                  value={value?.includes("children") ? toHTML(value) : value}
                  name={"footer.widget_3"}
                  onChange={(e) => {
                    formik.setFieldValue("footer.widget_3", e);
                  }}
                />
                <Box padding="2"></Box>
              </div>
            </>
          )}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={get(values, "footer.widget_4", "")}>
          {(value) => (
            <>
              <label>Widget 4</label>
              <Box padding="1"></Box>
              <div data-color-mode="light">
                <MDEditor
                  value={value?.includes("children") ? toHTML(value) : value}
                  name={"footer.widget_4"}
                  onChange={(e) => {
                    formik.setFieldValue("footer.widget_4", e);
                  }}
                />
                <Box padding="2"></Box>
              </div>
            </>
          )}
        </Await>
      </Suspense>
    </Box>
  );
};

export default FooterForm;
