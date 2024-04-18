import { Box, Button, Modal, Select, TextField } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import * as _ from "lodash";
import SelectField from "../Fields/SelectField";
import { FIELD_REQUIRED } from "~/constants";
import { IPropertyMetafield } from "~/types";
import { numberGenerator } from "~/utils";
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
const PropertyMetafieldForm = ({
  activatorTitle,
  onAdd,
  values,
  index,
  standardProperties,
}) => {
  const { active, handleClose, handleOpen } = useHandleToggleModal();
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState(standardProperties);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    _.get(values, "item.id") ? [_.get(values, "propertyBase.id")] : []
  );
  const [ranking, setRanking] = useState("Key");
  const [name, setName] = useState(_.get(values, "name", ""));
  const [propertyValue, setPropertyValue] = useState(
    _.get(values, "propertyValue", "")
  );
  const [errors, _setErrors] = useState({} as IError);
  const [propertyBase, setPropertyBase] = useState(
    _.get(values, "propertyBase") as Iitem
  );
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
        id: _.get(values, "id") || numberGenerator(),
        name,
        ranking,
        propertyValue,
        meta: {},
        propertyBase,
      } as IPropertyMetafield,
      index
    );
    handleClose();
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
    <div style={{ display: !activatorTitle ? "none" : "block" }}>
      <Button size="micro" onClick={handleOpen}>
        {activatorTitle}
      </Button>
    </div>
  );

  return (
    <div>
      <Modal
        activator={activator}
        open={active}
        onClose={handleClose}
        title="Property"
        primaryAction={{
          content: "Ok",
          onAction: onSubmit,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleClose,
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
              setSelectedOptions={setSelectedOptions}
              error={errors.propertyBase}
              placeholder={_.get(values, "propertyBase.name") || "search.."}
            />
          </Box>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default PropertyMetafieldForm;
