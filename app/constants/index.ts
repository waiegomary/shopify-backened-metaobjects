export const PAGINATION_LIMIT = 20;
export const IMAGE_PLACEHOLDER =
  "https://asset.cloudinary.com/oves/784b06f417dc5e981eaa039cab243564";
export const PRODUCT_ID_PREFIX = "gid://shopify/Product/";
export const getProductIDNumber = (id: string) =>
  id?.replace(PRODUCT_ID_PREFIX, "");

export const getProductIDString = (id: string) => `${PRODUCT_ID_PREFIX}${id}`;
export const FIELD_REQUIRED = 'Field required.'