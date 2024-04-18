import { Box, Button, Modal, Select, TextField } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import * as _ from "lodash";
import SelectField from "../Fields/SelectField";
import { FIELD_REQUIRED } from "~/constants";
import { IItemMetafield } from "~/types";
import { get, numberGenerator } from "~/utils";

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
const ItemMetafieldEditForm = ({
  fetcher,
  activatorTitle,
  onAdd,
  values,
  itemDefinitions,
}) => {
  const [active, setActive] = useState(false);
  const [options, setOptions] = useState([...itemDefinitions]);
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    _.get(values, "item.id") ? [_.get(values, "item.id")] : []
  );
  const [ranking, setRanking] = useState("Key");
  const [name, setName] = useState(_.get(values, "name", ""));
  const [qty, setQty] = useState(_.get(values, "qty", ""));
  const [errors, setErrors] = useState({} as IError);
  const [item, setItem] = useState(_.get(values, "item") as Iitem);

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
    handleChange();
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
  const onSearch = useCallback((query: any) => {
    const value = get(query, "query");
    if (value === "") {
      setOptions(itemDefinitions);
      return;
    }

    const filterRegex = new RegExp(value, "i");
    const resultOptions = itemDefinitions.filter((option) =>
      option.label.match(filterRegex)
    );
    setOptions(resultOptions);
  }, []);

  useEffect(() => {
    if (!_.get(selectedOptions, "[0]")) return;
    const option = _.find(itemDefinitions, (item) => {
      return _.get(item, "value") === _.get(selectedOptions, "[0]");
    });
    const propertyBase = {
      name: _.get(option, "label"),
      id: _.get(option, "value"),
      metaobject_type: "item_definition",
    };
    setItem(propertyBase);
  }, [selectedOptions]);

  useEffect(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);

  const handleChange = useCallback(() => setActive(!active), [active]);

  const activator = (
    <Button size="micro" onClick={handleChange}>
      {activatorTitle}
    </Button>
  );

  return (
    <div>
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Item"
        primaryAction={{
          content: "Ok",
          onAction: onSubmit,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleChange,
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

export default ItemMetafieldEditForm;
