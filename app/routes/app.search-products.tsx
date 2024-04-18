import { LoaderArgs, json } from "@remix-run/node";
import { productsQuery } from "~/graphql/products/queries";
import { authenticate } from "~/shopify.server";
import { parseSearchParams } from "~/utils";

export async function loader({ request, params }: LoaderArgs) {
  const { admin } = await authenticate.admin(request);
  let rest = parseSearchParams({
    request,
    params,
    queryBuild: (e: string) => {
      return `title: ${e}`;
    },
  });

  const products = await productsQuery({
    graphql: admin.graphql,
    ...rest,
  });
  return json(products);
}
