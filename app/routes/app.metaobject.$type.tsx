import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import * as _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { Button, Popover, ActionList } from "@shopify/polaris";
import MetaObjects from "~/components/Tables/MetaObjects";
import { getMetaobjects } from "~/graphql/metaobjects/queries";
import { authenticate } from "~/shopify.server";
import { parseDefinitionType } from "~/utils";

export async function loader({ request, params }) {
  const { admin, session } = await authenticate.admin(request);
  const query = new URL(request.url);
  let after = query.searchParams?.get("after") || "";
  let before = query.searchParams?.get("before") || "";
  let rest = {};
  if (before) {
    rest["before"] = before;
  } else if (after) {
    rest["after"] = after;
  }
  const metaobjects = await getMetaobjects({
    graphql: admin.graphql,
    type: params.type,
    ...rest,
  });

  return json({
    metaobjects,
    definitionType: parseDefinitionType(params.type),
    type: params.type,
    graphql: admin.graphql,
  });
}
export default function MetaobjectsPage() {
  const { metaobjects, definitionType, type, graphql } = useLoaderData();

  const [active, setActive] = useState(true);
  const [edges, setEdges] = useState(
    _.get(metaobjects, "data.metaobjects.edges", [])
  );
  const [pageInfo, setPageInfo] = useState(
    _.get(metaobjects, "data.metaobjects.pageInfo", {})
  );
  const fetcher = useFetcher();
  const [loading, setLoading] = useState(fetcher.state === "loading");

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

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleExportedAction = useCallback(
    () => console.log("Exported action"),
    []
  );
  const activator = (
    <Button onClick={toggleActive} disclosure>
      More actions
    </Button>
  );
  return (
    <Page
      backAction={{ content: "Products", url: "/app/metaobjects" }}
      title={definitionType}
      subtitle="Definition"
      compactTitle
    >
      <Layout>
        <Layout.Section>
          <Card>
            <VerticalStack gap="3">
              <MetaObjects
                edges={edges}
                pageInfo={pageInfo}
                type={type}
                onSearch={onSearch}
                loading={loading}
              />
            </VerticalStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="1"
      paddingInlineEnd="1"
      background="bg-subdued"
      borderWidth="1"
      borderColor="border"
      borderRadius="1"
    >
      <code>{children}</code>
    </Box>
  );
}
