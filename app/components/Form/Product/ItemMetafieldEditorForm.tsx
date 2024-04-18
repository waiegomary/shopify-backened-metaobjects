import { Box, Button, Modal, Select, TextField } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import * as _ from "lodash";
import SelectField from "../Fields/SelectField";
import { FIELD_REQUIRED } from "~/constants";
import { IItemMetafield } from "~/types";
import { numberGenerator } from "~/utils";

interface Iitem {
  name: string;
  id: string;
  metaobject_type: string;
}
interface IError {
  name: string;
  ranking: string;
  qty: string;
  item: string;
}
const ItemMetafieldEditorForm = ({
  fetcher,
  activatorTitle,
  onAdd,
  values,
  active,
  handleToggle,
}) => {
  // const [active, setActive] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    _.get(values, "item.id") ? [_.get(values, "item.id")] : []
  );

  const [ranking, handleSetRanking] = useState("Key");
  const setRanking = useCallback((value) => handleSetRanking(value), []);
  const [name, handleSetName] = useState(_.get(values, "name", ""));
  const setName = useCallback((value) => handleSetName(value), [values]);
  const [qty, setQty] = useState(_.get(values, "qty", ""));
  const [errors, handleSetErrors] = useState({} as IError);
  const setErrors = useCallback((value) => handleSetErrors(value), []);
  const [item, handleSetItem] = useState(_.get(values, "item") as Iitem);
  const setItem = useCallback((value) => handleSetItem(value), []);
  useEffect(() => {
    if (_.get(values, "name")) {
      setName(_.get(values, "name"));
    }
    if (_.get(values, "qty")) {
      setQty(_.get(values, "qty"));
    }
    if (_.get(values, "ranking")) {
      setRanking(_.get(values, "ranking"));
    }
    if (_.get(values, "item")) {
      handleSetItem(_.get(values, "item"));
    }
  }, [values]);
  const onSubmit = () => {
    setErrors({} as IError);
    if (!name) {
      setErrors({ ...errors, name: FIELD_REQUIRED });
    }
    if (!ranking) {
      setErrors({ ...errors, ranking: FIELD_REQUIRED });
    }
    if (!qty) {
      setErrors({ ...errors, qty: FIELD_REQUIRED });
    }
    if (!item?.id) {
      setErrors({ ...errors, item: FIELD_REQUIRED });
    }
    if (Object.keys(errors).length) {
      return;
    }
    onAdd({
      id: _.get(values, "id") || numberGenerator(),
      name,
      ranking,
      qty,
      meta: {},
      item,
    } as IItemMetafield);
    handleToggle();
  };

  const handleRankingChange = useCallback(
    (value: string) => setRanking(value),
    []
  );

  const handleNameChange = useCallback(
    (newValue: string) => setName(newValue),
    []
  );

  const handleQtyChange = useCallback((newValue: any) => setQty(newValue), []);

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
    setItem(propertyBase);
  }, [selectedOptions]);

  useEffect(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);

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
  }, [fetcher.data, loading]);
  const onSearch = _.debounce(function (data) {
    try {
      search(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  }, 1000);
  const search = useCallback((data) => {
    fetcher.load(
      `/app/search-metaobjects/item_definition?query=${_.get(
        data,
        "query"
      )}&after=${_.get(data, "after")}&before=${_.get(data, "before")}`
    );
  }, []);


  const activator = (
    <div style={{ display: "none" }}>
      <Button size="micro" onClick={handleToggle}>
        {activatorTitle}
      </Button>
    </div>
  );

  if (!values?.name) {
    return null;
  }

  return (
    <div>
      <Modal
        activator={activator}
        open={active}
        onClose={handleToggle}
        title="Item"
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
              label="Qty"
              value={qty}
              type="number"
              onChange={handleQtyChange}
              autoComplete="off"
              error={errors.qty}
            />
            <Box padding="2"></Box>
            <SelectField
              onSearch={onSearch}
              label={"Select Item (Type First Letters to Search)"}
              options={options}
              loading={loading}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              error={errors.item}
              placeholder={_.get(values, "item.name") || "search.."}
            />
          </Box>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default ItemMetafieldEditorForm;
