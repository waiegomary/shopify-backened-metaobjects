import { Box, ChoiceList, TextField } from "@shopify/polaris";
import { useMemo } from "react";
import FormBuilder from "../Fields/FormBuilder";
import { get } from "~/utils";

const HeaderFrom = ({ formik }) => {
  const { values, errors } = formik;
  const inputs = useMemo(
    () => [
      {
        label: "Logo",
        value: get(values, "header.logo"),
        error: get(errors, "header.logo"),
        type: "text",
        name: "header.logo",
      },
      {
        label: "Search",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" },
        ],
        error: get(errors, "header.search"),
        name: "header.search",
        type: "choice",
        value: get(values, "header.search"),
      },
      {
        label: "Login",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" },
        ],
        error: get(errors, "header.login"),
        name: "header.login",
        type: "choice",
        value: get(values, "header.login"),
      },
    ],
    []
  );
  const choices = [
    { label: "True", value: "true" },
    { label: "False", value: "false" },
  ];
  return (
    <Box>
      <TextField
        label="Logo"
        name="header.logo"
        value={get(values, "header.logo")?.toString()}
        onChange={(value) => {
          formik.setFieldValue("header.logo", value);
        }}
        autoComplete="off"
        error={get(errors, "header.logo")}
      />
      <Box padding="2"></Box>
      <ChoiceList
        title="Search"
        choices={choices}
        selected={[get(values, "header.search")?.toString()]}
        onChange={(e) => {
          formik.setFieldValue("header.search", e);
        }}
      />
      <Box padding="2"></Box>
       <ChoiceList
        title="Login"
        choices={choices}
        selected={[get(values, "header.login")?.toString()]}
        onChange={(e) => {
          formik.setFieldValue("header.login", e);
        }}
      />
      <Box padding="2"></Box>
    </Box>
  );
};

export default HeaderFrom;
