export interface IMetaObject {
  node: {
    id: string;
    capabilities: { publishable: { status: string } };
    definition: {
      name: string;
      id: string;

      access: { storefront: string };
    };
    displayName: string;
    handle: string;
    type: string;
    updatedAt: string;
  };
}
export interface IPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
  startCursor: string;
}
export interface IMetaobjectResponse {
  edges: IMetaObject[];
  pageInfo: IPageInfo;
  type: string;
  onSearch: (data: {
    query?: string | null;
    after?: string;
    before?: string;
  }) => {};
  loading?: boolean;
}

export interface IProduct {
  node: {
    id: string;
    title: string;
    vendor: string;
    productType: string;
    status: string;
    totalInventory: number;
    featuredImage: { id: string; transformedSrc: string };
    featuredMedia: {
      preview: { transformedSrc: string };
    };
  };
}
export interface IProductResponse {
  edges: IProduct[];
  pageInfo: IPageInfo;
  type: string;
  onSearch: (data: {
    query?: string | null;
    after?: string;
    before?: string;
  }) => {};
  loading?: boolean;
}

export interface IMetaObjectDefinition {
  edges: {
    node: {
      id: string;
      name: string;
      type: string;
      metaobjectsCount: number;
    };
  }[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface IItemMetafield {
  id: number;
  name: string;
  ranking: string;
  qty: string;
  item: {
    name: string;
    id: string;
    metaobject_type: string;
  };
  meta: any;
}

export interface IPropertyMetafield {
  id: number;
  name: string;
  ranking: string;
  propertyValue: string;
  propertyBase: {
    name: string;
    id: string;
    metaobject_type: string;
  };
  meta: any;
}
