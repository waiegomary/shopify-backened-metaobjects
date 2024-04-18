import { json } from "@remix-run/node";
import {
  Await,
  useActionData,
  useFetcher,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import {
  Box,
  Card,
  Layout,
  Page,
  Text,
  TextField,
  VerticalStack,
} from "@shopify/polaris";
import * as _ from "lodash";
import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ProductProperties from "~/components/Tables/ProductProperties";
import { authenticate } from "~/shopify.server";
import { IPropertyMetafield } from "~/types";
import { get, logger, numberGenerator, toHTML } from "~/utils";
import PropertyMetafieldForm from "~/components/Form/Product/PropertyMetafieldForm";
import ImageGrid from "~/components/ImageGrid";
import ImageForm from "~/components/Form/Product/ImageForm";
import SaveAppBar from "~/components/Form/SaveAppBar";
import { getMetaobjectQuery } from "~/graphql/metaobjects/metaobjectQuery";
import useStorefrontFetch from "~/utils/useStorefrontFetch";
import { findValueFromFields } from "~/utils/metaobjects";
import {
  createItemDefinitionVariables,
  updateItemDefinitionMutation,
} from "~/graphql/metaobjects/itemDefinationMutation";
import DuplicateMetaobject from "~/components/Form/Product/DuplicateMetaobject";
import { useFormik } from "formik";
import mkecss from "@uiw/react-md-editor/markdown-editor.css";
import mkdn from "@uiw/react-markdown-preview/markdown.css";
import styles from "../components/Views/styles.css";
import "../components/table-styles.css";
import { useToast } from "~/utils/useToast";

export const links = () => [
  { rel: "stylesheet", href: mkecss },
  { rel: "stylesheet", href: mkdn },
  { rel: "stylesheet", href: styles },
];

const MDEditor = lazy(() => import("@uiw/react-md-editor"));

export async function loader({ request, params }) {
  const id = numberGenerator();
  const response = await useStorefrontFetch(
    JSON.stringify({
      query: getMetaobjectQuery,
      variables: {
        metaobjectHandleInput: {
          handle: params.handle,
          type: "item_definition",
        },
      },
    })
  );
  const data = await response.json();
  const metaobject = _.get(data, "data.metaobject");
  let properties = findValueFromFields(metaobject, "prop_use");
  if (properties) {
    properties = JSON.parse(properties);
  }

  const metaobjectId = _.get(metaobject, "id");
  const description = findValueFromFields(metaobject, "description");
  const content = findValueFromFields(metaobject, "content") || description;
  const name = findValueFromFields(metaobject, "name");
  const deprecated_properties = findValueFromFields(metaobject, "properties");
  const strapi_id = findValueFromFields(metaobject, "strapi_id") || "";
  const main_media = findValueFromFields(metaobject, "main_media") || "";

  let additional_media = findValueFromFields(metaobject, "additional_media");
  if (additional_media?.length) {
    additional_media = JSON.parse(additional_media);
  } else {
    additional_media = [];
  }

  const _metaobject = {
    id: metaobjectId,
    description,
    content,
    name,
    main_media,
    additional_media,
    handle: params.handle,
    strapi_id,
    properties: deprecated_properties,
    prop_use: _.map(_.get(properties, "data", []), (it, index) => ({
      id: index + id + 1,
      ...it,
    })),
  };

  return json(
    {
      metaobject: _metaobject,
      type: "item_definition",
      productProperties: _.map(_.get(properties, "data", []), (it, index) => ({
        id: index + id + 1,
        ...it,
      })),
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}

export async function action({ request, params }) {
  const { admin } = await authenticate.admin(request);
  const data = {
    ...Object.fromEntries(await request.formData()),
  };
  const id = _.get(data, "ownerId");
  const handle = _.get(data, "handle");
  let fields: { key: string; value: string }[] = [];

  fields.push({
    key: "name",
    value: _.get(data, "name"),
  });

  fields.push({
    key: "strapi_id",
    value: _.get(data, "strapi_id"),
  });

  fields.push({
    key: "description",
    value: _.get(data, "description"),
  });

  fields.push({
    key: "content",
    value: _.get(data, "content"),
  });

  if (_.get(data, "properties")) {
    fields.push({
      key: "properties",
      value: _.get(data, "properties"),
    });
  }
  if (_.get(data, "prop_use")) {
    fields.push({
      key: "prop_use",
      value: _.get(data, "prop_use"),
    });
  } else {
    fields.push({
      key: "prop_use",
      value: JSON.stringify({ data: [] }),
    });
  }
  fields.push({
    key: "main_media",
    value: _.get(data, "mainmedia", ""),
  });

  if (_.get(data, "additionalmedia")) {
    fields.push({
      key: "additional_media",
      value: _.get(data, "additionalmedia"),
    });
  }
  const variables = createItemDefinitionVariables({
    id,
    handle,
    fields,
  });
  const response = await updateItemDefinitionMutation({
    graphql: admin.graphql,
    variables,
  });
  const errors = response?.data?.metaobjectUpdate?.userErrors;
  if (errors?.length) {
    return json({ errors }, { status: 422 });
  }
  return json(
    { data: _.get(response, "data") },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}

export default function ProductPage() {
  const { metaobject, productProperties, type } = useLoaderData();
  const [formDirty, setFormDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const activatorRef = useRef<HTMLDivElement>(null);

  const propertiesFetcher = useFetcher();
  const [standardProperties, setStandardProperties] = useState([]);

  useEffect(() => {
    if (propertiesFetcher.data) {
      const o = _.map(
        _.get(propertiesFetcher.data, "data.metaobjects.edges"),
        (item) => {
          return {
            value: _.get(item, "node.id"),
            label: _.get(item, "node.displayName"),
          };
        }
      );
      setStandardProperties(o);
    }
  }, [propertiesFetcher.data]);

  useEffect(() => {
    if (!standardProperties.length && !loading) {
      onSearch({});
    }
  }, []);

  const onSearch = async (data) => {
    propertiesFetcher.load(
      `/app/search-metaobjects/standard_properties?query=${_.get(
        data,
        "query"
      )}&after=${_.get(data, "after")}&before=${_.get(data, "before")}&first=10`
    );
  };

  const actionData = useActionData();

  const [additionalMedia, setAdditionalMedia] = useState(
    _.get(metaobject, "additional_media")
  );
  const handleLoadingChange = useCallback((value) => setLoading(value), []);

  const handleImagesChange = useCallback((value) => {
    setAdditionalMedia(value);
    setFormDirty(true);
  }, []);

  const submit = useSubmit();
  const handleFormDirty = useCallback(() => setFormDirty(true), []);

  const initialValues = useMemo(
    () => ({
      properties: productProperties || [],
      name: _.get(metaobject, "name", ""),
      description: _.get(metaobject, "description", " "),
      content: _.get(metaobject, "content", " "),
      mainmedia: _.get(metaobject, "main_media", "")
        ? [_.get(metaobject, "main_media", "")]
        : [],
    }),
    [productProperties, actionData, metaobject]
  );

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onSubmit: (values) => {
      handleLoadingChange(true);
      const data = {
        name: values.name,
        description: values.description,
        content: values.content,
        ownerId: _.get(metaobject, "id"),
        properties: _.get(metaobject, "properties", []),
        strapi_id: _.get(metaobject, "strapi_id"),
        handle: _.get(metaobject, "handle"),
        additionalmedia: JSON.stringify(additionalMedia),
        mainmedia: _.get(values, "mainmedia"),
      };

      if (values.properties?.length) {
        data["prop_use"] = JSON.stringify({ data: values.properties });
      }

      submit(data, { method: "post" });
    },
  });
  const navigate = useNavigate();
  const { toastMarkup, showToast } = useToast();
  useEffect(() => {
    handleLoadingChange(false);

    if (_.get(actionData, "errors")) {
      return showToast(
        `Something went wrong. ${JSON.stringify(
          _.get(actionData, "errors[0].message")
        )}`,
        true
      );
    } else {
      if (formik.dirty) {
        showToast("Updated successfully");
      }
    }
    setFormDirty(false);
  }, [actionData]);

  const handlePropertiesChange = useCallback((values) => {
    formik.setFieldValue("properties", values);
    setFormDirty(true);
  }, []);

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const addProperty = (item: IPropertyMetafield) => {
    formik.setFieldValue("properties", [
      item,
      ...get(formik, "values.properties", []),
    ]);
    handleFormDirty();
  };

  const removeProperty = (id: number) => {
    formik.setFieldValue(
      "properties",
      get(formik, "values.properties", [])?.filter(
        (it) => _.get(it, "id") !== id
      )
    );
    handleFormDirty();
  };

  const onEditProperty = (item: IPropertyMetafield) => {
    const index = _.findIndex(
      formik.values.properties,
      (prop) => prop?.id === item?.id
    );
    formik.setFieldValue(`properties[${index}]`, item);

    handleFormDirty();
  };

  const removeAdditionalImages = (image: string) => {
    setAdditionalMedia([...additionalMedia.filter((it) => it !== image)]);
    handleFormDirty();
  };

  const onAddMainMedia = (value: string) => {
    formik.setFieldValue("mainmedia", [value]);
    handleFormDirty();
  };

  const onAddAdditionalMedia = (image: string) => {
    setAdditionalMedia([image, ...additionalMedia]);
    handleFormDirty();
  };

  return (
    <Page
      backAction={{ content: "Products", url: "/app/items/item_definition" }}
      title={_.get(metaobject, "name", "")}
      subtitle="Item"
      compactTitle
      secondaryActions={[
        {
          content: "Duplicate",
          accessibilityLabel: "Secondary action label",
          onAction: () => {
            activatorRef.current?.querySelector("button")?.click();
          },
        },
      ]}
    >
      <Layout>
        <Layout.Section>
          {formDirty ? (
            <SaveAppBar
              saveAction={handleSubmit}
              loading={loading}
              discardAction={() => {
                navigate(`/app/items/${type}`);
              }}
            />
          ) : null}
          <Card>
            <DuplicateMetaobject
              modalTitle={"Duplicate"}
              metaobject={{
                name: get(formik, "values.name"),
                description: get(formik, "values.description"),
                content: get(formik, "values.content"),
                id: _.get(metaobject, "id"),
                properties: _.get(metaobject, "properties"),
                strapi_id: _.get(metaobject, "strapi_id"),
                handle: _.get(metaobject, "handle"),
                additionalmedia: JSON.stringify(additionalMedia),
                mainmedia: _.get(formik, "values.mainmedia"),
                prop_use: JSON.stringify({
                  data: _.get(formik, "values.properties"),
                }),
              }}
              activatorRef={activatorRef}
            />
            <VerticalStack gap="3">
              {toastMarkup}
              <TextField
                label="Name"
                value={get(formik, "values.name")}
                onChange={(e) => {
                  formik.setFieldValue("name", e);
                  handleFormDirty();
                }}
                autoComplete="off"
              />

              <Suspense>
                <Await resolve={get(formik, "values.content")}>
                  {(value) => (
                    <>
                      <label>{"Description"}</label>
                      <Box padding="1"></Box>
                      <div data-color-mode="light">
                        <MDEditor
                          id={get(formik, "values.content")}
                          value={
                            value?.includes("children") ? toHTML(value) : value
                          }
                          name={"description"}
                          onChange={(e) => {
                            formik.setFieldValue("content", e);
                            setFormDirty(true);
                          }}
                        />
                        <Box padding="2"></Box>
                      </div>
                    </>
                  )}
                </Await>
              </Suspense>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="headingMd" as="h6">
                  Properties
                </Text>

                <PropertyMetafieldForm
                  activatorTitle="Add Property"
                  onAdd={addProperty}
                  values={{}}
                  standardProperties={standardProperties}
                />
              </div>

              <ProductProperties
                fetcher={propertiesFetcher}
                onEdit={onEditProperty}
                onRemove={removeProperty}
                properties={get(formik, "values.properties")}
                handleItemChange={handlePropertiesChange}
                standardProperties={standardProperties}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="headingMd" as="h6">
                  Main Media
                </Text>

                <ImageForm
                  activatorTitle={`${
                    _.get(formik, "values.mainmedia.length") ? "Edit" : "Add"
                  } Main Media`}
                  onAdd={onAddMainMedia}
                />
              </div>
              <ImageGrid
                images={_.get(formik, "values.mainmedia")}
                onRemove={(image: string) => {
                  formik.setFieldValue("mainmedia", []);
                  handleFormDirty();
                }}
                setImages={(values) => {
                  formik.setFieldValue("mainmedia", values);
                  handleFormDirty();
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="headingMd" as="h6">
                  Additional Media
                </Text>

                <ImageForm
                  onAdd={onAddAdditionalMedia}
                  activatorTitle={`Add More Media`}
                />
              </div>
              <ImageGrid
                images={additionalMedia}
                onRemove={removeAdditionalImages}
                setImages={handleImagesChange}
              />
            </VerticalStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
