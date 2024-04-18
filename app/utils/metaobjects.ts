import * as _ from "lodash";

export function parseJSON(str: string | undefined) {
  if (str) {
    try {
      return JSON.parse(str);
    } catch (error) {
      return {};
    }
  }
  return {};
}

export function parseJSONWithData(str: string | undefined, key = "data") {
  return _.get(parseJSON(str), key);
}

export const getFieldData = (obj: any) => {
  return JSON.stringify({
    data: obj,
  });
};

export const createFieldValue = (key: string, obj: any) => ({
  key,
  value: _.get(obj, key),
});
export const findNode = (data: any, key: string) => {
  return _.find(data, (item) => {
    if (_.get(item, "key") === key) {
      return true;
    }

    if (_.get(item, "type") === key) {
      return true;
    }
  });
};
export const findNodeValue = (data: any, key: string, value = "value") => {
  return _.get(findNode(data, key), value);
};
export const findFieldsNode = (data: any, key: string) => {
  return findNode(_.get(data, "fields"), key);
};

export const findValueFromFields = (data: any, key: string) => {
  return _.get(findFieldsNode(data, key), "value");
};

export const getSiteMetadataFieldData = (metaobject, field: string) => {
  return parseJSONWithData(findValueFromFields(metaobject, field));
};
