import { Box, Button, Modal, Select, TextField } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import * as _ from "lodash";
import SelectField from "../Fields/SelectField";
import { FIELD_REQUIRED } from "~/constants";
import { IPropertyMetafield } from "~/types";
import { get, logger, numberGenerator } from "~/utils";
import { useHandleToggleModal } from "~/utils/hooks";
import { useFetcher } from "@remix-run/react";

interface Iitem {
  name: string;
  id: string;
  metaobject_type: string;
}
interface IError {
  name: string;
  ranking: string;
  propertyValue: string;
  propertyBase: string;
}
const PropertyMetafieldEditForm = ({
  activatorTitle,
  onAdd,
  values,
  index,
  standardProperties,
  active,
  handleToggle,
}) => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState(standardProperties);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    _.get(values, "item.id") ? [_.get(values, "propertyBase.id")] : []
  );
  const handleSetSelectedOptions = useCallback((values) => {
    setSelectedOptions(values);
  }, []);
  const [ranking, handleSetRanking] = useState("Key");
  const setRanking = useCallback((value) => handleSetRanking(value), []);
  const [name, handleSetName] = useState(_.get(values, "name", ""));
  const setName = useCallback((value) => handleSetName(value), []);
  const [propertyValue, handleSetPropertyValue] = useState(
    _.get(values, "propertyValue", "")
  );
  const setPropertyValue = useCallback(
    (value) => handleSetPropertyValue(value),
    []
  );
  const [errors, _setErrors] = useState({} as IError);
  const [propertyBase, handleSetPropertyBase] = useState(
    _.get(values, "propertyBase") as Iitem
  );
  const setPropertyBase = useCallback(
    (value) => handleSetPropertyBase(value),
    []
  );

  useEffect(() => {
    if (_.get(values, "name")) {
      setName(_.get(values, "name"));
    }
    if (_.get(values, "propertyValue")) {
      setPropertyValue(_.get(values, "propertyValue"));
    }
    if (_.get(values, "ranking")) {
      setRanking(_.get(values, "ranking"));
    }
    if (_.get(values, "propertyBase")) {
      setPropertyBase(_.get(values, "propertyBase"));
    }
    if (_.get(values, "item.id") || _.get(values, "propertyBase.id")) {
      handleSetSelectedOptions(
        _.get(values, "item.id") ? [_.get(values, "propertyBase.id")] : []
      );
    }
    if (_.get(values, "id")) {
      setId(_.get(values, "id"));
    }
  }, [values]);
  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.data) {
      const o = _.map(_.get(fetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _.get(item, "node.id"),
          label: _.get(item, "node.displayName"),
        };
      });
      setOptions(o);
    }
  }, [fetcher.data]);

  useEffect(() => {
    if (fetcher.data) {
      const o = _.map(_.get(fetcher.data, "data.metaobjects.edges"), (item) => {
        return {
          value: _.get(item, "node.id"),
          label: _.get(item, "node.displayName"),
        };
      });
      setOptions(o);
    }
  }, [fetcher.data]);

  const onSearch = async (data: any) => {
    await fetcher.load(
      `/app/search-metaobjects/standard_properties?query=${_.get(
        data,
        "query"
      )}&d=${new Date().toString()}&after=${_.get(
        data,
        "after"
      )}&before=${_.get(data, "before")}`
    );
  };

  const [id, handleSetId] = useState(_.get(values, "id") || numberGenerator());
  const setId = useCallback((value) => handleSetId(value), []);

  const onSubmit = () => {
    setErrors({} as IError);
    if (!name) {
      setErrors({ ...errors, name: FIELD_REQUIRED });
    }
    if (!ranking) {
      setErrors({ ...errors, ranking: FIELD_REQUIRED });
    }
    if (!propertyValue) {
      setErrors({ ...errors, propertyValue: FIELD_REQUIRED });
    }
    if (!_.get(propertyBase, "id")) {
      setErrors({ ...errors, propertyBase: FIELD_REQUIRED });
    }
    if (Object.keys(errors).length) {
      return;
    }
    if (!name || !ranking || !propertyValue || !_.get(propertyBase, "id"))
      return;
    onAdd(
      {
        id,
        name,
        ranking,
        propertyValue,
        meta: {},
        propertyBase,
      } as IPropertyMetafield,
      index
    );
    setId(numberGenerator());
    handleToggle();
  };

  const setErrors = useCallback((value) => _setErrors(value), []);
  const handleRankingChange = useCallback(
    (value: string) => setRanking(value),
    []
  );

  const handleNameChange = useCallback(
    (newValue: string) => setName(newValue),
    []
  );

  const handlePropertyValueChange = useCallback(
    (newValue: any) => setPropertyValue(newValue),
    []
  );

  const raking = [
    { label: "Key", value: "Key" },
    { label: "Main", value: "Main" },
    { label: "Details", value: "Details" },
  ];

  useEffect(() => {
    if (!_.get(selectedOptions, "[0]")) return;
    const option = _.find(
      _.get(fetcher.data, "data.metaobjects.edges"),
      (item) => {
        return _.get(item, "node.id") === _.get(selectedOptions, "[0]");
      }
    );
    const propertyBase = {
      name: _.get(option, "node.displayName"),
      id: _.get(option, "node.id"),
      metaobject_type: _.get(option, "node.id"),
    };
    setPropertyBase(propertyBase);
  }, [selectedOptions]);

  useEffect(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);

  

  const activator = (
    <div style={{ display: activatorTitle ? "block" : "none" }}>
      <Button size="micro" onClick={handleToggle}>
        {activatorTitle}
      </Button>
    </div>
  );

  return (
    <div>
      <Modal
        activator={activator}
        open={active}
        onClose={handleToggle}
        title="Property"
        primaryAction={{
          content: "Ok",
          onAction: onSubmit,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleToggle,
          },
        ]}
      >
        <Modal.Section>
          <Box>
            <TextField
              label="Name"
              value={name}
              onChange={handleNameChange}
              autoComplete="off"
              error={errors.name}
            />
            <Box padding="2"></Box>
            <Select
              label="Ranking"
              options={raking}
              onChange={handleRankingChange}
              value={ranking}
              error={errors.ranking}
            />
            <Box padding="2"></Box>
            <TextField
              label="Property Value"
              value={propertyValue}
              onChange={handlePropertyValueChange}
              autoComplete="off"
              error={errors.propertyValue}
            />
            <Box padding="2"></Box>
            <SelectField
              onSearch={onSearch}
              options={options}
              loading={loading}
              label={"Select Item (Type First Letters to Search)"}
              selectedOptions={selectedOptions}
              setSelectedOptions={handleSetSelectedOptions}
              error={errors.propertyBase}
              placeholder={_.get(values, "propertyBase.name") || "search.."}
            />
          </Box>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default PropertyMetafieldEditForm;
