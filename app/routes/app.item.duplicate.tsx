import { authenticate } from "~/shopify.server";
import * as _ from "lodash";
import { json, redirect } from "@remix-run/node";
import { getProductIDNumber } from "~/constants";
import {
  createMetaobjectCreateVariables,
  createMetaobjectMutation,
} from "~/graphql/metaobjects/createMetaobjectMutation";

export async function action({ request, params }) {
  const { admin } = await authenticate.admin(request);
  const data = {
    ...Object.fromEntries(await request.formData()),
  };
  let fields: { key: string; value: string }[] = [];

  fields.push({
    key: "name",
    value: _.get(data, "name"),
  });

  fields.push({
    key: "strapi_id",
    value: _.get(data, "strapi_id"),
  });

  fields.push({
    key: "description",
    value: _.get(data, "description"),
  });
  fields.push({
    key: "content",
    value: _.get(data, "content"),
  });
  if (_.get(data, "properties")) {
    fields.push({
      key: "properties",
      value: _.get(data, "properties"),
    });
  }

  if (_.get(data, "prop_use")) {
    fields.push({
      key: "prop_use",
      value: _.get(data, "prop_use"),
    });
  }

  if (_.get(data, "mainmedia")) {
    fields.push({
      key: "main_media",
      value: _.get(data, "mainmedia"),
    });
  }

  if (_.get(data, "additionalmedia")) {
    fields.push({
      key: "additional_media",
      value: _.get(data, "additionalmedia"),
    });
  }

  const variables = createMetaobjectCreateVariables({
    fields,
  });

  const response = await createMetaobjectMutation({
    graphql: admin.graphql,
    variables,
  });

  const newProductId = getProductIDNumber(
    _.get(response, "data.metaobjectCreate.metaobject.handle")
  );
  const errors = _.get(response, "data.metaobjectCreate.userErrors.length");
  if (errors) {
    return json({ errors }, { status: 422 });
  }
  return redirect(`/app/item/${newProductId}`);
}
