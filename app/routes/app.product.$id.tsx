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
import ProductItems from "~/components/Tables/ProductItems";
import ProductProperties from "~/components/Tables/ProductProperties";
import { getProductIDString } from "~/constants";
import { productQuery } from "~/graphql/products/productQuery";
import { authenticate } from "~/shopify.server";
import { IItemMetafield, IPropertyMetafield } from "~/types";
import ItemMetafieldForm from "~/components/Form/Product/ItemMetafieldForm";
import { get, numberGenerator, toHTML } from "~/utils";
import PropertyMetafieldForm from "~/components/Form/Product/PropertyMetafieldForm";
import ImageGrid from "~/components/ImageGrid";
import ImageForm from "~/components/Form/Product/ImageForm";
import {
  createVariables,
  metafieldSetMutation,
} from "~/graphql/metafields/metafieldSetMutation";
import SaveAppBar from "~/components/Form/SaveAppBar";
import {
  createUpdateProductVariables,
  productSaveUpdateMutation,
} from "~/graphql/products/productUpdate";
import DuplicateForm from "~/components/Form/Product/DuplicateForm";
import mkecss from "@uiw/react-md-editor/markdown-editor.css";
import mkdn from "@uiw/react-markdown-preview/markdown.css";
import { useFormik } from "formik";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { parseJSONWithData } from "~/utils/metaobjects";
const MDEditor = lazy(() => import("@uiw/react-md-editor"));

export const links = () => [
  { rel: "stylesheet", href: mkecss },
  { rel: "stylesheet", href: mkdn },
];

