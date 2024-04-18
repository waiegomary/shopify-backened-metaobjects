import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { Layout, Page, VerticalStack } from "@shopify/polaris";
import * as _ from "lodash";
import { useEffect, useState } from "react";
import { authenticate } from "~/shopify.server";
import { parseDefinitionType } from "~/utils";
import { IPageInfo } from "~/types";
import PageLoader from "~/components/Loaders/PageLoader";
import ItemMetaObjects from "~/components/Tables/ItemMetaObjects";
import SiteMapMetaObjects from "~/components/Tables/SiteMapMetaObjects";

export async function loader({ request, params }) {
  const { admin, session } = await authenticate.admin(request);

  return json({
    type: "site_map",
    graphql: admin.graphql,
  });
}
export default function MetaobjectsPage() {
  const { type } = useLoaderData();

  const [edges, setEdges] = useState([]);
  const [pageInfo, setPageInfo] = useState({} as IPageInfo);
  const fetcher = useFetcher();
  const [loading, setLoading] = useState(fetcher.state === "loading");
  const [pageLoading, setPageLoading] = useState(true);

  const onSearch = async (data) => {
    fetcher.load(
      `/app/search-metaobjects/${type}?query=${_.get(
        data,
        "query"
      )}&after=${_.get(data, "after")}&before=${_.get(data, "before")}`
    );
  };

  useEffect(() => {
    if (fetcher.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }

    if (fetcher.data) {
      setEdges(_.get(fetcher.data, "data.metaobjects.edges", []));
      setPageInfo(_.get(fetcher.data, "data.metaobjects.pageInfo", {}));
    }
  }, [fetcher]);

  useEffect(() => {
    if (fetcher.state !== "loading" && pageLoading) {
      setPageLoading(false);
    }
  }, [fetcher.state]);

  useEffect(() => {
    if (!fetcher.data) {
      setPageLoading(true);
      onSearch({});
    }
  }, []);

  return (
    <Page
      backAction={{ content: "Products", url: "/app" }}
      title={"Sites"}
      subtitle=""
      compactTitle
    >
      <Layout>
        <Layout.Section>
          {pageLoading ? <PageLoader /> : null}
          {!pageLoading ? (
            <VerticalStack gap="3">
              <SiteMapMetaObjects
                edges={edges}
                pageInfo={pageInfo}
                type={type}
                onSearch={onSearch}
                loading={loading}
              />
            </VerticalStack>
          ) : null}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
