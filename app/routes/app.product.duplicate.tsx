import {
  createDuplicateProductVariables,
  duplicateProductMutation,
} from "~/graphql/products/productDuplicateMutation";
import { authenticate } from "~/shopify.server";
import * as _ from "lodash";
import { json, redirect } from "@remix-run/node";
import { getProductIDNumber } from "~/constants";

export async function action({ request, params }) {
  const { admin } = await authenticate.admin(request);
  const data = {
    ...Object.fromEntries(await request.formData()),
  };

  const variables = createDuplicateProductVariables({
    newTitle: _.get(data, "title"),
    productId: _.get(data, "productId"),
  });
  const response = await duplicateProductMutation({
    graphql: admin.graphql,
    variables,
  });
  const newProductId = getProductIDNumber(
    _.get(response, "data.productDuplicate.newProduct.id")
  );
  const errors = _.get(response, "data.productDuplicate.userErrors.length");
  if (errors) {
    return json({ errors }, { status: 422 });
  }
  return redirect(
    `/app/product/${
      newProductId || getProductIDNumber(_.get(data, "productId"))
    }`
  );
}
