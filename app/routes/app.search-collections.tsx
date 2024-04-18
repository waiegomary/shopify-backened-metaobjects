import { LoaderArgs, json } from "@remix-run/node";
import { collectionsQuery } from "~/graphql/collections/queries";
import { authenticate } from "~/shopify.server";
import { parseSearchParams } from "~/utils";

export async function loader({ request, params }: LoaderArgs) {
  const { admin } = await authenticate.admin(request);
  let rest = parseSearchParams({
    request,
    params,
    queryBuild: (e: string) => {
      return `${e}`;
    },
  });

  const res = await collectionsQuery({
    graphql: admin.graphql,
    ...rest,
  });
  return json(res);
}
