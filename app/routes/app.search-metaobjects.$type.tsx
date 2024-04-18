import { LoaderArgs, json } from "@remix-run/node";
import { getMetaobjects } from "~/graphql/metaobjects/queries";
import { authenticate } from "~/shopify.server";
import { parseSearchParams } from "~/utils";

export async function loader({ request, params }: LoaderArgs) {
  const { admin } = await authenticate.admin(request);

  let rest = parseSearchParams({
    request,
    params,
    queryBuild: (e: string) => {
      return `type:${params.type} AND display_name:${e}*`;
    },
  });

  const metaobjects = await getMetaobjects({
    graphql: admin.graphql,
    type: params.type,
    ...rest,
  });
  return json(metaobjects);
}
