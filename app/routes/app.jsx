import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";

import { authenticate } from "../shopify.server";
import { Frame } from "@shopify/polaris";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export async function loader({ request }) {
  await authenticate.admin(request);

  return json({ apiKey: process.env.SHOPIFY_API_KEY });
}

export default function App() {
  const { apiKey } = useLoaderData();

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
       <Frame>

        
      <ui-nav-menu>
        <Link to="/app" rel="home">
          Home
        </Link>       
        <Link to="/app/products">Products</Link>
        <Link to="/app/items/item_definition">Items</Link>
        <Link to="/app/site-maps">Sites</Link>
         <Link to="/app/articles">Articles</Link>
         <Link to="/app/metaobjects">Metaobjects</Link>
      </ui-nav-menu>
      <Outlet />
      </Frame>
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
