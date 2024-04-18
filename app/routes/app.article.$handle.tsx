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
  useState,
} from "react";
import { authenticate } from "~/shopify.server";
import { get, isValidDate, toHTML } from "~/utils";
import SaveAppBar from "~/components/Form/SaveAppBar";
import { getMetaobjectQuery } from "~/graphql/metaobjects/metaobjectQuery";
import useStorefrontFetch from "~/utils/useStorefrontFetch";
import {
  createFieldValue,
  findFieldsNode,
  findValueFromFields,
  getFieldData,
  getSiteMetadataFieldData,
  parseJSON,
} from "~/utils/metaobjects";
import {
  createItemDefinitionVariables,
  updateItemDefinitionMutation,
} from "~/graphql/metaobjects/itemDefinationMutation";
import MetaForm from "~/components/Form/SiteMap/MetaForm";
import mkecss from "@uiw/react-md-editor/markdown-editor.css";
import mkdn from "@uiw/react-markdown-preview/markdown.css";
import { useFormik } from "formik";
import styles from "../components/Views/styles.css";
import TagSearchField from "~/components/Form/Fields/TagSearchField";
import ImageForm from "~/components/Form/Product/ImageForm";
import ImageGrid from "~/components/ImageGrid";
import { useToast } from "~/utils/useToast";
import FormLoader from "~/components/Loaders/FormLoader";
const MDEditor = lazy(() => import("@uiw/react-md-editor"));
export const links = () => [
  { rel: "stylesheet", href: mkecss },
  { rel: "stylesheet", href: mkdn },
  { rel: "stylesheet", href: styles },
];

