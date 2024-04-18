async function useStorefrontFetch(queryOrMutation: any) {
  const url = `https://${process.env.STOREFRONT}/api/2023-04/graphql.json`;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-Shopify-Api-Version", "2023-04");
  myHeaders.append("Cache-Control", "no-store, no-cache, must-revalidate");
  myHeaders.append("Access-Control-Allow-Origin", "*");

  myHeaders.append(
    "X-Shopify-Storefront-Access-Token",
    process.env.STOREFRONT_ACCESS_TOKEN
  );

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: queryOrMutation,
    redirect: "follow",
  };

  return fetch(url, requestOptions);
}

export default useStorefrontFetch;
