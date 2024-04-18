import { json } from "@remix-run/node";
import {
  Await,
  useActionData,
  useFetcher,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import { Card, Layout, Page, TextField, VerticalStack } from "@shopify/polaris";
import * as _ from "lodash";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { authenticate } from "~/shopify.server";
import { get } from "~/utils";
import SaveAppBar from "~/components/Form/SaveAppBar";
import { getMetaobjectQuery } from "~/graphql/metaobjects/metaobjectQuery";
import useStorefrontFetch from "~/utils/useStorefrontFetch";
import {
  createFieldValue,
  findValueFromFields,
  getFieldData,
  getSiteMetadataFieldData,
} from "~/utils/metaobjects";
import {
  createItemDefinitionVariables,
  updateItemDefinitionMutation,
} from "~/graphql/metaobjects/itemDefinationMutation";
import MetaForm from "~/components/Form/SiteMap/MetaForm";
import mkecss from "@uiw/react-md-editor/markdown-editor.css";
import mkdn from "@uiw/react-markdown-preview/markdown.css";
import { useFormik } from "formik";
import HeaderFrom from "~/components/Form/SiteMap/HeaderFrom";
import FooterForm from "~/components/Form/SiteMap/FooterForm";
import PageMetaObject from "~/components/Tables/PageMetaObject";
import styles from "../components/Views/styles.css";
import MenuMetaobject from "~/components/Tables/MenuMetaobject";
import Accordion from "~/components/Accordion";
import FaqMetaObjects from "~/components/Tables/FaqMetaObjects";
import ArticleMetaobject from "~/components/Tables/ArticleMetaobject";
import CollectionMetaobject from "~/components/Tables/CollectionMetaobject";

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
          type: "site_map",
        },
      },
    })
  );
  const data = await response.json();
  const metaobject = _.get(data, "data.metaobject");
  const articles = getSiteMetadataFieldData(metaobject, "articles") || [];
  const meta = getSiteMetadataFieldData(metaobject, "meta");
  const pages = getSiteMetadataFieldData(metaobject, "pages");
  const menu = getSiteMetadataFieldData(metaobject, "menu");
  const header = getSiteMetadataFieldData(metaobject, "header");
  const footer = getSiteMetadataFieldData(metaobject, "footer");
  const faq = getSiteMetadataFieldData(metaobject, "faq") || [];
  const product_collections =
    getSiteMetadataFieldData(metaobject, "product_collections") || [];

  let name = findValueFromFields(metaobject, "name");
  let domain = findValueFromFields(metaobject, "domain");

  const _metaobject = {
    id: _.get(metaobject, "id"),
    name,
    domain,
    articles,
    meta,
    pages,
    menu,
    header,
    footer,
    faq,
    product_collections,
    handle: params.handle,
  };

  return json(
    {
      name,
      domain,
      articles,
      meta,
      pages,
      menu,
      header,
      footer,
      faq,
      product_collections,
      metaobject: _metaobject,
      type: "site_meta",
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
  let fields: { key: string; value: string }[] = [
    {
      key: "name",
      value: _.get(data, "name"),
    },
    {
      key: "domain",
      value: _.get(data, "domain"),
    },
    {
      key: "documents",
      value: "",
    },
    {
      key: "contacts",
      value: "",
    },
    {
      key: "keywords",
      value: "",
    },
    {
      key: "teams",
      value: "",
    },
  ];
  [
    "articles",
    "meta",
    "menu",
    "pages",
    "header",
    "footer",
    "faq",
    "product_collections",
  ].map((it) => {
    fields.push(createFieldValue(it, data));
  });
  const variables = createItemDefinitionVariables({
    id,
    handle,
    fields,
  });
  const response = await updateItemDefinitionMutation({
    graphql: admin.graphql,
    variables,
  });
  return json({ data: _.get(response, "data") });
}

export default function SiteMetaPage() {
  const {
    metaobject,
    articles,
    meta,
    pages,
    menu,
    header,
    footer = {},
    faq,
    product_collections,
  } = useLoaderData();
  const [formDirty, setFormDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const actionData = useActionData();
  const faqFetcher = useFetcher();
  const collectionFetcher = useFetcher();
  const articleFetcher = useFetcher();
  const navigate = useNavigate();
  const handleLoadingChange = useCallback((value) => setLoading(value), []);

  const submit = useSubmit();

  const initialValues = useMemo(
    () => ({
      id: _.get(metaobject, "id"),
      handle: _.get(metaobject, "handle"),
      name: _.get(metaobject, "name"),
      domain: _.get(metaobject, "domain"),
      articles,
      meta,
      pages,
      menu,
      header,
      footer,
      faq,
      product_collections,
      collections: [],
    }),
    [
      metaobject,
      articles,
      meta,
      pages,
      header,
      footer,
      faq,
      product_collections,
    ]
  );

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onSubmit: (values) => {
      handleLoadingChange(true);

      const data = {
        id: _.get(metaobject, "id"),
        handle: _.get(metaobject, "handle"),
        name: values.name,
        domain: values.domain,
        menu: getFieldData(get(values, "menu")),
        meta: getFieldData(get(values, "meta")),
        pages: getFieldData(get(values, "pages")),
        header: getFieldData(get(values, "header")),
        footer: getFieldData(get(values, "footer", {})),
        faq: getFieldData(get(values, "faq", {})),
        product_collections: getFieldData(get(values, "product_collections")),
        articles: getFieldData(get(values, "articles")),
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
      backAction={{ content: "Sites", url: "/app/site-maps" }}
      title={_.get(metaobject, "name", "")}
      subtitle="Site Map"
      compactTitle
      secondaryActions={[
        values.domain
          ? {
              content: "Preview",
              accessibilityLabel: "Secondary action label",
              onAction: () => {
                const newTab = window.open(values.domain, "_blank");
                if (newTab) {
                  newTab.focus();
                }
              },
            }
          : {},
      ]}
    >
      <Layout>
        <Layout.Section>
          <Card>
            {formDirty || loading || formik.dirty ? (
              <SaveAppBar
                saveAction={formik.handleSubmit}
                loading={loading}
                discardAction={() => {
                  navigate(`/app/site-maps`);
                }}
              />
            ) : null}
            <VerticalStack gap="3">
              <TextField
                label="Name"
                name="name"
                value={values.name}
                onChange={(value) => {
                  formik.setFieldValue("name", value);
                }}
                autoComplete="off"
              />
              <TextField
                label="Domain"
                name="domain"
                value={values.domain}
                onChange={(value) => {
                  formik.setFieldValue("domain", value);
                }}
                autoComplete="off"
              />
              <Accordion title="Metadata">
                <div className="section">
                  <MetaForm formik={formik} />
                </div>
              </Accordion>

              <Accordion title="Header">
                <div className="section">
                  <Suspense>
                    <Await resolve={formik}>
                      {(value) => <HeaderFrom formik={value} />}
                    </Await>
                  </Suspense>
                </div>
              </Accordion>

              <Accordion title="Footer">
                <div className="section">
                  <Suspense>
                    <Await resolve={formik}>
                      {(value) => <FooterForm formik={value} />}
                    </Await>
                  </Suspense>
                </div>
              </Accordion>

              <Accordion title="FAQs">
                <div className="section">
                  <Suspense>
                    <Await resolve={formik}>
                      {(value) => (
                        <FaqMetaObjects
                          faqFetcher={faqFetcher}
                          formik={value}
                        />
                      )}
                    </Await>
                  </Suspense>
                </div>
              </Accordion>

              <Accordion title="Articles">
                <div className="section">
                  <Suspense>
                    <Await resolve={formik}>
                      {(value) => (
                        <ArticleMetaobject
                          faqFetcher={articleFetcher}
                          formik={value}
                        />
                      )}
                    </Await>
                  </Suspense>
                </div>
              </Accordion>

              <Accordion title="Products">
                <div className="section">
                  <Suspense>
                    <Await resolve={formik}>
                      {(value) => (
                        <CollectionMetaobject
                          faqFetcher={collectionFetcher}
                          formik={value}
                        />
                      )}
                    </Await>
                  </Suspense>
                </div>
              </Accordion>
              <Accordion title="Pages">
                <div className="section">
                  <PageMetaObject fetcher={collectionFetcher} formik={formik} />
                </div>
              </Accordion>
              <Accordion title="Menu">
                <div className="section">
                  <MenuMetaobject formik={formik} />
                </div>
              </Accordion>
            </VerticalStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