export async function loader({ request, params }) {
  const { admin } = await authenticate.admin(request);

  const id = numberGenerator();
  const data = await productQuery({
    graphql: admin.graphql,
    id: getProductIDString(params.id),
  });
  let productdescription = parseJSONWithData(
    _.get(data, "data.product.productdescription.value")
  );
  let productItems = [];
  let productProperties = [];
  if (_.get(data, "data.product.items.value")) {
    productItems = JSON.parse(_.get(data, "data.product.items.value", "{}"));
  }
  if (_.get(data, "data.product.properties.value")) {
    productProperties = JSON.parse(
      _.get(data, "data.product.properties.value", "{}")
    );
  }

  return json(
    {
      product: _.get(data, "data.product"),
      productdescription,
      productItems: _.map(_.get(productItems, "data", []), (it, index) => ({
        id: id + index + 1,
        ...it,
      })),
      productProperties: _.map(
        _.get(productProperties, "data", []),
        (it, index) => ({ id: index + id + 1, ...it })
      ),
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}

export async function action({ request, params }) {
  const { session, admin } = await authenticate.admin(request);
  const data = {
    ...Object.fromEntries(await request.formData()),
  };
  const productId = getProductIDString(params.id);
  const variables = createVariables({
    ownerId: _.get(data, "ownerId"),
    properties: _.get(data, "properties"),
    items: _.get(data, "items"),
    additionalmedia: _.get(data, "additionalmedia"),
    mainmedia: _.get(data, "mainmedia"),
    productdescription: JSON.stringify({
      data: _.get(data, "productdescription"),
    }),
  });

  const response = await metafieldSetMutation({
    graphql: admin.graphql,
    variables,
  });

  const productVariables = createUpdateProductVariables({
    productId,
    title: _.get(data, "title"),
    descriptionHtml: _.get(data, "description"),
  });
  const res = await productSaveUpdateMutation({
    graphql: admin.graphql,
    variables: productVariables,
  });
  return json({ data: res });
}

export default function ProductPage() {
  const { product, productItems, productProperties, productdescription } =
    useLoaderData();

  const [formDirty, setFormDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const actionData = useActionData();
  const activatorRef = useRef<HTMLDivElement>(null);

  const itemFetcher = useFetcher();

  const [itemDefinitions, setItemDefinitions] = useState([]);
  const handleItemDefinitionsChange = useCallback((values) => {
    setItemDefinitions(values);
  }, []);

  useEffect(() => {
    if (itemFetcher.data) {
      const o = _.map(
        _.get(itemFetcher.data, "data.metaobjects.edges"),
        (item) => {
          return {
            value: _.get(item, "node.id"),
            label: _.get(item, "node.displayName"),
          };
        }
      );
      handleItemDefinitionsChange(o);
    }
  }, [itemFetcher.data, loading]);

  const propertiesFetcher = useFetcher();
  const [standardProperties, setStandardProperties] = useState([]);
  const handleSetPropertiesChange = useCallback((values) => {
    setStandardProperties(values);
  }, []);

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
      handleSetPropertiesChange(o);
    }
  }, [propertiesFetcher.data]);

  const handlePropertiesChange = useCallback((values) => {
    formik.setFieldValue("properties", values);
    setFormDirty(true);
  }, []);

  const handleLoadingChange = useCallback((value) => setLoading(value), []);
  useEffect(() => {
    handleLoadingChange(false);
    setFormDirty(false);
    if (initialValues == formik.values) {
      setFormDirty(false);
    }
  }, [actionData]);

  const images = useMemo(() => {
    if (_.get(product, "additionalmedia.value")) {
      return JSON.parse(_.get(product, "additionalmedia.value", "[]"));
    }
    return [];
  }, []);

  const fetcher = useFetcher();
  const fetcher2 = useFetcher();
  const navigate = useNavigate();

  const setAdditionalMedia = (values) => {
    formik.setFieldValue("additionalMedia", values);
    handleFormDirty();
  };
  const submit = useSubmit();
  const handleFormDirty = useCallback(() => setFormDirty(true), []);

  const initialValues = {
    items: productItems,
    properties: productProperties,
    title: _.get(product, "title"),
    description: _.get(product, "description"),
    mainMedia: _.get(product, "mainMedia.value", "")
      ? [_.get(product, "mainMedia.value", "")]
      : [],
    additionalMedia: images,
    id: _.get(product, "id"),
    productdescription: productdescription || "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      setLoading(true);
      const data = {
        title: _.get(values, "title"),
        description: _.get(values, "description"),
        ownerId: _.get(product, "id"),
        properties: JSON.stringify({ data: _.get(values, "properties") }),
        items: JSON.stringify({ data: _.get(values, "items") }),
        additionalmedia: JSON.stringify(_.get(values, "additionalMedia")),
        mainmedia: _.get(values, "mainMedia"),
        productdescription: _.get(values, "productdescription"),
      };
      submit(data, { method: "post" });
    },
  });

  useEffect(() => {
    setLoading(false);
  }, [formDirty]);

  useEffect(() => {
    setLoading(false);
  }, []);

  const addItem = (item: IItemMetafield) => {
    handleFormDirty();
    const items = _.get(formik, "values.items", []);
    const _item = _.findIndex(items, (it) => it.id === item.id);
    let newItem = item;
    if (_item) {
      newItem = { ...item, id: numberGenerator() + numberGenerator() };
    }
    formik.setFieldValue("items", [item, ...items]);
  };

  const removeItem = (id: number) => {
    const items = _.get(formik, "values.items", []);
    formik.setFieldValue(
      "items",
      items?.filter((it) => _.get(it, "id") !== id)
    );
    handleFormDirty();
  };

  const onEditItem = (item: IItemMetafield) => {
    const items = _.get(formik, "values.items", []);
    const index = _.findIndex(items, (_item) => _item?.id == item.id);

    formik.setFieldValue(`items[${index}]`, item);
    handleFormDirty();
  };

  const handleItemsChange = useCallback((values) => {
    formik.setFieldValue(`items`, values);
    setFormDirty(true);
  }, []);

  const addProperty = (item: IPropertyMetafield) => {
    const otherProperties = _.get(formik, "values.properties", []);
    formik.setFieldValue("properties", [item, ...otherProperties]);
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
  const onEditProperty = (item: IPropertyMetafield, idx) => {
    const index = _.findIndex(
      get(formik, "values.properties", []),
      (prop) => prop?.id === item?.id
    );
    formik.setFieldValue(`properties[${index}]`, item);
    handleFormDirty();
  };
  const removeAdditionalImages = (image: string) => {
    formik.setFieldValue("additionalMedia", [
      ...get(formik, "values.additionalMedia")?.filter((it) => it !== image),
    ]);
    handleFormDirty();
  };
  const onAddMainMedia = (value: string) => {
    formik.setFieldValue("mainMedia", [value]);
    handleFormDirty();
  };

  const onAddAdditionalMedia = (image: string) => {
    formik.setFieldValue("additionalMedia", [
      image,
      ...get(formik, "values.additionalMedia", []),
    ]);

    handleFormDirty();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Page
        backAction={{ content: "Products", url: "/app/products" }}
        title={_.get(product, "title", "")}
        subtitle="product"
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
                loading={loading}
                saveAction={formik.submitForm}
                discardAction={() => {
                  navigate("/app/products");
                }}
              />
            ) : null}
            <Card>
              <DuplicateForm
                modalTitle={"Duplicate"}
                product={product}
                activatorRef={activatorRef}
              />
              <VerticalStack gap="3">
                <TextField
                  label="Title"
                  value={get(formik, "values.title")}
                  onChange={(e) => {
                    formik.setFieldValue("title", e);
                    handleFormDirty();
                  }}
                  autoComplete="off"
                />

                <Suspense>
                  <Await resolve={get(formik, "values.productdescription")}>
                    {(value) => (
                      <>
                        <label>{"Description"}</label>
                        <div data-color-mode="light">
                          <MDEditor
                            value={
                              value?.includes("children")
                                ? toHTML(value)
                                : value
                            }
                            name={"productdescription"}
                            onChange={(e) => {
                              formik.setFieldValue("productdescription", e);
                              handleFormDirty();
                            }}
                          />
                          <Box padding="2"></Box>
                        </div>
                      </>
                    )}
                  </Await>
                </Suspense>

                <Suspense>
                  <Await resolve={get(formik, "values.description")}>
                    {(value) => (
                      <>
                        <label>
                          {
                            "Original Description (not editable - to be removed in future)"
                          }
                        </label>
                        <div data-color-mode="light">
                          <MDEditor
                            value={
                              value?.includes("children")
                                ? toHTML(value)
                                : value
                            }
                            name={"description"}
                            onChange={(e) => {
                              // formik.setFieldValue("productdescription", e);
                              // handleFormDirty();
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
                    Items
                  </Text>

                  <ItemMetafieldForm
                    activatorTitle="Add Item"
                    fetcher={fetcher}
                    onAdd={addItem}
                    values={{}}
                  />
                </div>
                <ProductItems
                  fetcher={fetcher}
                  onEdit={onEditItem}
                  items={get(formik, "values.items")}
                  onRemove={removeItem}
                  handleItemChange={handleItemsChange}
                  itemDefinitions={itemDefinitions}
                  formik={formik}
                />
                <Box padding={"5"} />
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
                    standardProperties={standardProperties}
                    onAdd={addProperty}
                    values={{}}
                  />
                </div>

                <ProductProperties
                  fetcher={fetcher2}
                  onEdit={onEditProperty}
                  onAdd={addProperty}
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
                      get(formik, "values.mainMedia", [])?.length
                        ? "Edit"
                        : "Add"
                    } Main Media`}
                    onAdd={onAddMainMedia}
                  />
                </div>
                <ImageGrid
                  images={get(formik, "values.mainMedia", [])}
                  onRemove={(image: string) => {
                    formik.setFieldValue("mainMedia", []);
                    handleFormDirty();
                  }}
                  setImages={(values) => {
                    formik.setFieldValue("mainMedia", values);
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
                  images={get(formik, "values.additionalMedia", [])}
                  onRemove={removeAdditionalImages}
                  setImages={setAdditionalMedia}
                />
              </VerticalStack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </DndProvider>
  );
}
