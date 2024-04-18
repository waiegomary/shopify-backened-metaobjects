import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Box, Card, Layout, Page, Text, VerticalStack } from "@shopify/polaris";
import * as _ from "lodash";
import { useCallback, useState } from "react";
import { Button } from "@shopify/polaris";
import { getMetaDefinitions } from "~/graphql/metaobjects/queries";
import { authenticate } from "~/shopify.server";
import MetaDefinition from "~/components/Tables/MetaDefinition";
import { numberFormat } from "~/utils";

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const metaDefinitions = await getMetaDefinitions({
    graphql: admin.graphql,
    definitionCount: 64,
  });
  return json({ metaDefinitions });
}
export default function MetaobjectsPage() {
  const { metaDefinitions } = useLoaderData();
  const [active, setActive] = useState(true);
  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const definitions = _.get(metaDefinitions, "data.metaobjectDefinitions");

  const activator = (
    <Button onClick={toggleActive} disclosure>
      More actions
    </Button>
  );
  return (
    <Page
      backAction={{ content: "Products", url: "/app" }}
      title="Metaobjects"
      subtitle={`${numberFormat(
        _.get(definitions, "edges.length", 0)
      )} definitions`}
      compactTitle
    >
      <Layout>
        <Layout.Section>
          <Card>
            <VerticalStack gap="3">
              <MetaDefinition
                edges={_.get(definitions, "edges")}
                pageInfo={_.get(definitions, "pageInfo")}
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