export async function loader({ request, params }) {
  const response = await useStorefrontFetch(
    JSON.stringify({
      query: getMetaobjectQuery,
      variables: {
        metaobjectHandleInput: {
          handle: params.handle,
          type: "article",
        },
      },
    })
  );
  const data = await response.json();
  const metaobject = _.get(data, "data.metaobject");

  let title = findValueFromFields(metaobject, "title");
  let authors = parseJSON(findValueFromFields(metaobject, "authors"));
  let categories = parseJSON(findValueFromFields(metaobject, "categories"));
  let content = findValueFromFields(metaobject, "content");
  let media = findValueFromFields(metaobject, "media");
  let content_MD = findValueFromFields(metaobject, "content_md");
  const additional_media =
    findValueFromFields(metaobject, "additional_media") || "";
  const created_at = findValueFromFields(metaobject, "created_at");
  return json(
    {
      title,
      authors,
      categories,
      content: content,
      content_MD: content_MD,
      media,
      additional_media,
      created_at,
      handle: params.handle,
      metaobject: metaobject,
      type: "article",
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
  const id = _.get(data, "id");
  const handle = _.get(data, "handle");
  const created_at = _.get(data, "created_at");

  let fields: { key: string; value: string }[] = [
    {
      key: "title",
      value: _.get(data, "title"),
    },
    {
      key: "content",
      value: _.get(data, "content", ""),
    },
    {
      key: "authors",
      value: _.get(data, "authors"),
    },
    {
      key: "categories",
      value: _.get(data, "categories"),
    },
    {
      key: "content_md",
      value: _.get(data, "content_MD", ""),
    },
    {
      key: "media",
      value: _.get(data, "media"),
    },
    {
      key: "additional_media",
      value: _.get(data, "additional_media"),
    },
    {
      key: "created_at",
      value: isValidDate(created_at) ? created_at : new Date(),
    },
  ];

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
  return json({ data: _.get(response, "data") });
}

export default function ArticlePage() {
  const {
    title,
    authors,
    categories,
    content,
    content_MD,
    media,
    handle,
    metaobject,
    created_at,
    additional_media,
  } = useLoaderData();
  const [formDirty, setFormDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allAuthors, _setAllAuthors] = useState([]);
  const setAllAuthors = useCallback((value) => _setAllAuthors(value), []);

  const [allCategories, _setCategories] = useState([]);
  const setAllCategories = useCallback((value) => _setCategories(value), []);

  const actionData = useActionData();
  const authorFetcher = useFetcher();
  const categoriesFetcher = useFetcher();
  const navigate = useNavigate();
  const handleLoadingChange = useCallback((value) => setLoading(value), []);
  const handleFormDirty = useCallback(() => setFormDirty(true), []);
  const onSearchCategories = async (data: any) => {
    await categoriesFetcher.load(
      `/app/search-metaobjects/article_category?query=${_.get(
        data,
        "query"
      )}&d=${new Date().toString()}&after=${_.get(
        data,
        "after"
      )}&before=${_.get(data, "before")}`
    );
  };

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

  const onSearchAuthors = async (data: any) => {
    await authorFetcher.load(
      `/app/search-metaobjects/author?query=${_.get(
        data,
        "query"
      )}&d=${new Date().toString()}&after=${_.get(
        data,
        "after"
      )}&before=${_.get(data, "before")}`
    );
  };
  useEffect(() => {
    onSearchAuthors({});
    onSearchCategories({});
  }, []);

  useEffect(() => {
    if (categoriesFetcher.data) {
      const o = _.map(
        _.get(categoriesFetcher.data, "data.metaobjects.edges"),
        (item) => {
          return {
            value: _.get(item, "node.id"),
            label: _.get(item, "node.displayName"),
          };
        }
      );
      setAllCategories(o);
    }
  }, [categoriesFetcher.data]);

  useEffect(() => {
    if (authorFetcher.data) {
      const o = _.map(
        _.get(authorFetcher.data, "data.metaobjects.edges"),
        (item) => {
          return {
            value: _.get(item, "node.id"),
            label: _.get(item, "node.displayName"),
          };
        }
      );
      setAllAuthors(o);
    }
  }, [authorFetcher.data]);
  const submit = useSubmit();

  const initialValues = useMemo(
    () => ({
      id: _.get(metaobject, "id"),
      title,
      authors: !_.isEmpty(authors) ? authors : [],
      categories: !_.isEmpty(categories) ? categories : [],
      content,
      content_MD,
      media: media ? [media] : [],
      handle,
    }),
    [metaobject, title, authors, categories, content, media, handle]
  );

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onSubmit: (values) => {
      handleLoadingChange(true);
      const data = {
        id: _.get(metaobject, "id"),
        handle: _.get(metaobject, "handle"),
        created_at: created_at,
        additional_media: additional_media,
        title: values.title,
        authors: JSON.stringify(_.map(values.authors, (it) => it.value || it)),
        categories: JSON.stringify(
          _.map(values.categories, (it) => it.value || it)
        ),
        content: values.content,
        content_MD: values.content_MD,
        media: values.media?.length ? _.get(values, "media[0]") : "",
      };
      submit(data, { method: "post" });
    },
  });

  const { values } = useMemo(() => formik, [formik]);

  useEffect(() => {
    handleLoadingChange(false);
    setFormDirty(false);
    formik.resetForm({ values: values });
  }, [actionData]);

  return (
    <Page
      backAction={{ content: "Sites", url: "/app/articles" }}
      title={_.get(metaobject, "name", "")}
      subtitle="Article"
      compactTitle
      secondaryActions={[{}]}
    >
      <Layout>
        <Layout.Section>
          <Card>
            {formDirty || loading ? (
              <SaveAppBar
                saveAction={formik.handleSubmit}
                loading={loading}
                discardAction={() => {
                  navigate(`/app/articles`);
                }}
              />
            ) : null}
            {toastMarkup}
            <VerticalStack gap="3">
              <TextField
                label="Title"
                name="title"
                value={values.title}
                onChange={(value) => {
                  formik.setFieldValue("title", value);
                  handleFormDirty();
                }}
                autoComplete="off"
              />
              <Suspense fallback={<FormLoader />}>
                <Await resolve={values.content_MD}>
                  {(value) => (
                    <>
                      <label>{"Content"}</label>
                      <div data-color-mode="light">
                        <MDEditor
                          value={
                            value?.includes("children") ? toHTML(value) : value
                          }
                          name={`content_MD`}
                          onChange={(e) => {
                            formik.setFieldValue("content_MD", e);
                            handleFormDirty();
                          }}
                        />
                        <Box padding="2"></Box>
                      </div>
                    </>
                  )}
                </Await>
              </Suspense>
              <Suspense fallback={<FormLoader />}>
                <Await resolve={values.content}>
                  {(value) => (
                    <>
                      <label>{"Content in rich text format (not editable)"}</label>
                      <div data-color-mode="light">
                        <MDEditor
                          value={
                            value?.includes("children") ? toHTML(value) : value
                          }
                          name={`content`}
                          onChange={(e) => {
                            alert('This content is not editable')
                          }}
                        />
                        <Box padding="2"></Box>
                      </div>
                    </>
                  )}
                </Await>
              </Suspense>
            </VerticalStack>
            {!allCategories?.length || !allAuthors.length ? (
              <FormLoader />
            ) : null}
            {allCategories?.length ? (
              <TagSearchField
                label={"Categories"}
                options={_.map(allCategories, (it) => ({
                  value: _.get(it, "value"),
                  label: _.get(it, "label"),
                  id: _.get(it, "value"),
                  name: _.get(it, "label"),
                }))}
                placeholder="Selected categories"
                selectedOptions={_.filter(allCategories, (obj) =>
                  _.get(formik, "values.categories", [])?.includes(obj.value)
                )}
                handleChangeCollection={(e) => {
                  formik.setFieldValue("categories", e);
                  handleFormDirty();
                }}
              />
            ) : null}
            <Box padding="2"></Box>
            {allAuthors?.length ? (
              <TagSearchField
                label={"Authors"}
                options={_.map(allAuthors, (it) => ({
                  value: _.get(it, "value"),
                  label: _.get(it, "label"),
                  id: _.get(it, "value"),
                  name: _.get(it, "label"),
                }))}
                placeholder="Select authors"
                selectedOptions={_.filter(allAuthors, (obj) =>
                  _.get(formik, "values.authors", [])?.includes(obj.value)
                )}
                handleChangeCollection={(e) => {
                  formik.setFieldValue("authors", e);
                  handleFormDirty();
                }}
              />
            ) : null}
            <Box padding="2"></Box>
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
                  get(formik, "values.media", [])?.length ? "Edit" : "Add"
                } Media`}
                onAdd={(value: string) => {
                  formik.setFieldValue("media", [value]);
                  handleFormDirty();
                }}
              />
            </div>
            <ImageGrid
              images={get(formik, "values.media", [])}
              onRemove={(image: string) => {
                formik.setFieldValue("media", []);
                handleFormDirty();
              }}
              setImages={(values) => {
                formik.setFieldValue("media", values);
                handleFormDirty();
              }}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
