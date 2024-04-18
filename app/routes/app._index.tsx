import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { Layout, Page, VerticalStack } from "@shopify/polaris";
import * as _ from "lodash";
import { useEffect, useState } from "react";
import PageLoader from "~/components/Loaders/PageLoader";
import Products from "~/components/Tables/Products";
import { IPageInfo } from "~/types";

export async function loader({ request, params }) {
  return json({
    type: params.type,
  });
}

export default function ProductsPage() {
  const { definitionType, type } = useLoaderData();

  const [edges, setEdges] = useState([]);
  const [pageInfo, setPageInfo] = useState({} as IPageInfo);
  const fetcher = useFetcher();
  const [loading, setLoading] = useState(fetcher.state === "loading");
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (fetcher.state !== "loading" && pageLoading) {
      setPageLoading(false);
    }
  }, [fetcher.state]);

  const handleFetch = async (data) => {
    fetcher.load(
      `/app/search-products/?query=${_.get(data, "query")}&after=${_.get(
        data,
        "after",
        null
      )}&before=${_.get(data, "before", null)}`
    );
  };

  useEffect(() => {
    if (!fetcher.data) {
      setPageLoading(true);
      handleFetch({});
    }
  }, []);

  useEffect(() => {
    if (fetcher.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (fetcher.data) {
      setEdges(_.get(fetcher.data, "data.products.edges", []));
      setPageInfo(_.get(fetcher.data, "data.products.pageInfo", {}));
    }
  }, [fetcher]);

  return (
    <Page
      backAction={{ content: "Products", url: "/app" }}
      title={definitionType}
      subtitle="Products"
      compactTitle
    >
      <Layout>
        <Layout.Section>
          <VerticalStack gap="3">
            {pageLoading ? <PageLoader /> : null}
            {!pageLoading ? (
              <Products
                edges={edges}
                pageInfo={pageInfo}
                type={type}
                onSearch={handleFetch}
                loading={loading}
              />
            ) : null}
          </VerticalStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
